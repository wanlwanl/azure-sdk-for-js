/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  CheckNameAvailabilityRequest,
  DeviceUpdate
} from "@azure/arm-deviceupdate";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Checks ADU resource name availability.
 *
 * @summary Checks ADU resource name availability.
 * x-ms-original-file: specification/deviceupdate/resource-manager/Microsoft.DeviceUpdate/stable/2023-07-01/examples/CheckNameAvailability_AlreadyExists.json
 */
async function checkNameAvailabilityAlreadyExists() {
  const subscriptionId =
    process.env["DEVICEUPDATE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const request: CheckNameAvailabilityRequest = {
    name: "contoso",
    type: "Microsoft.DeviceUpdate/accounts"
  };
  const credential = new DefaultAzureCredential();
  const client = new DeviceUpdate(credential, subscriptionId);
  const result = await client.checkNameAvailability(request);
  console.log(result);
}

/**
 * This sample demonstrates how to Checks ADU resource name availability.
 *
 * @summary Checks ADU resource name availability.
 * x-ms-original-file: specification/deviceupdate/resource-manager/Microsoft.DeviceUpdate/stable/2023-07-01/examples/CheckNameAvailability_Available.json
 */
async function checkNameAvailabilityAvailable() {
  const subscriptionId =
    process.env["DEVICEUPDATE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const request: CheckNameAvailabilityRequest = {
    name: "contoso",
    type: "Microsoft.DeviceUpdate/accounts"
  };
  const credential = new DefaultAzureCredential();
  const client = new DeviceUpdate(credential, subscriptionId);
  const result = await client.checkNameAvailability(request);
  console.log(result);
}

async function main() {
  checkNameAvailabilityAlreadyExists();
  checkNameAvailabilityAvailable();
}

main().catch(console.error);
