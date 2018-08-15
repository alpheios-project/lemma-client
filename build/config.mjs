const webpack = {
  common: {
    entry: './driver.js',
    externals: {
      'alpheios-data-models': 'alpheios-data-models'
    }
  },

  production: {
    output: {filename: 'alpheios-lemma-client.min.js'}
  },
  development: {
    output: {filename: 'alpheios-lemma-client.js'}
  }
}

export { webpack }
