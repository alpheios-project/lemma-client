const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const string = require('rollup-plugin-string')

const defaultPlugins = [
  string({
    include: ['src/**/*.json']
  }),
  commonjs({
    ignoreGlobal: true, // Default: false
    sourceMap: true // Default: true
  }),
  resolve({
    // use "module" field for ES6 module if possible
    module: true, // Default: true
    jsnext: true, // Default: false
    main: true, // Default: true
    browser: true // Default: false
  })
]

// Standalone bundle
rollup.rollup({
  entry: 'src/driver.js',
  external: ['alpheios-data-models'],
  moduleName: 'ApheiosLemmaClient',
  plugins: defaultPlugins,
  onwarn: function (warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return
    }
    console.error(warning.message)
  }
}).then(bundle => {
  bundle.write({
    format: 'es',
    dest: 'dist/alpheios-lemma-client.standalone.js',
    sourceMap: true
  })
}).catch(reason => {
  'use strict'
  console.error(reason)
})

// Module bundle
rollup.rollup({
  entry: 'src/driver.js',
  external: ['alpheios-data-models'],
  moduleName: 'ApheiosLemmaClient',
  plugins: defaultPlugins
}).then(bundle => {
  bundle.write({
    format: 'es',
    dest: 'dist/alpheios-lemma-client.module-external.js',
    sourceMap: false
  })
}).catch(reason => {
  'use strict'
  console.error(reason)
})
