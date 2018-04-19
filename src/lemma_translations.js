// import {LanguageModelFactory} from 'alpheios-data-models'
import AlpheiosLemmaTranslationsAdapter from './alpheios/alpheios_adapter'

export default class LemmaTranslations {
  static async fetchTranslations (inLang, outLang, text) {
    // let languageCode = LanguageModelFactory.getLanguageCodeFromId(languageID)
    let lemmaAdapter = new AlpheiosLemmaTranslationsAdapter()
    let translationsList = await lemmaAdapter.getTranslations(inLang, outLang, text)

    console.log('fetching translations', translationsList)
  }
}
