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
 * This sample demonstrates how to Diagnoses network connectivity status for external resources on which the service is dependent on.
 *
 * @summary Diagnoses network connectivity status for external resources on which the service is dependent on.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-07-07/examples/KustoClustersDiagnoseVirtualNetwork.json
 */
async function kustoClusterDiagnoseVirtualNetwork() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster";
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginDiagnoseVirtualNetworkAndWait(
    resourceGroupName,
    clusterName
  );
  console.log(result);
}

kustoClusterDiagnoseVirtualNetwork().catch(console.error);
