export type StringField = { stringValue: string };
export type IntegerField = { integerValue: string | number };
export type DoubleField = { doubleValue: number };
export type BooleanField = { booleanValue: boolean };
export type NullField = { nullValue: null };
export type TimestampField = { timestampValue: string };
export type ReferenceField = { referenceValue: string };
export type GeopointField = { geoPointValue: { latitude: number; longitude: number; } };
export type MapField = { mapValue: FieldMap };
export type ArrayField = { arrayValue: { values?: FieldTypes[] } };
export type FieldTypes =
    StringField
    | IntegerField
    | BooleanField
    | DoubleField
    | ArrayField
    | MapField
    | NullField
    | TimestampField
    | ReferenceField
    | GeopointField;

export type Fields = { [key: string]: FieldTypes };
export type FieldMap = { fields: Fields };
export type FirestoreDocument = FieldMap & { name?: string; createTime?: string; updateTime?: string; };