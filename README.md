# json-spc

A CLI wrapper around the [json-stringify-pretty-compact][lib] library.

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
npm install json-spc
```

## Usage

```shell
cat file.json | json-spc [--indent=<spaces>] [--max-length=<characters>] [--start=<int> --end=<int>]
```

## Options

- `indent`: Defaults to 2. Works exactly like the third parameter of JSON.stringify.
- `maxlength`: Defaults to 120. Lines will be tried to be kept at maximum this many characters long.
- `start`: format portion of stdin starting at position, if `start` and `end` provided
- `end`: format portion of stdin ending at position, if `start` and `end` provided

## Usage with format-all-buffer.el
[format-all](https://github.com/lassik/emacs-format-all-the-code)
Emacs package allows providing custom formatters.  This fork of
[json-stringify-pretty-compact-cli][upstream] exists to support
`format-all`, namely `M-x format-all-buffer` and `M-x format-all-region` commands.

This is how to configure `json-spc` formatter:

```emacs-lisp
(define-format-all-formatter json-spc
    (:executable "json-spc")
    (:install "npm i -g json-spc")
    (:languages "JSON")
    (:features region)
    (:format
     (format-all--buffer-easy
      executable
      "--indent=3"
      "--maxlength=100"
      (when region
        (list "--start" (number-to-string (1- (car region)))
              "--end" (number-to-string (1- (cdr region))))))))
```


## License

[MIT](LICENSE)


[upstream]: https://github.com/avantgardnerio/json-stringify-pretty-compact-cli
[lib]: https://www.npmjs.com/package/json-stringify-pretty-compact
