/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Asynchronously creates a new topic with the specified parameters.
 *
 * @summary Asynchronously creates a new topic with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2023-12-15-preview/examples/Topics_CreateOrUpdate.json
 */
async function topicsCreateOrUpdate() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] || "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName = process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const topicName = "exampletopic1";
  const topicInfo = {
    inboundIpRules: [
      { action: "Allow", ipMask: "12.18.30.15" },
      { action: "Allow", ipMask: "12.18.176.1" },
    ],
    location: "westus2",
    publicNetworkAccess: "Enabled",
    tags: { tag1: "value1", tag2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.topics.beginCreateOrUpdateAndWait(
    resourceGroupName,
    topicName,
    topicInfo,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new topic with the specified parameters.
 *
 * @summary Asynchronously creates a new topic with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2023-12-15-preview/examples/Topics_CreateOrUpdateForAzureArc.json
 */
async function topicsCreateOrUpdateForAzureArc() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] || "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName = process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const topicName = "exampletopic1";
  const topicInfo = {
    extendedLocation: {
      name: "/subscriptions/8f6b6269-84f2-4d09-9e31-1127efcd1e40/resourcegroups/examplerg/providers/Microsoft.ExtendedLocation/CustomLocations/exampleCustomLocation",
      type: "CustomLocation",
    },
    inputSchema: "CloudEventSchemaV1_0",
    kind: "AzureArc",
    location: "westus2",
    tags: { tag1: "value1", tag2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.topics.beginCreateOrUpdateAndWait(
    resourceGroupName,
    topicName,
    topicInfo,
  );
  console.log(result);
}

async function main() {
  topicsCreateOrUpdate();
  topicsCreateOrUpdateForAzureArc();
}

main().catch(console.error);
