import { Translation } from 'alpheios-data-models'
import AlpheiosLemmaTranslationsAdapter from './alpheios/alpheios_adapter'
import Promise from 'promise-polyfill'

export default class LemmaTranslations {
  /**
   * Send requests to either short of full definitions depending on the `lookupFunction` value.
   * @param {Lemma} lemma - A lemma we need definitions for.
   * @param {Object} requestOptions - With what options run a request.
   * @param {String} lookupFunction - A name of an adapter lookup function to use for a request.
   * @return {Promise[]} Array of Promises, one for each request. They will be either fulfilled with
   * a Definition object or resolved with an error if request cannot be made/failed/timeout expired.
   */

  static get defaultLang () {
    return 'eng'
  }

  static defineOutLang (browserLang) {
    let langMap = {
      'en-US': 'eng'
    }

    return langMap[browserLang] || this.defaultLang
  }

  static fetchTranslations (lemmaList, inLang, browserLang) {
    let outLang = this.defineOutLang(browserLang)

    // console.log('**************fetchTranslations', inLang, outLang)
    return new Promise((resolve, reject) => {
      try {
        let lemmaAdapter = new AlpheiosLemmaTranslationsAdapter()
        lemmaAdapter.getTranslationsList(lemmaList, inLang, outLang)
          .then(function (translationsList) {
            // console.log('********finish fetching translations1', translationsList)
            for (let lemma of lemmaList) {
              let curTranslations = translationsList.find(function (element) { return element.in === lemma.word })
              Translation.loadTranslations(lemma, curTranslations)
            }
            // console.log('********finish fetching translations2', translationsList)
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
