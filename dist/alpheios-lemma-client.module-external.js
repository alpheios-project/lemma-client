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

function Promise(fn) {
  if (!(this instanceof Promise))
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
  Promise._immediateFn(function() {
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
      if (newValue instanceof Promise) {
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
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
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

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = function(callback) {
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

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
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

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

class AlpheiosLemmaTranslationsAdapter extends BaseLemmaTranslationsAdapter {
  /**
   * A Client Adapter for the Alpheios V1 Lemma service
   * @constructor
   * @param {Object} config - JSON configuration object override
   */
  constructor (config = null) {
    super();

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
   * Loads translations for input from inLang to outLang
   * @param {string} inLang - source lang of the input
   * @param {string} outLang - result lang for the input
   * @param {string} input - text for translation
   * @returns {Promise} a Promise that resolves to the text contents of the loaded file
   */
  async getTranslations (inLang, outLang, input) {
    let adapter = this;

    if (adapter.mapLangUri[inLang] === undefined) {
      await adapter.getAvailableResLang(inLang);
    }

    if (adapter.mapLangUri[inLang] !== undefined && adapter.mapLangUri[inLang][outLang] !== undefined) {
      let urlTranslations = adapter.mapLangUri[inLang][outLang] + '?input=' + input;

      let unparsed = await adapter._loadJSON(urlTranslations);
      console.log('get translations 5', unparsed);
      return unparsed[0].translations
    }
  }
  /**
   * Loads a json data from a URL
   * @param {string} url - the url
   * @returns {Promise} a Promise that resolves to the text contents of the loaded file
   */
  _loadJSON (url) {
    // TODO figure out best way to load this data
    console.time('loadJSONTime');
    return new Promise((resolve, reject) => {
      window.fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(function (response) {
          return response.json()
        })
        .then(
          function (json) {
          // let text = response.json()
            console.log('loadJson lemma-client response', json);
            console.timeEnd('loadJSONTime');
            resolve(json);
          }
        ).catch((error) => {
          reject(error);
        });
    })
  }
}

// import {LanguageModelFactory} from 'alpheios-data-models'
class LemmaTranslations {
  static async fetchTranslations (languageID) {
    // let languageCode = LanguageModelFactory.getLanguageCodeFromId(languageID)
    let lemmaAdapter = new AlpheiosLemmaTranslationsAdapter();
    let translationsList = await lemmaAdapter.getTranslations('lat', 'eng', 'mare');

    console.log('fetching translations', translationsList);
  }
}

export { LemmaTranslations, AlpheiosLemmaTranslationsAdapter };
