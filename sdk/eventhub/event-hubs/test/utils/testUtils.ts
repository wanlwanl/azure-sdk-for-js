// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  EventHubConsumerClient,
  EventHubProducerClient,
  EventPosition,
  Subscription,
} from "../../src/index.js";
import { TestTracer, resetTracer, setTracer } from "@azure-tools/test-utils";
import { delay, MessagingError } from "@azure/core-amqp";
import { loggerForTest } from "./logHelpers.js";

export async function getSubscriptionPromise(
  client: EventHubConsumerClient,
): Promise<MessagingError | Error> {
  let subscription: Subscription | undefined;
  const caughtErr = await new Promise<Error | MessagingError>((resolve) => {
    subscription = client.subscribe({
      processEvents: async () => {
        /* no-op */
      },
      processError: async (err: any) => {
        resolve(err);
      },
    });
  });
  await subscription?.close();
  return caughtErr;
}

export async function loopUntil(args: {
  name: string;
  timeBetweenRunsMs: number;
  maxTimes: number;
  until: () => Promise<boolean>;
  errorMessageFn?: () => string;
}): Promise<void> {
  for (let i = 0; i < args.maxTimes + 1; ++i) {
    const finished = await args.until();

    if (finished) {
      return;
    }

    loggerForTest(`[${args.name}: delaying for ${args.timeBetweenRunsMs}ms]`);
    await delay(args.timeBetweenRunsMs);
  }

  throw new Error(
    `Waited way too long for ${args.name}: ${args.errorMessageFn ? args.errorMessageFn() : ""}`,
  );
}

export async function getStartingPositionsForTests(
  client: Pick<
    EventHubConsumerClient | EventHubProducerClient,
    "getPartitionProperties" | "getEventHubProperties"
  >,
): Promise<{ [partitionId: string]: EventPosition }> {
  const eventHubProperties = await client.getEventHubProperties();

  const startingPositions: { [partitionId: string]: EventPosition } = {};

  for (const partitionId of eventHubProperties.partitionIds) {
    startingPositions[partitionId] = {
      sequenceNumber: (await client.getPartitionProperties(partitionId)).lastEnqueuedSequenceNumber,
    };
  }

  return startingPositions;
}

export function setTracerForTest<T extends TestTracer>(
  tracer?: T,
): { tracer: T; resetTracer: () => void } {
  tracer = tracer ?? (new TestTracer() as T);
  setTracer(tracer);

  return {
    tracer,
    resetTracer,
  };
}
