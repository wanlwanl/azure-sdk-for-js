/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { KustoManagementClient } = require("@azure/arm-kusto");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a managed private endpoint.
 *
 * @summary Gets a managed private endpoint.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-07-07/examples/KustoManagedPrivateEndpointsGet.json
 */
async function kustoManagedPrivateEndpointsGet() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster";
  const managedPrivateEndpointName = "managedPrivateEndpointTest";
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.managedPrivateEndpoints.get(
    resourceGroupName,
    clusterName,
    managedPrivateEndpointName
  );
  console.log(result);
}

kustoManagedPrivateEndpointsGet().catch(console.error);
