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
  ServiceResource,
  ServiceFabricManagementClient
} from "@azure/arm-servicefabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a Service Fabric service resource with the specified name.
 *
 * @summary Create or update a Service Fabric service resource with the specified name.
 * x-ms-original-file: specification/servicefabric/resource-manager/Microsoft.ServiceFabric/stable/2021-06-01/examples/ServicePutOperation_example_max.json
 */
async function putAServiceWithMaximumParameters() {
  const subscriptionId =
    process.env["SERVICEFABRIC_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SERVICEFABRIC_RESOURCE_GROUP"] || "resRg";
  const clusterName = "myCluster";
  const applicationName = "myApp";
  const serviceName = "myService";
  const parameters: ServiceResource = {
    correlationScheme: [
      { scheme: "Affinity", serviceName: "fabric:/app1/app1~svc1" }
    ],
    defaultMoveCost: "Medium",
    partitionDescription: { partitionScheme: "Singleton" },
    placementConstraints: "NodeType==frontend",
    serviceDnsName: "my.service.dns",
    serviceKind: "Stateless",
    serviceLoadMetrics: [{ name: "metric1", weight: "Low" }],
    servicePackageActivationMode: "SharedProcess",
    servicePlacementPolicies: [],
    serviceTypeName: "myServiceType",
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricManagementClient(credential, subscriptionId);
  const result = await client.services.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    applicationName,
    serviceName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Service Fabric service resource with the specified name.
 *
 * @summary Create or update a Service Fabric service resource with the specified name.
 * x-ms-original-file: specification/servicefabric/resource-manager/Microsoft.ServiceFabric/stable/2021-06-01/examples/ServicePutOperation_example_min.json
 */
async function putAServiceWithMinimumParameters() {
  const subscriptionId =
    process.env["SERVICEFABRIC_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SERVICEFABRIC_RESOURCE_GROUP"] || "resRg";
  const clusterName = "myCluster";
  const applicationName = "myApp";
  const serviceName = "myService";
  const parameters: ServiceResource = {
    partitionDescription: { partitionScheme: "Singleton" },
    serviceKind: "Stateless",
    serviceTypeName: "myServiceType",
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricManagementClient(credential, subscriptionId);
  const result = await client.services.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    applicationName,
    serviceName,
    parameters
  );
  console.log(result);
}

async function main() {
  putAServiceWithMaximumParameters();
  putAServiceWithMinimumParameters();
}

main().catch(console.error);
