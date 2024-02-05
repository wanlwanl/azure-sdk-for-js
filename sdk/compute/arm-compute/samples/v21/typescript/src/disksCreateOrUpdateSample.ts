/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Disk, ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_ConfidentialVMSupportedDiskEncryptedWithCMK.json
 */
async function createAConfidentialVMSupportedDiskEncryptedWithCustomerManagedKey() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "FromImage",
      imageReference: {
        id:
          "/Subscriptions/{subscriptionId}/Providers/Microsoft.Compute/Locations/westus/Publishers/{publisher}/ArtifactTypes/VMImage/Offers/{offer}/Skus/{sku}/Versions/1.0.0"
      }
    },
    location: "West US",
    osType: "Windows",
    securityProfile: {
      secureVMDiskEncryptionSetId:
        "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}",
      securityType: "ConfidentialVM_DiskEncryptedWithCustomerKey"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_WithDiskAccess.json
 */
async function createAManagedDiskAndAssociateWithDiskAccessResource() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskAccessId:
      "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskAccesses/{existing-diskAccess-name}",
    diskSizeGB: 200,
    location: "West US",
    networkAccessPolicy: "AllowPrivate"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_WithDiskEncryptionSet.json
 */
async function createAManagedDiskAndAssociateWithDiskEncryptionSet() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskSizeGB: 200,
    encryption: {
      diskEncryptionSetId:
        "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_ByCopyingASnapshot.json
 */
async function createAManagedDiskByCopyingASnapshot() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "Copy",
      sourceResourceId:
        "subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_ByImportingBlobFromADifferentSubscription.json
 */
async function createAManagedDiskByImportingAnUnmanagedBlobFromADifferentSubscription() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "Import",
      sourceUri:
        "https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd",
      storageAccountId:
        "subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/myStorageAccount"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_ByImportingBlobFromTheSameSubscription.json
 */
async function createAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "Import",
      sourceUri:
        "https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_FromImportSecure.json
 */
async function createAManagedDiskFromImportSecureCreateOption() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "ImportSecure",
      securityDataUri:
        "https://mystorageaccount.blob.core.windows.net/osimages/vmgs.vhd",
      sourceUri:
        "https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd",
      storageAccountId:
        "subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/myStorageAccount"
    },
    location: "West US",
    osType: "Windows",
    securityProfile: {
      securityType: "ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_FromUploadPreparedSecure.json
 */
async function createAManagedDiskFromUploadPreparedSecureCreateOption() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "UploadPreparedSecure",
      uploadSizeBytes: 10737418752
    },
    location: "West US",
    osType: "Windows",
    securityProfile: { securityType: "TrustedLaunch" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_FromAPlatformImage.json
 */
async function createAManagedDiskFromAPlatformImage() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "FromImage",
      imageReference: {
        id:
          "/Subscriptions/{subscriptionId}/Providers/Microsoft.Compute/Locations/westus/Publishers/{publisher}/ArtifactTypes/VMImage/Offers/{offer}/Skus/{sku}/Versions/1.0.0"
      }
    },
    location: "West US",
    osType: "Windows"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_FromAnAzureComputeGalleryCommunityImage.json
 */
async function createAManagedDiskFromAnAzureComputeGalleryCommunityImage() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "FromImage",
      galleryImageReference: {
        communityGalleryImageId:
          "/CommunityGalleries/{communityGalleryPublicGalleryName}/Images/{imageName}/Versions/1.0.0"
      }
    },
    location: "West US",
    osType: "Windows"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_FromAnAzureComputeGalleryDirectSharedImage.json
 */
async function createAManagedDiskFromAnAzureComputeGalleryDirectSharedImage() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "FromImage",
      galleryImageReference: {
        sharedGalleryImageId:
          "/SharedGalleries/{sharedGalleryUniqueName}/Images/{imageName}/Versions/1.0.0"
      }
    },
    location: "West US",
    osType: "Windows"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_FromAnAzureComputeGalleryImage.json
 */
async function createAManagedDiskFromAnAzureComputeGalleryImage() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "FromImage",
      galleryImageReference: {
        id:
          "/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Providers/Microsoft.Compute/Galleries/{galleryName}/Images/{imageName}/Versions/1.0.0"
      }
    },
    location: "West US",
    osType: "Windows"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_FromAnExistingManagedDisk.json
 */
async function createAManagedDiskFromAnExistingManagedDiskInTheSameOrDifferentSubscription() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk2";
  const disk: Disk = {
    creationData: {
      createOption: "Copy",
      sourceResourceId:
        "subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myDisk1"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_FromAnElasticSanVolumeSnapshot.json
 */
async function createAManagedDiskFromElasticSanVolumeSnapshot() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "CopyFromSanSnapshot",
      elasticSanResourceId:
        "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.ElasticSan/elasticSans/myElasticSan/volumegroups/myElasticSanVolumeGroup/snapshots/myElasticSanVolumeSnapshot"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_WithDataAccessAuthMode.json
 */
async function createAManagedDiskWithDataAccessAuthMode() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    dataAccessAuthMode: "AzureActiveDirectory",
    diskSizeGB: 200,
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_WithOptimizedForFrequentAttach.json
 */
async function createAManagedDiskWithOptimizedForFrequentAttach() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskSizeGB: 200,
    location: "West US",
    optimizedForFrequentAttach: true
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_PerformancePlus.json
 */
async function createAManagedDiskWithPerformancePlus() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Upload", performancePlus: true },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_WithPremiumV2_LRSAccountType.json
 */
async function createAManagedDiskWithPremiumV2AccountType() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myPremiumV2Disk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskIopsReadWrite: 125,
    diskMBpsReadWrite: 3000,
    diskSizeGB: 200,
    location: "West US",
    sku: { name: "PremiumV2_LRS" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_WithSecurityProfile.json
 */
async function createAManagedDiskWithSecurityProfile() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "FromImage",
      imageReference: {
        id:
          "/Subscriptions/{subscriptionId}/Providers/Microsoft.Compute/Locations/uswest/Publishers/Microsoft/ArtifactTypes/VMImage/Offers/{offer}"
      }
    },
    location: "North Central US",
    osType: "Windows",
    securityProfile: { securityType: "TrustedLaunch" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_WithSSDZRSAccountType.json
 */
async function createAManagedDiskWithSsdZrsAccountType() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskSizeGB: 200,
    location: "West US",
    sku: { name: "Premium_ZRS" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_WithUltraSSD_ReadOnly.json
 */
async function createAManagedDiskWithUltraAccountTypeWithReadOnlyPropertySet() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myUltraReadOnlyDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty", logicalSectorSize: 4096 },
    diskIopsReadWrite: 125,
    diskMBpsReadWrite: 3000,
    diskSizeGB: 200,
    encryption: { type: "EncryptionAtRestWithPlatformKey" },
    location: "West US",
    sku: { name: "UltraSSD_LRS" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_UploadDisk.json
 */
async function createAManagedUploadDisk() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Upload", uploadSizeBytes: 10737418752 },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_InExtendedLocation.json
 */
async function createAnEmptyManagedDiskInExtendedLocation() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskSizeGB: 200,
    extendedLocation: { name: "{edge-zone-id}", type: "EdgeZone" },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_Empty.json
 */
async function createAnEmptyManagedDisk() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskSizeGB: 200,
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2023-10-02/examples/diskExamples/Disk_Create_WithLogicalSectorSize.json
 */
async function createAnUltraManagedDiskWithLogicalSectorSize512E() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty", logicalSectorSize: 512 },
    diskSizeGB: 200,
    location: "West US",
    sku: { name: "UltraSSD_LRS" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

async function main() {
  createAConfidentialVMSupportedDiskEncryptedWithCustomerManagedKey();
  createAManagedDiskAndAssociateWithDiskAccessResource();
  createAManagedDiskAndAssociateWithDiskEncryptionSet();
  createAManagedDiskByCopyingASnapshot();
  createAManagedDiskByImportingAnUnmanagedBlobFromADifferentSubscription();
  createAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription();
  createAManagedDiskFromImportSecureCreateOption();
  createAManagedDiskFromUploadPreparedSecureCreateOption();
  createAManagedDiskFromAPlatformImage();
  createAManagedDiskFromAnAzureComputeGalleryCommunityImage();
  createAManagedDiskFromAnAzureComputeGalleryDirectSharedImage();
  createAManagedDiskFromAnAzureComputeGalleryImage();
  createAManagedDiskFromAnExistingManagedDiskInTheSameOrDifferentSubscription();
  createAManagedDiskFromElasticSanVolumeSnapshot();
  createAManagedDiskWithDataAccessAuthMode();
  createAManagedDiskWithOptimizedForFrequentAttach();
  createAManagedDiskWithPerformancePlus();
  createAManagedDiskWithPremiumV2AccountType();
  createAManagedDiskWithSecurityProfile();
  createAManagedDiskWithSsdZrsAccountType();
  createAManagedDiskWithUltraAccountTypeWithReadOnlyPropertySet();
  createAManagedUploadDisk();
  createAnEmptyManagedDiskInExtendedLocation();
  createAnEmptyManagedDisk();
  createAnUltraManagedDiskWithLogicalSectorSize512E();
}

main().catch(console.error);
