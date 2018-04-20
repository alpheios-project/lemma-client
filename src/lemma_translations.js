import { Translation } from 'alpheios-data-models'
import AlpheiosLemmaTranslationsAdapter from './alpheios/alpheios_adapter'

export default class LemmaTranslations {
  static async fetchTranslations (lemmaList, outLang) {
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
}
