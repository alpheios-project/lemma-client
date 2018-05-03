import { Translation } from 'alpheios-data-models';

var DefaultConfig = "{\r\n\t\"url\": \"http://localhost:5000\",\r\n\t\"availableLangSource\": [\"lat\"]\r\n}";

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

function Promise$1(fn) {
  if (!(this instanceof Promise$1))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise$1._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise$1) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise$1._immediateFn(function() {
      if (!self._handled) {
        Promise$1._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise$1.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise$1.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise$1.prototype['finally'] = function(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
};

Promise$1.all = function(arr) {
  return new Promise$1(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise$1.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise$1) {
    return value;
  }

  return new Promise$1(function(resolve) {
    resolve(value);
  });
};

Promise$1.reject = function(value) {
  return new Promise$1(function(resolve, reject) {
    reject(value);
  });
};

Promise$1.race = function(values) {
  return new Promise$1(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise$1._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise$1._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

// import 'whatwg-fetch'

class AlpheiosLemmaTranslationsAdapter {
  /**
   * A Client Adapter for the Alpheios V1 Lemma service
   * @constructor
   * @param {Object} config - JSON configuration object override
   */
  constructor (config = null) {
    if (config == null) {
      try {
        let fullconfig = JSON.parse(DefaultConfig);
        this.config = fullconfig;
      } catch (e) {
        this.config = DefaultConfig;
      }
    } else {
      this.config = config;
    }
    this.mapLangUri = {};
  }
  /**
   * Loads a available res languages for available lang array from the config
   * @returns
   */
  async getAvailableResLang (avaLangIntem) {
    let adapter = this;

    let urlAvaLangsRes = adapter.config.url + '/' + avaLangIntem + '/';

    let unparsed = await adapter._loadJSON(urlAvaLangsRes);

    let mapLangUri = {};
    unparsed.forEach(function (langItem) {
      mapLangUri[langItem.lang] = langItem.uri;
    });

    adapter.mapLangUri[avaLangIntem] = mapLangUri;
  }
  /**
   * Loads translationsList for an array of Lemmas from inLang to outLang
   * @param {Lemma []} lemmaList - An array of lemmas for translation
   * @param {string} inLang - source lang of the input
   * @param {string} outLang - result lang for the input
   * @returns {Promise} a Promise that resolves to the text contents of the loaded file
   */
  async getTranslationsList (lemmaList, inLang, outLang) {
    let adapter = this;
    let input = '';

    for (let lemma of lemmaList) {
      input += lemma.word + ',';
    }
    if (input.length > 0) {
      input = input.substr(0, input.length - 1);
    }

    if (adapter.mapLangUri[inLang] === undefined) {
      await adapter.getAvailableResLang(inLang);
    }

    if (input.length > 0 && adapter.mapLangUri[inLang] !== undefined && adapter.mapLangUri[inLang][outLang] !== undefined) {
      let urlTranslations = adapter.mapLangUri[inLang][outLang] + '?input=' + input;
      let unparsed = await adapter._loadJSON(urlTranslations);
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
    return new Promise$1((resolve, reject) => {
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
            resolve(json);
          }
        ).catch((error) => {
          reject(error);
        });
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

// import Promise from 'promise-polyfill'

class LemmaTranslations {
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
    };
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
    let outLang = this.defineOutLang(browserLang);
    console.log('****************fetchTranslations', Translation);

    return new Promise((resolve, reject) => {
      try {
        let lemmaAdapter = new AlpheiosLemmaTranslationsAdapter();
        lemmaAdapter.getTranslationsList(lemmaList, inLang, outLang)
          .then(function (translationsList) {
            console.log('*****************************in Promise getTranslationsList', Translation);
            for (let lemma of lemmaList) {
              Translation.loadTranslations(lemma, outLang, translationsList);
            }
            resolve(translationsList);
          })
          .catch(error => {
            reject(error);
          });
      } catch (error) {
        reject(error);
      }
    })
  }
}

export { LemmaTranslations, AlpheiosLemmaTranslationsAdapter };
