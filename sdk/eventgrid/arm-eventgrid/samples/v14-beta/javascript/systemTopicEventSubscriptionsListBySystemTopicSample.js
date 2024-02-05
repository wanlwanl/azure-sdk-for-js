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
 * This sample demonstrates how to List event subscriptions that belong to a specific system topic.
 *
 * @summary List event subscriptions that belong to a specific system topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2023-12-15-preview/examples/SystemTopicEventSubscriptions_ListBySystemTopic.json
 */
async function systemTopicEventSubscriptionsListBySystemTopic() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] || "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName = process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const systemTopicName = "exampleSystemTopic1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.systemTopicEventSubscriptions.listBySystemTopic(
    resourceGroupName,
    systemTopicName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  systemTopicEventSubscriptionsListBySystemTopic();
}

main().catch(console.error);
