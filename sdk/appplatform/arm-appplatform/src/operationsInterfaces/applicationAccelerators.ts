/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ApplicationAcceleratorResource,
  ApplicationAcceleratorsListOptionalParams,
  ApplicationAcceleratorsGetOptionalParams,
  ApplicationAcceleratorsGetResponse,
  ApplicationAcceleratorsCreateOrUpdateOptionalParams,
  ApplicationAcceleratorsCreateOrUpdateResponse,
  ApplicationAcceleratorsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApplicationAccelerators. */
export interface ApplicationAccelerators {
  /**
   * Handle requests to list all application accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    options?: ApplicationAcceleratorsListOptionalParams
  ): PagedAsyncIterableIterator<ApplicationAcceleratorResource>;
  /**
   * Get the application accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    options?: ApplicationAcceleratorsGetOptionalParams
  ): Promise<ApplicationAcceleratorsGetResponse>;
  /**
   * Create or update the application accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param applicationAcceleratorResource The application accelerator for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    applicationAcceleratorResource: ApplicationAcceleratorResource,
    options?: ApplicationAcceleratorsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ApplicationAcceleratorsCreateOrUpdateResponse>,
      ApplicationAcceleratorsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update the application accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param applicationAcceleratorResource The application accelerator for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    applicationAcceleratorResource: ApplicationAcceleratorResource,
    options?: ApplicationAcceleratorsCreateOrUpdateOptionalParams
  ): Promise<ApplicationAcceleratorsCreateOrUpdateResponse>;
  /**
   * Delete the application accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    options?: ApplicationAcceleratorsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete the application accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    options?: ApplicationAcceleratorsDeleteOptionalParams
  ): Promise<void>;
}