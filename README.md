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
### simplify
Transforms a Firestore document into a readable simplified JSON object.

Supports all known Firestore data types, but be cautious with multidimensional arrays.
```ts
import { simplify } from 'firestore-json-util';
...
const json = simplify(document);
```

### parse
Transforms a simple JSON object into a Firestore document.

Supports all known Firestore data types expect `GeoPoints` and `References`. Those are transformed as `objects` / `strings`.
```ts
import { parse } from 'firestore-json-util';
...
const document = parse(json);
```

## Contributing
Just fork and submit a pull request.

## License
Released under the MIT license.
