import { simplify } from '../src/simplify.function';

test('should map all fields', () => {
    expect(simplify(firestoreDocument)).toStrictEqual(simplifiedJson);
});

const simplifiedJson = {
    "array": [
        "string-value",
    ],
    "boolean": true,
    "double": 3.22,
    "geopoint": {
        "latitude": 90,
        "longitude": 90,
    },
    "integer": "1",
    "map": {
        "string": "string-value",
    },
    "null": null,
    "reference": "projects/PROJECT_ID/databases/(default)/documents/test-collection/F1bac2TWM6Q09dZhQECX",
    "string": "string-value",
    "timestamp": "2022-06-17T18:49:21.152Z",
};

const firestoreDocument = {
    "name": "projects/PROJECT_ID/databases/(default)/documents/test-collection/F1bac2TWM6Q09dZhQECX",
    "fields": {
        "geopoint": {
            "geoPointValue": {
                "latitude": 90,
                "longitude": 90
            }
        },
        "reference": {
            "referenceValue": "projects/PROJECT_ID/databases/(default)/documents/test-collection/F1bac2TWM6Q09dZhQECX"
        },
        "integer": {
            "integerValue": "1"
        },
        "double": {
            "doubleValue": 3.22
        },
        "null": {
            "nullValue": null
        },
        "boolean": {
            "booleanValue": true
        },
        "timestamp": {
            "timestampValue": "2022-06-17T18:49:21.152Z"
        },
        "string": {
            "stringValue": "string-value"
        },
        "map": {
            "mapValue": {
                "fields": {
                    "string": {
                        "stringValue": "string-value"
                    }
                }
            }
        },
        "array": {
            "arrayValue": {
                "values": [
                    {
                        "stringValue": "string-value"
                    }
                ]
            }
        }
    },
    "createTime": "2022-06-17T18:47:45.589615Z",
    "updateTime": "2022-06-17T18:50:12.507414Z"
};
