import {LanguageModelFactory} from 'alpheios-data-models'
import AlpheiosLemmaTranslationsAdapter from './alpheios/alpheios_adapter'

export default class LemmaTranslations {
  static async fetchTranslations (languageID) {
    // let languageCode = LanguageModelFactory.getLanguageCodeFromId(languageID)
    let lemmaAdapter = new AlpheiosLemmaTranslationsAdapter()
    let translationsList = await lemmaAdapter.getTranslations('lat', 'eng', 'mare')

    console.log('fetching translations', translationsList)
  }
}
