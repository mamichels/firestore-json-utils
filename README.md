# firestore-json-util
[![npm license](https://img.shields.io/github/license/mamichels/firestore-json-utils)](https://github.com/mamichels/firestore-json-utils/blob/main/LICENCE)
[![npm license](https://img.shields.io/npm/v/firestore-json-utils)](https://www.npmjs.com/package/firestore-json-utils)
[![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/mamichels/206d74dd194a97a674980599a252e16d/raw/firestore-json-utils_heads_main.json)](https://github.com/mamichels/firestore-json-utils/tree/main/tests)

A fully typed and tested lib for working with Firestore documents.
Used to parse and simplify Firestore documents for those who don't want to commit to the Firebase SDK.

## Installation
```shell
npm install --save firestore-json-utils
```

## Usage

### parse
Transforms a simple JSON object into a Firestore document.

Supports all known Firestore data types expect `GeoPoints` and `References`. Those are transformed as `objects` / `strings`.
```ts
import { parse } from 'firestore-json-utils';
...
const document = parse(json);
```

### `parse` example

Say, we have a simple object representing a person.
a call to `parse` with our fictional 'person' JSON as input

```json
{
  "id": 1701,
  "name": "Jane Doe",
  "active": true,
  "dateOfBirth": "1977-12-09T14:35:21.152Z"
}
```

returns the following Firestore document representation as output:

```json
{
  "fields": {
    "id": {
      "integerValue": "1701"
    },
    "name": {
      "stringValue": "Jane Doe"
    },
    "active": {
      "booleanValue": true
    },
    "dateOfBirth": {
      "timestampValue": "1977-12-09T14:35:21.152Z"
    }
  }
}
```

(and yes, please ignore that `dateOfBirth` should be a local date rather than a timestamp, depending on how you see it...)

### simplify
Transforms a Firestore document into a readable simplified JSON object.

Supports all known Firestore data types, but be cautious with multidimensional arrays.
```ts
import { simplify } from 'firestore-json-utils';
...
const json = simplify(document);
```

#### `simplify` example

A call to `simplify` with the following Firestore document (input):

```json
{
  "fields": {
    "id": {
      "integerValue": "1701"
    },
    "name": {
      "stringValue": "Jane Doe"
    },
    "active": {
      "booleanValue": true
    },
    "dateOfBirth": {
      "timestampValue": "1977-12-09T14:35:21.152Z"
    }
  }
}
```

will create the following simple JSON:

```json
{
  "id": 1701,
  "name": "Jane Doe",
  "active": true,
  "dateOfBirth": "1977-12-09T14:35:21.152Z"
}
```

## Contributing
Just fork and submit a pull request.

## License
Released under the MIT license.
