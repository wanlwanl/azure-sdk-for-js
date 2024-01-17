/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BatchManagementClient } from "@azure/arm-batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes the specified pool.
 *
 * @summary Deletes the specified pool.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2023-11-01/examples/PoolDelete.json
 */
async function deletePool() {
  const subscriptionId = process.env["BATCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["BATCH_RESOURCE_GROUP"] || "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const poolName = "testpool";
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const result = await client.poolOperations.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    poolName
  );
  console.log(result);
}

async function main() {
  deletePool();
}

main().catch(console.error);
