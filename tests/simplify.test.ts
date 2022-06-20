import { simplify } from '../src/simplify.function';

test('should map null field', () => {
    expect(simplify({fields: {testField: {nullValue: null}}})).toStrictEqual({testField: null});
});

test('should map string field', () => {
    expect(simplify({fields: {testField: {stringValue: "test"}}})).toStrictEqual({testField: "test"});
});

test('should map integer field', () => {
    expect(simplify({fields: {testField: {integerValue: 1}}})).toStrictEqual({testField: 1});
});

test('should map double field', () => {
    expect(simplify({fields: {testField: {integerValue: 1.02}}})).toStrictEqual({testField: 1.02});
});

test('should map boolean field (true)', () => {
    expect(simplify({fields: {testField: {booleanValue: true}}})).toStrictEqual({testField: true});
});

test('should map boolean field (false)', () => {
    expect(simplify({fields: {testField: {booleanValue: false}}})).toStrictEqual({testField: false});
});

test('should map timestamp field', () => {
    expect(simplify({fields: {testField: {timestampValue: '2022-06-17T18:49:21.152Z'}}})).toStrictEqual({testField: '2022-06-17T18:49:21.152Z'});
});

test('should map reference field', () => {
    expect(simplify({fields: {testField: {referenceValue: 'projects/PROJECT_ID/databases/(default)/documents/test-collection/F1bac2TWM6Q09dZhQECX'}}})).toStrictEqual({testField: 'projects/PROJECT_ID/databases/(default)/documents/test-collection/F1bac2TWM6Q09dZhQECX'});
});

test('should map object field', () => {
    expect(simplify({fields: {testField: {mapValue: {fields: {deepField: {booleanValue: true}}}}}})).toStrictEqual({testField: {deepField: true}});
});

test('should map object field', () => {
    expect(simplify({fields: {testField: {geoPointValue: {latitude: 90, longitude: 91}}}})).toStrictEqual({testField: {latitude: 90, longitude: 91}});
});

test('should map array field', () => {
    expect(simplify({fields: {testField: {arrayValue: {values: [{stringValue: "string in array"}]}}}})).toStrictEqual({testField: ["string in array"]});
});

test('should map object-nested array field', () => {
    expect(simplify({fields: {testField: {arrayValue: {values: [{mapValue: {fields: {nestedField: { stringValue: "nested-field"}}}}]}}}})).toStrictEqual({testField: [{nestedField: 'nested-field'}]});
});
