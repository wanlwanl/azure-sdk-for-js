/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const TrainRequest: coreHttp.CompositeMapper = {
  serializedName: "TrainRequest",
  type: {
    name: "Composite",
    className: "TrainRequest",
    modelProperties: {
      source: {
        type: { name: "String" },
        serializedName: "source",
        required: true,
        constraints: { MaxLength: 2048 }
      },
      sourceFilter: {
        serializedName: "sourceFilter",
        type: { name: "Composite", className: "TrainSourceFilter" }
      },
      useLabelFile: {
        type: { name: "Boolean" },
        serializedName: "useLabelFile"
      }
    }
  }
};

export const TrainSourceFilter: coreHttp.CompositeMapper = {
  serializedName: "TrainSourceFilter",
  type: {
    name: "Composite",
    className: "TrainSourceFilter",
    modelProperties: {
      prefix: {
        type: { name: "String" },
        serializedName: "prefix",
        constraints: { MaxLength: 1024 }
      },
      includeSubFolders: {
        type: { name: "Boolean" },
        serializedName: "includeSubFolders"
      }
    }
  }
};

export const ErrorResponse: coreHttp.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: { name: "Composite", className: "ErrorInformation" }
      }
    }
  }
};

export const ErrorInformation: coreHttp.CompositeMapper = {
  serializedName: "ErrorInformation",
  type: {
    name: "Composite",
    className: "ErrorInformation",
    modelProperties: {
      code: {
        type: { name: "String" },
        serializedName: "code",
        required: true
      },
      message: {
        type: { name: "String" },
        serializedName: "message",
        required: true
      }
    }
  }
};

export const Model: coreHttp.CompositeMapper = {
  serializedName: "Model",
  type: {
    name: "Composite",
    className: "Model",
    modelProperties: {
      modelInfo: {
        serializedName: "modelInfo",
        type: { name: "Composite", className: "ModelInfo" }
      },
      keys: {
        serializedName: "keys",
        type: { name: "Composite", className: "KeysResult" }
      },
      trainResult: {
        serializedName: "trainResult",
        type: { name: "Composite", className: "TrainResult" }
      }
    }
  }
};

export const ModelInfo: coreHttp.CompositeMapper = {
  serializedName: "ModelInfo",
  type: {
    name: "Composite",
    className: "ModelInfo",
    modelProperties: {
      modelId: {
        type: { name: "Uuid" },
        serializedName: "modelId",
        required: true
      },
      status: {
        type: { name: "Enum", allowedValues: ["creating", "ready", "invalid"] },
        serializedName: "status",
        required: true
      },
      createdOn: {
        type: { name: "DateTime" },
        serializedName: "createdDateTime",
        required: true
      },
      lastUpdatedOn: {
        type: { name: "DateTime" },
        serializedName: "lastUpdatedDateTime",
        required: true
      }
    }
  }
};

export const KeysResult: coreHttp.CompositeMapper = {
  serializedName: "KeysResult",
  type: {
    name: "Composite",
    className: "KeysResult",
    modelProperties: {
      clusters: {
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Sequence",
              element: {
                type: { name: "String" },
                serializedName: "KeysResultClustersItemsItem"
              }
            },
            serializedName: "ArrayOfKeysResultClustersItemsItem",
            constraints: { UniqueItems: true }
          }
        },
        serializedName: "clusters",
        required: true
      }
    }
  }
};

export const TrainResult: coreHttp.CompositeMapper = {
  serializedName: "TrainResult",
  type: {
    name: "Composite",
    className: "TrainResult",
    modelProperties: {
      trainingDocuments: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "TrainingDocumentInfo" }
          }
        },
        serializedName: "trainingDocuments",
        required: true
      },
      fields: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "FormFieldsReport" }
          }
        },
        serializedName: "fields"
      },
      averageModelAccuracy: {
        type: { name: "Number" },
        serializedName: "averageModelAccuracy"
      },
      errors: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "ErrorInformation" }
          }
        },
        serializedName: "errors"
      }
    }
  }
};

export const TrainingDocumentInfo: coreHttp.CompositeMapper = {
  serializedName: "TrainingDocumentInfo",
  type: {
    name: "Composite",
    className: "TrainingDocumentInfo",
    modelProperties: {
      documentName: {
        type: { name: "String" },
        serializedName: "documentName",
        required: true
      },
      pages: {
        type: { name: "Number" },
        serializedName: "pages",
        required: true
      },
      errors: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "ErrorInformation" }
          }
        },
        serializedName: "errors",
        required: true
      },
      status: {
        type: {
          name: "Enum",
          allowedValues: ["succeeded", "partiallySucceeded", "failed"]
        },
        serializedName: "status",
        required: true
      }
    }
  }
};

export const FormFieldsReport: coreHttp.CompositeMapper = {
  serializedName: "FormFieldsReport",
  type: {
    name: "Composite",
    className: "FormFieldsReport",
    modelProperties: {
      fieldName: {
        type: { name: "String" },
        serializedName: "fieldName",
        required: true
      },
      accuracy: {
        type: { name: "Number" },
        serializedName: "accuracy",
        required: true
      }
    }
  }
};

export const SourcePath: coreHttp.CompositeMapper = {
  serializedName: "SourcePath",
  type: {
    name: "Composite",
    className: "SourcePath",
    modelProperties: {
      source: {
        type: { name: "String" },
        serializedName: "source",
        constraints: { MaxLength: 2048 }
      }
    }
  }
};

export const AnalyzeOperationResult: coreHttp.CompositeMapper = {
  serializedName: "AnalyzeOperationResult",
  type: {
    name: "Composite",
    className: "AnalyzeOperationResult",
    modelProperties: {
      status: {
        type: {
          name: "Enum",
          allowedValues: ["notStarted", "running", "succeeded", "failed"]
        },
        serializedName: "status",
        required: true
      },
      createdOn: {
        type: { name: "DateTime" },
        serializedName: "createdDateTime",
        required: true
      },
      lastUpdatedOn: {
        type: { name: "DateTime" },
        serializedName: "lastUpdatedDateTime",
        required: true
      },
      analyzeResult: {
        serializedName: "analyzeResult",
        type: { name: "Composite", className: "AnalyzeResult" }
      }
    }
  }
};

export const AnalyzeResult: coreHttp.CompositeMapper = {
  serializedName: "AnalyzeResult",
  type: {
    name: "Composite",
    className: "AnalyzeResult",
    modelProperties: {
      version: {
        type: { name: "String" },
        serializedName: "version",
        required: true
      },
      readResults: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ReadResult" } }
        },
        serializedName: "readResults",
        required: true
      },
      pageResults: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "PageResult" } }
        },
        serializedName: "pageResults"
      },
      documentResults: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "DocumentResult" } }
        },
        serializedName: "documentResults"
      },
      errors: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "ErrorInformation" }
          }
        },
        serializedName: "errors"
      }
    }
  }
};

export const ReadResult: coreHttp.CompositeMapper = {
  serializedName: "ReadResult",
  type: {
    name: "Composite",
    className: "ReadResult",
    modelProperties: {
      pageNumber: {
        type: { name: "Number" },
        serializedName: "page",
        required: true,
        constraints: { InclusiveMinimum: 1 }
      },
      angle: {
        type: { name: "Number" },
        serializedName: "angle",
        required: true,
        constraints: { InclusiveMaximum: 180, InclusiveMinimum: -180 }
      },
      width: {
        type: { name: "Number" },
        serializedName: "width",
        required: true,
        constraints: {}
      },
      height: {
        type: { name: "Number" },
        serializedName: "height",
        required: true,
        constraints: {}
      },
      unit: {
        type: { name: "Enum", allowedValues: ["pixel", "inch"] },
        serializedName: "unit",
        required: true
      },
      language: { type: { name: "String" }, serializedName: "language" },
      lines: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "TextLine" } }
        },
        serializedName: "lines"
      }
    }
  }
};

export const TextLine: coreHttp.CompositeMapper = {
  serializedName: "TextLine",
  type: {
    name: "Composite",
    className: "TextLine",
    modelProperties: {
      text: {
        type: { name: "String" },
        serializedName: "text",
        required: true
      },
      boundingBox: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Number" },
            serializedName: "BoundingBoxItem"
          }
        },
        serializedName: "boundingBox",
        required: true,
        constraints: { MinItems: 8, MaxItems: 8 }
      },
      language: { type: { name: "String" }, serializedName: "language" },
      words: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "TextWord" } }
        },
        serializedName: "words",
        required: true
      }
    }
  }
};

export const TextWord: coreHttp.CompositeMapper = {
  serializedName: "TextWord",
  type: {
    name: "Composite",
    className: "TextWord",
    modelProperties: {
      text: {
        type: { name: "String" },
        serializedName: "text",
        required: true
      },
      boundingBox: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Number" },
            serializedName: "BoundingBoxItem"
          }
        },
        serializedName: "boundingBox",
        required: true,
        constraints: { MinItems: 8, MaxItems: 8 }
      },
      confidence: {
        type: { name: "Number" },
        serializedName: "confidence",
        constraints: { InclusiveMaximum: 1 }
      }
    }
  }
};

export const PageResult: coreHttp.CompositeMapper = {
  serializedName: "PageResult",
  type: {
    name: "Composite",
    className: "PageResult",
    modelProperties: {
      pageNumber: {
        type: { name: "Number" },
        serializedName: "page",
        required: true,
        constraints: { InclusiveMinimum: 1 }
      },
      clusterId: {
        type: { name: "Number" },
        serializedName: "clusterId",
        constraints: {}
      },
      keyValuePairs: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "KeyValuePair" } }
        },
        serializedName: "keyValuePairs"
      },
      tables: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "DataTable" } }
        },
        serializedName: "tables"
      }
    }
  }
};

export const KeyValuePair: coreHttp.CompositeMapper = {
  serializedName: "KeyValuePair",
  type: {
    name: "Composite",
    className: "KeyValuePair",
    modelProperties: {
      label: { type: { name: "String" }, serializedName: "label" },
      key: {
        serializedName: "key",
        type: { name: "Composite", className: "KeyValueElement" }
      },
      value: {
        serializedName: "value",
        type: { name: "Composite", className: "KeyValueElement" }
      },
      confidence: {
        type: { name: "Number" },
        serializedName: "confidence",
        required: true,
        constraints: { InclusiveMaximum: 1 }
      }
    }
  }
};

export const KeyValueElement: coreHttp.CompositeMapper = {
  serializedName: "KeyValueElement",
  type: {
    name: "Composite",
    className: "KeyValueElement",
    modelProperties: {
      text: {
        type: { name: "String" },
        serializedName: "text",
        required: true
      },
      boundingBox: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Number" },
            serializedName: "BoundingBoxItem"
          }
        },
        serializedName: "boundingBox",
        constraints: { MinItems: 8, MaxItems: 8 }
      },
      elements: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "String" },
            serializedName: "ElementReference"
          }
        },
        serializedName: "elements"
      }
    }
  }
};

export const DataTable: coreHttp.CompositeMapper = {
  serializedName: "DataTable",
  type: {
    name: "Composite",
    className: "DataTable",
    modelProperties: {
      rows: {
        type: { name: "Number" },
        serializedName: "rows",
        required: true,
        constraints: { InclusiveMinimum: 1 }
      },
      columns: {
        type: { name: "Number" },
        serializedName: "columns",
        required: true,
        constraints: { InclusiveMinimum: 1 }
      },
      cells: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "DataTableCell" } }
        },
        serializedName: "cells",
        required: true
      }
    }
  }
};

export const DataTableCell: coreHttp.CompositeMapper = {
  serializedName: "DataTableCell",
  type: {
    name: "Composite",
    className: "DataTableCell",
    modelProperties: {
      rowIndex: {
        type: { name: "Number" },
        serializedName: "rowIndex",
        required: true,
        constraints: {}
      },
      columnIndex: {
        type: { name: "Number" },
        serializedName: "columnIndex",
        required: true,
        constraints: {}
      },
      rowSpan: {
        type: { name: "Number" },
        serializedName: "rowSpan",
        defaultValue: 1,
        constraints: { InclusiveMinimum: 1 }
      },
      columnSpan: {
        type: { name: "Number" },
        serializedName: "columnSpan",
        defaultValue: 1,
        constraints: { InclusiveMinimum: 1 }
      },
      text: {
        type: { name: "String" },
        serializedName: "text",
        required: true
      },
      boundingBox: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Number" },
            serializedName: "BoundingBoxItem"
          }
        },
        serializedName: "boundingBox",
        required: true,
        constraints: { MinItems: 8, MaxItems: 8 }
      },
      confidence: {
        type: { name: "Number" },
        serializedName: "confidence",
        required: true,
        constraints: { InclusiveMaximum: 1 }
      },
      elements: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "String" },
            serializedName: "ElementReference"
          }
        },
        serializedName: "elements"
      },
      isHeader: { type: { name: "Boolean" }, serializedName: "isHeader" },
      isFooter: { type: { name: "Boolean" }, serializedName: "isFooter" }
    }
  }
};

export const DocumentResult: coreHttp.CompositeMapper = {
  serializedName: "DocumentResult",
  type: {
    name: "Composite",
    className: "DocumentResult",
    modelProperties: {
      docType: {
        type: { name: "String" },
        serializedName: "docType",
        required: true
      },
      pageRange: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Number" },
            serializedName: "ArrayItemschema",
            constraints: { InclusiveMinimum: 1 }
          }
        },
        serializedName: "pageRange",
        required: true,
        constraints: { MinItems: 2, MaxItems: 2 }
      },
      fields: {
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "FieldValue" } }
        },
        serializedName: "fields",
        required: true
      }
    }
  }
};

export const FieldValue: coreHttp.CompositeMapper = {
  serializedName: "FieldValue",
  type: {
    name: "Composite",
    className: "FieldValue",
    modelProperties: {
      type: {
        type: {
          name: "Enum",
          allowedValues: [
            "string",
            "date",
            "time",
            "phoneNumber",
            "number",
            "integer",
            "array",
            "object"
          ]
        },
        serializedName: "type",
        required: true
      },
      valueString: { type: { name: "String" }, serializedName: "valueString" },
      valueDate: { type: { name: "Date" }, serializedName: "valueDate" },
      valueTime: { type: { name: "String" }, serializedName: "valueTime" },
      valuePhoneNumber: {
        type: { name: "String" },
        serializedName: "valuePhoneNumber"
      },
      valueNumber: { type: { name: "Number" }, serializedName: "valueNumber" },
      valueInteger: {
        type: { name: "Number" },
        serializedName: "valueInteger"
      },
      valueArray: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "FieldValue" } }
        },
        serializedName: "valueArray"
      },
      valueObject: {
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "FieldValue" } }
        },
        serializedName: "valueObject"
      },
      text: { type: { name: "String" }, serializedName: "text" },
      boundingBox: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Number" },
            serializedName: "BoundingBoxItem"
          }
        },
        serializedName: "boundingBox",
        constraints: { MinItems: 8, MaxItems: 8 }
      },
      confidence: {
        type: { name: "Number" },
        serializedName: "confidence",
        constraints: { InclusiveMaximum: 1 }
      },
      elements: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "String" },
            serializedName: "ElementReference"
          }
        },
        serializedName: "elements"
      },
      pageNumber: {
        type: { name: "Number" },
        serializedName: "page",
        constraints: { InclusiveMinimum: 1 }
      }
    }
  }
};

export const Models: coreHttp.CompositeMapper = {
  serializedName: "Models",
  type: {
    name: "Composite",
    className: "Models",
    modelProperties: {
      summary: {
        serializedName: "summary",
        type: { name: "Composite", className: "ModelsSummary" }
      },
      modelList: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ModelInfo" } }
        },
        serializedName: "modelList"
      },
      nextLink: { type: { name: "String" }, serializedName: "nextLink" }
    }
  }
};

export const ModelsSummary: coreHttp.CompositeMapper = {
  serializedName: "ModelsSummary",
  type: {
    name: "Composite",
    className: "ModelsSummary",
    modelProperties: {
      count: {
        type: { name: "Number" },
        serializedName: "count",
        required: true
      },
      limit: {
        type: { name: "Number" },
        serializedName: "limit",
        required: true
      },
      lastUpdatedOn: {
        type: { name: "DateTime" },
        serializedName: "lastUpdatedDateTime",
        required: true
      }
    }
  }
};

export const FormRecognizerClientTrainCustomModelAsyncHeaders: coreHttp.CompositeMapper = {
  serializedName: "formRecognizerClient_trainCustomModelAsyncHeaders",
  type: {
    name: "Composite",
    className: "FormRecognizerClientTrainCustomModelAsyncHeaders",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" }
    }
  }
};

export const FormRecognizerClientAnalyzeWithCustomModelHeaders: coreHttp.CompositeMapper = {
  serializedName: "formRecognizerClient_analyzeWithCustomModelHeaders",
  type: {
    name: "Composite",
    className: "FormRecognizerClientAnalyzeWithCustomModelHeaders",
    modelProperties: {
      operationLocation: {
        type: { name: "String" },
        serializedName: "operation-location"
      }
    }
  }
};

export const FormRecognizerClientAnalyzeReceiptAsyncHeaders: coreHttp.CompositeMapper = {
  serializedName: "formRecognizerClient_analyzeReceiptAsyncHeaders",
  type: {
    name: "Composite",
    className: "FormRecognizerClientAnalyzeReceiptAsyncHeaders",
    modelProperties: {
      operationLocation: {
        type: { name: "String" },
        serializedName: "operation-location"
      }
    }
  }
};

export const FormRecognizerClientAnalyzeLayoutAsyncHeaders: coreHttp.CompositeMapper = {
  serializedName: "formRecognizerClient_analyzeLayoutAsyncHeaders",
  type: {
    name: "Composite",
    className: "FormRecognizerClientAnalyzeLayoutAsyncHeaders",
    modelProperties: {
      operationLocation: {
        type: { name: "String" },
        serializedName: "operation-location"
      }
    }
  }
};
