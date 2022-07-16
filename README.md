# json-stringify-pretty-compact-cli

A CLI wrapper around the [json-stringify-pretty-compact-cli library](https://www.npmjs.com/package/json-stringify-pretty-compact).

Thanks and acknowledgements to Simon Lydell for creating this wonderful library.

Turns ugly JSON like:

```json
{
  "bool": true,
  "short array": [
    1,
    2,
    3
  ],
  "long array": [
    {
      "x": 1,
      "y": 2
    },
    {
      "x": 2,
      "y": 1
    },
    {
      "x": 1,
      "y": 1
    },
    {
      "x": 2,
      "y": 2
    }
  ]
}
```

into:

```json
{
  "bool": true,
  "short array": [1, 2, 3],
  "long array": [
    {"x": 1, "y": 2},
    {"x": 2, "y": 1},
    {"x": 1, "y": 1},
    {"x": 2, "y": 2}
  ]
}
```

## Installation

```
npm install json-stringify-pretty-compact-cli
```

## Usage

```shell
json-spc [--indent=<spaces>] [--max-length=<characters>] <file.json> [> newfile.json]
```

## Options

- indent: Defaults to 2. Works exactly like the third parameter of JSON.stringify.
- max-length: Defaults to 80. Lines will be tried to be kept at maximum this many characters long.

## License

[MIT](LICENSE).
