/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { BatchManagementClient } = require("@azure/arm-batch");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Activates the specified application package. This should be done after the `ApplicationPackage` was created and uploaded. This needs to be done before an `ApplicationPackage` can be used on Pools or Tasks.
 *
 * @summary Activates the specified application package. This should be done after the `ApplicationPackage` was created and uploaded. This needs to be done before an `ApplicationPackage` can be used on Pools or Tasks.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2023-11-01/examples/ApplicationPackageActivate.json
 */
async function applicationPackageActivate() {
  const subscriptionId = process.env["BATCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["BATCH_RESOURCE_GROUP"] || "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const applicationName = "app1";
  const versionName = "1";
  const parameters = { format: "zip" };
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const result = await client.applicationPackageOperations.activate(
    resourceGroupName,
    accountName,
    applicationName,
    versionName,
    parameters,
  );
  console.log(result);
}

async function main() {
  applicationPackageActivate();
}

main().catch(console.error);
