import { parse } from '../src/parse.function';

test('should map null field', () => {
    expect(parse({testField: null})).toStrictEqual({fields: {testField: {nullValue: null}}});
});

test('should map string field', () => {
    expect(parse({testField: 'string-field'})).toStrictEqual({fields: {testField: {stringValue: 'string-field'}}});
});

test('should map whitespace to string field', () => {
    expect(parse({testField: ' '})).toStrictEqual({fields: {testField: {stringValue: ' '}}});
});

test('should map date to string field', () => {
    expect(parse({testField: '2020-06-20'})).toStrictEqual({fields: {testField: {stringValue: '2020-06-20'}}});
});

test('should map timestamp field', () => {
    expect(parse({testField: '2022-06-17T18:49:21.152Z'})).toStrictEqual({fields: {testField: {timestampValue: '2022-06-17T18:49:21.152Z'}}});
});

test('should map integer field', () => {
    expect(parse({testField: 3})).toStrictEqual({fields: {testField: {integerValue: '3'}}});
});

test('should map integer field (number as string)', () => {
    expect(parse({testField: '4'})).toStrictEqual({fields: {testField: {integerValue: '4'}}});
});

test('should map double field', () => {
    expect(parse({testField: 3.02})).toStrictEqual({fields: {testField: {doubleValue: 3.02}}});
});

test('should map boolean field', () => {
    expect(parse({testField: true})).toStrictEqual({fields: {testField: {booleanValue: true}}});
});

test('should map object field', () => {
    expect(parse({testField: { deepField: true}})).toStrictEqual({fields: {testField: {mapValue: {fields: {deepField: {booleanValue: true}}}}}});
});

test('should map array field', () => {
    expect(parse({testField: [true,false]})).toStrictEqual({fields: {testField: {arrayValue: {values: [{booleanValue: true},{booleanValue: false}]}}}});
});
