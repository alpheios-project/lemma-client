import BaseLemmaTranslationsAdapter from '../base_adapter.js'
import DefaultConfig from './config.json'
import Promise from 'promise-polyfill'
import 'whatwg-fetch'

class AlpheiosLemmaTranslationsAdapter extends BaseLemmaTranslationsAdapter {
  /**
   * A Client Adapter for the Alpheios V1 Lemma service
   * @constructor
   * @param {Object} config - JSON configuration object override
   */
  constructor (config = null) {
    super()

    if (config == null) {
      try {
        let fullconfig = JSON.parse(DefaultConfig)
        this.config = fullconfig
      } catch (e) {
        this.config = DefaultConfig
      }
    } else {
      this.config = config
    }
    this.mapLangUri = {}
  }
  /**
   * Loads a available res languages for available lang array from the config
   * @returns
   */
  async getAvailableResLang (avaLangIntem) {
    let adapter = this

    let urlAvaLangsRes = adapter.config.url + '/' + avaLangIntem + '/'
    let unparsed = await adapter._loadJSON(urlAvaLangsRes)

    let mapLangUri = {}
    unparsed.forEach(function (langItem) {
      mapLangUri[langItem.lang] = langItem.uri
    })

    adapter.mapLangUri[avaLangIntem] = mapLangUri
  }
  /**
   * Loads translations for input from inLang to outLang
   * @param {string} inLang - source lang of the input
   * @param {string} outLang - result lang for the input
   * @param {string} input - text for translation
   * @returns {Promise} a Promise that resolves to the text contents of the loaded file
   */
  async getTranslations (inLang, outLang, input) {
    let adapter = this

    if (adapter.mapLangUri[inLang] === undefined) {
      await adapter.getAvailableResLang(inLang)
    }

    if (adapter.mapLangUri[inLang] !== undefined && adapter.mapLangUri[inLang][outLang] !== undefined) {
      let urlTranslations = adapter.mapLangUri[inLang][outLang] + '?input=' + input

      let unparsed = await adapter._loadJSON(urlTranslations)
      return unparsed
    }
  }

  async getTranslationsList (lemmaList, inLang, outLang) {
    let adapter = this
    let input = ''

    for (let lemma of lemmaList) {
      input += lemma.word + ','
    }

    if (adapter.mapLangUri[inLang] === undefined) {
      await adapter.getAvailableResLang(inLang)
    }

    if (input.length > 0 && adapter.mapLangUri[inLang] !== undefined && adapter.mapLangUri[inLang][outLang] !== undefined) {
      input = input.substr(0, input.length - 1)

      let urlTranslations = adapter.mapLangUri[inLang][outLang] + '?input=' + input
      let unparsed = await adapter._loadJSON(urlTranslations)
      return unparsed
    }
    return null
  }
  /**
   * Loads a json data from a URL
   * @param {string} url - the url
   * @returns {Promise} a Promise that resolves to the text contents of the loaded file
   */
  _loadJSON (url) {
    // TODO figure out best way to load this data
    console.time('loadJSONTimeLemma')
    return new Promise((resolve, reject) => {
      window.fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(function (response) {
          return response.json()
        })
        .then(
          function (json) {
          // let text = response.json()
            // console.log('loadJson lemma-client response', json)
            console.timeEnd('loadJSONTimeLemma')
            resolve(json)
          }
        ).catch((error) => {
          reject(error)
        })
    })
  }
}
export default AlpheiosLemmaTranslationsAdapter
