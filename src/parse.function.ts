import { Fields, FieldTypes, FirestoreDocument } from './firestore.types';

const parseObjectField = <T extends Record<string, any>>(obj: T) =>
    ({fields: Object.assign({}, ...Object.keys(obj).map((k: string) => ({[k]: parseDocumentField(obj[k], typeof obj[k])})))});

const parseDocumentField: (value: object, type: string) => Partial<FieldTypes> | undefined = (value: object, type: string) => {
    if (value === null) return {nullValue: null};
    if (type === 'boolean') return {booleanValue: value};
    if (type === 'string' && Number.isInteger(+value) && (value as unknown as string).trim().length) return {integerValue: value.toString()};
    if (type === 'string' && (value as unknown as string).length > 10 && !isNaN(new Date(value as unknown as string).getTime())) return {timestampValue: value};
    if (type === 'string') return {stringValue: value};
    if (type === 'number' && Number.isInteger(value)) return {integerValue: value.toString()};
    if (type === 'number' && !Number.isInteger(value)) return {doubleValue: value};
    if (type === 'object' && Array.isArray(value)) return {arrayValue: {values: value.map(val => parseDocumentField(val, typeof val))}};
    if (type === 'object' && !Array.isArray(value)) return {mapValue: parseObjectField(value as Fields)};
};

export const parse: (obj: object) => FirestoreDocument = (obj: object) => parseObjectField(obj);
