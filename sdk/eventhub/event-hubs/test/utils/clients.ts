// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  EventHubConsumerClient,
  EventHubConsumerClientOptions,
  EventHubProducerClient,
  EventHubClientOptions,
  type TokenCredential,
} from "../../src/index.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { assertEnvironmentVariable } from "@azure-tools/test-recorder";
import {
  EnvVarKeys,
  EVENTHUB_CONNECTION_STRING_WITH_KEY,
  EVENTHUB_CONNECTION_STRING_WITH_SAS,
  EVENTHUB_FQDN,
  EVENTHUB_NAME,
} from "./constants.js";
import type { NamedKeyCredential, SASCredential } from "@azure/core-auth";
import { assert } from "vitest";

function getEnvVarValue(name: string): string | undefined {
  try {
    return assertEnvironmentVariable(name);
  } catch {
    return undefined;
  }
}

export function isMock(): boolean {
  return [undefined, "mock"].includes(getEnvVarValue(EnvVarKeys.TEST_MODE));
}

function getEventhubName(): string {
  return isMock() ? EVENTHUB_NAME : assertEnvironmentVariable(EnvVarKeys.EVENTHUB_NAME);
}

function getFullyQualifiedNamespace(): string {
  return isMock() ? EVENTHUB_FQDN : assertEnvironmentVariable(EnvVarKeys.EVENTHUB_FQDN);
}

export function getConnectionStringWithKey(): string {
  return isMock()
    ? EVENTHUB_CONNECTION_STRING_WITH_KEY
    : assert.fail("connection strings are not supported in live mode");
}

export async function getConnectionStringWithSAS(): Promise<string> {
  return isMock()
    ? EVENTHUB_CONNECTION_STRING_WITH_SAS
    : assert.fail("connection strings are not supported in live mode");
}

export function createConsumer(
  inputOptions: {
    connectionString?: string;
    credential?: TokenCredential | NamedKeyCredential | SASCredential;
    eventhubName?: string;
    fqdn?: string;
    groupName?: string;
    options?: EventHubConsumerClientOptions;
  } = {},
): { consumer: EventHubConsumerClient; fqdn: string; eventhubName: string } {
  if (inputOptions.fqdn && inputOptions.connectionString) {
    assert.fail("Both FQDN and connection string shouldn't be provided.");
  }
  const {
    connectionString,
    credential = createTestCredential(),
    eventhubName = getEventhubName(),
    fqdn = getFullyQualifiedNamespace(),
    groupName = EventHubConsumerClient.defaultConsumerGroupName,
    options,
  } = inputOptions;
  return {
    consumer: !connectionString
      ? new EventHubConsumerClient(groupName, fqdn, eventhubName, credential, options)
      : new EventHubConsumerClient(groupName, connectionString, eventhubName, options),
    fqdn,
    eventhubName,
  };
}

export function createProducer(
  inputOptions: {
    connectionString?: string;
    credential?: TokenCredential | NamedKeyCredential | SASCredential;
    eventhubName?: string;
    fqdn?: string;
    options?: EventHubClientOptions;
  } = {},
): { producer: EventHubProducerClient; fqdn: string; eventhubName: string } {
  if (inputOptions.fqdn && inputOptions.connectionString) {
    assert.fail("Both FQDN and connection string shouldn't be provided.");
  }
  const {
    connectionString,
    credential = createTestCredential(),
    eventhubName = getEventhubName(),
    fqdn = getFullyQualifiedNamespace(),
    options,
  } = inputOptions;
  return {
    producer: !connectionString
      ? new EventHubProducerClient(fqdn, eventhubName, credential, options)
      : new EventHubProducerClient(connectionString, eventhubName, options),
    fqdn,
    eventhubName,
  };
}
