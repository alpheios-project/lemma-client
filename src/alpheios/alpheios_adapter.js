import DefaultConfig from './atsconfig.json'
import Promise from 'promise-polyfill'
import 'whatwg-fetch'

class AlpheiosLemmaTranslationsAdapter {
  /**
   * A Client Adapter for the Alpheios V1 Lemma service
   * @constructor
   * @param {Object} config - JSON configuration object override
   */
  constructor (config = null) {
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
   * Loads translationsList for an array of Lemmas from inLang to outLang
   * @param {Lemma []} lemmaList - An array of lemmas for translation
   * @param {string} inLang - source lang of the input
   * @param {string} outLang - result lang for the input
   * @returns {Promise} a Promise that resolves to the text contents of the loaded file
   */
  async getTranslationsList (lemmaList, inLang, outLang) {
    let adapter = this
    let input = ''

    for (let lemma of lemmaList) {
      input += lemma.word + ','
    }
    if (input.length > 0) {
      input = input.substr(0, input.length - 1)
    }

    if (adapter.mapLangUri[inLang] === undefined) {
      await adapter.getAvailableResLang(inLang)
    }

    if (input.length > 0 && adapter.mapLangUri[inLang] !== undefined && adapter.mapLangUri[inLang][outLang] !== undefined) {
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
    return new Promise((resolve, reject) => {
      window.fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(function (res) {
          return res.json()
        })
        .then(
          function (json) {
            resolve(json)
          }
        ).catch((error) => {
          reject(error)
        })
    })
  }
  /**
   * Get a configuration setting for this lemma client instance
   * @param {string} property
   * @returns {string} the value of the property
   */
  getConfig (property) {
    return this.config[property]
  }

  /**
   * Get fisrt available lang from config for unit testing
   * @returns {string} the value of the property
   */
  getInLangForTesting (property) {
    return this.config.availableLangSource[0]
  }
}

export default AlpheiosLemmaTranslationsAdapter
