/* eslint-env jest */
'use strict'
import AlpheiosLemmaTranslationsAdapter from '../../src/alpheios/alpheios_adapter.js'

describe('AlpheiosLemmaTranslationsAdapter object', () => {
  beforeAll(() => {
    // window.fetch = jest.fn().mockImplementation(() => Promise.resolve('{"ok": true, "Id": 123}'))
    jest.resetModules()
  })

  test('init adapter with default config', () => {
    let adapter = new AlpheiosLemmaTranslationsAdapter()
    expect(adapter.config).not.toBe(undefined)
  })

  test('init adapter with default config - has url attribute', () => {
    let adapter = new AlpheiosLemmaTranslationsAdapter()
    expect(adapter.getConfig('url')).toBeTruthy()
  })

  test('init adapter with default config - has availableLangSource attribute', () => {
    let adapter = new AlpheiosLemmaTranslationsAdapter()
    expect(adapter.getConfig('availableLangSource')).toBeTruthy()
  })

  test('config.json has availableLangSource and this is a array with length > 0', () => {
    let adapter = new AlpheiosLemmaTranslationsAdapter()
    expect(Array.isArray(adapter.getConfig('availableLangSource'))).toBeTruthy()
    expect(adapter.getConfig('availableLangSource').length).toBeGreaterThan(0)
  })

  test('init adapter with default confige', () => {
    let adapter = new AlpheiosLemmaTranslationsAdapter()
    expect(adapter.config).not.toBe(undefined)
  })

  test('use custom config in constructor of adapter (check on getting available langs)', (done) => {
    let customConfig = {
      'url': 'http://localhost:5000',
      'availableLangSource': ['lat']
    }

    let adapter = new AlpheiosLemmaTranslationsAdapter(customConfig)

    let avaLangIntem = adapter.getInLangForTesting()

    adapter.getAvailableResLang(avaLangIntem)
      .then(() => {
        expect(adapter.mapLangUri[avaLangIntem]).not.toBe(undefined)
        done()
      })
  })

  test('getAvailableResLang is getting a list of available langs', (done) => {
    let adapter = new AlpheiosLemmaTranslationsAdapter()
    let avaLangIntem = adapter.getInLangForTesting()

    adapter.getAvailableResLang(avaLangIntem)
      .then(() => {
        expect(adapter.mapLangUri[avaLangIntem]).not.toBe(undefined)
        done()
      })
  })

  test('getTranslationsList is getting a list of available alngs and then gets translations for lemma list for eng', (done) => {
    let mockLemma = {
      word: 'mare',
      language: 'lat',
      principalParts: []
    }
    let lemmaList = [mockLemma]

    let adapter = new AlpheiosLemmaTranslationsAdapter()
    let avaLangIntem = adapter.getInLangForTesting()

    adapter.getTranslationsList(lemmaList, avaLangIntem, 'eng')
      .then((result) => {
        // console.log('***************************result', result)
        expect(adapter.mapLangUri[avaLangIntem]).not.toBe(undefined)
        expect(Array.isArray(result)).toBeTruthy()
        expect(Array.isArray(result[0].translations)).toBeTruthy()
        done()
      })
  })

  test('getTranslationsList is getting not empty translations lat->eng for mare', (done) => {
    let mockLemma = {
      word: 'mare',
      language: 'lat',
      principalParts: []
    }
    let lemmaList = [mockLemma]

    let adapter = new AlpheiosLemmaTranslationsAdapter()
    let avaLangIntem = adapter.getInLangForTesting()

    adapter.mapLangUri['lat'] = []
    adapter.mapLangUri['lat']['eng'] = 'http://localhost:5000/lat/eng'

    adapter.getTranslationsList(lemmaList, avaLangIntem, 'eng')
      .then((result) => {
        expect(result[0].translations.length).toBeGreaterThan(0)
        done()
      })
  })

  test('getTranslationsList if lemma.word is empty - no request', (done) => {
    let mockLemma1 = {
      word: '',
      language: 'lat',
      principalParts: []
    }
    let lemmaList1 = [mockLemma1]
    let adapter = new AlpheiosLemmaTranslationsAdapter()
    let avaLangIntem = adapter.getInLangForTesting()

    adapter.mapLangUri['lat'] = []
    adapter.mapLangUri['lat']['eng'] = 'http://localhost:5000/lat/eng'

    adapter.getTranslationsList(lemmaList1, avaLangIntem, 'eng')
      .then((result) => {
        expect(result).toBe(null)
        done()
      })
  })
})
