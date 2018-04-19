/**
 * Base Adapter Class for a Lemma Translation Service
 */
class BaseLemmaTranslationsAdapter {
  /**
   * Get the available lexicons provided by this adapter class for the
   * requested language
   * @param {string} language languageCode
   * @return {Array} a Map of lexicon objects. Keys are lexicon uris, values are the lexicon description.
   */
  static getTranslations (language) {
    return []
  }
}

export default BaseLemmaTranslationsAdapter
