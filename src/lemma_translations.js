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

  static async fetchTranslationsBackup (lemmaList, outLang) {
    // let languageCode = LanguageModelFactory.getLanguageCodeFromId(languageID)

    console.log('********starting fetching translations')
    let lemmaAdapter = new AlpheiosLemmaTranslationsAdapter()

    // let translationsList = await lemmaAdapter.getTranslations(lemma.languageCode, outLang, lemma.word)
    let translationsList = await lemmaAdapter.getTranslationsList(lemmaList, outLang)

    for (let lemma of lemmaList) {
      let curTranslations = translationsList.find(function (element) { return element.in === lemma.word })
      Translation.loadTranslations(lemma, curTranslations)
    }
    console.log('********finish fetching translations', translationsList)
  }

  static fetchTranslations (lemmaList, outLang) {
    return new Promise((resolve, reject) => {
      try {
        let lemmaAdapter = new AlpheiosLemmaTranslationsAdapter()
        lemmaAdapter.getTranslationsList(lemmaList, outLang)
          .then(function (translationsList) {
            for (let lemma of lemmaList) {
              let curTranslations = translationsList.find(function (element) { return element.in === lemma.word })
              Translation.loadTranslations(lemma, curTranslations)
            }
            console.log('********finish fetching translations', translationsList)
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
