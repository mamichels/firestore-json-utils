# firestore-json-util
A fully typed and tested lib for working with Firestore documents.
Used to parse and simplify Firestore documents for those who don't want to commit to the Firebase SDK.

## Installation
```shell
npm install --save firestore-json-util
```

## Usage

### simplify
Transform a Firestore document into a readable simplified JSON object.
```ts
import { simplify } from 'firestore-json-util';
...
const json = simplify(document);
```

### parse
Transform a simple JSON object into a Firestore document.
```ts
import { parse } from 'firestore-json-util';
...
const document = parse(json);
```
## Contributing
Just fork and submit a pull request.

## License
Released under the MIT license.
