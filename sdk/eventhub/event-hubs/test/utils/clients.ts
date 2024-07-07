// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { EventHubConsumerClient } from "../../src/index.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { assertEnvironmentVariable, setEnvironmentVariables } from "@azure-tools/test-recorder";
import { EnvVarKeys, EVENTHUB_FQDN, EVENTHUB_NAME } from "./constants.js";

function getEnvVarValue(name: string): string | undefined {
  try {
    return assertEnvironmentVariable(name);
  } catch {
    return undefined;
  }
}

export function isMock(): boolean {
  return [undefined, "mock"].includes(getEnvVarValue(EnvVarKeys.TEST_TARGET));
}

export function getEnvVars(): Omit<{ [key in EnvVarKeys]: string }, EnvVarKeys.TEST_TARGET> {
  if (isMock()) {
    setEnvironmentVariables({
      [EnvVarKeys.EVENTHUB_FQDN]: EVENTHUB_FQDN,
      [EnvVarKeys.EVENTHUB_NAME]: EVENTHUB_NAME,
    });
  }

  return {
    [EnvVarKeys.EVENTHUB_FQDN]: assertEnvironmentVariable(EnvVarKeys.EVENTHUB_FQDN),
    [EnvVarKeys.EVENTHUB_NAME]: assertEnvironmentVariable(EnvVarKeys.EVENTHUB_NAME),
  };
}

export function createConsumer(
  options: {
    groupName?: string;
    eventhubName?: string;
    fqdn?: string;
  } = {}
): { client: EventHubConsumerClient; fqdn: string; eventhubName: string } {
  const env = getEnvVars();
  const {
    groupName = EventHubConsumerClient.defaultConsumerGroupName,
    fqdn = env.EVENTHUB_FQDN,
    eventhubName = env.EVENTHUB_NAME,
  } = options;
  const credential = createTestCredential();
  return {
    client: new EventHubConsumerClient(groupName, fqdn, eventhubName, credential),
    fqdn,
    eventhubName,
  };
}
