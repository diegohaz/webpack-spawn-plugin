# webpack-spawn-plugin

[![Generated with nod](https://img.shields.io/badge/generator-nod-2196F3.svg?style=flat-square)](https://github.com/diegohaz/nod)
[![NPM version](https://img.shields.io/npm/v/webpack-spawn-plugin.svg?style=flat-square)](https://npmjs.org/package/webpack-spawn-plugin)
[![Build Status](https://img.shields.io/travis/diegohaz/webpack-spawn-plugin/master.svg?style=flat-square)](https://travis-ci.org/diegohaz/webpack-spawn-plugin) [![Coverage Status](https://img.shields.io/codecov/c/github/diegohaz/webpack-spawn-plugin/master.svg?style=flat-square)](https://codecov.io/gh/diegohaz/webpack-spawn-plugin/branch/master)

A webpack plugin that runs `child_process.spawn` within compilation.

## Install

    $ npm install --save-dev webpack-spawn-plugin

## Usage

```js
import SpawnPlugin from 'webpack-spawn-plugin'

const config = {
  ...
  plugins: [
    new SpawnPlugin('node', ['.'], options)
  ]
}
```

### Options

> `when` (default: "done")

The [Webpack compiler hook](https://webpack.js.org/api/compiler-hooks/#hooks)
during which the process will be spawned.

> `stdio` (default: "inherit")

The output stream to which stdout and stderr will be sent.

> `persistent` (default: false)

Indicates whether the spawned process should be replaced
every time the hook is called.

**Note**: You can pass more options to process.spawn in the `options` objects.

## License

MIT © [Diego Haz](https://github.com/diegohaz)
