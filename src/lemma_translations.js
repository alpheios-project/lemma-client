import { Translation } from 'alpheios-data-models'
import AlpheiosLemmaTranslationsAdapter from './alpheios/alpheios_adapter'

export default class LemmaTranslations {
  static async fetchTranslations (lemma, outLang) {
    // let languageCode = LanguageModelFactory.getLanguageCodeFromId(languageID)

    console.log('********starting fetching translations')
    let lemmaAdapter = new AlpheiosLemmaTranslationsAdapter()
    let translationsList = await lemmaAdapter.getTranslations(lemma.languageCode, outLang, lemma.word)

    Translation.loadTranslations(translationsList)
  }
}
