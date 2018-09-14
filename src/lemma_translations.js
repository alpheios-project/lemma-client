import { Translation } from 'alpheios-data-models'
import AlpheiosLemmaTranslationsAdapter from './alpheios/alpheios_adapter'
import Promise from 'promise-polyfill'

export default class LemmaTranslations {
  static get defaultLang () {
    return 'eng'
  }

  static defineOutLang (browserLang) {
    let langMap = {
      'en-US': 'eng',
      'it': 'ita',
      'pt': 'por',
      'ca': 'cat',
      'fr': 'fre',
      'de': 'ger',
      'es': 'spa'
    }
    return langMap[browserLang] || this.defaultLang
  }

  /**
   * Send request for getting translations for lemmas list as a Promise
   * @param {Lemma[]} lemma array - An array of lemmas we need translations for.
   * @param {String} inLang - a lang for current lemmas.
   * @param {String} outLang - a lang for translation.
   * @return {Promise} A Promise for the translation request.
   */

  static fetchTranslations (lemmaList, inLang, browserLang) {
    let outLang = this.defineOutLang(browserLang)
    return new Promise((resolve, reject) => {
      try {
        let lemmaAdapter = new AlpheiosLemmaTranslationsAdapter()
        lemmaAdapter.getTranslationsList(lemmaList, inLang, outLang)
          .then(function (translationsList) {
            for (let lemma of lemmaList) {
              Translation.loadTranslations(lemma, outLang, translationsList, lemmaAdapter.provider)
            }
            resolve(translationsList)
          })
          .catch(error => {
            reject(error)
          })
      } catch (error) {
        reject(error)
      }
    })
  }
}
