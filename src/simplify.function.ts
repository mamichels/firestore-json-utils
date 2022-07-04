import { ArrayField, FieldMap, Fields, FirestoreDocument, GeopointField } from './firestore.types';

const getFirstObjectKey = <T>(obj: T): keyof T => Object.keys(obj)[0] as keyof T;

const getFieldValue: <T extends Fields>(obj: T, field: keyof T) => string | number | boolean | object = <T extends Fields>(obj: T, field: keyof T) => {
    const fieldType = getFirstObjectKey(obj[field]);
    switch (fieldType) {
        case 'nullValue':
        case 'stringValue':
        case 'integerValue':
        case 'doubleValue':
        case 'timestampValue':
        case 'referenceValue':
        case 'booleanValue':
            return obj[field][fieldType];

        case 'mapValue':
            return getMapFieldValue((obj[field][fieldType] as unknown as FieldMap).fields);

        case 'arrayValue':
            return getArrayFieldValue(obj[field] as ArrayField);

        case 'geoPointValue':
            return getGeoPointFieldValue(obj[field] as unknown as GeopointField);
    }
};

const getArrayFieldValue = (fields: ArrayField) =>
    fields.arrayValue.values?.map((field) => {
        if (typeof field[getFirstObjectKey(field)] === 'object') return getMapFieldValue((field[getFirstObjectKey(field)] as unknown as FieldMap).fields as unknown as Fields);
        return field[getFirstObjectKey(field)];
    })
    ?? [];

const getMapFieldValue = (map: Fields) =>
    Object.assign({}, ...Object.keys(map).map((k: keyof Fields) => ({[k]: getFieldValue(map, k)})));

const getGeoPointFieldValue = (objElementElement: GeopointField) =>
    ({latitude: objElementElement.geoPointValue.latitude, longitude: objElementElement.geoPointValue.longitude});

export const simplify = (obj: FirestoreDocument) => getMapFieldValue(obj.fields);
