/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PostgreSQLManagementFlexibleServerClient } from "@azure/arm-postgresql-flexible";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets details of a migration.
 *
 * @summary Gets details of a migration.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/preview/2023-06-01-preview/examples/Migrations_Get.json
 */
async function migrationsGet() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "testrg";
  const targetDbServerName = "testtarget";
  const migrationName = "testmigration";
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(credential);
  const result = await client.migrations.get(
    subscriptionId,
    resourceGroupName,
    targetDbServerName,
    migrationName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets details of a migration.
 *
 * @summary Gets details of a migration.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/preview/2023-06-01-preview/examples/Migrations_GetMigrationWithSuccessfulValidationAndMigration.json
 */
async function migrationsGetMigrationWithSuccessfulValidationAndMigration() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "testrg";
  const targetDbServerName = "testtarget";
  const migrationName = "testmigrationwithsuccessfulvalidationandmigration";
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(credential);
  const result = await client.migrations.get(
    subscriptionId,
    resourceGroupName,
    targetDbServerName,
    migrationName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets details of a migration.
 *
 * @summary Gets details of a migration.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/preview/2023-06-01-preview/examples/Migrations_GetMigrationWithSuccessfulValidationButMigrationFailure.json
 */
async function migrationsGetMigrationWithSuccessfulValidationButMigrationFailure() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "testrg";
  const targetDbServerName = "testtarget";
  const migrationName =
    "testmigrationwithsuccessfulvalidationbutmigrationfailure";
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(credential);
  const result = await client.migrations.get(
    subscriptionId,
    resourceGroupName,
    targetDbServerName,
    migrationName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets details of a migration.
 *
 * @summary Gets details of a migration.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/preview/2023-06-01-preview/examples/Migrations_GetMigrationWithSuccessfulValidationOnly.json
 */
async function migrationsGetMigrationWithSuccessfulValidationOnly() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "testrg";
  const targetDbServerName = "testtarget";
  const migrationName = "testmigrationwithsuccessfulvalidationonly";
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(credential);
  const result = await client.migrations.get(
    subscriptionId,
    resourceGroupName,
    targetDbServerName,
    migrationName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets details of a migration.
 *
 * @summary Gets details of a migration.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/preview/2023-06-01-preview/examples/Migrations_GetMigrationWithValidationFailures.json
 */
async function migrationsGetMigrationWithValidationFailures() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "testrg";
  const targetDbServerName = "testtarget";
  const migrationName = "testmigrationwithvalidationfailure";
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(credential);
  const result = await client.migrations.get(
    subscriptionId,
    resourceGroupName,
    targetDbServerName,
    migrationName
  );
  console.log(result);
}

async function main() {
  migrationsGet();
  migrationsGetMigrationWithSuccessfulValidationAndMigration();
  migrationsGetMigrationWithSuccessfulValidationButMigrationFailure();
  migrationsGetMigrationWithSuccessfulValidationOnly();
  migrationsGetMigrationWithValidationFailures();
}

main().catch(console.error);
