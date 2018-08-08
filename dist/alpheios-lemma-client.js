(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./driver.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/alpheios-data-models/dist/alpheios-data-models.min.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/alpheios-data-models/dist/alpheios-data-models.min.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var a, r; }}(window,function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){var a=r(3),n=r(2);e.exports=function(e,t,r){var u=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||a)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var o=0;o<16;++o)t[u+o]=i[o];return t||n(i)}},function(e,t,r){"use strict";r.r(t);var a={};r.r(a),r.d(a,"LANG_UNIT_WORD",function(){return n}),r.d(a,"LANG_UNIT_CHAR",function(){return u}),r.d(a,"LANG_DIR_LTR",function(){return i}),r.d(a,"LANG_DIR_RTL",function(){return o}),r.d(a,"LANG_UNDEFINED",function(){return s}),r.d(a,"LANG_LATIN",function(){return l}),r.d(a,"LANG_GREEK",function(){return c}),r.d(a,"LANG_ARABIC",function(){return f}),r.d(a,"LANG_PERSIAN",function(){return d}),r.d(a,"STR_LANG_CODE_UNDEFINED",function(){return g}),r.d(a,"STR_LANG_CODE_LAT",function(){return p}),r.d(a,"STR_LANG_CODE_LA",function(){return h}),r.d(a,"STR_LANG_CODE_GRC",function(){return m}),r.d(a,"STR_LANG_CODE_ARA",function(){return _}),r.d(a,"STR_LANG_CODE_AR",function(){return E}),r.d(a,"STR_LANG_CODE_FAS",function(){return I}),r.d(a,"STR_LANG_CODE_PER",function(){return y}),r.d(a,"STR_LANG_CODE_FA_IR",function(){return A}),r.d(a,"STR_LANG_CODE_FA",function(){return v}),r.d(a,"POFS_ADJECTIVE",function(){return F}),r.d(a,"POFS_ADVERB",function(){return S}),r.d(a,"POFS_ADVERBIAL",function(){return w}),r.d(a,"POFS_ARTICLE",function(){return C}),r.d(a,"POFS_CONJUNCTION",function(){return D}),r.d(a,"POFS_EXCLAMATION",function(){return b}),r.d(a,"POFS_INTERJECTION",function(){return L}),r.d(a,"POFS_NOUN",function(){return T}),r.d(a,"POFS_NOUN_PROPER",function(){return O}),r.d(a,"POFS_NUMERAL",function(){return V}),r.d(a,"POFS_PARTICLE",function(){return N}),r.d(a,"POFS_PREFIX",function(){return R}),r.d(a,"POFS_PREPOSITION",function(){return P}),r.d(a,"POFS_PRONOUN",function(){return M}),r.d(a,"POFS_SUFFIX",function(){return x}),r.d(a,"POFS_SUPINE",function(){return U}),r.d(a,"POFS_VERB",function(){return j}),r.d(a,"POFS_VERB_PARTICIPLE",function(){return G}),r.d(a,"GEND_MASCULINE",function(){return B}),r.d(a,"GEND_FEMININE",function(){return k}),r.d(a,"GEND_NEUTER",function(){return W}),r.d(a,"GEND_COMMON",function(){return H}),r.d(a,"GEND_ANIMATE",function(){return q}),r.d(a,"GEND_INANIMATE",function(){return K}),r.d(a,"GEND_PERSONAL_MASCULINE",function(){return $}),r.d(a,"GEND_ANIMATE_MASCULINE",function(){return z}),r.d(a,"GEND_INANIMATE_MASCULINE",function(){return J}),r.d(a,"COMP_POSITIVE",function(){return X}),r.d(a,"COMP_COMPARITIVE",function(){return Q}),r.d(a,"COMP_SUPERLATIVE",function(){return Y}),r.d(a,"CASE_ABESSIVE",function(){return Z}),r.d(a,"CASE_ABLATIVE",function(){return ee}),r.d(a,"CASE_ABSOLUTIVE",function(){return te}),r.d(a,"CASE_ACCUSATIVE",function(){return re}),r.d(a,"CASE_ADDIRECTIVE",function(){return ae}),r.d(a,"CASE_ADELATIVE",function(){return ne}),r.d(a,"CASE_ADESSIVE",function(){return ue}),r.d(a,"CASE_ADVERBIAL",function(){return ie}),r.d(a,"CASE_ALLATIVE",function(){return oe}),r.d(a,"CASE_ANTESSIVE",function(){return se}),r.d(a,"CASE_APUDESSIVE",function(){return le}),r.d(a,"CASE_AVERSIVE",function(){return ce}),r.d(a,"CASE_BENEFACTIVE",function(){return fe}),r.d(a,"CASE_CARITIVE",function(){return de}),r.d(a,"CASE_CAUSAL",function(){return ge}),r.d(a,"CASE_CAUSAL_FINAL",function(){return pe}),r.d(a,"CASE_COMITATIVE",function(){return he}),r.d(a,"CASE_DATIVE",function(){return me}),r.d(a,"CASE_DELATIVE",function(){return _e}),r.d(a,"CASE_DIRECT",function(){return Ee}),r.d(a,"CASE_DISTRIBUTIVE",function(){return Ie}),r.d(a,"CASE_DISTRIBUTIVE_TEMPORAL",function(){return ye}),r.d(a,"CASE_ELATIVE",function(){return Ae}),r.d(a,"CASE_ERGATIVE",function(){return ve}),r.d(a,"CASE_ESSIVE",function(){return Fe}),r.d(a,"CASE_ESSIVE_FORMAL",function(){return Se}),r.d(a,"CASE_ESSIVE_MODAL",function(){return we}),r.d(a,"CASE_EQUATIVE",function(){return Ce}),r.d(a,"CASE_EVITATIVE",function(){return De}),r.d(a,"CASE_EXESSIVE",function(){return be}),r.d(a,"CASE_FINAL",function(){return Le}),r.d(a,"CASE_FORMAL",function(){return Te}),r.d(a,"CASE_GENITIVE",function(){return Oe}),r.d(a,"CASE_ILLATIVE",function(){return Ve}),r.d(a,"CASE_INELATIVE",function(){return Ne}),r.d(a,"CASE_INESSIVE",function(){return Re}),r.d(a,"CASE_INSTRUCTIVE",function(){return Pe}),r.d(a,"CASE_INSTRUMENTAL",function(){return Me}),r.d(a,"CASE_INSTRUMENTAL_COMITATIVE",function(){return xe}),r.d(a,"CASE_INTRANSITIVE",function(){return Ue}),r.d(a,"CASE_LATIVE",function(){return je}),r.d(a,"CASE_LOCATIVE",function(){return Ge}),r.d(a,"CASE_MODAL",function(){return Be}),r.d(a,"CASE_MULTIPLICATIVE",function(){return ke}),r.d(a,"CASE_NOMINATIVE",function(){return We}),r.d(a,"CASE_PARTITIVE",function(){return He}),r.d(a,"CASE_PEGATIVE",function(){return qe}),r.d(a,"CASE_PERLATIVE",function(){return Ke}),r.d(a,"CASE_POSSESSIVE",function(){return $e}),r.d(a,"CASE_POSTELATIVE",function(){return ze}),r.d(a,"CASE_POSTDIRECTIVE",function(){return Je}),r.d(a,"CASE_POSTESSIVE",function(){return Xe}),r.d(a,"CASE_POSTPOSITIONAL",function(){return Qe}),r.d(a,"CASE_PREPOSITIONAL",function(){return Ye}),r.d(a,"CASE_PRIVATIVE",function(){return Ze}),r.d(a,"CASE_PROLATIVE",function(){return et}),r.d(a,"CASE_PROSECUTIVE",function(){return tt}),r.d(a,"CASE_PROXIMATIVE",function(){return rt}),r.d(a,"CASE_SEPARATIVE",function(){return at}),r.d(a,"CASE_SOCIATIVE",function(){return nt}),r.d(a,"CASE_SUBDIRECTIVE",function(){return ut}),r.d(a,"CASE_SUBESSIVE",function(){return it}),r.d(a,"CASE_SUBELATIVE",function(){return ot}),r.d(a,"CASE_SUBLATIVE",function(){return st}),r.d(a,"CASE_SUPERDIRECTIVE",function(){return lt}),r.d(a,"CASE_SUPERESSIVE",function(){return ct}),r.d(a,"CASE_SUPERLATIVE",function(){return ft}),r.d(a,"CASE_SUPPRESSIVE",function(){return dt}),r.d(a,"CASE_TEMPORAL",function(){return gt}),r.d(a,"CASE_TERMINATIVE",function(){return pt}),r.d(a,"CASE_TRANSLATIVE",function(){return ht}),r.d(a,"CASE_VIALIS",function(){return mt}),r.d(a,"CASE_VOCATIVE",function(){return _t}),r.d(a,"MOOD_ADMIRATIVE",function(){return Et}),r.d(a,"MOOD_COHORTATIVE",function(){return It}),r.d(a,"MOOD_CONDITIONAL",function(){return yt}),r.d(a,"MOOD_DECLARATIVE",function(){return At}),r.d(a,"MOOD_DUBITATIVE",function(){return vt}),r.d(a,"MOOD_ENERGETIC",function(){return Ft}),r.d(a,"MOOD_EVENTIVE",function(){return St}),r.d(a,"MOOD_GENERIC",function(){return wt}),r.d(a,"MOOD_GERUNDIVE",function(){return Ct}),r.d(a,"MOOD_HYPOTHETICAL",function(){return Dt}),r.d(a,"MOOD_IMPERATIVE",function(){return bt}),r.d(a,"MOOD_INDICATIVE",function(){return Lt}),r.d(a,"MOOD_INFERENTIAL",function(){return Tt}),r.d(a,"MOOD_INFINITIVE",function(){return Ot}),r.d(a,"MOOD_INTERROGATIVE",function(){return Vt}),r.d(a,"MOOD_JUSSIVE",function(){return Nt}),r.d(a,"MOOD_NEGATIVE",function(){return Rt}),r.d(a,"MOOD_OPTATIVE",function(){return Pt}),r.d(a,"MOOD_PARTICIPLE",function(){return Mt}),r.d(a,"MOOD_PRESUMPTIVE",function(){return xt}),r.d(a,"MOOD_RENARRATIVE",function(){return Ut}),r.d(a,"MOOD_SUBJUNCTIVE",function(){return jt}),r.d(a,"MOOD_SUPINE",function(){return Gt}),r.d(a,"NUM_SINGULAR",function(){return Bt}),r.d(a,"NUM_PLURAL",function(){return kt}),r.d(a,"NUM_DUAL",function(){return Wt}),r.d(a,"NUM_TRIAL",function(){return Ht}),r.d(a,"NUM_PAUCAL",function(){return qt}),r.d(a,"NUM_SINGULATIVE",function(){return Kt}),r.d(a,"NUM_COLLECTIVE",function(){return $t}),r.d(a,"NUM_DISTRIBUTIVE_PLURAL",function(){return zt}),r.d(a,"NRL_CARDINAL",function(){return Jt}),r.d(a,"NRL_ORDINAL",function(){return Xt}),r.d(a,"NRL_DISTRIBUTIVE",function(){return Qt}),r.d(a,"NURL_NUMERAL_ADVERB",function(){return Yt}),r.d(a,"ORD_1ST",function(){return Zt}),r.d(a,"ORD_2ND",function(){return er}),r.d(a,"ORD_3RD",function(){return tr}),r.d(a,"ORD_4TH",function(){return rr}),r.d(a,"ORD_5TH",function(){return ar}),r.d(a,"ORD_6TH",function(){return nr}),r.d(a,"ORD_7TH",function(){return ur}),r.d(a,"ORD_8TH",function(){return ir}),r.d(a,"ORD_9TH",function(){return or}),r.d(a,"TENSE_AORIST",function(){return sr}),r.d(a,"TENSE_FUTURE",function(){return lr}),r.d(a,"TENSE_FUTURE_PERFECT",function(){return cr}),r.d(a,"TENSE_IMPERFECT",function(){return fr}),r.d(a,"TENSE_PAST_ABSOLUTE",function(){return dr}),r.d(a,"TENSE_PERFECT",function(){return gr}),r.d(a,"TENSE_PLUPERFECT",function(){return pr}),r.d(a,"TENSE_PRESENT",function(){return hr}),r.d(a,"VKIND_TO_BE",function(){return mr}),r.d(a,"VKIND_COMPOUNDS_OF_TO_BE",function(){return _r}),r.d(a,"VKIND_TAKING_ABLATIVE",function(){return Er}),r.d(a,"VKIND_TAKING_DATIVE",function(){return Ir}),r.d(a,"VKIND_TAKING_GENITIVE",function(){return yr}),r.d(a,"VKIND_TRANSITIVE",function(){return Ar}),r.d(a,"VKIND_INTRANSITIVE",function(){return vr}),r.d(a,"VKIND_IMPERSONAL",function(){return Fr}),r.d(a,"VKIND_DEPONENT",function(){return Sr}),r.d(a,"VKIND_SEMIDEPONENT",function(){return wr}),r.d(a,"VKIND_PERFECT_DEFINITE",function(){return Cr}),r.d(a,"VOICE_ACTIVE",function(){return Dr}),r.d(a,"VOICE_PASSIVE",function(){return br}),r.d(a,"VOICE_MEDIOPASSIVE",function(){return Lr}),r.d(a,"VOICE_IMPERSONAL_PASSIVE",function(){return Tr}),r.d(a,"VOICE_MIDDLE",function(){return Or}),r.d(a,"VOICE_ANTIPASSIVE",function(){return Vr}),r.d(a,"VOICE_REFLEXIVE",function(){return Nr}),r.d(a,"VOICE_RECIPROCAL",function(){return Rr}),r.d(a,"VOICE_CAUSATIVE",function(){return Pr}),r.d(a,"VOICE_ADJUTATIVE",function(){return Mr}),r.d(a,"VOICE_APPLICATIVE",function(){return xr}),r.d(a,"VOICE_CIRCUMSTANTIAL",function(){return Ur}),r.d(a,"VOICE_DEPONENT",function(){return jr}),r.d(a,"TYPE_IRREGULAR",function(){return Gr}),r.d(a,"TYPE_REGULAR",function(){return Br}),r.d(a,"CLASS_PERSONAL",function(){return kr}),r.d(a,"CLASS_REFLEXIVE",function(){return Wr}),r.d(a,"CLASS_POSSESSIVE",function(){return Hr}),r.d(a,"CLASS_DEMONSTRATIVE",function(){return qr}),r.d(a,"CLASS_RELATIVE",function(){return Kr}),r.d(a,"CLASS_INTERROGATIVE",function(){return $r}),r.d(a,"CLASS_GENERAL_RELATIVE",function(){return zr}),r.d(a,"CLASS_INDEFINITE",function(){return Jr}),r.d(a,"CLASS_INTENSIVE",function(){return Xr}),r.d(a,"CLASS_RECIPROCAL",function(){return Qr});const n=Symbol("word"),u=Symbol("char"),i=Symbol("ltr"),o=Symbol("rtl"),s=Symbol("undefined"),l=Symbol("latin"),c=Symbol("greek"),f=Symbol("arabic"),d=Symbol("persian"),g="undefined",p="lat",h="la",m="grc",_="ara",E="ar",I="fas",y="per",A="fa-IR",v="fa",F="adjective",S="adverb",w="adverbial",C="article",D="conjunction",b="exclamation",L="interjection",T="noun",O="proper noun",V="numeral",N="particle",R="prefix",P="preposition",M="pronoun",x="suffix",U="supine",j="verb",G="verb participle",B="masculine",k="feminine",W="neuter",H="common",q="animate",K="inanimate",$="personal masculine",z="animate masculine",J="inanimate masculine",X="positive",Q="comparative",Y="superlative",Z="abessive",ee="ablative",te="absolutive",re="accusative",ae="addirective",ne="adelative",ue="adessive",ie="adverbial",oe="allative",se="antessive",le="apudessive",ce="aversive",fe="benefactive",de="caritive",ge="causal",pe="causal-final",he="comitative",me="dative",_e="delative",Ee="direct",Ie="distributive",ye="distributive-temporal",Ae="elative",ve="ergative",Fe="essive",Se="essive-formal",we="essive-modal",Ce="equative",De="evitative",be="exessive",Le="final",Te="formal",Oe="genitive",Ve="illative",Ne="inelative",Re="inessive",Pe="instructive",Me="instrumental",xe="instrumental-comitative",Ue="intransitive",je="lative",Ge="locative",Be="modal",ke="multiplicative",We="nominative",He="partitive",qe="pegative",Ke="perlative",$e="possessive",ze="postelative",Je="postdirective",Xe="postessive",Qe="postpositional",Ye="prepositional",Ze="privative",et="prolative",tt="prosecutive",rt="proximative",at="separative",nt="sociative",ut="subdirective",it="subessive",ot="subelative",st="sublative",lt="superdirective",ct="superessive",ft="superlative",dt="suppressive",gt="temporal",pt="terminative",ht="translative",mt="vialis",_t="vocative",Et="admirative",It="cohortative",yt="conditional",At="declarative",vt="dubitative",Ft="energetic",St="eventive",wt="generic",Ct="gerundive",Dt="hypothetical",bt="imperative",Lt="indicative",Tt="inferential",Ot="infinitive",Vt="interrogative",Nt="jussive",Rt="negative",Pt="optative",Mt="participle",xt="presumptive",Ut="renarrative",jt="subjunctive",Gt="supine",Bt="singular",kt="plural",Wt="dual",Ht="trial",qt="paucal",Kt="singulative",$t="collective",zt="distributive plural",Jt="cardinal",Xt="ordinal",Qt="distributive",Yt="numeral adverb",Zt="1st",er="2nd",tr="3rd",rr="4th",ar="5th",nr="6th",ur="7th",ir="8th",or="9th",sr="aorist",lr="future",cr="future perfect",fr="imperfect",dr="past absolute",gr="perfect",pr="pluperfect",hr="present",mr="to be",_r="compounds of to be",Er="taking ablative",Ir="taking dative",yr="taking genitive",Ar="transitive",vr="intransitive",Fr="impersonal",Sr="deponent",wr="semideponent",Cr="perfect definite",Dr="active",br="passive",Lr="mediopassive",Tr="impersonal passive",Or="middle",Vr="antipassive",Nr="reflexive",Rr="reciprocal",Pr="causative",Mr="adjutative",xr="applicative",Ur="circumstantial",jr="deponent",Gr="irregular",Br="regular",kr="personal",Wr="reflexive",Hr="possessive",qr="demonstrative",Kr="relative",$r="interrogative",zr="general relative",Jr="indefinite",Xr="intensive",Qr="reciprocal";class Definition{constructor(e,t,r,a){this.text=e,this.language=t,this.format=r,this.lemmaText=a}static readObject(e){return new Definition(e.text,e.language,e.format,e.lemmaText)}}var Yr=Definition;class definition_set_DefinitionSet{constructor(e,t){this.lemmaWord=e,this.languageID=t,this.shortDefs=[],this.fullDefs=[]}static readObject(e){let t=new definition_set_DefinitionSet(e.lemmaWord,e.languageID);for(let r of e.shortDefs)t.shortDefs.push(Yr.readObject(r));for(let r of e.fullDefs)t.fullDefs.push(Yr.readObject(r));return t}isEmpty(){return 0===this.shortDefs.length&&0===this.fullDefs.length}appendShortDefs(e){return e&&(Array.isArray(e)||(e=[e]),this.shortDefs=this.shortDefs.concat(e)),this.shortDefs}clearShortDefs(){this.shortDefs=[]}appendFullDefs(e){return e&&(Array.isArray(e)||(e=[e]),this.fullDefs=this.fullDefs.concat(e)),this.fullDefs}clearFullDefs(){this.fullDefs=[]}}var Zr=class{constructor(e=[],t=!1){this.hash={};for(let t of e)this.map(t,t);return this.returnUnknown=t,this}map(e,t){if(!e)throw new Error("Imported value should not be empty.");if(!t)throw new Error("Library value should not be empty.");return this.hash[e]=t,this}has(e){return this.hash.hasOwnProperty(e)}get(e){if(this.has(e))return this.hash[e];if(this.returnUnknown)return e;throw new Error('A value "'+e+'" is not found in the importer.')}};class feature_type_FeatureType{constructor(e,t,r){if(!t||!Array.isArray(t))throw new Error("Values should be an array (or an empty array) of values.");if(!r)throw new Error("FeatureType constructor requires a language");this.type=e,this.languageID=void 0,this.languageCode=void 0,({languageID:this.languageID,languageCode:this.languageCode}=ga.getLanguageAttrs(r)),this._orderIndex=[],this._orderLookup={};for(const[e,r]of t.entries())if(this._orderIndex.push(r),Array.isArray(r))for(let t of r)this[t]=new feature_Feature(this.type,t,this.languageID),this._orderLookup[t]=e;else this[r]=new feature_Feature(this.type,r,this.languageID),this._orderLookup[r]=e}get language(){return console.warn('Please use a "languageID" instead of a "language"'),this.languageCode}hasUnrestrictedValue(){return 1===this.orderedValues.length&&this.orderedValues[0]===feature_type_FeatureType.UNRESTRICTED_VALUE}get(e,t=1){if(e)return new feature_Feature(this.type,[[e,t]],this.languageID);throw new Error("A non-empty value should be provided.")}getValues(e){return new feature_Feature(this.type,e,this.languageID)}getFromImporter(e,t){let r;try{r=this.importer[e].get(t)}catch(e){r=this.get(t)}return r}addImporter(e){if(!e)throw new Error("Importer should have a non-empty name.");return this.importer=this.importer||{},this.importer[e]=this.importer[e]||new Zr,this.importer[e]}get orderedFeatures(){return this.orderedValues.map(e=>new feature_Feature(this.type,e,this.languageID))}get orderedValues(){return this._orderIndex}get orderLookup(){return this._orderLookup}set order(e){if(!e||Array.isArray(e)&&0===e.length)throw new Error("A non-empty list of values should be provided.");Array.isArray(e)||(e=[e]);for(let t of e)if(Array.isArray(t))for(let e of t){if(!this.hasOwnProperty(e.value))throw new Error('Trying to order an element with "'+e.value+'" value that is not stored in a "'+this.type+'" type.');if(e.type!==this.type)throw new Error('Trying to order an element with type "'+e.type+'" that is different from "'+this.type+'".');if(!ga.compareLanguages(e.languageID,this.languageID))throw new Error(`Trying to order an element with language "${e.languageID.toString()}" that is different from "${this.languageID.toString()}"`)}else{if(!this.hasOwnProperty(t.value))throw new Error('Trying to order an element with "'+t.value+'" value that is not stored in a "'+this.type+'" type.');if(t.type!==this.type)throw new Error('Trying to order an element with type "'+t.type+'" that is different from "'+this.type+'".');if(!ga.compareLanguages(t.languageID,this.languageID))throw new Error(`Trying to order an element with language "${t.languageID.toString()}" that is different from "${this.languageID.toString()}"`)}this._orderLookup={},this._orderIndex=[];for(const[t,r]of e.entries())if(Array.isArray(r)){let e=[];for(const a of r)this._orderLookup[a.value]=t,e.push(a.value);this._orderIndex[t]=e}else this._orderLookup[r.value]=t,this._orderIndex[t]=r.value}}feature_type_FeatureType.UNRESTRICTED_VALUE=Symbol("unrestricted");var ea=feature_type_FeatureType;var ta=class{constructor(e,t,r={}){for(let r of t)this[r]=e[r];Object.assign(this,r)}hasFeatureValue(e,t){return!!this.hasOwnProperty(e)&&this[e].values.includes(t)}toString(){let e=[];for(let t of Object.getOwnPropertyNames(this).sort()){let r=this[t]instanceof feature_Feature?this[t].values.sort().join(","):this[t];e.push(r)}return e.join(" ")}};var ra=class{constructor(e,t=[],r=null){this.groupingKey=e,this.inflections=t}append(e){this.inflections.push(e)}};class language_model_LanguageModel{constructor(){this.context_backward=language_model_LanguageModel.contextBackward}static get contextForward(){return 0}static get contextBackward(){return 0}static get direction(){return i}static get baseUnit(){return n}get contextForward(){return console.warn('Please use static "contextForward" instead'),this.constructor.contextForward}get contextBackward(){return console.warn('Please use static "contextBackward" instead'),this.constructor.contextBackward}get direction(){return console.warn('Please use static "direction" instead'),this.constructor.direction}get baseUnit(){return console.warn('Please use static "baseUnit" instead'),this.constructor.baseUnit}get features(){return console.warn('Please use individual "getFeatureType" or static "features" instead'),this.constructor.features}static get featureNames(){return this.featureValues.keys()}static typeFeature(e){if(this.typeFeatures.has(e))return this.typeFeatures.get(e);throw new Error(`Type feature "${e}" is not defined within "${this}"`)}static get typeFeatures(){console.warn("This getter must be defined in a descendant class")}static get features(){let e={};for(const t of this.featureNames)e[t]=this.getFeature(t);return e}static get languageID(){return s}static get languageCode(){return g}static get languageCodes(){return[]}static get codes(){return console.warn('Use static "languageCodes" instead'),this.languageCodes}get codes(){return console.warn('Please use a static version of "codes" instead'),this.constructor.languageCodes}toCode(){return console.warn('Please use a static "languageCode" instead'),this.constructor.languageCode}static toCode(){return console.warn('Please use a static "languageCode" instead'),this.languageCode}static get featureValues(){return new Map([[feature_Feature.types.part,[S,w,F,C,D,b,L,T,V,N,R,P,M,x,U,j,G]],[feature_Feature.types.gender,[B,k,W]],[feature_Feature.types.type,[Br,Gr]],[feature_Feature.types.person,[Zt,er,tr]],[feature_Feature.types.age,[]],[feature_Feature.types.area,[]],[feature_Feature.types.source,[]],[feature_Feature.types.frequency,[]],[feature_Feature.types.geo,[]],[feature_Feature.types.pronunciation,[]],[feature_Feature.types.kind,[]],[feature_Feature.types.comparison,[]],[feature_Feature.types.morph,[]],[feature_Feature.types.stemtype,[]],[feature_Feature.types.derivtype,[]]])}static get sourceLanguage(){return console.warn("Please use languageID directly"),this.languageID}get sourceLanguage(){return console.warn("Please use languageID directly"),this.constructor.languageID}static getFeatureType(e){console.warn("Please use getFeature instead");let t=this.featureValues;if(t.has(e))return new ea(e,t.get(e),this.languageID);throw new Error(`Feature "${e}" is not defined`)}static getFeature(e){let t=this.featureValues;if(t.has(e)){let r=t.get(e);return new feature_Feature(e,r,this.languageID,1,r)}throw new Error(`Feature "${e}" is not defined`)}_initializeFeatures(){let e={};for(const t of this.constructor.featureValues.keys())e[t]=this.constructor.getFeature(t);return e}grammarFeatures(){return console.warn('Please use a static version of "grammarFeatures" instead'),this.constructor.grammarFeatures()}static grammarFeatures(){return[]}static canInflect(e){return!1}static supportsLanguage(e){return this.languageCodes.includes[e]}static normalizeWord(e){return e}static alternateWordEncodings(e,t=null,r=null,a=null){return[]}alternateWordEncodings(e,t,r,a){return console.warn('Please use static "alternateWordEncodings" instead'),this.constructor.alternateWordEncodings(e,t,r,a)}static getPunctuation(){return".,;:!?'\"(){}\\[\\]<>/\\ ‐‑‒–—―‘’“”··\n\r"}getPunctuation(){return console.warn('Please use a static version of "getPunctuation"'),this.constructor.getPunctuation()}toString(){return String(this.constructor.languageCode)}isEqual(e){return ga.compareLanguages(this.languageID,e.languageID)}static hasCode(e){if(this.isLanguageCode(e))return this.languageCodes.includes(e);throw new Error(`Format of a "${e}" is incorrect`)}static isLanguageID(e){return"symbol"==typeof e}static isLanguageCode(e){return!language_model_LanguageModel.isLanguageID(e)}canInflect(e){return console.warn('Please use a static version of "canInflect" instead'),this.constructor.canInflect(e)}static groupInflectionsForDisplay(e){let t=new Map,r=this.aggregateInflectionsForDisplay(e);for(let e of r){let r=new ta(e,[feature_Feature.types.part,feature_Feature.types.declension,feature_Feature.types.dialect,feature_Feature.types.comparison],{prefix:e.prefix,suffix:e.suffix,stem:e.stem}),a=r.toString();t.has(a)?t.get(a).append(e):t.set(a,new ra(r,[e]))}for(let e of t){let t=new Map;for(let r of e[1].inflections){let e,a=!1;r[feature_Feature.types.grmCase]?(e=feature_Feature.types.number,a=!0):e=r[feature_Feature.types.tense]?feature_Feature.types.tense:r[feature_Feature.types.part]===j?feature_Feature.types.part:r[feature_Feature.types.part]===S?feature_Feature.types.part:"misc";let n=new ta(r,[e],{isCaseInflectionSet:a}),u=n.toString();t.has(u)?t.get(u).append(r):t.set(u,new ra(n,[r]))}for(let e of t){let t=new Map,r=new Map;for(let a of e[1].inflections){let e=a[feature_Feature.types.grmCase]?Math.max(a[feature_Feature.types.grmCase].items.map(e=>e.sortOrder)):1,n=new ta(a,[feature_Feature.types.tense,feature_Feature.types.voice]),u=n.toString();t.has(u)?t.get(u).append(a):(t.set(u,new ra(n,[a],e)),r.set(u,e))}e[1].inflections=[];let a=Array.from(t.keys()).sort((e,t)=>{let a=r.get(e),n=r.get(t);return a>n?-1:n>a?1:0});for(let r of a)e[1].inflections.push(t.get(r))}for(let e of t){let t=e[1];for(let e of t.inflections){let t=new Map;for(let r of e.inflections){let e=new ta(r,[feature_Feature.types.grmCase,feature_Feature.types.comparison,feature_Feature.types.gender,feature_Feature.types.number,feature_Feature.types.person,feature_Feature.types.tense,feature_Feature.types.mood,feature_Feature.types.voice]),a=e.toString();t.has(a)?t.get(a).append(r):t.set(a,new ra(e,[r]))}e.inflections=Array.from(t.values())}}e[1].inflections=Array.from(t.values())}return Array.from(t.values())}static aggregateInflectionsForDisplay(e){return e}groupInflectionsForDisplay(e){return console.warn('Please use a static version of "groupInflectionsForDisplay" instead'),this.constructor.groupInflectionsForDisplay(e)}}var aa=language_model_LanguageModel;let na=new Map,ua=!1;class latin_language_model_LatinLanguageModel extends aa{static get languageID(){return l}static get languageCode(){return p}static get languageCodes(){return[h,p]}static get contextForward(){return 0}static get contextBackward(){return 0}static get direction(){return i}static get baseUnit(){return n}static get featureValues(){return new Map([...aa.featureValues,[feature_Feature.types.grmClass,[kr,Wr,Hr,qr,Kr,$r]],[feature_Feature.types.number,[Bt,kt]],[feature_Feature.types.grmCase,[We,Oe,me,re,ee,Ge,_t]],[feature_Feature.types.declension,[Zt,er,tr,rr,ar]],[feature_Feature.types.tense,[hr,fr,lr,gr,pr,cr]],[feature_Feature.types.voice,[Dr,br]],[feature_Feature.types.mood,[Lt,jt,bt,Mt,Gt,Ct,Mt,Ot]],[feature_Feature.types.conjugation,[Zt,er,tr,rr]]])}static get typeFeatures(){return ua||this.initTypeFeatures(),na}static initTypeFeatures(){for(const e of this.featureNames)na.set(e,this.getFeature(e));ua=!0}static grammarFeatures(){return[feature_Feature.types.part,feature_Feature.types.grmCase,feature_Feature.types.mood,feature_Feature.types.declension,feature_Feature.types.tense,feature_Feature.types.conjugation]}static canInflect(e){return!0}static normalizeWord(e){return e&&(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/[\u00c0\u00c1\u00c2\u00c3\u00c4\u0100\u0102]/g,"A")).replace(/[\u00c8\u00c9\u00ca\u00cb\u0112\u0114]/g,"E")).replace(/[\u00cc\u00cd\u00ce\u00cf\u012a\u012c]/g,"I")).replace(/[\u00d2\u00d3\u00d4\u00df\u00d6\u014c\u014e]/g,"O")).replace(/[\u00d9\u00da\u00db\u00dc\u016a\u016c]/g,"U")).replace(/[\u00c6\u01e2]/g,"AE")).replace(/[\u0152]/g,"OE")).replace(/[\u00e0\u00e1\u00e2\u00e3\u00e4\u0101\u0103]/g,"a")).replace(/[\u00e8\u00e9\u00ea\u00eb\u0113\u0115]/g,"e")).replace(/[\u00ec\u00ed\u00ee\u00ef\u012b\u012d\u0129]/g,"i")).replace(/[\u00f2\u00f3\u00f4\u00f5\u00f6\u014d\u014f]/g,"o")).replace(/[\u00f9\u00fa\u00fb\u00fc\u016b\u016d]/g,"u")).replace(/[\u00e6\u01e3]/g,"ae")).replace(/[\u0153]/g,"oe")),e}static alternateWordEncodings(e,t=null,r=null,a=null){return[]}static getPunctuation(){return".,;:!?'\"(){}\\[\\]<>/\\ ‐‑‒–—―‘’“”··\n\r"}static getInflectionConstraints(e){let t={fullFormBased:!1,suffixBased:!1,pronounClassRequired:!1};return e.hasOwnProperty(feature_Feature.types.part)?[j,G].includes(e[feature_Feature.types.part].value)?(t.fullFormBased=!0,t.suffixBased=!0):e[feature_Feature.types.part].value===M?t.fullFormBased=!0:t.suffixBased=!0:console.warn("Unable to set grammar: part of speech data is missing or is incorrect",e[feature_Feature.types.part]),t}}let ia=new Map,oa=!1;class greek_language_model_GreekLanguageModel extends aa{static get languageID(){return c}static get languageCode(){return m}static get languageCodes(){return[m]}static get contextForward(){return 0}static get contextBackward(){return 0}static get direction(){return i}static get baseUnit(){return n}static get featureValues(){return new Map([...aa.featureValues,[feature_Feature.types.grmClass,[qr,zr,Jr,Xr,$r,kr,Hr,Qr,Wr,Kr]],[feature_Feature.types.number,[Bt,kt,Wt]],[feature_Feature.types.grmCase,[We,Oe,me,re,_t]],[feature_Feature.types.declension,[Zt,er,tr]],[feature_Feature.types.tense,[hr,fr,lr,gr,pr,cr,sr]],[feature_Feature.types.voice,[br,Dr,Lr,Or]],[feature_Feature.types.mood,[Lt,jt,Pt,bt]],[feature_Feature.types.dialect,["attic","epic","doric"]]])}static get typeFeatures(){return oa||this.initTypeFeatures(),ia}static initTypeFeatures(){for(const e of this.featureNames)ia.set(e,this.getFeature(e));oa=!0}static canInflect(e){return!0}static grammarFeatures(){return[feature_Feature.types.part,feature_Feature.types.grmCase,feature_Feature.types.mood,feature_Feature.types.declension,feature_Feature.types.tense,feature_Feature.types.voice]}static normalizeWord(e){return e?e.normalize("NFC"):e}static alternateWordEncodings(e,t=null,r=null,a=null){let n=greek_language_model_GreekLanguageModel.normalizeWord(e).toLocaleLowerCase(),u=n.replace(/[\u{1FB0}\u{1FB1}]/gu,"α").replace(/[\u{1FB8}\u{1FB9}]/gu,"Α").replace(/[\u{1FD0}\u{1FD1}]/gu,"ι").replace(/[\u{1FD8}\u{1FD9}]/gu,"Ι").replace(/[\u{1FE0}\u{1FE1}]/gu,"υ").replace(/[\u{1FE8}\u{1FE9}]/gu,"Υ").replace(/[\u{00AF}\u{0304}\u{0306}]/gu,""),i=n.replace(/\u{0390}/gu,"ί").replace(/\u{03AA}/gu,"Ι").replace(/\u{03AB}/gu,"Υ").replace(/\u{03B0}/gu,"ύ").replace(/\u{03CA}/gu,"ι").replace(/\u{03CB}/gu,"υ").replace(/\u{1FD2}/gu,"ὶ").replace(/\u{1FD3}/gu,"ί").replace(/\u{1FD7}/gu,"ῖ").replace(/\u{1FE2}/gu,"ὺ").replace(/\u{1FE3}/gu,"ύ").replace(/\u{1FE7}/gu,"ῦ").replace(/\u{1FC1}/gu,"῀").replace(/\u{1FED}/gu,"`").replace(/\u{1FEE}/gu,"´").replace(/[\u{00A8}\u{0308}]/gu,"");return"strippedDiaeresis"===a?[i]:[u]}static getPunctuation(){return".,;:!?'\"(){}\\[\\]<>/\\ ‐‑‒–—―‘’“”··\n\r"}static getInflectionConstraints(e){let t={fullFormBased:!1,suffixBased:!1,pronounClassRequired:!1},r=[M,V,C];return e.hasOwnProperty(feature_Feature.types.part)?r.includes(e[feature_Feature.types.part].value)?t.fullFormBased=!0:t.suffixBased=!0:console.warn("Unable to set grammar: part of speech data is missing or is incorrect",e[feature_Feature.types.part]),t.pronounClassRequired=ga.compareLanguages(greek_language_model_GreekLanguageModel.languageID,e.languageID)&&e.hasOwnProperty(feature_Feature.types.part)&&e[feature_Feature.types.part].value===M,t}static getPronounClasses(e,t,r=!0){let a=new Set,n=e.filter(e=>{let a=!1;return e.value&&(a=r?greek_language_model_GreekLanguageModel.normalizeWord(e.value)===greek_language_model_GreekLanguageModel.normalizeWord(t):e.value===t),a});for(const e of n)if(e.features.hasOwnProperty(feature_Feature.types.grmClass))for(const t of e.features[feature_Feature.types.grmClass].values)a.add(t);if(a.size>0)return new feature_Feature(feature_Feature.types.grmClass,Array.from(a),greek_language_model_GreekLanguageModel.languageID)}}let sa=new Map,la=!1;class arabic_language_model_ArabicLanguageModel extends aa{static get languageID(){return f}static get languageCode(){return _}static get languageCodes(){return[_,E]}static get contextForward(){return 0}static get contextBackward(){return 0}static get direction(){return o}static get baseUnit(){return n}static get typeFeatures(){return la||this.initTypeFeatures(),sa}static initTypeFeatures(){for(const e of this.featureNames)sa.set(e,this.getFeature(e));la=!0}static canInflect(e){return!1}static alternateWordEncodings(e,t=null,r=null,a=null){let n=e.replace(/[\u{064B}\u{064C}\u{064D}\u{0640}]/gu,""),u=n.replace(/[\u{0622}\u{0623}\u{0625}]/gu,"ا"),i=u.replace(/[\u{064E}\u{064F}\u{0650}\u{0670}\u{0671}]/gu,""),o=i.replace(/\u{0651}/gu,""),s=o.replace(/\u{0652}/gu,""),l=s.replace(/\u{0627}/gu,""),c=new Map([["tanwin",n],["hamza",u],["harakat",i],["shadda",o],["sukun",s],["alef",l]]);return null!==a&&c.has(a)?[c.get(a)]:Array.from(c.values())}static getPunctuation(){return".,;:!?'\"(){}\\[\\]<>/\\ ‐‑‒–—―‘’“”··\n\r"}static aggregateInflectionsForDisplay(e){let t=[],r={[T]:[],[F]:[],[O]:[]};for(let a of e)a[feature_Feature.types.morph]&&a[feature_Feature.types.morph].value.match(/ADJ[uaiNK]/)?r[F].push(a):a[feature_Feature.types.morph]&&a[feature_Feature.types.morph].value.match(/NOUN[uaiNK]/)?r[T].push(a):a[feature_Feature.types.morph]&&a[feature_Feature.types.morph].value.match(/NOUN_PROP[uaiNK]/)?r[O].push(a):(a.example=null,t.push(a));for(let e of Object.keys(r)){1!==t.filter(t=>t[feature_Feature.types.part].value===e).length&&t.push(...r[e])}return t}}let ca=new Map,fa=!1;class persian_language_model_PersianLanguageModel extends aa{static get languageID(){return d}static get languageCode(){return y}static get languageCodes(){return[y,I,v,A]}static get contextForward(){return 0}static get contextBackward(){return 0}static get direction(){return o}static get baseUnit(){return n}static get typeFeatures(){return fa||this.initTypeFeatures(),ca}static initTypeFeatures(){for(const e of this.featureNames)ca.set(e,this.getFeature(e));fa=!0}static canInflect(e){return!1}static alternateWordEncodings(e,t=null,r=null,a=null){return[]}static getPunctuation(){return".,;:!?'\"(){}\\[\\]<>/\\ ‐‑‒–—―‘’“”··\n\r"}}const da=new Map([[h,latin_language_model_LatinLanguageModel],[p,latin_language_model_LatinLanguageModel],[m,greek_language_model_GreekLanguageModel],[_,arabic_language_model_ArabicLanguageModel],[E,arabic_language_model_ArabicLanguageModel],[y,persian_language_model_PersianLanguageModel]]);class language_model_factory_LanguageModelFactory{static supportsLanguage(e){return e="symbol"==typeof e?language_model_factory_LanguageModelFactory.getLanguageCodeFromId(e):e,da.has(e)}static getLanguageModel(e){let t=language_model_factory_LanguageModelFactory.getLanguageCodeFromId(e);return da.has(t)?da.get(t):aa}static getLanguageForCode(e=null){let t=da.get(e);return t?new t:new aa}static getLanguageIdFromCode(e){for(const t of da.values())if(t.hasCode(e))return t.languageID;return s}static getLanguageCodeFromId(e){for(const t of da.values())if(t.languageID===e)return t.languageCode;return g}static getLanguageAttrs(e){return"symbol"==typeof e?{languageID:e,languageCode:language_model_factory_LanguageModelFactory.getLanguageCodeFromId(e)}:{languageID:language_model_factory_LanguageModelFactory.getLanguageIdFromCode(e),languageCode:e}}static compareLanguages(e,t){return(e="symbol"==typeof e?language_model_factory_LanguageModelFactory.getLanguageCodeFromId(e):e)===(t="symbol"==typeof t?language_model_factory_LanguageModelFactory.getLanguageCodeFromId(t):t)}}var ga=language_model_factory_LanguageModelFactory;const pa={en:{feminine:{full:"feminine",abbr:"f."},masculine:{full:"masculine",abbr:"m."},neuter:{full:"neuter",abbr:"n."},nominative:{full:"nominative",abbr:"nom."},accusative:{full:"accusative",abbr:"acc."},genitive:{full:"genitive",abbr:"gen."},vocative:{full:"vocative",abbr:"voc."},ablative:{full:"ablative",abbr:"abl."},locative:{full:"locative",abbr:"loc."},dative:{full:"dative",abbr:"dat."},positive:{full:"positive",abbr:"pos."},comparative:{full:"comparative",abbr:"com."},superlative:{full:"superlative",abbr:"sup."},singular:{full:"singular",abbr:"s."},plural:{full:"plural",abbr:"p."},dual:{full:"dual",abbr:"dl."},present:{full:"present",abbr:"pr."},imperfect:{full:"imperfect",abbr:"imp."},perfect:{full:"perfect",abbr:"perf."},plusquamperfect:{full:"plusquamperfect",abbr:"pqpf."},"future perfect":{full:"future perfect",abbr:"fex."},future:{full:"future",abbr:"fut."},aorist:{full:"aorist",abbr:"aor."},indicative:{full:"indicative",abbr:"ind."},subjunctive:{full:"subjunctive",abbr:"sub."},infinitive:{full:"infinitive",abbr:"inf."},imperative:{full:"imperative",abbr:"imp."},supine:{full:"supine",abbr:"sup."},participle:{full:"participle",abbr:"par."},optative:{full:"optative",abbr:"opt."},active:{full:"active",abbr:"act."},passive:{full:"passive",abbr:"pass."},middle:{full:"middle",abbr:"mid."},mediopassive:{full:"mediopassive",abbr:"mp."},deponens:{full:"deponens",abbr:"dep."}}};class feature_Feature{constructor(e,t,r,a=1,n=[]){if(!feature_Feature.isAllowedType(e))throw new Error('Features of "'+e+'" type are not supported.');if(!t)throw new Error("Feature should have a non-empty value(s).");if(!r)throw new Error("No language ID is provided");this.type=e,this.languageID=r,this.sortOrder=a,this.allowedValues=n,this._data=feature_Feature.dataValuesFromInput(t),this.sort()}static dataValuesFromInput(e){let t;return(t=Array.isArray(e)?Array.isArray(e[0])?e:e.map((t,r)=>[t,e.length-r]):[[e,this.defaultSortOrder]]).map(e=>({value:e[0],sortOrder:Number.parseInt(e[1])}))}static newFromFtr(e){}static get types(){return{word:"word",fullForm:"full form",hdwd:"headword",part:"part of speech",number:"number",case:"case",grmCase:"case",declension:"declension",gender:"gender",type:"type",class:"class",grmClass:"class",conjugation:"conjugation",comparison:"comparison",tense:"tense",voice:"voice",mood:"mood",person:"person",frequency:"frequency",meaning:"meaning",source:"source",footnote:"footnote",dialect:"dialect",note:"note",pronunciation:"pronunciation",age:"age",area:"area",geo:"geo",kind:"kind",derivtype:"derivtype",stemtype:"stemtype",morph:"morph",var:"var"}}static isAllowedType(e){return Object.values(this.types).includes(`${e}`)}static get defaultSortOrder(){return 1}static get joinSeparator(){return" "}static get defaultImporterName(){return"default"}get allowsUnrestrictedValues(){return 0===this.allowedValues.length}sort(){this._data.sort((e,t)=>e.sortOrder!==t.sortOrder?t.sortOrder-e.sortOrder:e.value.localeCompare(t.value))}compareTo(e){return e._data[0].sortOrder-this._data[0].sortOrder}get items(){return this._data}get value(){return this.values.join(this.constructor.joinSeparator)}get values(){return this._data.map(e=>e.value)}getValue(e){return this._data.find(t=>t.value===e)}get valQty(){return this._data.length}get isEmpty(){return 0===this.valQty}get isSingle(){return 1===this.valQty}get isMultiple(){return this.valQty>1}toString(){return this.value}hasValue(e){return this.values.includes(e)}hasValues(e){let t=!0;for(let r of e)t=t&&this.hasValue(r);return t}hasSomeValues(e){let t=!1;for(let r of e)t=t||this.hasValue(r);return t}get valuesUnrestricted(){return 0===this.allowedValues.length}isEqual(e){return this.type===e.type&&ga.compareLanguages(this.languageID,e.languageID)&&this.value===e.value}addValue(e,t=this.constructor.defaultSortOrder){return this.hasValue(e)?console.warn(`Value "${e}" already exists. If you want to change it, use "getValue" to access it directly.`):(this._data.push({value:e,sortOrder:t}),this.sort()),this}addValues(e){let t=this.constructor.dataValuesFromInput(e),r=t.map(e=>e.value);return this.hasSomeValues(r)?console.warn(`One or several values from "${r}" already exist. If you want to change it, use "getValue" to access a value directly.`):(this._data=this._data.concat(t),this.sort()),this}removeValue(e){console.warn("This feature is not implemented yet")}createFeature(e,t=this.constructor.defaultSortOrder){return new feature_Feature(this.type,[[e,t]],this.languageID,this.sortOrder,this.allowedValues)}createFeatures(e){return new feature_Feature(this.type,e,this.languageID,this.sortOrder,this.allowedValues)}getCopy(){let e=this._data.map(e=>[e.value,e.sortOrder]);return new feature_Feature(this.type,e,this.languageID,this.sortOrder,this.allowedValues.slice())}toLocaleStringAbbr(e="en"){return this.values.map(t=>pa[e][t]?pa[e][t].abbr:t).join(this.constructor.joinSeparator)}addImporter(e=new Zr,t=this.constructor.defaultImporterName){return this.importers||(this.importers=new Map),this.importers.set(t,e),e}getImporter(e=this.constructor.defaultImporterName){if(!this.importers||!this.importers.has(e))throw new Error(`Importer "${e}" does not exist`);return this.importers.get(e)}addFromImporter(e,t=this.constructor.defaultImporterName){if(!this.importers||!this.importers.has(t))throw new Error(`Importer "${t}" does not exist`);const r=this.importers.get(t);return e=this.constructor.dataValuesFromInput(e),this._data.push(...e.map(e=>({value:r.get(e.value),sortOrder:e.sortOrder}))),this.sort(),this}createFromImporter(e,t=this.constructor.defaultImporterName){if(!this.importers||!this.importers.has(t))throw new Error(`Importer "${t}" does not exist`);const r=this.importers.get(t);Array.isArray(e)||(e=[e]);let a=e.map(e=>r.get(e));return a=a.reduce((e,t)=>e.concat(t),[]),new feature_Feature(this.type,a,this.languageID,this.sortOrder,this.allowedValues)}}class grm_feature_GrmFeature{constructor(e,t,r,a=1){if(!grm_feature_GrmFeature.types.isAllowed(t))throw new Error('Features of "'+t+'" type are not supported.');if(!e)throw new Error("Feature should have a non-empty value.");if(!t)throw new Error("Feature should have a non-empty type.");if(!r)throw new Error("Feature constructor requires a language");this.value=e,this.type=t,this.languageID=void 0,this.languageCode=void 0,({languageID:this.languageID,languageCode:this.languageCode}=ga.getLanguageAttrs(r)),this.sortOrder=a}get language(){return console.warn('Please use a "languageID" instead of a "language"'),this.languageCode}isEqual(e){if(Array.isArray(e.value)){if(!Array.isArray(this.value)||this.value.length!==e.value.length)return!1;let t=this.type===e.type&&ga.compareLanguages(this.languageID,e.languageID);return t=t&&this.value.every(function(t,r){return t===e.value[r]})}return ga.compareLanguages(this.languageID,e.languageID)&&this.type===e.type&&this.value===e.value}isSubsetof(e){Array.isArray(e)||(e=[e]);let t=e[0].languageID,r=e[0].type,a=e.map(e=>e.value);return!(!ga.compareLanguages(this.languageID,t)||this.type!==r||!a.includes(this.value))}hasValue(e){return Array.isArray(this.value)?this.value.includes(e):this.value===e}toString(){return Array.isArray(this.value)?this.value.join(","):this.value}toLocaleStringAbbr(e="en"){return Array.isArray(this.value)?this.value.map(t=>this.toLocaleStringAbbr(t,e)):pa[e][this.value].abbr}static toFeature(e){if(Array.isArray(e)){if(!(e[0]instanceof feature_Feature)){const t=e[0].type,r=e[0].languageID,a=e.map(e=>e.value);return new feature_Feature(t,a,r)}}else if(!(e instanceof feature_Feature))return new feature_Feature(e.type,e.value,e.languageID);return e}}grm_feature_GrmFeature.types={word:"word",part:"part of speech",number:"number",case:"case",grmCase:"case",declension:"declension",gender:"gender",type:"type",class:"class",grmClass:"class",conjugation:"conjugation",comparison:"comparison",tense:"tense",voice:"voice",mood:"mood",person:"person",frequency:"frequency",meaning:"meaning",source:"source",footnote:"footnote",dialect:"dialect",note:"note",pronunciation:"pronunciation",age:"age",area:"area",geo:"geo",kind:"kind",derivtype:"derivtype",stemtype:"stemtype",morph:"morph",var:"var",isAllowed(e){let t=`${e}`;return Object.values(this).includes(t)}};var ha=grm_feature_GrmFeature;var ma=class{constructor(e=[]){this._features=[],this._types={},this.add(e)}add(e){if(!e||!Array.isArray(e))throw new Error("Features must be defined and must come in an array.");for(let t of e)this._features.push(t),this._types[t.type]=t}get items(){return this._features}forEach(e){this._features.forEach(e)}ofType(e){if(this.hasType(e))return this._types[e]}hasType(e){return this._types.hasOwnProperty(e)}};class Translation{constructor(e,t,r=[]){if(!e)throw new Error("Lemma should not be empty.");this.lemmaWord=e.word,this.languageCode=t,this.glosses=r}static readTranslationFromJSONList(e,t,r){if(!r||!Array.isArray(r))throw new Error("Recieved not proper translation list",r);let a=r.find(function(t){return t.in===e.word});return new Translation(e,t,a.translations)}static loadTranslations(e,t,r){e.addTranslation(this.readTranslationFromJSONList(e,t,r))}}var _a=Translation,Ea=r(0),Ia=r.n(Ea);class lemma_Lemma{constructor(e,t,r=[],a={}){if(!e)throw new Error("Word should not be empty.");if(!t)throw new Error("Language should not be empty.");this.languageID=void 0,this.languageCode=void 0,({languageID:this.languageID,languageCode:this.languageCode}=ga.getLanguageAttrs(t)),this.word=e,this.principalParts=r,this.features={},this.ID=Ia()()}get language(){return console.warn('Please use "languageID" instead of "language"'),this.languageCode}static readObject(e){return new lemma_Lemma(e.word,e.language,e.principalParts,e.pronunciation)}set feature(e){if(console.warn('Please use "addFeature" instead'),!e)throw new Error("feature data cannot be empty.");Array.isArray(e)||(e=[e]);let t=e[0].type;this.features[t]=[];for(let r of e){if(!(r instanceof feature_Feature))throw new Error("feature data must be a Feature object.");if(!ga.compareLanguages(r.languageID,this.languageID))throw new Error('Language "'+r.languageID.toString()+'" of a feature does not match a language "'+this.languageID.toString()+'" of a Lemma object.');this.features[t].push(r)}}addFeature(e){if(!e)throw new Error("feature data cannot be empty.");if(!(e instanceof feature_Feature))throw new Error("feature data must be a Feature object.");if(!ga.compareLanguages(e.languageID,this.languageID))throw new Error('Language "'+e.languageID.toString()+'" of a feature does not match a language "'+this.languageID.toString()+'" of a Lemma object.');this.features[e.type]=e}addFeatures(e){if(!Array.isArray(e))throw new Error("Features must be in an array");for(let t of e)this.addFeature(t)}addTranslation(e){if(!e)throw new Error("translation data cannot be empty.");if(!(e instanceof _a))throw new Error("translation data must be a Translation object.");this.translation=e}isFullHomonym(e){return this.word===e.word&&this.features[feature_Feature.types.part]&&e.features[feature_Feature.types.part]&&this.features[feature_Feature.types.part].isEqual(e.features[feature_Feature.types.part])}}var ya=lemma_Lemma;class inflection_Inflection{constructor(e=null,t,r=null,a=null,n=null){if(!e&&!r)throw new Error("At least stem or suffix must be defined");if(!t)throw new Error("Language should not be empty.");if(!ga.supportsLanguage(t))throw new Error(`language ${t} not supported.`);this.stem=e,this.languageID=void 0,this.languageCode=void 0,({languageID:this.languageID,languageCode:this.languageCode}=ga.getLanguageAttrs(t)),this.model=ga.getLanguageModel(this.languageID),this.features=new Set,this.constraints={fullFormBased:!1,suffixBased:!1,obligatoryMatches:[],optionalMatches:[]},this.suffix=r,this.prefix=a,this.example=n}get form(){let e,t,r,a,n;return n=this.stem?this.stem:"",a=this.stem?" - ":"",this.model.direction===o?(t=this.prefix?a+this.prefix:"",e=(r=this.suffix?this.suffix+a:"")+n+t):e=(t=this.prefix?this.prefix+a:"")+n+(r=this.suffix?a+this.suffix:""),e}get language(){return console.warn('Please use a "languageID" instead of a "language"'),this.languageCode}setConstraints(){if(this.model.hasOwnProperty("getInflectionConstraints")){let e=this.model.getInflectionConstraints(this);this.constraints=Object.assign(this.constraints,e)}}compareWithWordDependsOnType(e,t,r=!0){const a=ga.getLanguageModel(this.languageID);let n;return n=this.constraints.irregularVerb?"Suffix"===t?this.suffix:this[feature_Feature.types.fullForm]?this[feature_Feature.types.fullForm].value:this.form:this.constraints.suffixBased?this.suffix:this.form,r?a.normalizeWord(n)===a.normalizeWord(e):n===e}compareWithWord(e,t=!0){const r=ga.getLanguageModel(this.languageID),a=this.constraints.suffixBased?this.suffix:this.form;return t?r.normalizeWord(a)===r.normalizeWord(e):a===e}disambiguatedBy(e){let t=!0;0!==this.features.length&&0!==e.features.length||(t=!1),e.features.length>this.features.length&&(t=!1);for(let r of e.features)if(!this[r]||!this[r].isEqual(e[r])){t=!1;break}return t}static readObject(e){let t=new inflection_Inflection(e.stem,e.languageCode,e.suffix,e.prefix,e.example);return t.languageID=ga.getLanguageIdFromCode(t.languageCode),t}set feature(e){if(console.warn('Please use "addFeature" instead.'),!e)throw new Error("Inflection feature data cannot be empty.");Array.isArray(e)||(e=[e]);let t=e[0].type;this[t]=[];for(let r of e){if(!(r instanceof feature_Feature))throw new Error("Inflection feature data must be a Feature object.");if(!ga.compareLanguages(r.languageID,this.languageID))throw new Error(`Language "${r.languageID.toString()}" of a feature does not match\n          a language "${this.languageID.toString()}" of an Inflection object.`);this[t].push(r),this.features.add(t)}}addFeature(e){if(!e)throw new Error("feature data cannot be empty.");if(!(e instanceof feature_Feature))throw new Error("feature data must be a Feature object.");if(!ga.compareLanguages(e.languageID,this.languageID))throw new Error('Language "'+e.languageID.toString()+'" of a feature does not match a language "'+this.languageID.toString()+'" of a Lemma object.');this[e.type]=e,this.features.add(e.type)}addFeatures(e){if(!Array.isArray(e))throw new Error("Features must be in an array");for(let t of e)this.addFeature(t)}hasFeatureValue(e,t){return!!this.hasOwnProperty(e)&&this[e].values.includes(t)}}var Aa=inflection_Inflection;class lexeme_Lexeme{constructor(e,t,r=null){if(!e)throw new Error("Lemma should not be empty.");if(!(e instanceof ya))throw new Error("Lemma should be of Lemma object type.");if(!t)throw new Error("Inflections data should not be empty.");if(!Array.isArray(t))throw new Error("Inflection data should be provided in an array.");for(let e of t)if(!(e instanceof Aa))throw new Error("All inflection data should be of Inflection object type.");if(null!==r&&!(r instanceof definition_set_DefinitionSet))throw new Error("Meaning should be of DefinitionSet object type.");this.lemma=e,this.inflections=[],t.forEach(e=>{this.addInflection(e)}),this.meaning=r||new definition_set_DefinitionSet(this.lemma.word,this.lemma.languageID),this.disambiguated=!1}addInflection(e){e.lemma=this.lemma,this.inflections.push(e)}isPopulated(){return Object.entries(this.lemma.features).length>0||!this.meaning.isEmpty()||this.inflections.length>0}static disambiguate(e,t){let r=new lexeme_Lexeme(e.lemma,e.inflections,e.meaning);if(e.lemma.isFullHomonym(t.lemma)&&t.inflections.length>0){r.disambiguated=!0;let e=[];for(let a of r.inflections)for(let r of t.inflections)a.disambiguatedBy(r)&&e.push(a);if(r.inflections=e,0===r.inflections.length)for(let e of t.inflections)r.addInflection(e)}return r}getGroupedInflections(){return ga.getLanguageModel(this.lemma.languageID).groupInflectionsForDisplay(this.inflections)}static readObject(e){let t=ya.readObject(e.lemma),r=[];for(let t of e.inflections)r.push(Aa.readObject(t));let a=new lexeme_Lexeme(t,r);return a.meaning=definition_set_DefinitionSet.readObject(e.meaning),a}static getSortByTwoLemmaFeatures(e,t){return(r,a)=>{if(!r.lemma.features[e]||!a.lemma.features[e])return r.lemma.features[e]&&!a.lemma.features[e]?-1:!r.lemma.features[e]&&a.lemma.features[e]?1:0;{let n=r.lemma.features[e].compareTo(a.lemma.features[e]);if(0!==n)return n;if(r.lemma.features[t]&&a.lemma.features[t])return r.lemma.features[t].compareTo(a.lemma.features[t]);if(r.lemma.features[t]&&!a.lemma.features[t])return-1;if(!r.lemma.features[t]&&a.lemma.features[t])return 1}}}}var va=lexeme_Lexeme;class homonym_Homonym{constructor(e,t){if(!e||Array.isArray(e)&&0===e.length)throw new Error("Lexemes data should not be empty.");if(!Array.isArray(e))throw new Error("Lexeme data should be provided in an array.");for(let t of e)if(!(t instanceof va))throw new Error("All lexeme data should be of Lexeme object type.");this.lexemes=e,this.targetWord=t}static createSimpleForm(e,t,r=[]){let a=new ya(e,t),n=new va(a,r);return new homonym_Homonym([n],e)}static readObject(e){let t=[];if(e.lexemes)for(let r of e.lexemes)t.push(va.readObject(r));let r=new homonym_Homonym(t);return e.targetWord&&(r.targetWord=e.targetWord),r}get language(){return console.warn("Please use languageID instead"),ga.getLanguageCodeFromId(this.languageID)}get languageID(){if(this.lexemes&&this.lexemes[0]&&this.lexemes[0].lemma&&this.lexemes[0].lemma.languageID)return this.lexemes[0].lemma.languageID;throw new Error("Homonym has not been initialized properly. Unable to obtain language ID information.")}get inflections(){let e=[];for(const t of this.lexemes)e=e.concat(t.inflections);return e}isDisambiguated(){return this.lexemes.filter(e=>e.disambiguated).length>0}static disambiguate(e,t){if(0===t.length)return e;let r=t.shift(),a=[],n=[];for(let t of r.lexemes){let r=!1;for(let n of e.lexemes){let e=va.disambiguate(n,t);a.push(e),e.disambiguated&&(r=!0)}r||(t.disambiguated=!0,n.push(t))}let u=new homonym_Homonym([...a,...n],e.targetWord);return homonym_Homonym.disambiguate(u,t)}}var Fa=homonym_Homonym;var Sa=class{constructor(e="",t="",r=new Map([["default",t]])){this.uri=e,this.rights=r,this.rights.has("default")||this.rights.set("default",t)}toString(){return this.rights.get("default")}toLocaleString(e){return this.rights.get(e)||this.rights.get("default")}static getProxy(e=null,t={}){return new Proxy(t,{get:function(t,r){return"provider"===r?e:t[r]}})}};r.d(t,"Constants",function(){return a}),r.d(t,"Definition",function(){return Yr}),r.d(t,"DefinitionSet",function(){return definition_set_DefinitionSet}),r.d(t,"Feature",function(){return feature_Feature}),r.d(t,"GrmFeature",function(){return ha}),r.d(t,"FeatureType",function(){return ea}),r.d(t,"FeatureList",function(){return ma}),r.d(t,"FeatureImporter",function(){return Zr}),r.d(t,"Inflection",function(){return Aa}),r.d(t,"LanguageModelFactory",function(){return ga}),r.d(t,"Homonym",function(){return Fa}),r.d(t,"Lexeme",function(){return va}),r.d(t,"Lemma",function(){return ya}),r.d(t,"LatinLanguageModel",function(){return latin_language_model_LatinLanguageModel}),r.d(t,"GreekLanguageModel",function(){return greek_language_model_GreekLanguageModel}),r.d(t,"ArabicLanguageModel",function(){return arabic_language_model_ArabicLanguageModel}),r.d(t,"PersianLanguageModel",function(){return persian_language_model_PersianLanguageModel}),r.d(t,"ResourceProvider",function(){return Sa}),r.d(t,"Translation",function(){return _a})},function(e,t){for(var r=[],a=0;a<256;++a)r[a]=(a+256).toString(16).substr(1);e.exports=function(e,t){var a=t||0,n=r;return[n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]]].join("")}},function(e,t){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var a=new Uint8Array(16);e.exports=function(){return r(a),a}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}}])});

/***/ }),

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../node_modules/promise-polyfill/lib/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/promise-polyfill/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

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

module.exports = Promise;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "../node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "../node_modules/setimmediate/setImmediate.js":
/*!****************************************************!*\
  !*** ../node_modules/setimmediate/setImmediate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/timers-browserify/main.js":
/*!*************************************************!*\
  !*** ../node_modules/timers-browserify/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../node_modules/whatwg-fetch/fetch.js":
/*!*********************************************!*\
  !*** ../node_modules/whatwg-fetch/fetch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ "./alpheios/alpheios_adapter.js":
/*!**************************************!*\
  !*** ./alpheios/alpheios_adapter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.json */ "./alpheios/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./alpheios/config.json", 1);
/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! promise-polyfill */ "../node_modules/promise-polyfill/lib/index.js");
/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(promise_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! whatwg-fetch */ "../node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__);




class AlpheiosLemmaTranslationsAdapter {
  /**
   * A Client Adapter for the Alpheios V1 Lemma service
   * @constructor
   * @param {Object} config - JSON configuration object override
   */
  constructor (config = null) {
    if (config == null) {
      try {
        let fullconfig = JSON.parse(_config_json__WEBPACK_IMPORTED_MODULE_0__)
        this.config = fullconfig
      } catch (e) {
        this.config = _config_json__WEBPACK_IMPORTED_MODULE_0__
      }
    } else {
      this.config = config
    }
    this.mapLangUri = {}
  }
  /**
   * Loads a available res languages for available lang array from the config
   * @returns
   */
  async getAvailableResLang (avaLangIntem) {
    let adapter = this

    let urlAvaLangsRes = adapter.config.url + '/' + avaLangIntem + '/'

    let unparsed = await adapter._loadJSON(urlAvaLangsRes)

    let mapLangUri = {}
    unparsed.forEach(function (langItem) {
      mapLangUri[langItem.lang] = langItem.uri
    })

    adapter.mapLangUri[avaLangIntem] = mapLangUri
  }
  /**
   * Loads translationsList for an array of Lemmas from inLang to outLang
   * @param {Lemma []} lemmaList - An array of lemmas for translation
   * @param {string} inLang - source lang of the input
   * @param {string} outLang - result lang for the input
   * @returns {Promise} a Promise that resolves to the text contents of the loaded file
   */
  async getTranslationsList (lemmaList, inLang, outLang) {
    let adapter = this
    let input = ''

    for (let lemma of lemmaList) {
      input += lemma.word + ','
    }
    if (input.length > 0) {
      input = input.substr(0, input.length - 1)
    }

    if (adapter.mapLangUri[inLang] === undefined) {
      await adapter.getAvailableResLang(inLang)
    }

    if (input.length > 0 && adapter.mapLangUri[inLang] !== undefined && adapter.mapLangUri[inLang][outLang] !== undefined) {
      let urlTranslations = adapter.mapLangUri[inLang][outLang] + '?input=' + input
      let unparsed = await adapter._loadJSON(urlTranslations)
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
    return new promise_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a((resolve, reject) => {
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
            resolve(json)
          }
        ).catch((error) => {
          reject(error)
        })
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

/* harmony default export */ __webpack_exports__["default"] = (AlpheiosLemmaTranslationsAdapter);


/***/ }),

/***/ "./alpheios/config.json":
/*!******************************!*\
  !*** ./alpheios/config.json ***!
  \******************************/
/*! exports provided: url, availableLangSource, default */
/***/ (function(module) {

module.exports = {"url":"http://localhost:5000","availableLangSource":["lat"]};

/***/ }),

/***/ "./driver.js":
/*!*******************!*\
  !*** ./driver.js ***!
  \*******************/
/*! exports provided: LemmaTranslations, AlpheiosLemmaTranslationsAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alpheios_alpheios_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alpheios/alpheios_adapter */ "./alpheios/alpheios_adapter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlpheiosLemmaTranslationsAdapter", function() { return _alpheios_alpheios_adapter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _lemma_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lemma_translations */ "./lemma_translations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LemmaTranslations", function() { return _lemma_translations__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./lemma_translations.js":
/*!*******************************!*\
  !*** ./lemma_translations.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LemmaTranslations; });
/* harmony import */ var alpheios_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpheios-data-models */ "../node_modules/alpheios-data-models/dist/alpheios-data-models.min.js");
/* harmony import */ var alpheios_data_models__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpheios_data_models__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alpheios_alpheios_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alpheios/alpheios_adapter */ "./alpheios/alpheios_adapter.js");
/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! promise-polyfill */ "../node_modules/promise-polyfill/lib/index.js");
/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(promise_polyfill__WEBPACK_IMPORTED_MODULE_2__);




class LemmaTranslations {
  static get defaultLang () {
    return 'eng'
  }

  static defineOutLang (browserLang) {
    let langMap = {
      'en-US': 'eng',
      'fr': 'fre'
    }

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
    let outLang = this.defineOutLang(browserLang)

    console.log('***************************in fetchTranslations')
    return new promise_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a((resolve, reject) => {
      try {
        let lemmaAdapter = new _alpheios_alpheios_adapter__WEBPACK_IMPORTED_MODULE_1__["default"]()
        lemmaAdapter.getTranslationsList(lemmaList, inLang, outLang)
          .then(function (translationsList) {
            console.log('*****************************in Promise getTranslationsList', translationsList)
            for (let lemma of lemmaList) {
              alpheios_data_models__WEBPACK_IMPORTED_MODULE_0__["Translation"].loadTranslations(lemma, outLang, translationsList)
            }
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


/***/ })

/******/ });
});
//# sourceMappingURL=alpheios-lemma-client.js.map