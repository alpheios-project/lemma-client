import BaseLemmaTranslationsAdapter from '../base_adapter.js'
import DefaultConfig from './config.json'

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
      console.log('get translations 5', unparsed)
      return unparsed[0].translations
    }
  }
  /**
   * Loads a json data from a URL
   * @param {string} url - the url
   * @returns {Promise} a Promise that resolves to the text contents of the loaded file
   */
  _loadJSON (url) {
    // TODO figure out best way to load this data
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
            console.log('loadJson lemma-client response', json)
            resolve(json)
          }
        ).catch((error) => {
          reject(error)
        })
    })
  }
}
export default AlpheiosLemmaTranslationsAdapter
