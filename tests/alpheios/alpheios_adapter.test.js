/* eslint-env jest */
'use strict'
import AlpheiosLemmaTranslationsAdapter from '../../src/alpheios/alpheios_adapter.js'
// let lsj = 'https://github.com/alpheios-project/lsj'

describe('AlpheiosLemmaTranslationsAdapter object', () => {
  beforeAll(() => {
    jest.resetModules()
    window.fetch = require('jest-fetch-mock')
  })

  test('config.json has url attribute', () => {
    let adapter = new AlpheiosLemmaTranslationsAdapter()
    expect(adapter.getConfig('url')).toBeTruthy()
  })

  test('config.json has availableLangSource attribute', () => {
    let adapter = new AlpheiosLemmaTranslationsAdapter()
    expect(adapter.getConfig('availableLangSource')).toBeTruthy()
  })

  test('config.json has availableLangSource and this is a array with length > 0', () => {
    let adapter = new AlpheiosLemmaTranslationsAdapter()
    expect(Array.isArray(adapter.getConfig('availableLangSource'))).toBeTruthy()
    expect(adapter.getConfig('availableLangSource').length).toBeGreaterThan(0)
  })

  test('getAvailableResLang is getting a list of available langs', async () => {
    expect.assertions(1)

    let adapter = new AlpheiosLemmaTranslationsAdapter()
    console.log('**********************************************')
    let avaLangIntem = adapter.getInLangForTesting()
    console.log(avaLangIntem)
    // window.fetch.mockResponse(JSON.stringify({ access_token: '12345' }))

    let response = await adapter.getAvailableResLang(avaLangIntem)
    console.log('**********************************************')
    console.log(adapter.mapLangUri[avaLangIntem], response)
    console.log('**********************************************')
    expect(adapter.mapLangUri[avaLangIntem]).not.toBe(undefined)
  })
})
