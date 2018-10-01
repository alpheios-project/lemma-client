/* eslint-env jest */
'use strict'
import LemmaTranslations from '../src/lemma_translations.js'
import { Lemma, Translation } from 'alpheios-data-models'

describe('Lexicons', () => {
  beforeAll(() => {
    jest.resetModules()
  })

  test('defineOutLang if no browserLang => should be eng', () => {
    let outLang = LemmaTranslations.defineOutLang()
    expect(outLang).toBe('eng')
  })

  test('defineOutLang if en-US browser => should be eng', () => {
    let outLang = LemmaTranslations.defineOutLang('en-US')
    expect(outLang).toBe('eng')
  })

  test('fetchTranslations - for lat => eng - lemma has translation property', (done) => {
    let mockLemma = new Lemma('mare', 'lat')

    LemmaTranslations.fetchTranslations([mockLemma], 'lat', 'eng')
      .then((result) => {
        expect(mockLemma.translation).not.toBe(undefined)
        expect(mockLemma.translation instanceof Translation).not.toBe(undefined)
        done()
      })
  })
})
