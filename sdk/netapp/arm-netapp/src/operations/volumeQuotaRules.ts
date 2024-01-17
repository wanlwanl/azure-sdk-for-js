/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { VolumeQuotaRules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetAppManagementClient } from "../netAppManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  VolumeQuotaRule,
  VolumeQuotaRulesListByVolumeOptionalParams,
  VolumeQuotaRulesListByVolumeResponse,
  VolumeQuotaRulesGetOptionalParams,
  VolumeQuotaRulesGetResponse,
  VolumeQuotaRulesCreateOptionalParams,
  VolumeQuotaRulesCreateResponse,
  VolumeQuotaRulePatch,
  VolumeQuotaRulesUpdateOptionalParams,
  VolumeQuotaRulesUpdateResponse,
  VolumeQuotaRulesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VolumeQuotaRules operations. */
export class VolumeQuotaRulesImpl implements VolumeQuotaRules {
  private readonly client: NetAppManagementClient;

  /**
   * Initialize a new instance of the class VolumeQuotaRules class.
   * @param client Reference to the service client
   */
  constructor(client: NetAppManagementClient) {
    this.client = client;
  }

  /**
   * List all quota rules associated with the volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  public listByVolume(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumeQuotaRulesListByVolumeOptionalParams
  ): PagedAsyncIterableIterator<VolumeQuotaRule> {
    const iter = this.listByVolumePagingAll(
      resourceGroupName,
      accountName,
      poolName,
      volumeName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByVolumePagingPage(
          resourceGroupName,
          accountName,
          poolName,
          volumeName,
          options,
          settings
        );
      }
    };
  }

  private async *listByVolumePagingPage(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumeQuotaRulesListByVolumeOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<VolumeQuotaRule[]> {
    let result: VolumeQuotaRulesListByVolumeResponse;
    result = await this._listByVolume(
      resourceGroupName,
      accountName,
      poolName,
      volumeName,
      options
    );
    yield result.value || [];
  }

  private async *listByVolumePagingAll(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumeQuotaRulesListByVolumeOptionalParams
  ): AsyncIterableIterator<VolumeQuotaRule> {
    for await (const page of this.listByVolumePagingPage(
      resourceGroupName,
      accountName,
      poolName,
      volumeName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all quota rules associated with the volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  private _listByVolume(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: VolumeQuotaRulesListByVolumeOptionalParams
  ): Promise<VolumeQuotaRulesListByVolumeResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, poolName, volumeName, options },
      listByVolumeOperationSpec
    );
  }

  /**
   * Get details of the specified quota rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param volumeQuotaRuleName The name of volume quota rule
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    volumeQuotaRuleName: string,
    options?: VolumeQuotaRulesGetOptionalParams
  ): Promise<VolumeQuotaRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        volumeQuotaRuleName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create the specified quota rule within the given volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param volumeQuotaRuleName The name of volume quota rule
   * @param body Quota rule object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    volumeQuotaRuleName: string,
    body: VolumeQuotaRule,
    options?: VolumeQuotaRulesCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VolumeQuotaRulesCreateResponse>,
      VolumeQuotaRulesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VolumeQuotaRulesCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        volumeQuotaRuleName,
        body,
        options
      },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      VolumeQuotaRulesCreateResponse,
      OperationState<VolumeQuotaRulesCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create the specified quota rule within the given volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param volumeQuotaRuleName The name of volume quota rule
   * @param body Quota rule object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    volumeQuotaRuleName: string,
    body: VolumeQuotaRule,
    options?: VolumeQuotaRulesCreateOptionalParams
  ): Promise<VolumeQuotaRulesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      accountName,
      poolName,
      volumeName,
      volumeQuotaRuleName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch a quota rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param volumeQuotaRuleName The name of volume quota rule
   * @param body Quota rule object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    volumeQuotaRuleName: string,
    body: VolumeQuotaRulePatch,
    options?: VolumeQuotaRulesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VolumeQuotaRulesUpdateResponse>,
      VolumeQuotaRulesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VolumeQuotaRulesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        volumeQuotaRuleName,
        body,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      VolumeQuotaRulesUpdateResponse,
      OperationState<VolumeQuotaRulesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Patch a quota rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param volumeQuotaRuleName The name of volume quota rule
   * @param body Quota rule object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    volumeQuotaRuleName: string,
    body: VolumeQuotaRulePatch,
    options?: VolumeQuotaRulesUpdateOptionalParams
  ): Promise<VolumeQuotaRulesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      accountName,
      poolName,
      volumeName,
      volumeQuotaRuleName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete quota rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param volumeQuotaRuleName The name of volume quota rule
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    volumeQuotaRuleName: string,
    options?: VolumeQuotaRulesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        volumeQuotaRuleName,
        options
      },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete quota rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param volumeQuotaRuleName The name of volume quota rule
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    volumeQuotaRuleName: string,
    options?: VolumeQuotaRulesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      poolName,
      volumeName,
      volumeQuotaRuleName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByVolumeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeQuotaRulesList
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeQuotaRule
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.volumeQuotaRuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeQuotaRule
    },
    201: {
      bodyMapper: Mappers.VolumeQuotaRule
    },
    202: {
      bodyMapper: Mappers.VolumeQuotaRule
    },
    204: {
      bodyMapper: Mappers.VolumeQuotaRule
    },
    default: {}
  },
  requestBody: Parameters.body29,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.volumeQuotaRuleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeQuotaRule
    },
    201: {
      bodyMapper: Mappers.VolumeQuotaRule
    },
    202: {
      bodyMapper: Mappers.VolumeQuotaRule
    },
    204: {
      bodyMapper: Mappers.VolumeQuotaRule
    },
    default: {}
  },
  requestBody: Parameters.body30,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.volumeQuotaRuleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.volumeQuotaRuleName
  ],
  serializer
};
