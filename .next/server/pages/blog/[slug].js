module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog/[slug].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/highlight.js/lib/core.js":
/*!***********************************************!*\
  !*** ./node_modules/highlight.js/lib/core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function deepFreeze(obj) {
    if (obj instanceof Map) {
        obj.clear = obj.delete = obj.set = function () {
            throw new Error('map is read-only');
        };
    } else if (obj instanceof Set) {
        obj.add = obj.clear = obj.delete = function () {
            throw new Error('set is read-only');
        };
    }

    // Freeze self
    Object.freeze(obj);

    Object.getOwnPropertyNames(obj).forEach(function (name) {
        var prop = obj[name];

        // Freeze prop if it is an object
        if (typeof prop == 'object' && !Object.isFrozen(prop)) {
            deepFreeze(prop);
        }
    });

    return obj;
}

var deepFreezeEs6 = deepFreeze;
var _default = deepFreeze;
deepFreezeEs6.default = _default;

class Response {
  /**
   * @param {CompiledMode} mode
   */
  constructor(mode) {
    // eslint-disable-next-line no-undefined
    if (mode.data === undefined) mode.data = {};

    this.data = mode.data;
  }

  ignoreMatch() {
    this.ignore = true;
  }
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * performs a shallow merge of multiple objects into one
 *
 * @template T
 * @param {T} original
 * @param {Record<string,any>[]} objects
 * @returns {T} a single new object
 */
function inherit(original, ...objects) {
  /** @type Record<string,any> */
  const result = Object.create(null);

  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return /** @type {T} */ (result);
}

/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */

/** @typedef {{kind?: string, sublanguage?: boolean}} Node */
/** @typedef {{walk: (r: Renderer) => void}} Tree */
/** */

const SPAN_CLOSE = '</span>';

/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param {Node} node */
const emitsWrappingTags = (node) => {
  return !!node.kind;
};

/** @type {Renderer} */
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }

  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text) {
    this.buffer += escapeHTML(text);
  }

  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node)) return;

    let className = node.kind;
    if (!node.sublanguage) {
      className = `${this.classPrefix}${className}`;
    }
    this.span(className);
  }

  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node)) return;

    this.buffer += SPAN_CLOSE;
  }

  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }

  // helpers

  /**
   * Builds a span element
   *
   * @param {string} className */
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}

/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} | string} Node */
/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} } DataNode */
/**  */

class TokenTree {
  constructor() {
    /** @type DataNode */
    this.rootNode = { children: [] };
    this.stack = [this.rootNode];
  }

  get top() {
    return this.stack[this.stack.length - 1];
  }

  get root() { return this.rootNode; }

  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }

  /** @param {string} kind */
  openNode(kind) {
    /** @type Node */
    const node = { kind, children: [] };
    this.add(node);
    this.stack.push(node);
  }

  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    // eslint-disable-next-line no-undefined
    return undefined;
  }

  closeAllNodes() {
    while (this.closeNode());
  }

  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }

  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    // this does not
    return this.constructor._walk(builder, this.rootNode);
    // this works
    // return TokenTree._walk(builder, this.rootNode);
  }

  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }

  /**
   * @param {Node} node
   */
  static _collapse(node) {
    if (typeof node === "string") return;
    if (!node.children) return;

    if (node.children.every(el => typeof el === "string")) {
      // node.text = node.children.join("");
      // delete node.children;
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}

/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addKeyword(text, kind)
  - addText(text)
  - addSublanguage(emitter, subLanguageName)
  - finalize()
  - openNode(kind)
  - closeNode()
  - closeAllNodes()
  - toHTML()

*/

/**
 * @implements {Emitter}
 */
class TokenTreeEmitter extends TokenTree {
  /**
   * @param {*} options
   */
  constructor(options) {
    super();
    this.options = options;
  }

  /**
   * @param {string} text
   * @param {string} kind
   */
  addKeyword(text, kind) {
    if (text === "") { return; }

    this.openNode(kind);
    this.addText(text);
    this.closeNode();
  }

  /**
   * @param {string} text
   */
  addText(text) {
    if (text === "") { return; }

    this.add(text);
  }

  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  addSublanguage(emitter, name) {
    /** @type DataNode */
    const node = emitter.root;
    node.kind = name;
    node.sublanguage = true;
    this.add(node);
  }

  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }

  finalize() {
    return true;
  }
}

/**
 * @param {string} value
 * @returns {RegExp}
 * */
function escape(value) {
  return new RegExp(value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/**
 * @param {RegExp} re
 * @returns {number}
 */
function countMatchGroups(re) {
  return (new RegExp(re.toString() + '|')).exec('').length - 1;
}

/**
 * Does lexeme start with a regular expression match at the beginning
 * @param {RegExp} re
 * @param {string} lexeme
 */
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}

// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
 * @param {(string | RegExp)[]} regexps
 * @param {string} separator
 * @returns {string}
 */
function join(regexps, separator = "|") {
  // backreferenceRe matches an open parenthesis or backreference. To avoid
  // an incorrect parse, it additionally matches the following:
  // - [...] elements, where the meaning of parentheses and escapes change
  // - other escape sequences, so we do not misparse escape sequences as
  //   interesting elements
  // - non-matching or lookahead parentheses, which do not capture. These
  //   follow the '(' with a '?'.
  const backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  let numCaptures = 0;
  let ret = '';
  for (let i = 0; i < regexps.length; i++) {
    numCaptures += 1;
    const offset = numCaptures;
    let re = source(regexps[i]);
    if (i > 0) {
      ret += separator;
    }
    ret += "(";
    while (re.length > 0) {
      const match = backreferenceRe.exec(re);
      if (match == null) {
        ret += re;
        break;
      }
      ret += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === '\\' && match[1]) {
        // Adjust the backreference.
        ret += '\\' + String(Number(match[1]) + offset);
      } else {
        ret += match[0];
        if (match[0] === '(') {
          numCaptures++;
        }
      }
    }
    ret += ")";
  }
  return ret;
}

// Common regexps
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE = '[a-zA-Z]\\w*';
const UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
const NUMBER_RE = '\\b\\d+(\\.\\d+)?';
const C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
const BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
const RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

/**
* @param { Partial<Mode> & {binary?: string | RegExp} } opts
*/
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/);
  }
  return inherit({
    className: 'meta',
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (m, resp) => {
      if (m.index !== 0) resp.ignoreMatch();
    }
  }, opts);
};

// Common modes
const BACKSLASH_ESCAPE = {
  begin: '\\\\[\\s\\S]', relevance: 0
};
const APOS_STRING_MODE = {
  className: 'string',
  begin: '\'',
  end: '\'',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  className: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
/**
 * Creates a comment mode
 *
 * @param {string | RegExp} begin
 * @param {string | RegExp} end
 * @param {Mode | {}} [modeOptions]
 * @returns {Partial<Mode>}
 */
const COMMENT = function(begin, end, modeOptions = {}) {
  const mode = inherit(
    {
      className: 'comment',
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push(PHRASAL_WORDS_MODE);
  mode.contains.push({
    className: 'doctag',
    begin: '(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):',
    relevance: 0
  });
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT('//', '$');
const C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
const HASH_COMMENT_MODE = COMMENT('#', '$');
const NUMBER_MODE = {
  className: 'number',
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  className: 'number',
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  className: 'number',
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const CSS_NUMBER_MODE = {
  className: 'number',
  begin: NUMBER_RE + '(' +
    '%|em|ex|ch|rem' +
    '|vw|vh|vmin|vmax' +
    '|cm|mm|in|pt|pc|px' +
    '|deg|grad|rad|turn' +
    '|s|ms' +
    '|Hz|kHz' +
    '|dpi|dpcm|dppx' +
    ')?',
  relevance: 0
};
const REGEXP_MODE = {
  // this outer rule makes sure we actually have a WHOLE regex and not simply
  // an expression such as:
  //
  //     3 / something
  //
  // (which will then blow up when regex's `illegal` sees the newline)
  begin: /(?=\/[^/\n]*\/)/,
  contains: [{
    className: 'regexp',
    begin: /\//,
    end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  }]
};
const TITLE_MODE = {
  className: 'title',
  begin: IDENT_RE,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  className: 'title',
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
  relevance: 0
};

/**
 * Adds end same as begin mechanics to a mode
 *
 * Your mode must include at least a single () match group as that first match
 * group is what is used for comparison
 * @param {Partial<Mode>} mode
 */
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(mode,
    {
      /** @type {ModeCallback} */
      'on:begin': (m, resp) => { resp.data._beginMatch = m[1]; },
      /** @type {ModeCallback} */
      'on:end': (m, resp) => { if (resp.data._beginMatch !== m[1]) resp.ignoreMatch(); }
    });
};

var MODES = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: MATCH_NOTHING_RE,
    IDENT_RE: IDENT_RE,
    UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
    NUMBER_RE: NUMBER_RE,
    C_NUMBER_RE: C_NUMBER_RE,
    BINARY_NUMBER_RE: BINARY_NUMBER_RE,
    RE_STARTERS_RE: RE_STARTERS_RE,
    SHEBANG: SHEBANG,
    BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
    APOS_STRING_MODE: APOS_STRING_MODE,
    QUOTE_STRING_MODE: QUOTE_STRING_MODE,
    PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
    COMMENT: COMMENT,
    C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
    HASH_COMMENT_MODE: HASH_COMMENT_MODE,
    NUMBER_MODE: NUMBER_MODE,
    C_NUMBER_MODE: C_NUMBER_MODE,
    BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
    CSS_NUMBER_MODE: CSS_NUMBER_MODE,
    REGEXP_MODE: REGEXP_MODE,
    TITLE_MODE: TITLE_MODE,
    UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE,
    METHOD_GUARD: METHOD_GUARD,
    END_SAME_AS_BEGIN: END_SAME_AS_BEGIN
});

// Grammar extensions / plugins
// See: https://github.com/highlightjs/highlight.js/issues/2833

// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
// without requiring any underlying changes to the compiler internals.

// `compileMatch` being the perfect small example of now allowing a grammar
// author to write `match` when they desire to match a single expression rather
// than being forced to use `begin`.  The extension then just moves `match` into
// `begin` when it runs.  Ie, no features have been added, but we've just made
// the experience of writing (and reading grammars) a little bit nicer.

// ------

// TODO: We need negative look-behind support to do this properly
/**
 * Skip a match if it has a preceding dot
 *
 * This is used for `beginKeywords` to prevent matching expressions such as
 * `bob.keyword.do()`. The mode compiler automatically wires this up as a
 * special _internal_ 'on:begin' callback for modes with `beginKeywords`
 * @param {RegExpMatchArray} match
 * @param {CallbackResponse} response
 */
function skipIfhasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}


/**
 * `beginKeywords` syntactic sugar
 * @type {CompilerExt}
 */
function beginKeywords(mode, parent) {
  if (!parent) return;
  if (!mode.beginKeywords) return;

  // for languages with keywords that include non-word characters checking for
  // a word boundary is not sufficient, so instead we check for a word boundary
  // or whitespace - this does no harm in any case since our keyword engine
  // doesn't allow spaces in keywords anyways and we still check for the boundary
  // first
  mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)';
  mode.__beforeBegin = skipIfhasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;

  // prevents double relevance, the keywords themselves provide
  // relevance, the mode doesn't need to double it
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 0;
}

/**
 * Allow `illegal` to contain an array of illegal values
 * @type {CompilerExt}
 */
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal)) return;

  mode.illegal = either(...mode.illegal);
}

/**
 * `match` to match a single expression for readability
 * @type {CompilerExt}
 */
function compileMatch(mode, _parent) {
  if (!mode.match) return;
  if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");

  mode.begin = mode.match;
  delete mode.match;
}

/**
 * provides the default 1 relevance to all modes
 * @type {CompilerExt}
 */
function compileRelevance(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 1;
}

// keywords that should have no default relevance value
const COMMON_KEYWORDS = [
  'of',
  'and',
  'for',
  'in',
  'not',
  'or',
  'if',
  'then',
  'parent', // common variable name
  'list', // common variable name
  'value' // common variable name
];

const DEFAULT_KEYWORD_CLASSNAME = "keyword";

/**
 * Given raw keywords from a language definition, compile them.
 *
 * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
 * @param {boolean} caseInsensitive
 */
function compileKeywords(rawKeywords, caseInsensitive, className = DEFAULT_KEYWORD_CLASSNAME) {
  /** @type KeywordDict */
  const compiledKeywords = {};

  // input can be a string of keywords, an array of keywords, or a object with
  // named keys representing className (which can then point to a string or array)
  if (typeof rawKeywords === 'string') {
    compileList(className, rawKeywords.split(" "));
  } else if (Array.isArray(rawKeywords)) {
    compileList(className, rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(className) {
      // collapse all our objects back into the parent object
      Object.assign(
        compiledKeywords,
        compileKeywords(rawKeywords[className], caseInsensitive, className)
      );
    });
  }
  return compiledKeywords;

  // ---

  /**
   * Compiles an individual list of keywords
   *
   * Ex: "for if when while|5"
   *
   * @param {string} className
   * @param {Array<string>} keywordList
   */
  function compileList(className, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map(x => x.toLowerCase());
    }
    keywordList.forEach(function(keyword) {
      const pair = keyword.split('|');
      compiledKeywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
    });
  }
}

/**
 * Returns the proper score for a given keyword
 *
 * Also takes into account comment keywords, which will be scored 0 UNLESS
 * another score has been manually assigned.
 * @param {string} keyword
 * @param {string} [providedScore]
 */
function scoreForKeyword(keyword, providedScore) {
  // manual scores always win over common keywords
  // so you can force a score of 1 if you really insist
  if (providedScore) {
    return Number(providedScore);
  }

  return commonKeyword(keyword) ? 0 : 1;
}

/**
 * Determines if a given keyword is common or not
 *
 * @param {string} keyword */
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}

// compilation

/**
 * Compiles a language definition result
 *
 * Given the raw result of a language definition (Language), compiles this so
 * that it is ready for highlighting code.
 * @param {Language} language
 * @param {{plugins: HLJSPlugin[]}} opts
 * @returns {CompiledLanguage}
 */
function compileLanguage(language, { plugins }) {
  /**
   * Builds a regex with the case sensativility of the current language
   *
   * @param {RegExp | string} value
   * @param {boolean} [global]
   */
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
    );
  }

  /**
    Stores multiple regular expressions and allows you to quickly search for
    them all in a string simultaneously - returning the first match.  It does
    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
    and joined by `|` - using match groups to track position.  When a match is
    found checking which position in the array has content allows us to figure
    out which of the original regexes / match groups triggered the match.

    The match object itself (the result of `Regex.exec`) is returned but also
    enhanced by merging in any meta-data that was registered with the regex.
    This is how we keep track of which mode matched, and what type of rule
    (`illegal`, `begin`, end, etc).
  */
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      // @ts-ignore
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      opts.position = this.position++;
      // @ts-ignore
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }

    compile() {
      if (this.regexes.length === 0) {
        // avoids the need to check length every time exec is called
        // @ts-ignore
        this.exec = () => null;
      }
      const terminators = this.regexes.map(el => el[1]);
      this.matcherRe = langRe(join(terminators), true);
      this.lastIndex = 0;
    }

    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) { return null; }

      // eslint-disable-next-line no-undefined
      const i = match.findIndex((el, i) => i > 0 && el !== undefined);
      // @ts-ignore
      const matchData = this.matchIndexes[i];
      // trim off any earlier non-relevant match groups (ie, the other regex
      // match groups that make up the multi-matcher)
      match.splice(0, i);

      return Object.assign(match, matchData);
    }
  }

  /*
    Created to solve the key deficiently with MultiRegex - there is no way to
    test for multiple matches at a single location.  Why would we need to do
    that?  In the future a more dynamic engine will allow certain matches to be
    ignored.  An example: if we matched say the 3rd regex in a large group but
    decided to ignore it - we'd need to started testing again at the 4th
    regex... but MultiRegex itself gives us no real way to do that.

    So what this class creates MultiRegexs on the fly for whatever search
    position they are needed.

    NOTE: These additional MultiRegex objects are created dynamically.  For most
    grammars most of the time we will never actually need anything more than the
    first MultiRegex - so this shouldn't have too much overhead.

    Say this is our search group, and we match regex3, but wish to ignore it.

      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

    What we need is a new MultiRegex that only includes the remaining
    possibilities:

      regex4 | regex5                               ' ie, startAt = 3

    This class wraps all that complexity up in a simple API... `startAt` decides
    where in the array of expressions to start doing the matching. It
    auto-increments, so if a match is found at position 2, then startAt will be
    set to 3.  If the end is reached startAt will return to 0.

    MOST of the time the parser will be setting startAt manually to 0.
  */
  class ResumableMultiRegex {
    constructor() {
      // @ts-ignore
      this.rules = [];
      // @ts-ignore
      this.multiRegexes = [];
      this.count = 0;

      this.lastIndex = 0;
      this.regexIndex = 0;
    }

    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index]) return this.multiRegexes[index];

      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }

    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }

    considerAll() {
      this.regexIndex = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin") this.count++;
    }

    /** @param {string} s */
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      let result = m.exec(s);

      // The following is because we have no easy way to say "resume scanning at the
      // existing position but also skip the current rule ONLY". What happens is
      // all prior rules are also skipped which can result in matching the wrong
      // thing. Example of matching "booger":

      // our matcher is [string, "booger", number]
      //
      // ....booger....

      // if "booger" is ignored then we'd really need a regex to scan from the
      // SAME position for only: [string, number] but ignoring "booger" (if it
      // was the first match), a simple resume would scan ahead who knows how
      // far looking only for "number", ignoring potential string matches (or
      // future "booger" matches that might be valid.)

      // So what we do: We execute two matchers, one resuming at the same
      // position, but the second full matcher starting at the position after:

      //     /--- resume first regex match here (for [number])
      //     |/---- full match here for [string, "booger", number]
      //     vv
      // ....booger....

      // Which ever results in a match first is then used. So this 3-4 step
      // process essentially allows us to say "match at this position, excluding
      // a prior rule that was ignored".
      //
      // 1. Match "booger" first, ignore. Also proves that [string] does non match.
      // 2. Resume matching for [number]
      // 3. Match at index + 1 for [string, "booger", number]
      // 4. If #2 and #3 result in matches, which came first?
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex) ; else { // use the second matcher result
          const m2 = this.getMatcher(0);
          m2.lastIndex = this.lastIndex + 1;
          result = m2.exec(s);
        }
      }

      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          // wrap-around to considering all matches again
          this.considerAll();
        }
      }

      return result;
    }
  }

  /**
   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
   * the content and find matches.
   *
   * @param {CompiledMode} mode
   * @returns {ResumableMultiRegex}
   */
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();

    mode.contains.forEach(term => mm.addRule(term.begin, { rule: term, type: "begin" }));

    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }

    return mm;
  }

  /** skip vs abort vs ignore
   *
   * @skip   - The mode is still entered and exited normally (and contains rules apply),
   *           but all content is held and added to the parent buffer rather than being
   *           output when the mode ends.  Mostly used with `sublanguage` to build up
   *           a single large buffer than can be parsed by sublanguage.
   *
   *             - The mode begin ands ends normally.
   *             - Content matched is added to the parent mode buffer.
   *             - The parser cursor is moved forward normally.
   *
   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
   *           never matched) but DOES NOT continue to match subsequent `contains`
   *           modes.  Abort is bad/suboptimal because it can result in modes
   *           farther down not getting applied because an earlier rule eats the
   *           content but then aborts.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is added to the mode buffer.
   *             - The parser cursor is moved forward accordingly.
   *
   * @ignore - Ignores the mode (as if it never matched) and continues to match any
   *           subsequent `contains` modes.  Ignore isn't technically possible with
   *           the current parser implementation.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is ignored.
   *             - The parser cursor is not moved forward.
   */

  /**
   * Compiles an individual mode
   *
   * This can raise an error if the mode contains certain detectable known logic
   * issues.
   * @param {Mode} mode
   * @param {CompiledMode | null} [parent]
   * @returns {CompiledMode | never}
   */
  function compileMode(mode, parent) {
    const cmode = /** @type CompiledMode */ (mode);
    if (mode.compiled) return cmode;

    [
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      compileMatch
    ].forEach(ext => ext(mode, parent));

    language.compilerExtensions.forEach(ext => ext(mode, parent));

    // __beforeBegin is considered private API, internal use only
    mode.__beforeBegin = null;

    [
      beginKeywords,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      compileIllegal,
      // default to 1 relevance if not specified
      compileRelevance
    ].forEach(ext => ext(mode, parent));

    mode.compiled = true;

    let keywordPattern = null;
    if (typeof mode.keywords === "object") {
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }

    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }

    // both are not allowed
    if (mode.lexemes && keywordPattern) {
      throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
    }

    // `mode.lexemes` was the old standard before we added and now recommend
    // using `keywords.$pattern` to pass the keyword pattern
    keywordPattern = keywordPattern || mode.lexemes || /\w+/;
    cmode.keywordPatternRe = langRe(keywordPattern, true);

    if (parent) {
      if (!mode.begin) mode.begin = /\B|\b/;
      cmode.beginRe = langRe(mode.begin);
      if (mode.endSameAsBegin) mode.end = mode.begin;
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
      if (mode.end) cmode.endRe = langRe(mode.end);
      cmode.terminatorEnd = source(mode.end) || '';
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? '|' : '') + parent.terminatorEnd;
      }
    }
    if (mode.illegal) cmode.illegalRe = langRe(/** @type {RegExp | string} */ (mode.illegal));
    if (!mode.contains) mode.contains = [];

    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expandOrCloneMode(c === 'self' ? mode : c);
    }));
    mode.contains.forEach(function(c) { compileMode(/** @type Mode */ (c), cmode); });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }

  if (!language.compilerExtensions) language.compilerExtensions = [];

  // self is not valid at the top-level
  if (language.contains && language.contains.includes('self')) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }

  // we need a null object, which inherit will guarantee
  language.classNameAliases = inherit(language.classNameAliases || {});

  return compileMode(/** @type Mode */ (language));
}

/**
 * Determines if a mode has a dependency on it's parent or not
 *
 * If a mode does have a parent dependency then often we need to clone it if
 * it's used in multiple places so that each copy points to the correct parent,
 * where-as modes without a parent can often safely be re-used at the bottom of
 * a mode chain.
 *
 * @param {Mode | null} mode
 * @returns {boolean} - is there a dependency on the parent?
 * */
function dependencyOnParent(mode) {
  if (!mode) return false;

  return mode.endsWithParent || dependencyOnParent(mode.starts);
}

/**
 * Expands a mode or clones it if necessary
 *
 * This is necessary for modes with parental dependenceis (see notes on
 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
 * exploded into their own individual modes at compile time.
 *
 * @param {Mode} mode
 * @returns {Mode | Mode[]}
 * */
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit(mode, { variants: null }, variant);
    });
  }

  // EXPAND
  // if we have variants then essentially "replace" the mode with the variants
  // this happens in compileMode, where this function is called from
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }

  // CLONE
  // if we have dependencies on parents then we need a unique
  // instance of ourselves, so we can be reused with many
  // different parents without issue
  if (dependencyOnParent(mode)) {
    return inherit(mode, { starts: mode.starts ? inherit(mode.starts) : null });
  }

  if (Object.isFrozen(mode)) {
    return inherit(mode);
  }

  // no special dependency issues, just return ourselves
  return mode;
}

var version = "10.6.0";

// @ts-nocheck

function hasValueOrEmptyAttribute(value) {
  return Boolean(value || value === "");
}

function BuildVuePlugin(hljs) {
  const Component = {
    props: ["language", "code", "autodetect"],
    data: function() {
      return {
        detectedLanguage: "",
        unknownLanguage: false
      };
    },
    computed: {
      className() {
        if (this.unknownLanguage) return "";

        return "hljs " + this.detectedLanguage;
      },
      highlighted() {
        // no idea what language to use, return raw code
        if (!this.autoDetect && !hljs.getLanguage(this.language)) {
          console.warn(`The language "${this.language}" you specified could not be found.`);
          this.unknownLanguage = true;
          return escapeHTML(this.code);
        }

        let result = {};
        if (this.autoDetect) {
          result = hljs.highlightAuto(this.code);
          this.detectedLanguage = result.language;
        } else {
          result = hljs.highlight(this.language, this.code, this.ignoreIllegals);
          this.detectedLanguage = this.language;
        }
        return result.value;
      },
      autoDetect() {
        return !this.language || hasValueOrEmptyAttribute(this.autodetect);
      },
      ignoreIllegals() {
        return true;
      }
    },
    // this avoids needing to use a whole Vue compilation pipeline just
    // to build Highlight.js
    render(createElement) {
      return createElement("pre", {}, [
        createElement("code", {
          class: this.className,
          domProps: { innerHTML: this.highlighted }
        })
      ]);
    }
    // template: `<pre><code :class="className" v-html="highlighted"></code></pre>`
  };

  const VuePlugin = {
    install(Vue) {
      Vue.component('highlightjs', Component);
    }
  };

  return { Component, VuePlugin };
}

/* plugin itself */

/** @type {HLJSPlugin} */
const mergeHTMLPlugin = {
  "after:highlightBlock": ({ block, result, text }) => {
    const originalStream = nodeStream(block);
    if (!originalStream.length) return;

    const resultNode = document.createElement('div');
    resultNode.innerHTML = result.value;
    result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
  }
};

/* Stream merging support functions */

/**
 * @typedef Event
 * @property {'start'|'stop'} event
 * @property {number} offset
 * @property {Node} node
 */

/**
 * @param {Node} node
 */
function tag(node) {
  return node.nodeName.toLowerCase();
}

/**
 * @param {Node} node
 */
function nodeStream(node) {
  /** @type Event[] */
  const result = [];
  (function _nodeStream(node, offset) {
    for (let child = node.firstChild; child; child = child.nextSibling) {
      if (child.nodeType === 3) {
        offset += child.nodeValue.length;
      } else if (child.nodeType === 1) {
        result.push({
          event: 'start',
          offset: offset,
          node: child
        });
        offset = _nodeStream(child, offset);
        // Prevent void elements from having an end tag that would actually
        // double them in the output. There are more void elements in HTML
        // but we list only those realistically expected in code display.
        if (!tag(child).match(/br|hr|img|input/)) {
          result.push({
            event: 'stop',
            offset: offset,
            node: child
          });
        }
      }
    }
    return offset;
  })(node, 0);
  return result;
}

/**
 * @param {any} original - the original stream
 * @param {any} highlighted - stream of the highlighted source
 * @param {string} value - the original source itself
 */
function mergeStreams(original, highlighted, value) {
  let processed = 0;
  let result = '';
  const nodeStack = [];

  function selectStream() {
    if (!original.length || !highlighted.length) {
      return original.length ? original : highlighted;
    }
    if (original[0].offset !== highlighted[0].offset) {
      return (original[0].offset < highlighted[0].offset) ? original : highlighted;
    }

    /*
    To avoid starting the stream just before it should stop the order is
    ensured that original always starts first and closes last:

    if (event1 == 'start' && event2 == 'start')
      return original;
    if (event1 == 'start' && event2 == 'stop')
      return highlighted;
    if (event1 == 'stop' && event2 == 'start')
      return original;
    if (event1 == 'stop' && event2 == 'stop')
      return highlighted;

    ... which is collapsed to:
    */
    return highlighted[0].event === 'start' ? original : highlighted;
  }

  /**
   * @param {Node} node
   */
  function open(node) {
    /** @param {Attr} attr */
    function attributeString(attr) {
      return ' ' + attr.nodeName + '="' + escapeHTML(attr.value) + '"';
    }
    // @ts-ignore
    result += '<' + tag(node) + [].map.call(node.attributes, attributeString).join('') + '>';
  }

  /**
   * @param {Node} node
   */
  function close(node) {
    result += '</' + tag(node) + '>';
  }

  /**
   * @param {Event} event
   */
  function render(event) {
    (event.event === 'start' ? open : close)(event.node);
  }

  while (original.length || highlighted.length) {
    let stream = selectStream();
    result += escapeHTML(value.substring(processed, stream[0].offset));
    processed = stream[0].offset;
    if (stream === original) {
      /*
      On any opening or closing tag of the original markup we first close
      the entire highlighted node stack, then render the original tag along
      with all the following original tags at the same offset and then
      reopen all the tags on the highlighted stack.
      */
      nodeStack.reverse().forEach(close);
      do {
        render(stream.splice(0, 1)[0]);
        stream = selectStream();
      } while (stream === original && stream.length && stream[0].offset === processed);
      nodeStack.reverse().forEach(open);
    } else {
      if (stream[0].event === 'start') {
        nodeStack.push(stream[0].node);
      } else {
        nodeStack.pop();
      }
      render(stream.splice(0, 1)[0]);
    }
  }
  return result + escapeHTML(value.substr(processed));
}

/*

For the reasoning behind this please see:
https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

*/

/**
 * @param {string} message
 */
const error = (message) => {
  console.error(message);
};

/**
 * @param {string} message
 * @param {any} args
 */
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};

/**
 * @param {string} version
 * @param {string} message
 */
const deprecated = (version, message) => {
  console.log(`Deprecated as of ${version}. ${message}`);
};

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

const escape$1 = escapeHTML;
const inherit$1 = inherit;
const NO_MATCH = Symbol("nomatch");

/**
 * @param {any} hljs - object that is extended (legacy)
 * @returns {HLJSApi}
 */
const HLJS = function(hljs) {
  // Global internal variables used within the highlight.js library.
  /** @type {Record<string, Language>} */
  const languages = Object.create(null);
  /** @type {Record<string, string>} */
  const aliases = Object.create(null);
  /** @type {HLJSPlugin[]} */
  const plugins = [];

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  let SAFE_MODE = true;
  const fixMarkupRe = /(^(<[^>]+>|\t|)+|\n)/gm;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  /** @type {Language} */
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: 'Plain text', contains: [] };

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  /** @type HLJSOptions */
  let options = {
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: TokenTreeEmitter
  };

  /* Utility functions */

  /**
   * Tests a language name to see if highlighting should be skipped
   * @param {string} languageName
   */
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }

  /**
   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
   */
  function blockLanguage(block) {
    let classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    return classes
      .split(/\s+/)
      .find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }

  /**
   * Core highlighting function.
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} code - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode} [continuation] - current continuation mode, if any
   *
   * @returns {HighlightResult} Result - an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {string} code - the original raw code
   * @property {CompiledMode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */
  function highlight(languageName, code, ignoreIllegals, continuation) {
    /** @type {BeforeHighlightContext} */
    const context = {
      code,
      language: languageName
    };
    // the plugin can change the desired language or the code to be highlighted
    // just be changing the object it was passed
    fire("before:highlight", context);

    // a before plugin can usurp the result completely by providing it's own
    // in which case we don't even need to call highlight
    const result = context.result
      ? context.result
      : _highlight(context.language, context.code, ignoreIllegals, continuation);

    result.code = context.code;
    // the plugin can change anything in result to suite it
    fire("after:highlight", result);

    return result;
  }

  /**
   * private highlight that's used internally and does not fire callbacks
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} code - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode} [continuation] - current continuation mode, if any
   * @returns {HighlightResult} - result of the highlight operation
  */
  function _highlight(languageName, code, ignoreIllegals, continuation) {
    const codeToHighlight = code;

    /**
     * Return keyword data if a match is a keyword
     * @param {CompiledMode} mode - current mode
     * @param {RegExpMatchArray} match - regexp match data
     * @returns {KeywordData | false}
     */
    function keywordData(mode, match) {
      const matchText = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return Object.prototype.hasOwnProperty.call(mode.keywords, matchText) && mode.keywords[matchText];
    }

    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer);
        return;
      }

      let lastIndex = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(modeBuffer);
      let buf = "";

      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const data = keywordData(top, match);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";

          relevance += keywordRelevance;
          const cssClass = language.classNameAliases[kind] || kind;
          emitter.addKeyword(match[0], cssClass);
        } else {
          buf += match[0];
        }
        lastIndex = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substr(lastIndex);
      emitter.addText(buf);
    }

    function processSubLanguage() {
      if (modeBuffer === "") return;
      /** @type HighlightResult */
      let result = null;

      if (typeof top.subLanguage === 'string') {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = /** @type {CompiledMode} */ (result.top);
      } else {
        result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      emitter.addSublanguage(result.emitter, result.language);
    }

    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = '';
    }

    /**
     * @param {Mode} mode - new mode to start
     */
    function startNewMode(mode) {
      if (mode.className) {
        emitter.openNode(language.classNameAliases[mode.className] || mode.className);
      }
      top = Object.create(mode, { parent: { value: top } });
      return top;
    }

    /**
     * @param {CompiledMode } mode - the mode to potentially end
     * @param {RegExpMatchArray} match - the latest match
     * @param {string} matchPlusRemainder - match plus remainder of content
     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
     */
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);

      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.ignore) matched = false;
        }

        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      // even if on:end fires an `ignore` it's still possible
      // that we might trigger the end node because of a parent mode
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }

    /**
     * Handle matching but then ignoring a sequence of text
     *
     * @param {string} lexeme - string containing full match text
     */
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        // no more regexs to potentially match here, so we move the cursor forward one
        // space
        modeBuffer += lexeme[0];
        return 1;
      } else {
        // no need to move the cursor, we still have additional regexes to try and
        // match at this very spot
        resumeScanAtSamePosition = true;
        return 0;
      }
    }

    /**
     * Handle the start of a new potential mode match
     *
     * @param {EnhancedMatch} match - the current match
     * @returns {number} how far to advance the parse cursor
     */
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;

      const resp = new Response(newMode);
      // first internal before callbacks, then the public ones
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb) continue;
        cb(match, resp);
        if (resp.ignore) return doIgnore(lexeme);
      }

      if (newMode && newMode.endSameAsBegin) {
        newMode.endRe = escape(lexeme);
      }

      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode);
      // if (mode["after:begin"]) {
      //   let resp = new Response(mode);
      //   mode["after:begin"](match, resp);
      // }
      return newMode.returnBegin ? 0 : lexeme.length;
    }

    /**
     * Handle the potential end of mode
     *
     * @param {RegExpMatchArray} match - the current match
     */
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substr(match.index);

      const endMode = endOfMode(top, match, matchPlusRemainder);
      if (!endMode) { return NO_MATCH; }

      const origin = top;
      if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top.className) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== endMode.parent);
      if (endMode.starts) {
        if (endMode.endSameAsBegin) {
          endMode.starts.endRe = endMode.endRe;
        }
        startNewMode(endMode.starts);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    function processContinuations() {
      const list = [];
      for (let current = top; current !== language; current = current.parent) {
        if (current.className) {
          list.unshift(current.className);
        }
      }
      list.forEach(item => emitter.openNode(item));
    }

    /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
    let lastMatch = {};

    /**
     *  Process an individual match
     *
     * @param {string} textBeforeMatch - text preceeding the match (since the last match)
     * @param {EnhancedMatch} [match] - the match itself
     */
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      modeBuffer += textBeforeMatch;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          /** @type {AnnotatedError} */
          const err = new Error('0 width match regex');
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;

      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        // illegal match, we do not continue processing
        /** @type {AnnotatedError} */
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }

      // edge case for when illegal matches $ (end of line) which is technically
      // a 0 width match but not a begin/end match so it's not caught by the
      // first handler (when ignoreIllegals is true)
      if (match.type === "illegal" && lexeme === "") {
        // advance so we aren't stuck in an infinite loop
        return 1;
      }

      // infinite loops are BAD, this is a last ditch catch all. if we have a
      // decent number of iterations yet our index (cursor position in our
      // parsing) still 3x behind our index then something is very wrong
      // so we bail
      if (iterations > 100000 && iterations > match.index * 3) {
        const err = new Error('potential infinite loop, way more iterations than matches');
        throw err;
      }

      /*
      Why might be find ourselves here?  Only one occasion now.  An end match that was
      triggered but could not be completed.  When might this happen?  When an `endSameasBegin`
      rule sets the end rule to a specific match.  Since the overall mode termination rule that's
      being used to scan the text isn't recompiled that means that any match that LOOKS like
      the end (but is not, because it is not an exact match to the beginning) will
      end up here.  A definite end match, but when `doEndMatch` tries to "reapply"
      the end rule and fails to match, we wind up here, and just silently ignore the end.

      This causes no real harm other than stopping a few times too many.
      */

      modeBuffer += lexeme;
      return lexeme.length;
    }

    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }

    const md = compileLanguage(language, { plugins });
    let result = '';
    /** @type {CompiledMode} */
    let top = continuation || md;
    /** @type Record<string,CompiledMode> */
    const continuations = {}; // keep continuations for sub-languages
    const emitter = new options.__emitter(options);
    processContinuations();
    let modeBuffer = '';
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;

    try {
      top.matcher.considerAll();

      for (;;) {
        iterations++;
        if (resumeScanAtSamePosition) {
          // only regexes not matched previously will now be
          // considered for a potential match
          resumeScanAtSamePosition = false;
        } else {
          top.matcher.considerAll();
        }
        top.matcher.lastIndex = index;

        const match = top.matcher.exec(codeToHighlight);
        // console.log("match", match[0], match.rule && match.rule.begin)

        if (!match) break;

        const beforeMatch = codeToHighlight.substring(index, match.index);
        const processedCount = processLexeme(beforeMatch, match);
        index = match.index + processedCount;
      }
      processLexeme(codeToHighlight.substr(index));
      emitter.closeAllNodes();
      emitter.finalize();
      result = emitter.toHTML();

      return {
        // avoid possible breakage with v10 clients expecting
        // this to always be an integer
        relevance: Math.floor(relevance),
        value: result,
        language: languageName,
        illegal: false,
        emitter: emitter,
        top: top
      };
    } catch (err) {
      if (err.message && err.message.includes('Illegal')) {
        return {
          illegal: true,
          illegalBy: {
            msg: err.message,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode
          },
          sofar: result,
          relevance: 0,
          value: escape$1(codeToHighlight),
          emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          illegal: false,
          relevance: 0,
          value: escape$1(codeToHighlight),
          emitter: emitter,
          language: languageName,
          top: top,
          errorRaised: err
        };
      } else {
        throw err;
      }
    }
  }

  /**
   * returns a valid highlight result, without actually doing any actual work,
   * auto highlight starts with this and it's possible for small snippets that
   * auto-detection may not find a better match
   * @param {string} code
   * @returns {HighlightResult}
   */
  function justTextHighlightResult(code) {
    const result = {
      relevance: 0,
      emitter: new options.__emitter(options),
      value: escape$1(code),
      illegal: false,
      top: PLAINTEXT_LANGUAGE
    };
    result.emitter.addText(code);
    return result;
  }

  /**
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

    @param {string} code
    @param {Array<string>} [languageSubset]
    @returns {AutoHighlightResult}
  */
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);

    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(name =>
      _highlight(name, code, false)
    );
    results.unshift(plaintext); // plaintext is always an option

    const sorted = results.sort((a, b) => {
      // sort base on relevance
      if (a.relevance !== b.relevance) return b.relevance - a.relevance;

      // always award the tie to the base language
      // ie if C++ and Arduino are tied, it's more likely to be C++
      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1;
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1;
        }
      }

      // otherwise say they are equal, which has the effect of sorting on
      // relevance while preserving the original ordering - which is how ties
      // have historically been settled, ie the language that comes first always
      // wins in the case of a tie
      return 0;
    });

    const [best, secondBest] = sorted;

    /** @type {AutoHighlightResult} */
    const result = best;
    result.second_best = secondBest;

    return result;
  }

  /**
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

    @param {string} html
    @returns {string}
  */
  function fixMarkup(html) {
    if (!(options.tabReplace || options.useBR)) {
      return html;
    }

    return html.replace(fixMarkupRe, match => {
      if (match === '\n') {
        return options.useBR ? '<br>' : match;
      } else if (options.tabReplace) {
        return match.replace(/\t/g, options.tabReplace);
      }
      return match;
    });
  }

  /**
   * Builds new class name for block given the language name
   *
   * @param {HTMLElement} element
   * @param {string} [currentLang]
   * @param {string} [resultLang]
   */
  function updateClassName(element, currentLang, resultLang) {
    const language = currentLang ? aliases[currentLang] : resultLang;

    element.classList.add("hljs");
    if (language) element.classList.add(language);
  }

  /** @type {HLJSPlugin} */
  const brPlugin = {
    "before:highlightBlock": ({ block }) => {
      if (options.useBR) {
        block.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ /]*>/g, '\n');
      }
    },
    "after:highlightBlock": ({ result }) => {
      if (options.useBR) {
        result.value = result.value.replace(/\n/g, "<br>");
      }
    }
  };

  const TAB_REPLACE_RE = /^(<[^>]+>|\t)+/gm;
  /** @type {HLJSPlugin} */
  const tabReplacePlugin = {
    "after:highlightBlock": ({ result }) => {
      if (options.tabReplace) {
        result.value = result.value.replace(TAB_REPLACE_RE, (m) =>
          m.replace(/\t/g, options.tabReplace)
        );
      }
    }
  };

  /**
   * Applies highlighting to a DOM node containing code. Accepts a DOM node and
   * two optional parameters for fixMarkup.
   *
   * @param {HighlightedHTMLElement} element - the HTML element to highlight
  */
  function highlightBlock(element) {
    /** @type HTMLElement */
    let node = null;
    const language = blockLanguage(element);

    if (shouldNotHighlight(language)) return;

    fire("before:highlightBlock",
      { block: element, language: language });

    node = element;
    const text = node.textContent;
    const result = language ? highlight(language, text, true) : highlightAuto(text);

    fire("after:highlightBlock", { block: element, result, text });

    element.innerHTML = result.value;
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      // TODO: remove with version 11.0
      re: result.relevance,
      relavance: result.relevance
    };
    if (result.second_best) {
      element.second_best = {
        language: result.second_best.language,
        // TODO: remove with version 11.0
        re: result.second_best.relevance,
        relavance: result.second_best.relevance
      };
    }
  }

  /**
   * Updates highlight.js global options with the passed options
   *
   * @param {Partial<HLJSOptions>} userOptions
   */
  function configure(userOptions) {
    if (userOptions.useBR) {
      deprecated("10.3.0", "'useBR' will be removed entirely in v11.0");
      deprecated("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559");
    }
    options = inherit$1(options, userOptions);
  }

  /**
   * Highlights to all <pre><code> blocks on a page
   *
   * @type {Function & {called?: boolean}}
   */
  // TODO: remove v12, deprecated
  const initHighlighting = () => {
    if (initHighlighting.called) return;
    initHighlighting.called = true;

    deprecated("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead.");

    const blocks = document.querySelectorAll('pre code');
    blocks.forEach(highlightBlock);
  };

  // Higlights all when DOMContentLoaded fires
  // TODO: remove v12, deprecated
  function initHighlightingOnLoad() {
    deprecated("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead.");
    wantsHighlight = true;
  }

  let wantsHighlight = false;
  let domLoaded = false;

  /**
   * auto-highlights all pre>code elements on the page
   */
  function highlightAll() {
    // if we are called too early in the loading process
    if (!domLoaded) { wantsHighlight = true; return; }

    const blocks = document.querySelectorAll('pre code');
    blocks.forEach(highlightBlock);
  }

  function boot() {
    domLoaded = true;
    // if a highlight was requested before DOM was loaded, do now
    if (wantsHighlight) highlightAll();
  }

  // make sure we are in the browser environment
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('DOMContentLoaded', boot, false);
  }

  /**
   * Register a language grammar module
   *
   * @param {string} languageName
   * @param {LanguageFn} languageDefinition
   */
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      // hard or soft error
      if (!SAFE_MODE) { throw error$1; } else { error(error$1); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    // give it a temporary name if it doesn't have one in the meta-data
    if (!lang.name) lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }

  /**
   * @returns {string[]} List of language internal names
   */
  function listLanguages() {
    return Object.keys(languages);
  }

  /**
    intended usage: When one language truly requires another

    Unlike `getLanguage`, this will throw when the requested language
    is not available.

    @param {string} name - name of the language to fetch/require
    @returns {Language | never}
  */
  function requireLanguage(name) {
    deprecated("10.4.0", "requireLanguage will be removed entirely in v11.");
    deprecated("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");

    const lang = getLanguage(name);
    if (lang) { return lang; }

    const err = new Error('The \'{}\' language is required, but not loaded.'.replace('{}', name));
    throw err;
  }

  /**
   * @param {string} name - name of the language to retrieve
   * @returns {Language | undefined}
   */
  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /**
   *
   * @param {string|string[]} aliasList - single alias or list of aliases
   * @param {{languageName: string}} opts
   */
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList];
    }
    aliasList.forEach(alias => { aliases[alias] = languageName; });
  }

  /**
   * Determines if a given language has auto-detection enabled
   * @param {string} name - name of the language
   */
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function addPlugin(plugin) {
    plugins.push(plugin);
  }

  /**
   *
   * @param {PluginEvent} event
   * @param {any} args
   */
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }

  /**
  Note: fixMarkup is deprecated and will be removed entirely in v11

  @param {string} arg
  @returns {string}
  */
  function deprecateFixMarkup(arg) {
    deprecated("10.2.0", "fixMarkup will be removed entirely in v11.0");
    deprecated("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534");

    return fixMarkup(arg);
  }

  /* Interface definition */
  Object.assign(hljs, {
    highlight,
    highlightAuto,
    highlightAll,
    fixMarkup: deprecateFixMarkup,
    highlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    requireLanguage,
    autoDetection,
    inherit: inherit$1,
    addPlugin,
    // plugins for frameworks
    vuePlugin: BuildVuePlugin(hljs).VuePlugin
  });

  hljs.debugMode = function() { SAFE_MODE = false; };
  hljs.safeMode = function() { SAFE_MODE = true; };
  hljs.versionString = version;

  for (const key in MODES) {
    // @ts-ignore
    if (typeof MODES[key] === "object") {
      // @ts-ignore
      deepFreezeEs6(MODES[key]);
    }
  }

  // merge all the modes/regexs into our main object
  Object.assign(hljs, MODES);

  // built-in plugins, likely to be moved out of core in the future
  hljs.addPlugin(brPlugin); // slated to be removed in v11
  hljs.addPlugin(mergeHTMLPlugin);
  hljs.addPlugin(tabReplacePlugin);
  return hljs;
};

// export an "instance" of the highlighter
var highlight = HLJS({});

module.exports = highlight;


/***/ }),

/***/ "./node_modules/highlight.js/lib/highlight.js":
/*!****************************************************!*\
  !*** ./node_modules/highlight.js/lib/highlight.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file has been deprecated in favor of core.js
var hljs = __webpack_require__(/*! ./core */ "./node_modules/highlight.js/lib/core.js");


/***/ }),

/***/ "./node_modules/highlight.js/styles/monokai.css":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/styles/monokai.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) {}

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/lib/posts */ "./src/lib/posts.tsx");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js */ "highlight.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_highlight_js_styles_monokai_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/highlight.js/styles/monokai.css */ "./node_modules/highlight.js/styles/monokai.css");
/* harmony import */ var _node_modules_highlight_js_styles_monokai_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_highlight_js_styles_monokai_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/highlight.js/lib/highlight */ "./node_modules/highlight.js/lib/highlight.js");
/* harmony import */ var _node_modules_highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Slug.module.css */ "./styles/Slug.module.css");
/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_PageHeading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/components/PageHeading */ "./src/components/PageHeading.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "@material-ui/icons/GitHub");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_components_TopicsDisplay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/components/TopicsDisplay */ "./src/components/TopicsDisplay.tsx");
/* harmony import */ var _src_components_PreviewCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/components/PreviewCard */ "./src/components/PreviewCard.tsx");
/* harmony import */ var _src_types_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/types/constants */ "./src/types/constants.ts");


var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\pages\\blog\\[slug].tsx";















const Slug = ({
  postData,
  nextPath
}) => {
  marked__WEBPACK_IMPORTED_MODULE_3___default.a.setOptions({
    highlight: function (code) {
      return highlight_js__WEBPACK_IMPORTED_MODULE_5___default.a.highlightAuto(code).value;
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.querySelectorAll('pre code').forEach(block => {
      highlight_js__WEBPACK_IMPORTED_MODULE_5___default.a.highlightBlock(block);
    });
  }, [postData]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: postData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: postData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "article:published_time",
        content: `${postData.date}T10:00:00Z`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:card",
        content: "summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:description",
        content: postData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:title",
        content: postData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:image",
        content: `${_src_types_constants__WEBPACK_IMPORTED_MODULE_14__["BASE_URL"]}/small/${postData.id}.png`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "article"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: postData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: postData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: `${_src_types_constants__WEBPACK_IMPORTED_MODULE_14__["BASE_URL"]}/blog/${postData.id}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: _src_types_constants__WEBPACK_IMPORTED_MODULE_14__["NAME"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: `${_src_types_constants__WEBPACK_IMPORTED_MODULE_14__["BASE_URL"]}/small/${postData.id}.png`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:secure_url",
        content: `${_src_types_constants__WEBPACK_IMPORTED_MODULE_14__["BASE_URL"]}/small/${postData.id}.png`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_8___default.a['text-content'],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_PageHeading__WEBPACK_IMPORTED_MODULE_9__["PageHeading"], {
        title: postData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_8___default.a['image-container'],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.info,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
          variant: "body1",
          children: [postData.date, " \u2014 written by", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "http://www.github.com/saiemgilani",
            target: "_blank",
            rel: "noreferrer",
            style: {
              display: 'inline-flex',
              alignItems: 'center'
            },
            children: ["Saiem Gilani ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_11___default.a, {
              fontSize: "small",
              style: {
                marginLeft: 10
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 28
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_TopicsDisplay__WEBPACK_IMPORTED_MODULE_12__["default"], {
          topics: postData.topics,
          n: 10,
          noMargin: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_8___default.a['image-container'],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardMedia"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: postData.title,
            loading: "lazy",
            src: `/small/${postData.id}.png`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_8___default.a['post-container'],
      dangerouslySetInnerHTML: {
        __html: marked__WEBPACK_IMPORTED_MODULE_3___default()(postData.content)
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_8___default.a['post-container'],
      style: {
        paddingTop: 50
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h4",
        component: "p",
        style: {
          paddingBottom: 20
        },
        children: "Recommended"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_PreviewCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
        post: nextPath,
        noMargin: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

const getStaticProps = async ({
  params: {
    slug
  }
}) => {
  const postData = Object(_src_lib_posts__WEBPACK_IMPORTED_MODULE_2__["getPost"])(slug, true);
  const paths = Object(_src_lib_posts__WEBPACK_IMPORTED_MODULE_2__["getSortedPostsData"])();
  const nextPath = !postData.recommended ? paths.reduce((prev, curr, i) => curr.id === slug && i >= 1 ? paths[i - 1] : curr, paths[paths.length - 1]) : paths.filter(p => p.id === postData.recommended).pop();
  return {
    props: {
      postData,
      nextPath
    }
  };
};
const getStaticPaths = async () => {
  const paths = Object(_src_lib_posts__WEBPACK_IMPORTED_MODULE_2__["getSortedPostsData"])().map(({
    id
  }) => ({
    params: {
      slug: id
    }
  }));
  return {
    paths,
    fallback: false
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Slug);

/***/ }),

/***/ "./src/components/PageHeading.tsx":
/*!****************************************!*\
  !*** ./src/components/PageHeading.tsx ***!
  \****************************************/
/*! exports provided: PageHeading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeading", function() { return PageHeading; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Shared.module.css */ "./styles/Shared.module.css");
/* harmony import */ var _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\src\\components\\PageHeading.tsx";




const PageHeading = ({
  title
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      className: _styles_Shared_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headings,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
        p: 5,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
          variant: "h3",
          component: "h1",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/PreviewCard.tsx":
/*!****************************************!*\
  !*** ./src/components/PreviewCard.tsx ***!
  \****************************************/
/*! exports provided: PreviewCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewCard", function() { return PreviewCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\src\\components\\PreviewCard.tsx";












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  card: {
    width: 400,
    [theme.breakpoints.down('md')]: {
      width: 430
    },
    [theme.breakpoints.down('sm')]: {
      width: 450
    },
    [theme.breakpoints.down('xs')]: {
      width: 300,
      height: 500
    },
    [theme.breakpoints.up('lg')]: {
      width: 410
    },
    [theme.breakpoints.up('xl')]: {
      width: 450
    },
    height: 430,
    margin: 'auto',
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.secondary
  },
  media: {
    height: 160
  },
  actions: {
    right: 20,
    bottom: 10,
    padding: 10,
    position: 'absolute'
  }
}));
const PreviewCard = ({
  post,
  noMargin
}) => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: `/blog/${post.id}`,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.card,
      elevation: 3,
      style: noMargin ? {
        margin: 0
      } : {},
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default.a, {
          className: classes.media,
          image: `/small/${post.id}.png`,
          title: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
          gutterBottom: true,
          variant: "h5",
          component: "h2",
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
          variant: "body2",
          color: "textPrimary",
          component: "p",
          children: post.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Box"], {
          pt: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
            size: "small",
            variant: "text",
            className: classes.actions,
            children: ["Read More ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_12___default.a, {
              style: {
                marginLeft: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (PreviewCard);

/***/ }),

/***/ "./src/components/TopicsDisplay.tsx":
/*!******************************************!*\
  !*** ./src/components/TopicsDisplay.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\saiem\\Documents\\GitHub\\saiem-blog\\src\\components\\TopicsDisplay.tsx";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  buttonPadding: {
    margin: '10px',
    padding: 3
  },
  buttonPaddingNoMargin: {
    marginRight: '10px',
    marginTop: '3px'
  }
});

const TopicsDisplay = ({
  topics,
  n,
  noMargin = undefined
}) => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: noMargin ? {} : {
      width: '90%',
      margin: 'auto',
      textAlign: 'center',
      display: 'absolute'
    },
    children: [topics.slice(0, n !== null && n !== void 0 ? n : 1000).map(t => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/topics/${t.replace(' ', '-')}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Chip"], {
        className: noMargin ? classes.buttonPaddingNoMargin : classes.buttonPadding,
        label: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, undefined)
    }, t, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined)), topics.length > n && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/topics`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Chip"], {
        className: classes.buttonPadding,
        label: "\u2026"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TopicsDisplay);

/***/ }),

/***/ "./src/lib/posts.tsx":
/*!***************************!*\
  !*** ./src/lib/posts.tsx ***!
  \***************************/
/*! exports provided: getPost, getSortedPostsData, getSortedTopics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPost", function() { return getPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedPostsData", function() { return getSortedPostsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedTopics", function() { return getSortedTopics; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), 'posts');
const getPost = (id, includeContent = false) => {
  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(postsDirectory, `${id}.md`);
  return getPostFromFile(fullPath, id, includeContent);
};
const getSortedPostsData = () => {
  // Get file names under /posts
  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, ''); // Read markdown file as string

    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(postsDirectory, fileName);
    return getPostFromFile(fullPath, id);
  }); // Sort posts by date

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

const getPostFromFile = (fullPath, id, includeContent = false) => {
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section

  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents); // Combine the data with the id

  return _objectSpread(_objectSpread({
    id
  }, matterResult.data), {}, {
    content: includeContent ? matterResult.content : null,
    topics: matterResult.data.topics.split(',')
  });
};

const getSortedTopics = () => {
  const posts = getSortedPostsData();
  const allTopics = posts.reduce((prev, current) => {
    return [...prev, ...current.topics];
  }, []);
  const map = {};
  allTopics.map(t => {
    map[t] = allTopics.filter(topic => t === topic).length;
  });
  return Array.from(new Set(allTopics)).sort((a, b) => map[b] - map[a]);
};

/***/ }),

/***/ "./src/types/constants.ts":
/*!********************************!*\
  !*** ./src/types/constants.ts ***!
  \********************************/
/*! exports provided: NAME, NAME_AND_DOMAIN, BASE_URL, DEPLOYMENTS_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME_AND_DOMAIN", function() { return NAME_AND_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEPLOYMENTS_URL", function() { return DEPLOYMENTS_URL; });
const NAME = 'SG';
const NAME_AND_DOMAIN = 'SG';
const BASE_URL = 'https://saiemgilani.me';
const DEPLOYMENTS_URL = 'https://api.github.com/repos/saiemgilani/saiem-blog/deployments';

/***/ }),

/***/ "./styles/Shared.module.css":
/*!**********************************!*\
  !*** ./styles/Shared.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headings": "Shared_headings__r3y72",
	"secondHeading": "Shared_secondHeading__gqAxO"
};


/***/ }),

/***/ "./styles/Slug.module.css":
/*!********************************!*\
  !*** ./styles/Slug.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"text-content": "Slug_text-content__27_rB",
	"image": "Slug_image__2eezG",
	"info": "Slug_info__TcOjX",
	"post-container": "Slug_post-container__1UtK8",
	"image-container": "Slug_image-container__3EmBs"
};


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/GitHub":
/*!********************************************!*\
  !*** external "@material-ui/icons/GitHub" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GitHub");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "highlight.js":
/*!*******************************!*\
  !*** external "highlight.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2hpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Jsb2cvW3NsdWddLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlSGVhZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJldmlld0NhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RvcGljc0Rpc3BsYXkudHN4Iiwid2VicGFjazovLy8uL3NyYy9saWIvcG9zdHMudHN4Iiwid2VicGFjazovLy8uL3NyYy90eXBlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1NoYXJlZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9TbHVnLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hsaWdodC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsIndpbmRvdyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImxpbmsiLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwib25CdWlsZE1hbmlmZXN0IiwiaWRsZVRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInNzZzQwNCIsInBhZ2UiLCJtb2QiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJ2YWxpZGF0ZSIsInBhcnNlZERlc3RpbmF0aW9uIiwiaGFkTG9jYWxlIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInN0ck9yQXJyYXkiLCJjb21waWxlTm9uUGF0aCIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiU2x1ZyIsInBvc3REYXRhIiwibmV4dFBhdGgiLCJtYXJrZWQiLCJzZXRPcHRpb25zIiwiaGlnaGxpZ2h0IiwiY29kZSIsImhsanMiLCJoaWdobGlnaHRBdXRvIiwidXNlRWZmZWN0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJibG9jayIsImhpZ2hsaWdodEJsb2NrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJCQVNFX1VSTCIsIk5BTUUiLCJzdHlsZXMiLCJpbmZvIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwidG9waWNzIiwiaW1hZ2UiLCJfX2h0bWwiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImdldFN0YXRpY1Byb3BzIiwic2x1ZyIsImdldFBvc3QiLCJwYXRocyIsImdldFNvcnRlZFBvc3RzRGF0YSIsInJlY29tbWVuZGVkIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJsZW5ndGgiLCJmaWx0ZXIiLCJwb3AiLCJnZXRTdGF0aWNQYXRocyIsImZhbGxiYWNrIiwiUGFnZUhlYWRpbmciLCJoZWFkaW5ncyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNhcmQiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwiZG93biIsImhlaWdodCIsInVwIiwibWFyZ2luIiwicG9zaXRpb24iLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsImxpZ2h0IiwiY29sb3IiLCJzZWNvbmRhcnkiLCJtZWRpYSIsImFjdGlvbnMiLCJyaWdodCIsImJvdHRvbSIsInBhZGRpbmciLCJQcmV2aWV3Q2FyZCIsInBvc3QiLCJub01hcmdpbiIsImNsYXNzZXMiLCJidXR0b25QYWRkaW5nIiwiYnV0dG9uUGFkZGluZ05vTWFyZ2luIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJUb3BpY3NEaXNwbGF5IiwibiIsInVuZGVmaW5lZCIsInRleHRBbGlnbiIsInNsaWNlIiwidCIsInBvc3RzRGlyZWN0b3J5Iiwiam9pbiIsImN3ZCIsImluY2x1ZGVDb250ZW50IiwiZnVsbFBhdGgiLCJnZXRQb3N0RnJvbUZpbGUiLCJmaWxlTmFtZXMiLCJmcyIsInJlYWRkaXJTeW5jIiwiYWxsUG9zdHNEYXRhIiwiZmlsZU5hbWUiLCJzb3J0IiwiYSIsImIiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJtYXR0ZXJSZXN1bHQiLCJtYXR0ZXIiLCJzcGxpdCIsImdldFNvcnRlZFRvcGljcyIsInBvc3RzIiwiYWxsVG9waWNzIiwiY3VycmVudCIsInRvcGljIiwiZnJvbSIsIlNldCIsIk5BTUVfQU5EX0RPTUFJTiIsIkRFUExPWU1FTlRTX1VSTCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFC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Qix3REFBd0Q7QUFDdEYsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLGlCQUFpQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0RBQXdEO0FBQ25FLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsY0FB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RyxDQUFDOFksQ0FBRCxDQUFILEdBQVM5WSxHQUFHLENBQUM2WSxDQUFELENBQTFELENBQVA7QUFDRCxDQWRNLEM7Ozs7Ozs7Ozs7OztBQy9DUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTTVFLElBQUksR0FBRyxJQUFiO0FBQ0EsTUFBTTBGLGVBQWUsR0FBRyxJQUF4QjtBQUNBLE1BQU0zRixRQUFRLEdBQUcsd0JBQWpCO0FBQ0EsTUFBTTRGLGVBQWUsR0FBRyxpRUFBeEIsQzs7Ozs7Ozs7Ozs7QUNIUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9ibG9nL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYmxvZy9bc2x1Z10udHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImZ1bmN0aW9uIGRlZXBGcmVlemUob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICBvYmouY2xlYXIgPSBvYmouZGVsZXRlID0gb2JqLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWFwIGlzIHJlYWQtb25seScpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgIG9iai5hZGQgPSBvYmouY2xlYXIgPSBvYmouZGVsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXQgaXMgcmVhZC1vbmx5Jyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gRnJlZXplIHNlbGZcbiAgICBPYmplY3QuZnJlZXplKG9iaik7XG5cbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIHByb3AgPSBvYmpbbmFtZV07XG5cbiAgICAgICAgLy8gRnJlZXplIHByb3AgaWYgaXQgaXMgYW4gb2JqZWN0XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PSAnb2JqZWN0JyAmJiAhT2JqZWN0LmlzRnJvemVuKHByb3ApKSB7XG4gICAgICAgICAgICBkZWVwRnJlZXplKHByb3ApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG52YXIgZGVlcEZyZWV6ZUVzNiA9IGRlZXBGcmVlemU7XG52YXIgX2RlZmF1bHQgPSBkZWVwRnJlZXplO1xuZGVlcEZyZWV6ZUVzNi5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbmNsYXNzIFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Q29tcGlsZWRNb2RlfSBtb2RlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihtb2RlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmaW5lZFxuICAgIGlmIChtb2RlLmRhdGEgPT09IHVuZGVmaW5lZCkgbW9kZS5kYXRhID0ge307XG5cbiAgICB0aGlzLmRhdGEgPSBtb2RlLmRhdGE7XG4gIH1cblxuICBpZ25vcmVNYXRjaCgpIHtcbiAgICB0aGlzLmlnbm9yZSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUhUTUwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiN4Mjc7Jyk7XG59XG5cbi8qKlxuICogcGVyZm9ybXMgYSBzaGFsbG93IG1lcmdlIG9mIG11bHRpcGxlIG9iamVjdHMgaW50byBvbmVcbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtUfSBvcmlnaW5hbFxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLGFueT5bXX0gb2JqZWN0c1xuICogQHJldHVybnMge1R9IGEgc2luZ2xlIG5ldyBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5oZXJpdChvcmlnaW5hbCwgLi4ub2JqZWN0cykge1xuICAvKiogQHR5cGUgUmVjb3JkPHN0cmluZyxhbnk+ICovXG4gIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gb3JpZ2luYWwpIHtcbiAgICByZXN1bHRba2V5XSA9IG9yaWdpbmFsW2tleV07XG4gIH1cbiAgb2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gLyoqIEB0eXBlIHtUfSAqLyAocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBSZW5kZXJlclxuICogQHByb3BlcnR5IHsodGV4dDogc3RyaW5nKSA9PiB2b2lkfSBhZGRUZXh0XG4gKiBAcHJvcGVydHkgeyhub2RlOiBOb2RlKSA9PiB2b2lkfSBvcGVuTm9kZVxuICogQHByb3BlcnR5IHsobm9kZTogTm9kZSkgPT4gdm9pZH0gY2xvc2VOb2RlXG4gKiBAcHJvcGVydHkgeygpID0+IHN0cmluZ30gdmFsdWVcbiAqL1xuXG4vKiogQHR5cGVkZWYge3traW5kPzogc3RyaW5nLCBzdWJsYW5ndWFnZT86IGJvb2xlYW59fSBOb2RlICovXG4vKiogQHR5cGVkZWYge3t3YWxrOiAocjogUmVuZGVyZXIpID0+IHZvaWR9fSBUcmVlICovXG4vKiogKi9cblxuY29uc3QgU1BBTl9DTE9TRSA9ICc8L3NwYW4+JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgbm9kZSBuZWVkcyB0byBiZSB3cmFwcGVkIGluIDxzcGFuPlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAqL1xuY29uc3QgZW1pdHNXcmFwcGluZ1RhZ3MgPSAobm9kZSkgPT4ge1xuICByZXR1cm4gISFub2RlLmtpbmQ7XG59O1xuXG4vKiogQHR5cGUge1JlbmRlcmVyfSAqL1xuY2xhc3MgSFRNTFJlbmRlcmVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgSFRNTFJlbmRlcmVyXG4gICAqXG4gICAqIEBwYXJhbSB7VHJlZX0gcGFyc2VUcmVlIC0gdGhlIHBhcnNlIHRyZWUgKG11c3Qgc3VwcG9ydCBgd2Fsa2AgQVBJKVxuICAgKiBAcGFyYW0ge3tjbGFzc1ByZWZpeDogc3RyaW5nfX0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGFyc2VUcmVlLCBvcHRpb25zKSB7XG4gICAgdGhpcy5idWZmZXIgPSBcIlwiO1xuICAgIHRoaXMuY2xhc3NQcmVmaXggPSBvcHRpb25zLmNsYXNzUHJlZml4O1xuICAgIHBhcnNlVHJlZS53YWxrKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGV4dHMgdG8gdGhlIG91dHB1dCBzdHJlYW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgKi9cbiAgYWRkVGV4dCh0ZXh0KSB7XG4gICAgdGhpcy5idWZmZXIgKz0gZXNjYXBlSFRNTCh0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbm9kZSBvcGVuIHRvIHRoZSBvdXRwdXQgc3RyZWFtIChpZiBuZWVkZWQpXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAqL1xuICBvcGVuTm9kZShub2RlKSB7XG4gICAgaWYgKCFlbWl0c1dyYXBwaW5nVGFncyhub2RlKSkgcmV0dXJuO1xuXG4gICAgbGV0IGNsYXNzTmFtZSA9IG5vZGUua2luZDtcbiAgICBpZiAoIW5vZGUuc3VibGFuZ3VhZ2UpIHtcbiAgICAgIGNsYXNzTmFtZSA9IGAke3RoaXMuY2xhc3NQcmVmaXh9JHtjbGFzc05hbWV9YDtcbiAgICB9XG4gICAgdGhpcy5zcGFuKGNsYXNzTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5vZGUgY2xvc2UgdG8gdGhlIG91dHB1dCBzdHJlYW0gKGlmIG5lZWRlZClcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlICovXG4gIGNsb3NlTm9kZShub2RlKSB7XG4gICAgaWYgKCFlbWl0c1dyYXBwaW5nVGFncyhub2RlKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5idWZmZXIgKz0gU1BBTl9DTE9TRTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCBidWZmZXJcbiAgKi9cbiAgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyO1xuICB9XG5cbiAgLy8gaGVscGVyc1xuXG4gIC8qKlxuICAgKiBCdWlsZHMgYSBzcGFuIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBzcGFuKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuYnVmZmVyICs9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPmA7XG4gIH1cbn1cblxuLyoqIEB0eXBlZGVmIHt7a2luZD86IHN0cmluZywgc3VibGFuZ3VhZ2U/OiBib29sZWFuLCBjaGlsZHJlbjogTm9kZVtdfSB8IHN0cmluZ30gTm9kZSAqL1xuLyoqIEB0eXBlZGVmIHt7a2luZD86IHN0cmluZywgc3VibGFuZ3VhZ2U/OiBib29sZWFuLCBjaGlsZHJlbjogTm9kZVtdfSB9IERhdGFOb2RlICovXG4vKiogICovXG5cbmNsYXNzIFRva2VuVHJlZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSBEYXRhTm9kZSAqL1xuICAgIHRoaXMucm9vdE5vZGUgPSB7IGNoaWxkcmVuOiBbXSB9O1xuICAgIHRoaXMuc3RhY2sgPSBbdGhpcy5yb290Tm9kZV07XG4gIH1cblxuICBnZXQgdG9wKCkge1xuICAgIHJldHVybiB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV07XG4gIH1cblxuICBnZXQgcm9vdCgpIHsgcmV0dXJuIHRoaXMucm9vdE5vZGU7IH1cblxuICAvKiogQHBhcmFtIHtOb2RlfSBub2RlICovXG4gIGFkZChub2RlKSB7XG4gICAgdGhpcy50b3AuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30ga2luZCAqL1xuICBvcGVuTm9kZShraW5kKSB7XG4gICAgLyoqIEB0eXBlIE5vZGUgKi9cbiAgICBjb25zdCBub2RlID0geyBraW5kLCBjaGlsZHJlbjogW10gfTtcbiAgICB0aGlzLmFkZChub2RlKTtcbiAgICB0aGlzLnN0YWNrLnB1c2gobm9kZSk7XG4gIH1cblxuICBjbG9zZU5vZGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhY2sucG9wKCk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZmluZWRcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY2xvc2VBbGxOb2RlcygpIHtcbiAgICB3aGlsZSAodGhpcy5jbG9zZU5vZGUoKSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucm9vdE5vZGUsIG51bGwsIDQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHsgaW1wb3J0KFwiLi9odG1sX3JlbmRlcmVyXCIpLlJlbmRlcmVyIH0gUmVuZGVyZXJcbiAgICogQHBhcmFtIHtSZW5kZXJlcn0gYnVpbGRlclxuICAgKi9cbiAgd2FsayhidWlsZGVyKSB7XG4gICAgLy8gdGhpcyBkb2VzIG5vdFxuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLl93YWxrKGJ1aWxkZXIsIHRoaXMucm9vdE5vZGUpO1xuICAgIC8vIHRoaXMgd29ya3NcbiAgICAvLyByZXR1cm4gVG9rZW5UcmVlLl93YWxrKGJ1aWxkZXIsIHRoaXMucm9vdE5vZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UmVuZGVyZXJ9IGJ1aWxkZXJcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqL1xuICBzdGF0aWMgX3dhbGsoYnVpbGRlciwgbm9kZSkge1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgYnVpbGRlci5hZGRUZXh0KG5vZGUpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgYnVpbGRlci5vcGVuTm9kZShub2RlKTtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHRoaXMuX3dhbGsoYnVpbGRlciwgY2hpbGQpKTtcbiAgICAgIGJ1aWxkZXIuY2xvc2VOb2RlKG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gYnVpbGRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICovXG4gIHN0YXRpYyBfY29sbGFwc2Uobm9kZSkge1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuO1xuICAgIGlmICghbm9kZS5jaGlsZHJlbikgcmV0dXJuO1xuXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4uZXZlcnkoZWwgPT4gdHlwZW9mIGVsID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgLy8gbm9kZS50ZXh0ID0gbm9kZS5jaGlsZHJlbi5qb2luKFwiXCIpO1xuICAgICAgLy8gZGVsZXRlIG5vZGUuY2hpbGRyZW47XG4gICAgICBub2RlLmNoaWxkcmVuID0gW25vZGUuY2hpbGRyZW4uam9pbihcIlwiKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgVG9rZW5UcmVlLl9jb2xsYXBzZShjaGlsZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gIEN1cnJlbnRseSB0aGlzIGlzIGFsbCBwcml2YXRlIEFQSSwgYnV0IHRoaXMgaXMgdGhlIG1pbmltYWwgQVBJIG5lY2Vzc2FyeVxuICB0aGF0IGFuIEVtaXR0ZXIgbXVzdCBpbXBsZW1lbnQgdG8gZnVsbHkgc3VwcG9ydCB0aGUgcGFyc2VyLlxuXG4gIE1pbmltYWwgaW50ZXJmYWNlOlxuXG4gIC0gYWRkS2V5d29yZCh0ZXh0LCBraW5kKVxuICAtIGFkZFRleHQodGV4dClcbiAgLSBhZGRTdWJsYW5ndWFnZShlbWl0dGVyLCBzdWJMYW5ndWFnZU5hbWUpXG4gIC0gZmluYWxpemUoKVxuICAtIG9wZW5Ob2RlKGtpbmQpXG4gIC0gY2xvc2VOb2RlKClcbiAgLSBjbG9zZUFsbE5vZGVzKClcbiAgLSB0b0hUTUwoKVxuXG4qL1xuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHtFbWl0dGVyfVxuICovXG5jbGFzcyBUb2tlblRyZWVFbWl0dGVyIGV4dGVuZHMgVG9rZW5UcmVlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Kn0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2luZFxuICAgKi9cbiAgYWRkS2V5d29yZCh0ZXh0LCBraW5kKSB7XG4gICAgaWYgKHRleHQgPT09IFwiXCIpIHsgcmV0dXJuOyB9XG5cbiAgICB0aGlzLm9wZW5Ob2RlKGtpbmQpO1xuICAgIHRoaXMuYWRkVGV4dCh0ZXh0KTtcbiAgICB0aGlzLmNsb3NlTm9kZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gICAqL1xuICBhZGRUZXh0KHRleHQpIHtcbiAgICBpZiAodGV4dCA9PT0gXCJcIikgeyByZXR1cm47IH1cblxuICAgIHRoaXMuYWRkKHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RW1pdHRlciAmIHtyb290OiBEYXRhTm9kZX19IGVtaXR0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICovXG4gIGFkZFN1Ymxhbmd1YWdlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgICAvKiogQHR5cGUgRGF0YU5vZGUgKi9cbiAgICBjb25zdCBub2RlID0gZW1pdHRlci5yb290O1xuICAgIG5vZGUua2luZCA9IG5hbWU7XG4gICAgbm9kZS5zdWJsYW5ndWFnZSA9IHRydWU7XG4gICAgdGhpcy5hZGQobm9kZSk7XG4gIH1cblxuICB0b0hUTUwoKSB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgSFRNTFJlbmRlcmVyKHRoaXMsIHRoaXMub3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlbmRlcmVyLnZhbHVlKCk7XG4gIH1cblxuICBmaW5hbGl6ZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5mdW5jdGlvbiBlc2NhcGUodmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAodmFsdWUucmVwbGFjZSgvWy0vXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpLCAnbScpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qKlxuICogQW55IG9mIHRoZSBwYXNzZWQgZXhwcmVzc3Npb25zIG1heSBtYXRjaFxuICpcbiAqIENyZWF0ZXMgYSBodWdlIHRoaXMgfCB0aGlzIHwgdGhhdCB8IHRoYXQgbWF0Y2hcbiAqIEBwYXJhbSB7KFJlZ0V4cCB8IHN0cmluZylbXSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVpdGhlciguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9ICcoJyArIGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjb3VudE1hdGNoR3JvdXBzKHJlKSB7XG4gIHJldHVybiAobmV3IFJlZ0V4cChyZS50b1N0cmluZygpICsgJ3wnKSkuZXhlYygnJykubGVuZ3RoIC0gMTtcbn1cblxuLyoqXG4gKiBEb2VzIGxleGVtZSBzdGFydCB3aXRoIGEgcmVndWxhciBleHByZXNzaW9uIG1hdGNoIGF0IHRoZSBiZWdpbm5pbmdcbiAqIEBwYXJhbSB7UmVnRXhwfSByZVxuICogQHBhcmFtIHtzdHJpbmd9IGxleGVtZVxuICovXG5mdW5jdGlvbiBzdGFydHNXaXRoKHJlLCBsZXhlbWUpIHtcbiAgY29uc3QgbWF0Y2ggPSByZSAmJiByZS5leGVjKGxleGVtZSk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaC5pbmRleCA9PT0gMDtcbn1cblxuLy8gam9pbiBsb2dpY2FsbHkgY29tcHV0ZXMgcmVnZXhwcy5qb2luKHNlcGFyYXRvciksIGJ1dCBmaXhlcyB0aGVcbi8vIGJhY2tyZWZlcmVuY2VzIHNvIHRoZXkgY29udGludWUgdG8gbWF0Y2guXG4vLyBpdCBhbHNvIHBsYWNlcyBlYWNoIGluZGl2aWR1YWwgcmVndWxhciBleHByZXNzaW9uIGludG8gaXQncyBvd25cbi8vIG1hdGNoIGdyb3VwLCBrZWVwaW5nIHRyYWNrIG9mIHRoZSBzZXF1ZW5jaW5nIG9mIHRob3NlIG1hdGNoIGdyb3Vwc1xuLy8gaXMgY3VycmVudGx5IGFuIGV4ZXJjaXNlIGZvciB0aGUgY2FsbGVyLiA6LSlcbi8qKlxuICogQHBhcmFtIHsoc3RyaW5nIHwgUmVnRXhwKVtdfSByZWdleHBzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VwYXJhdG9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqb2luKHJlZ2V4cHMsIHNlcGFyYXRvciA9IFwifFwiKSB7XG4gIC8vIGJhY2tyZWZlcmVuY2VSZSBtYXRjaGVzIGFuIG9wZW4gcGFyZW50aGVzaXMgb3IgYmFja3JlZmVyZW5jZS4gVG8gYXZvaWRcbiAgLy8gYW4gaW5jb3JyZWN0IHBhcnNlLCBpdCBhZGRpdGlvbmFsbHkgbWF0Y2hlcyB0aGUgZm9sbG93aW5nOlxuICAvLyAtIFsuLi5dIGVsZW1lbnRzLCB3aGVyZSB0aGUgbWVhbmluZyBvZiBwYXJlbnRoZXNlcyBhbmQgZXNjYXBlcyBjaGFuZ2VcbiAgLy8gLSBvdGhlciBlc2NhcGUgc2VxdWVuY2VzLCBzbyB3ZSBkbyBub3QgbWlzcGFyc2UgZXNjYXBlIHNlcXVlbmNlcyBhc1xuICAvLyAgIGludGVyZXN0aW5nIGVsZW1lbnRzXG4gIC8vIC0gbm9uLW1hdGNoaW5nIG9yIGxvb2thaGVhZCBwYXJlbnRoZXNlcywgd2hpY2ggZG8gbm90IGNhcHR1cmUuIFRoZXNlXG4gIC8vICAgZm9sbG93IHRoZSAnKCcgd2l0aCBhICc/Jy5cbiAgY29uc3QgYmFja3JlZmVyZW5jZVJlID0gL1xcWyg/OlteXFxcXFxcXV18XFxcXC4pKlxcXXxcXChcXD8/fFxcXFwoWzEtOV1bMC05XSopfFxcXFwuLztcbiAgbGV0IG51bUNhcHR1cmVzID0gMDtcbiAgbGV0IHJldCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZ2V4cHMubGVuZ3RoOyBpKyspIHtcbiAgICBudW1DYXB0dXJlcyArPSAxO1xuICAgIGNvbnN0IG9mZnNldCA9IG51bUNhcHR1cmVzO1xuICAgIGxldCByZSA9IHNvdXJjZShyZWdleHBzW2ldKTtcbiAgICBpZiAoaSA+IDApIHtcbiAgICAgIHJldCArPSBzZXBhcmF0b3I7XG4gICAgfVxuICAgIHJldCArPSBcIihcIjtcbiAgICB3aGlsZSAocmUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbWF0Y2ggPSBiYWNrcmVmZXJlbmNlUmUuZXhlYyhyZSk7XG4gICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICByZXQgKz0gcmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0ICs9IHJlLnN1YnN0cmluZygwLCBtYXRjaC5pbmRleCk7XG4gICAgICByZSA9IHJlLnN1YnN0cmluZyhtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICBpZiAobWF0Y2hbMF1bMF0gPT09ICdcXFxcJyAmJiBtYXRjaFsxXSkge1xuICAgICAgICAvLyBBZGp1c3QgdGhlIGJhY2tyZWZlcmVuY2UuXG4gICAgICAgIHJldCArPSAnXFxcXCcgKyBTdHJpbmcoTnVtYmVyKG1hdGNoWzFdKSArIG9mZnNldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgKz0gbWF0Y2hbMF07XG4gICAgICAgIGlmIChtYXRjaFswXSA9PT0gJygnKSB7XG4gICAgICAgICAgbnVtQ2FwdHVyZXMrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXQgKz0gXCIpXCI7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuLy8gQ29tbW9uIHJlZ2V4cHNcbmNvbnN0IE1BVENIX05PVEhJTkdfUkUgPSAvXFxiXFxCLztcbmNvbnN0IElERU5UX1JFID0gJ1thLXpBLVpdXFxcXHcqJztcbmNvbnN0IFVOREVSU0NPUkVfSURFTlRfUkUgPSAnW2EtekEtWl9dXFxcXHcqJztcbmNvbnN0IE5VTUJFUl9SRSA9ICdcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKyk/JztcbmNvbnN0IENfTlVNQkVSX1JFID0gJygtPykoXFxcXGIwW3hYXVthLWZBLUYwLTldK3woXFxcXGJcXFxcZCsoXFxcXC5cXFxcZCopP3xcXFxcLlxcXFxkKykoW2VFXVstK10/XFxcXGQrKT8pJzsgLy8gMHguLi4sIDAuLi4sIGRlY2ltYWwsIGZsb2F0XG5jb25zdCBCSU5BUllfTlVNQkVSX1JFID0gJ1xcXFxiKDBiWzAxXSspJzsgLy8gMGIuLi5cbmNvbnN0IFJFX1NUQVJURVJTX1JFID0gJyF8IT18IT09fCV8JT18JnwmJnwmPXxcXFxcKnxcXFxcKj18XFxcXCt8XFxcXCs9fCx8LXwtPXwvPXwvfDp8O3w8PHw8PD18PD18PHw9PT18PT18PXw+Pj49fD4+PXw+PXw+Pj58Pj58PnxcXFxcP3xcXFxcW3xcXFxce3xcXFxcKHxcXFxcXnxcXFxcXj18XFxcXHx8XFxcXHw9fFxcXFx8XFxcXHx8fic7XG5cbi8qKlxuKiBAcGFyYW0geyBQYXJ0aWFsPE1vZGU+ICYge2JpbmFyeT86IHN0cmluZyB8IFJlZ0V4cH0gfSBvcHRzXG4qL1xuY29uc3QgU0hFQkFORyA9IChvcHRzID0ge30pID0+IHtcbiAgY29uc3QgYmVnaW5TaGViYW5nID0gL14jIVsgXSpcXC8vO1xuICBpZiAob3B0cy5iaW5hcnkpIHtcbiAgICBvcHRzLmJlZ2luID0gY29uY2F0KFxuICAgICAgYmVnaW5TaGViYW5nLFxuICAgICAgLy4qXFxiLyxcbiAgICAgIG9wdHMuYmluYXJ5LFxuICAgICAgL1xcYi4qLyk7XG4gIH1cbiAgcmV0dXJuIGluaGVyaXQoe1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiBiZWdpblNoZWJhbmcsXG4gICAgZW5kOiAvJC8sXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIC8qKiBAdHlwZSB7TW9kZUNhbGxiYWNrfSAqL1xuICAgIFwib246YmVnaW5cIjogKG0sIHJlc3ApID0+IHtcbiAgICAgIGlmIChtLmluZGV4ICE9PSAwKSByZXNwLmlnbm9yZU1hdGNoKCk7XG4gICAgfVxuICB9LCBvcHRzKTtcbn07XG5cbi8vIENvbW1vbiBtb2Rlc1xuY29uc3QgQkFDS1NMQVNIX0VTQ0FQRSA9IHtcbiAgYmVnaW46ICdcXFxcXFxcXFtcXFxcc1xcXFxTXScsIHJlbGV2YW5jZTogMFxufTtcbmNvbnN0IEFQT1NfU1RSSU5HX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gIGJlZ2luOiAnXFwnJyxcbiAgZW5kOiAnXFwnJyxcbiAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgY29udGFpbnM6IFtCQUNLU0xBU0hfRVNDQVBFXVxufTtcbmNvbnN0IFFVT1RFX1NUUklOR19NT0RFID0ge1xuICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICBiZWdpbjogJ1wiJyxcbiAgZW5kOiAnXCInLFxuICBpbGxlZ2FsOiAnXFxcXG4nLFxuICBjb250YWluczogW0JBQ0tTTEFTSF9FU0NBUEVdXG59O1xuY29uc3QgUEhSQVNBTF9XT1JEU19NT0RFID0ge1xuICBiZWdpbjogL1xcYihhfGFufHRoZXxhcmV8SSdtfGlzbid0fGRvbid0fGRvZXNuJ3R8d29uJ3R8YnV0fGp1c3R8c2hvdWxkfHByZXR0eXxzaW1wbHl8ZW5vdWdofGdvbm5hfGdvaW5nfHd0Znxzb3xzdWNofHdpbGx8eW91fHlvdXJ8dGhleXxsaWtlfG1vcmUpXFxiL1xufTtcbi8qKlxuICogQ3JlYXRlcyBhIGNvbW1lbnQgbW9kZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nIHwgUmVnRXhwfSBiZWdpblxuICogQHBhcmFtIHtzdHJpbmcgfCBSZWdFeHB9IGVuZFxuICogQHBhcmFtIHtNb2RlIHwge319IFttb2RlT3B0aW9uc11cbiAqIEByZXR1cm5zIHtQYXJ0aWFsPE1vZGU+fVxuICovXG5jb25zdCBDT01NRU5UID0gZnVuY3Rpb24oYmVnaW4sIGVuZCwgbW9kZU9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBtb2RlID0gaW5oZXJpdChcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdjb21tZW50JyxcbiAgICAgIGJlZ2luLFxuICAgICAgZW5kLFxuICAgICAgY29udGFpbnM6IFtdXG4gICAgfSxcbiAgICBtb2RlT3B0aW9uc1xuICApO1xuICBtb2RlLmNvbnRhaW5zLnB1c2goUEhSQVNBTF9XT1JEU19NT0RFKTtcbiAgbW9kZS5jb250YWlucy5wdXNoKHtcbiAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgIGJlZ2luOiAnKD86VE9ET3xGSVhNRXxOT1RFfEJVR3xPUFRJTUlaRXxIQUNLfFhYWCk6JyxcbiAgICByZWxldmFuY2U6IDBcbiAgfSk7XG4gIHJldHVybiBtb2RlO1xufTtcbmNvbnN0IENfTElORV9DT01NRU5UX01PREUgPSBDT01NRU5UKCcvLycsICckJyk7XG5jb25zdCBDX0JMT0NLX0NPTU1FTlRfTU9ERSA9IENPTU1FTlQoJy9cXFxcKicsICdcXFxcKi8nKTtcbmNvbnN0IEhBU0hfQ09NTUVOVF9NT0RFID0gQ09NTUVOVCgnIycsICckJyk7XG5jb25zdCBOVU1CRVJfTU9ERSA9IHtcbiAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgYmVnaW46IE5VTUJFUl9SRSxcbiAgcmVsZXZhbmNlOiAwXG59O1xuY29uc3QgQ19OVU1CRVJfTU9ERSA9IHtcbiAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgYmVnaW46IENfTlVNQkVSX1JFLFxuICByZWxldmFuY2U6IDBcbn07XG5jb25zdCBCSU5BUllfTlVNQkVSX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ251bWJlcicsXG4gIGJlZ2luOiBCSU5BUllfTlVNQkVSX1JFLFxuICByZWxldmFuY2U6IDBcbn07XG5jb25zdCBDU1NfTlVNQkVSX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ251bWJlcicsXG4gIGJlZ2luOiBOVU1CRVJfUkUgKyAnKCcgK1xuICAgICclfGVtfGV4fGNofHJlbScgK1xuICAgICd8dnd8dmh8dm1pbnx2bWF4JyArXG4gICAgJ3xjbXxtbXxpbnxwdHxwY3xweCcgK1xuICAgICd8ZGVnfGdyYWR8cmFkfHR1cm4nICtcbiAgICAnfHN8bXMnICtcbiAgICAnfEh6fGtIeicgK1xuICAgICd8ZHBpfGRwY218ZHBweCcgK1xuICAgICcpPycsXG4gIHJlbGV2YW5jZTogMFxufTtcbmNvbnN0IFJFR0VYUF9NT0RFID0ge1xuICAvLyB0aGlzIG91dGVyIHJ1bGUgbWFrZXMgc3VyZSB3ZSBhY3R1YWxseSBoYXZlIGEgV0hPTEUgcmVnZXggYW5kIG5vdCBzaW1wbHlcbiAgLy8gYW4gZXhwcmVzc2lvbiBzdWNoIGFzOlxuICAvL1xuICAvLyAgICAgMyAvIHNvbWV0aGluZ1xuICAvL1xuICAvLyAod2hpY2ggd2lsbCB0aGVuIGJsb3cgdXAgd2hlbiByZWdleCdzIGBpbGxlZ2FsYCBzZWVzIHRoZSBuZXdsaW5lKVxuICBiZWdpbjogLyg/PVxcL1teL1xcbl0qXFwvKS8sXG4gIGNvbnRhaW5zOiBbe1xuICAgIGNsYXNzTmFtZTogJ3JlZ2V4cCcsXG4gICAgYmVnaW46IC9cXC8vLFxuICAgIGVuZDogL1xcL1tnaW11eV0qLyxcbiAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICBjb250YWluczogW1xuICAgICAgQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXFsvLFxuICAgICAgICBlbmQ6IC9cXF0vLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgIH1cbiAgICBdXG4gIH1dXG59O1xuY29uc3QgVElUTEVfTU9ERSA9IHtcbiAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICBiZWdpbjogSURFTlRfUkUsXG4gIHJlbGV2YW5jZTogMFxufTtcbmNvbnN0IFVOREVSU0NPUkVfVElUTEVfTU9ERSA9IHtcbiAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICBiZWdpbjogVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgcmVsZXZhbmNlOiAwXG59O1xuY29uc3QgTUVUSE9EX0dVQVJEID0ge1xuICAvLyBleGNsdWRlcyBtZXRob2QgbmFtZXMgZnJvbSBrZXl3b3JkIHByb2Nlc3NpbmdcbiAgYmVnaW46ICdcXFxcLlxcXFxzKicgKyBVTkRFUlNDT1JFX0lERU5UX1JFLFxuICByZWxldmFuY2U6IDBcbn07XG5cbi8qKlxuICogQWRkcyBlbmQgc2FtZSBhcyBiZWdpbiBtZWNoYW5pY3MgdG8gYSBtb2RlXG4gKlxuICogWW91ciBtb2RlIG11c3QgaW5jbHVkZSBhdCBsZWFzdCBhIHNpbmdsZSAoKSBtYXRjaCBncm91cCBhcyB0aGF0IGZpcnN0IG1hdGNoXG4gKiBncm91cCBpcyB3aGF0IGlzIHVzZWQgZm9yIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7UGFydGlhbDxNb2RlPn0gbW9kZVxuICovXG5jb25zdCBFTkRfU0FNRV9BU19CRUdJTiA9IGZ1bmN0aW9uKG1vZGUpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obW9kZSxcbiAgICB7XG4gICAgICAvKiogQHR5cGUge01vZGVDYWxsYmFja30gKi9cbiAgICAgICdvbjpiZWdpbic6IChtLCByZXNwKSA9PiB7IHJlc3AuZGF0YS5fYmVnaW5NYXRjaCA9IG1bMV07IH0sXG4gICAgICAvKiogQHR5cGUge01vZGVDYWxsYmFja30gKi9cbiAgICAgICdvbjplbmQnOiAobSwgcmVzcCkgPT4geyBpZiAocmVzcC5kYXRhLl9iZWdpbk1hdGNoICE9PSBtWzFdKSByZXNwLmlnbm9yZU1hdGNoKCk7IH1cbiAgICB9KTtcbn07XG5cbnZhciBNT0RFUyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgTUFUQ0hfTk9USElOR19SRTogTUFUQ0hfTk9USElOR19SRSxcbiAgICBJREVOVF9SRTogSURFTlRfUkUsXG4gICAgVU5ERVJTQ09SRV9JREVOVF9SRTogVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICBOVU1CRVJfUkU6IE5VTUJFUl9SRSxcbiAgICBDX05VTUJFUl9SRTogQ19OVU1CRVJfUkUsXG4gICAgQklOQVJZX05VTUJFUl9SRTogQklOQVJZX05VTUJFUl9SRSxcbiAgICBSRV9TVEFSVEVSU19SRTogUkVfU1RBUlRFUlNfUkUsXG4gICAgU0hFQkFORzogU0hFQkFORyxcbiAgICBCQUNLU0xBU0hfRVNDQVBFOiBCQUNLU0xBU0hfRVNDQVBFLFxuICAgIEFQT1NfU1RSSU5HX01PREU6IEFQT1NfU1RSSU5HX01PREUsXG4gICAgUVVPVEVfU1RSSU5HX01PREU6IFFVT1RFX1NUUklOR19NT0RFLFxuICAgIFBIUkFTQUxfV09SRFNfTU9ERTogUEhSQVNBTF9XT1JEU19NT0RFLFxuICAgIENPTU1FTlQ6IENPTU1FTlQsXG4gICAgQ19MSU5FX0NPTU1FTlRfTU9ERTogQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBDX0JMT0NLX0NPTU1FTlRfTU9ERTogQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgSEFTSF9DT01NRU5UX01PREU6IEhBU0hfQ09NTUVOVF9NT0RFLFxuICAgIE5VTUJFUl9NT0RFOiBOVU1CRVJfTU9ERSxcbiAgICBDX05VTUJFUl9NT0RFOiBDX05VTUJFUl9NT0RFLFxuICAgIEJJTkFSWV9OVU1CRVJfTU9ERTogQklOQVJZX05VTUJFUl9NT0RFLFxuICAgIENTU19OVU1CRVJfTU9ERTogQ1NTX05VTUJFUl9NT0RFLFxuICAgIFJFR0VYUF9NT0RFOiBSRUdFWFBfTU9ERSxcbiAgICBUSVRMRV9NT0RFOiBUSVRMRV9NT0RFLFxuICAgIFVOREVSU0NPUkVfVElUTEVfTU9ERTogVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgIE1FVEhPRF9HVUFSRDogTUVUSE9EX0dVQVJELFxuICAgIEVORF9TQU1FX0FTX0JFR0lOOiBFTkRfU0FNRV9BU19CRUdJTlxufSk7XG5cbi8vIEdyYW1tYXIgZXh0ZW5zaW9ucyAvIHBsdWdpbnNcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjgzM1xuXG4vLyBHcmFtbWFyIGV4dGVuc2lvbnMgYWxsb3cgXCJzeW50YWN0aWMgc3VnYXJcIiB0byBiZSBhZGRlZCB0byB0aGUgZ3JhbW1hciBtb2Rlc1xuLy8gd2l0aG91dCByZXF1aXJpbmcgYW55IHVuZGVybHlpbmcgY2hhbmdlcyB0byB0aGUgY29tcGlsZXIgaW50ZXJuYWxzLlxuXG4vLyBgY29tcGlsZU1hdGNoYCBiZWluZyB0aGUgcGVyZmVjdCBzbWFsbCBleGFtcGxlIG9mIG5vdyBhbGxvd2luZyBhIGdyYW1tYXJcbi8vIGF1dGhvciB0byB3cml0ZSBgbWF0Y2hgIHdoZW4gdGhleSBkZXNpcmUgdG8gbWF0Y2ggYSBzaW5nbGUgZXhwcmVzc2lvbiByYXRoZXJcbi8vIHRoYW4gYmVpbmcgZm9yY2VkIHRvIHVzZSBgYmVnaW5gLiAgVGhlIGV4dGVuc2lvbiB0aGVuIGp1c3QgbW92ZXMgYG1hdGNoYCBpbnRvXG4vLyBgYmVnaW5gIHdoZW4gaXQgcnVucy4gIEllLCBubyBmZWF0dXJlcyBoYXZlIGJlZW4gYWRkZWQsIGJ1dCB3ZSd2ZSBqdXN0IG1hZGVcbi8vIHRoZSBleHBlcmllbmNlIG9mIHdyaXRpbmcgKGFuZCByZWFkaW5nIGdyYW1tYXJzKSBhIGxpdHRsZSBiaXQgbmljZXIuXG5cbi8vIC0tLS0tLVxuXG4vLyBUT0RPOiBXZSBuZWVkIG5lZ2F0aXZlIGxvb2stYmVoaW5kIHN1cHBvcnQgdG8gZG8gdGhpcyBwcm9wZXJseVxuLyoqXG4gKiBTa2lwIGEgbWF0Y2ggaWYgaXQgaGFzIGEgcHJlY2VkaW5nIGRvdFxuICpcbiAqIFRoaXMgaXMgdXNlZCBmb3IgYGJlZ2luS2V5d29yZHNgIHRvIHByZXZlbnQgbWF0Y2hpbmcgZXhwcmVzc2lvbnMgc3VjaCBhc1xuICogYGJvYi5rZXl3b3JkLmRvKClgLiBUaGUgbW9kZSBjb21waWxlciBhdXRvbWF0aWNhbGx5IHdpcmVzIHRoaXMgdXAgYXMgYVxuICogc3BlY2lhbCBfaW50ZXJuYWxfICdvbjpiZWdpbicgY2FsbGJhY2sgZm9yIG1vZGVzIHdpdGggYGJlZ2luS2V5d29yZHNgXG4gKiBAcGFyYW0ge1JlZ0V4cE1hdGNoQXJyYXl9IG1hdGNoXG4gKiBAcGFyYW0ge0NhbGxiYWNrUmVzcG9uc2V9IHJlc3BvbnNlXG4gKi9cbmZ1bmN0aW9uIHNraXBJZmhhc1ByZWNlZGluZ0RvdChtYXRjaCwgcmVzcG9uc2UpIHtcbiAgY29uc3QgYmVmb3JlID0gbWF0Y2guaW5wdXRbbWF0Y2guaW5kZXggLSAxXTtcbiAgaWYgKGJlZm9yZSA9PT0gXCIuXCIpIHtcbiAgICByZXNwb25zZS5pZ25vcmVNYXRjaCgpO1xuICB9XG59XG5cblxuLyoqXG4gKiBgYmVnaW5LZXl3b3Jkc2Agc3ludGFjdGljIHN1Z2FyXG4gKiBAdHlwZSB7Q29tcGlsZXJFeHR9XG4gKi9cbmZ1bmN0aW9uIGJlZ2luS2V5d29yZHMobW9kZSwgcGFyZW50KSB7XG4gIGlmICghcGFyZW50KSByZXR1cm47XG4gIGlmICghbW9kZS5iZWdpbktleXdvcmRzKSByZXR1cm47XG5cbiAgLy8gZm9yIGxhbmd1YWdlcyB3aXRoIGtleXdvcmRzIHRoYXQgaW5jbHVkZSBub24td29yZCBjaGFyYWN0ZXJzIGNoZWNraW5nIGZvclxuICAvLyBhIHdvcmQgYm91bmRhcnkgaXMgbm90IHN1ZmZpY2llbnQsIHNvIGluc3RlYWQgd2UgY2hlY2sgZm9yIGEgd29yZCBib3VuZGFyeVxuICAvLyBvciB3aGl0ZXNwYWNlIC0gdGhpcyBkb2VzIG5vIGhhcm0gaW4gYW55IGNhc2Ugc2luY2Ugb3VyIGtleXdvcmQgZW5naW5lXG4gIC8vIGRvZXNuJ3QgYWxsb3cgc3BhY2VzIGluIGtleXdvcmRzIGFueXdheXMgYW5kIHdlIHN0aWxsIGNoZWNrIGZvciB0aGUgYm91bmRhcnlcbiAgLy8gZmlyc3RcbiAgbW9kZS5iZWdpbiA9ICdcXFxcYignICsgbW9kZS5iZWdpbktleXdvcmRzLnNwbGl0KCcgJykuam9pbignfCcpICsgJykoPyFcXFxcLikoPz1cXFxcYnxcXFxccyknO1xuICBtb2RlLl9fYmVmb3JlQmVnaW4gPSBza2lwSWZoYXNQcmVjZWRpbmdEb3Q7XG4gIG1vZGUua2V5d29yZHMgPSBtb2RlLmtleXdvcmRzIHx8IG1vZGUuYmVnaW5LZXl3b3JkcztcbiAgZGVsZXRlIG1vZGUuYmVnaW5LZXl3b3JkcztcblxuICAvLyBwcmV2ZW50cyBkb3VibGUgcmVsZXZhbmNlLCB0aGUga2V5d29yZHMgdGhlbXNlbHZlcyBwcm92aWRlXG4gIC8vIHJlbGV2YW5jZSwgdGhlIG1vZGUgZG9lc24ndCBuZWVkIHRvIGRvdWJsZSBpdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZpbmVkXG4gIGlmIChtb2RlLnJlbGV2YW5jZSA9PT0gdW5kZWZpbmVkKSBtb2RlLnJlbGV2YW5jZSA9IDA7XG59XG5cbi8qKlxuICogQWxsb3cgYGlsbGVnYWxgIHRvIGNvbnRhaW4gYW4gYXJyYXkgb2YgaWxsZWdhbCB2YWx1ZXNcbiAqIEB0eXBlIHtDb21waWxlckV4dH1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZUlsbGVnYWwobW9kZSwgX3BhcmVudCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobW9kZS5pbGxlZ2FsKSkgcmV0dXJuO1xuXG4gIG1vZGUuaWxsZWdhbCA9IGVpdGhlciguLi5tb2RlLmlsbGVnYWwpO1xufVxuXG4vKipcbiAqIGBtYXRjaGAgdG8gbWF0Y2ggYSBzaW5nbGUgZXhwcmVzc2lvbiBmb3IgcmVhZGFiaWxpdHlcbiAqIEB0eXBlIHtDb21waWxlckV4dH1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZU1hdGNoKG1vZGUsIF9wYXJlbnQpIHtcbiAgaWYgKCFtb2RlLm1hdGNoKSByZXR1cm47XG4gIGlmIChtb2RlLmJlZ2luIHx8IG1vZGUuZW5kKSB0aHJvdyBuZXcgRXJyb3IoXCJiZWdpbiAmIGVuZCBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIG1hdGNoXCIpO1xuXG4gIG1vZGUuYmVnaW4gPSBtb2RlLm1hdGNoO1xuICBkZWxldGUgbW9kZS5tYXRjaDtcbn1cblxuLyoqXG4gKiBwcm92aWRlcyB0aGUgZGVmYXVsdCAxIHJlbGV2YW5jZSB0byBhbGwgbW9kZXNcbiAqIEB0eXBlIHtDb21waWxlckV4dH1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZVJlbGV2YW5jZShtb2RlLCBfcGFyZW50KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZmluZWRcbiAgaWYgKG1vZGUucmVsZXZhbmNlID09PSB1bmRlZmluZWQpIG1vZGUucmVsZXZhbmNlID0gMTtcbn1cblxuLy8ga2V5d29yZHMgdGhhdCBzaG91bGQgaGF2ZSBubyBkZWZhdWx0IHJlbGV2YW5jZSB2YWx1ZVxuY29uc3QgQ09NTU9OX0tFWVdPUkRTID0gW1xuICAnb2YnLFxuICAnYW5kJyxcbiAgJ2ZvcicsXG4gICdpbicsXG4gICdub3QnLFxuICAnb3InLFxuICAnaWYnLFxuICAndGhlbicsXG4gICdwYXJlbnQnLCAvLyBjb21tb24gdmFyaWFibGUgbmFtZVxuICAnbGlzdCcsIC8vIGNvbW1vbiB2YXJpYWJsZSBuYW1lXG4gICd2YWx1ZScgLy8gY29tbW9uIHZhcmlhYmxlIG5hbWVcbl07XG5cbmNvbnN0IERFRkFVTFRfS0VZV09SRF9DTEFTU05BTUUgPSBcImtleXdvcmRcIjtcblxuLyoqXG4gKiBHaXZlbiByYXcga2V5d29yZHMgZnJvbSBhIGxhbmd1YWdlIGRlZmluaXRpb24sIGNvbXBpbGUgdGhlbS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZyB8IFJlY29yZDxzdHJpbmcsc3RyaW5nfHN0cmluZ1tdPiB8IEFycmF5PHN0cmluZz59IHJhd0tleXdvcmRzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNhc2VJbnNlbnNpdGl2ZVxuICovXG5mdW5jdGlvbiBjb21waWxlS2V5d29yZHMocmF3S2V5d29yZHMsIGNhc2VJbnNlbnNpdGl2ZSwgY2xhc3NOYW1lID0gREVGQVVMVF9LRVlXT1JEX0NMQVNTTkFNRSkge1xuICAvKiogQHR5cGUgS2V5d29yZERpY3QgKi9cbiAgY29uc3QgY29tcGlsZWRLZXl3b3JkcyA9IHt9O1xuXG4gIC8vIGlucHV0IGNhbiBiZSBhIHN0cmluZyBvZiBrZXl3b3JkcywgYW4gYXJyYXkgb2Yga2V5d29yZHMsIG9yIGEgb2JqZWN0IHdpdGhcbiAgLy8gbmFtZWQga2V5cyByZXByZXNlbnRpbmcgY2xhc3NOYW1lICh3aGljaCBjYW4gdGhlbiBwb2ludCB0byBhIHN0cmluZyBvciBhcnJheSlcbiAgaWYgKHR5cGVvZiByYXdLZXl3b3JkcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb21waWxlTGlzdChjbGFzc05hbWUsIHJhd0tleXdvcmRzLnNwbGl0KFwiIFwiKSk7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyYXdLZXl3b3JkcykpIHtcbiAgICBjb21waWxlTGlzdChjbGFzc05hbWUsIHJhd0tleXdvcmRzKTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyhyYXdLZXl3b3JkcykuZm9yRWFjaChmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICAgIC8vIGNvbGxhcHNlIGFsbCBvdXIgb2JqZWN0cyBiYWNrIGludG8gdGhlIHBhcmVudCBvYmplY3RcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIGNvbXBpbGVkS2V5d29yZHMsXG4gICAgICAgIGNvbXBpbGVLZXl3b3JkcyhyYXdLZXl3b3Jkc1tjbGFzc05hbWVdLCBjYXNlSW5zZW5zaXRpdmUsIGNsYXNzTmFtZSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNvbXBpbGVkS2V5d29yZHM7XG5cbiAgLy8gLS0tXG5cbiAgLyoqXG4gICAqIENvbXBpbGVzIGFuIGluZGl2aWR1YWwgbGlzdCBvZiBrZXl3b3Jkc1xuICAgKlxuICAgKiBFeDogXCJmb3IgaWYgd2hlbiB3aGlsZXw1XCJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGtleXdvcmRMaXN0XG4gICAqL1xuICBmdW5jdGlvbiBjb21waWxlTGlzdChjbGFzc05hbWUsIGtleXdvcmRMaXN0KSB7XG4gICAgaWYgKGNhc2VJbnNlbnNpdGl2ZSkge1xuICAgICAga2V5d29yZExpc3QgPSBrZXl3b3JkTGlzdC5tYXAoeCA9PiB4LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICBrZXl3b3JkTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpIHtcbiAgICAgIGNvbnN0IHBhaXIgPSBrZXl3b3JkLnNwbGl0KCd8Jyk7XG4gICAgICBjb21waWxlZEtleXdvcmRzW3BhaXJbMF1dID0gW2NsYXNzTmFtZSwgc2NvcmVGb3JLZXl3b3JkKHBhaXJbMF0sIHBhaXJbMV0pXTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHByb3BlciBzY29yZSBmb3IgYSBnaXZlbiBrZXl3b3JkXG4gKlxuICogQWxzbyB0YWtlcyBpbnRvIGFjY291bnQgY29tbWVudCBrZXl3b3Jkcywgd2hpY2ggd2lsbCBiZSBzY29yZWQgMCBVTkxFU1NcbiAqIGFub3RoZXIgc2NvcmUgaGFzIGJlZW4gbWFudWFsbHkgYXNzaWduZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5d29yZFxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm92aWRlZFNjb3JlXVxuICovXG5mdW5jdGlvbiBzY29yZUZvcktleXdvcmQoa2V5d29yZCwgcHJvdmlkZWRTY29yZSkge1xuICAvLyBtYW51YWwgc2NvcmVzIGFsd2F5cyB3aW4gb3ZlciBjb21tb24ga2V5d29yZHNcbiAgLy8gc28geW91IGNhbiBmb3JjZSBhIHNjb3JlIG9mIDEgaWYgeW91IHJlYWxseSBpbnNpc3RcbiAgaWYgKHByb3ZpZGVkU2NvcmUpIHtcbiAgICByZXR1cm4gTnVtYmVyKHByb3ZpZGVkU2NvcmUpO1xuICB9XG5cbiAgcmV0dXJuIGNvbW1vbktleXdvcmQoa2V5d29yZCkgPyAwIDogMTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgZ2l2ZW4ga2V5d29yZCBpcyBjb21tb24gb3Igbm90XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleXdvcmQgKi9cbmZ1bmN0aW9uIGNvbW1vbktleXdvcmQoa2V5d29yZCkge1xuICByZXR1cm4gQ09NTU9OX0tFWVdPUkRTLmluY2x1ZGVzKGtleXdvcmQudG9Mb3dlckNhc2UoKSk7XG59XG5cbi8vIGNvbXBpbGF0aW9uXG5cbi8qKlxuICogQ29tcGlsZXMgYSBsYW5ndWFnZSBkZWZpbml0aW9uIHJlc3VsdFxuICpcbiAqIEdpdmVuIHRoZSByYXcgcmVzdWx0IG9mIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiAoTGFuZ3VhZ2UpLCBjb21waWxlcyB0aGlzIHNvXG4gKiB0aGF0IGl0IGlzIHJlYWR5IGZvciBoaWdobGlnaHRpbmcgY29kZS5cbiAqIEBwYXJhbSB7TGFuZ3VhZ2V9IGxhbmd1YWdlXG4gKiBAcGFyYW0ge3twbHVnaW5zOiBITEpTUGx1Z2luW119fSBvcHRzXG4gKiBAcmV0dXJucyB7Q29tcGlsZWRMYW5ndWFnZX1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZUxhbmd1YWdlKGxhbmd1YWdlLCB7IHBsdWdpbnMgfSkge1xuICAvKipcbiAgICogQnVpbGRzIGEgcmVnZXggd2l0aCB0aGUgY2FzZSBzZW5zYXRpdmlsaXR5IG9mIHRoZSBjdXJyZW50IGxhbmd1YWdlXG4gICAqXG4gICAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtnbG9iYWxdXG4gICAqL1xuICBmdW5jdGlvbiBsYW5nUmUodmFsdWUsIGdsb2JhbCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgc291cmNlKHZhbHVlKSxcbiAgICAgICdtJyArIChsYW5ndWFnZS5jYXNlX2luc2Vuc2l0aXZlID8gJ2knIDogJycpICsgKGdsb2JhbCA/ICdnJyA6ICcnKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICBTdG9yZXMgbXVsdGlwbGUgcmVndWxhciBleHByZXNzaW9ucyBhbmQgYWxsb3dzIHlvdSB0byBxdWlja2x5IHNlYXJjaCBmb3JcbiAgICB0aGVtIGFsbCBpbiBhIHN0cmluZyBzaW11bHRhbmVvdXNseSAtIHJldHVybmluZyB0aGUgZmlyc3QgbWF0Y2guICBJdCBkb2VzXG4gICAgdGhpcyBieSBjcmVhdGluZyBhIGh1Z2UgKGF8YnxjKSByZWdleCAtIGVhY2ggaW5kaXZpZHVhbCBpdGVtIHdyYXBwZWQgd2l0aCAoKVxuICAgIGFuZCBqb2luZWQgYnkgYHxgIC0gdXNpbmcgbWF0Y2ggZ3JvdXBzIHRvIHRyYWNrIHBvc2l0aW9uLiAgV2hlbiBhIG1hdGNoIGlzXG4gICAgZm91bmQgY2hlY2tpbmcgd2hpY2ggcG9zaXRpb24gaW4gdGhlIGFycmF5IGhhcyBjb250ZW50IGFsbG93cyB1cyB0byBmaWd1cmVcbiAgICBvdXQgd2hpY2ggb2YgdGhlIG9yaWdpbmFsIHJlZ2V4ZXMgLyBtYXRjaCBncm91cHMgdHJpZ2dlcmVkIHRoZSBtYXRjaC5cblxuICAgIFRoZSBtYXRjaCBvYmplY3QgaXRzZWxmICh0aGUgcmVzdWx0IG9mIGBSZWdleC5leGVjYCkgaXMgcmV0dXJuZWQgYnV0IGFsc29cbiAgICBlbmhhbmNlZCBieSBtZXJnaW5nIGluIGFueSBtZXRhLWRhdGEgdGhhdCB3YXMgcmVnaXN0ZXJlZCB3aXRoIHRoZSByZWdleC5cbiAgICBUaGlzIGlzIGhvdyB3ZSBrZWVwIHRyYWNrIG9mIHdoaWNoIG1vZGUgbWF0Y2hlZCwgYW5kIHdoYXQgdHlwZSBvZiBydWxlXG4gICAgKGBpbGxlZ2FsYCwgYGJlZ2luYCwgZW5kLCBldGMpLlxuICAqL1xuICBjbGFzcyBNdWx0aVJlZ2V4IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMubWF0Y2hJbmRleGVzID0ge307XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLnJlZ2V4ZXMgPSBbXTtcbiAgICAgIHRoaXMubWF0Y2hBdCA9IDE7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICB9XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgYWRkUnVsZShyZSwgb3B0cykge1xuICAgICAgb3B0cy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24rKztcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMubWF0Y2hJbmRleGVzW3RoaXMubWF0Y2hBdF0gPSBvcHRzO1xuICAgICAgdGhpcy5yZWdleGVzLnB1c2goW29wdHMsIHJlXSk7XG4gICAgICB0aGlzLm1hdGNoQXQgKz0gY291bnRNYXRjaEdyb3VwcyhyZSkgKyAxO1xuICAgIH1cblxuICAgIGNvbXBpbGUoKSB7XG4gICAgICBpZiAodGhpcy5yZWdleGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBhdm9pZHMgdGhlIG5lZWQgdG8gY2hlY2sgbGVuZ3RoIGV2ZXJ5IHRpbWUgZXhlYyBpcyBjYWxsZWRcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmV4ZWMgPSAoKSA9PiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgdGVybWluYXRvcnMgPSB0aGlzLnJlZ2V4ZXMubWFwKGVsID0+IGVsWzFdKTtcbiAgICAgIHRoaXMubWF0Y2hlclJlID0gbGFuZ1JlKGpvaW4odGVybWluYXRvcnMpLCB0cnVlKTtcbiAgICAgIHRoaXMubGFzdEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICAvKiogQHBhcmFtIHtzdHJpbmd9IHMgKi9cbiAgICBleGVjKHMpIHtcbiAgICAgIHRoaXMubWF0Y2hlclJlLmxhc3RJbmRleCA9IHRoaXMubGFzdEluZGV4O1xuICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLm1hdGNoZXJSZS5leGVjKHMpO1xuICAgICAgaWYgKCFtYXRjaCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZpbmVkXG4gICAgICBjb25zdCBpID0gbWF0Y2guZmluZEluZGV4KChlbCwgaSkgPT4gaSA+IDAgJiYgZWwgIT09IHVuZGVmaW5lZCk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBtYXRjaERhdGEgPSB0aGlzLm1hdGNoSW5kZXhlc1tpXTtcbiAgICAgIC8vIHRyaW0gb2ZmIGFueSBlYXJsaWVyIG5vbi1yZWxldmFudCBtYXRjaCBncm91cHMgKGllLCB0aGUgb3RoZXIgcmVnZXhcbiAgICAgIC8vIG1hdGNoIGdyb3VwcyB0aGF0IG1ha2UgdXAgdGhlIG11bHRpLW1hdGNoZXIpXG4gICAgICBtYXRjaC5zcGxpY2UoMCwgaSk7XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG1hdGNoLCBtYXRjaERhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgQ3JlYXRlZCB0byBzb2x2ZSB0aGUga2V5IGRlZmljaWVudGx5IHdpdGggTXVsdGlSZWdleCAtIHRoZXJlIGlzIG5vIHdheSB0b1xuICAgIHRlc3QgZm9yIG11bHRpcGxlIG1hdGNoZXMgYXQgYSBzaW5nbGUgbG9jYXRpb24uICBXaHkgd291bGQgd2UgbmVlZCB0byBkb1xuICAgIHRoYXQ/ICBJbiB0aGUgZnV0dXJlIGEgbW9yZSBkeW5hbWljIGVuZ2luZSB3aWxsIGFsbG93IGNlcnRhaW4gbWF0Y2hlcyB0byBiZVxuICAgIGlnbm9yZWQuICBBbiBleGFtcGxlOiBpZiB3ZSBtYXRjaGVkIHNheSB0aGUgM3JkIHJlZ2V4IGluIGEgbGFyZ2UgZ3JvdXAgYnV0XG4gICAgZGVjaWRlZCB0byBpZ25vcmUgaXQgLSB3ZSdkIG5lZWQgdG8gc3RhcnRlZCB0ZXN0aW5nIGFnYWluIGF0IHRoZSA0dGhcbiAgICByZWdleC4uLiBidXQgTXVsdGlSZWdleCBpdHNlbGYgZ2l2ZXMgdXMgbm8gcmVhbCB3YXkgdG8gZG8gdGhhdC5cblxuICAgIFNvIHdoYXQgdGhpcyBjbGFzcyBjcmVhdGVzIE11bHRpUmVnZXhzIG9uIHRoZSBmbHkgZm9yIHdoYXRldmVyIHNlYXJjaFxuICAgIHBvc2l0aW9uIHRoZXkgYXJlIG5lZWRlZC5cblxuICAgIE5PVEU6IFRoZXNlIGFkZGl0aW9uYWwgTXVsdGlSZWdleCBvYmplY3RzIGFyZSBjcmVhdGVkIGR5bmFtaWNhbGx5LiAgRm9yIG1vc3RcbiAgICBncmFtbWFycyBtb3N0IG9mIHRoZSB0aW1lIHdlIHdpbGwgbmV2ZXIgYWN0dWFsbHkgbmVlZCBhbnl0aGluZyBtb3JlIHRoYW4gdGhlXG4gICAgZmlyc3QgTXVsdGlSZWdleCAtIHNvIHRoaXMgc2hvdWxkbid0IGhhdmUgdG9vIG11Y2ggb3ZlcmhlYWQuXG5cbiAgICBTYXkgdGhpcyBpcyBvdXIgc2VhcmNoIGdyb3VwLCBhbmQgd2UgbWF0Y2ggcmVnZXgzLCBidXQgd2lzaCB0byBpZ25vcmUgaXQuXG5cbiAgICAgIHJlZ2V4MSB8IHJlZ2V4MiB8IHJlZ2V4MyB8IHJlZ2V4NCB8IHJlZ2V4NSAgICAnIGllLCBzdGFydEF0ID0gMFxuXG4gICAgV2hhdCB3ZSBuZWVkIGlzIGEgbmV3IE11bHRpUmVnZXggdGhhdCBvbmx5IGluY2x1ZGVzIHRoZSByZW1haW5pbmdcbiAgICBwb3NzaWJpbGl0aWVzOlxuXG4gICAgICByZWdleDQgfCByZWdleDUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBpZSwgc3RhcnRBdCA9IDNcblxuICAgIFRoaXMgY2xhc3Mgd3JhcHMgYWxsIHRoYXQgY29tcGxleGl0eSB1cCBpbiBhIHNpbXBsZSBBUEkuLi4gYHN0YXJ0QXRgIGRlY2lkZXNcbiAgICB3aGVyZSBpbiB0aGUgYXJyYXkgb2YgZXhwcmVzc2lvbnMgdG8gc3RhcnQgZG9pbmcgdGhlIG1hdGNoaW5nLiBJdFxuICAgIGF1dG8taW5jcmVtZW50cywgc28gaWYgYSBtYXRjaCBpcyBmb3VuZCBhdCBwb3NpdGlvbiAyLCB0aGVuIHN0YXJ0QXQgd2lsbCBiZVxuICAgIHNldCB0byAzLiAgSWYgdGhlIGVuZCBpcyByZWFjaGVkIHN0YXJ0QXQgd2lsbCByZXR1cm4gdG8gMC5cblxuICAgIE1PU1Qgb2YgdGhlIHRpbWUgdGhlIHBhcnNlciB3aWxsIGJlIHNldHRpbmcgc3RhcnRBdCBtYW51YWxseSB0byAwLlxuICAqL1xuICBjbGFzcyBSZXN1bWFibGVNdWx0aVJlZ2V4IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMucnVsZXMgPSBbXTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMubXVsdGlSZWdleGVzID0gW107XG4gICAgICB0aGlzLmNvdW50ID0gMDtcblxuICAgICAgdGhpcy5sYXN0SW5kZXggPSAwO1xuICAgICAgdGhpcy5yZWdleEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2V0TWF0Y2hlcihpbmRleCkge1xuICAgICAgaWYgKHRoaXMubXVsdGlSZWdleGVzW2luZGV4XSkgcmV0dXJuIHRoaXMubXVsdGlSZWdleGVzW2luZGV4XTtcblxuICAgICAgY29uc3QgbWF0Y2hlciA9IG5ldyBNdWx0aVJlZ2V4KCk7XG4gICAgICB0aGlzLnJ1bGVzLnNsaWNlKGluZGV4KS5mb3JFYWNoKChbcmUsIG9wdHNdKSA9PiBtYXRjaGVyLmFkZFJ1bGUocmUsIG9wdHMpKTtcbiAgICAgIG1hdGNoZXIuY29tcGlsZSgpO1xuICAgICAgdGhpcy5tdWx0aVJlZ2V4ZXNbaW5kZXhdID0gbWF0Y2hlcjtcbiAgICAgIHJldHVybiBtYXRjaGVyO1xuICAgIH1cblxuICAgIHJlc3VtaW5nU2NhbkF0U2FtZVBvc2l0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVnZXhJbmRleCAhPT0gMDtcbiAgICB9XG5cbiAgICBjb25zaWRlckFsbCgpIHtcbiAgICAgIHRoaXMucmVnZXhJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGFkZFJ1bGUocmUsIG9wdHMpIHtcbiAgICAgIHRoaXMucnVsZXMucHVzaChbcmUsIG9wdHNdKTtcbiAgICAgIGlmIChvcHRzLnR5cGUgPT09IFwiYmVnaW5cIikgdGhpcy5jb3VudCsrO1xuICAgIH1cblxuICAgIC8qKiBAcGFyYW0ge3N0cmluZ30gcyAqL1xuICAgIGV4ZWMocykge1xuICAgICAgY29uc3QgbSA9IHRoaXMuZ2V0TWF0Y2hlcih0aGlzLnJlZ2V4SW5kZXgpO1xuICAgICAgbS5sYXN0SW5kZXggPSB0aGlzLmxhc3RJbmRleDtcbiAgICAgIGxldCByZXN1bHQgPSBtLmV4ZWMocyk7XG5cbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgaXMgYmVjYXVzZSB3ZSBoYXZlIG5vIGVhc3kgd2F5IHRvIHNheSBcInJlc3VtZSBzY2FubmluZyBhdCB0aGVcbiAgICAgIC8vIGV4aXN0aW5nIHBvc2l0aW9uIGJ1dCBhbHNvIHNraXAgdGhlIGN1cnJlbnQgcnVsZSBPTkxZXCIuIFdoYXQgaGFwcGVucyBpc1xuICAgICAgLy8gYWxsIHByaW9yIHJ1bGVzIGFyZSBhbHNvIHNraXBwZWQgd2hpY2ggY2FuIHJlc3VsdCBpbiBtYXRjaGluZyB0aGUgd3JvbmdcbiAgICAgIC8vIHRoaW5nLiBFeGFtcGxlIG9mIG1hdGNoaW5nIFwiYm9vZ2VyXCI6XG5cbiAgICAgIC8vIG91ciBtYXRjaGVyIGlzIFtzdHJpbmcsIFwiYm9vZ2VyXCIsIG51bWJlcl1cbiAgICAgIC8vXG4gICAgICAvLyAuLi4uYm9vZ2VyLi4uLlxuXG4gICAgICAvLyBpZiBcImJvb2dlclwiIGlzIGlnbm9yZWQgdGhlbiB3ZSdkIHJlYWxseSBuZWVkIGEgcmVnZXggdG8gc2NhbiBmcm9tIHRoZVxuICAgICAgLy8gU0FNRSBwb3NpdGlvbiBmb3Igb25seTogW3N0cmluZywgbnVtYmVyXSBidXQgaWdub3JpbmcgXCJib29nZXJcIiAoaWYgaXRcbiAgICAgIC8vIHdhcyB0aGUgZmlyc3QgbWF0Y2gpLCBhIHNpbXBsZSByZXN1bWUgd291bGQgc2NhbiBhaGVhZCB3aG8ga25vd3MgaG93XG4gICAgICAvLyBmYXIgbG9va2luZyBvbmx5IGZvciBcIm51bWJlclwiLCBpZ25vcmluZyBwb3RlbnRpYWwgc3RyaW5nIG1hdGNoZXMgKG9yXG4gICAgICAvLyBmdXR1cmUgXCJib29nZXJcIiBtYXRjaGVzIHRoYXQgbWlnaHQgYmUgdmFsaWQuKVxuXG4gICAgICAvLyBTbyB3aGF0IHdlIGRvOiBXZSBleGVjdXRlIHR3byBtYXRjaGVycywgb25lIHJlc3VtaW5nIGF0IHRoZSBzYW1lXG4gICAgICAvLyBwb3NpdGlvbiwgYnV0IHRoZSBzZWNvbmQgZnVsbCBtYXRjaGVyIHN0YXJ0aW5nIGF0IHRoZSBwb3NpdGlvbiBhZnRlcjpcblxuICAgICAgLy8gICAgIC8tLS0gcmVzdW1lIGZpcnN0IHJlZ2V4IG1hdGNoIGhlcmUgKGZvciBbbnVtYmVyXSlcbiAgICAgIC8vICAgICB8Ly0tLS0gZnVsbCBtYXRjaCBoZXJlIGZvciBbc3RyaW5nLCBcImJvb2dlclwiLCBudW1iZXJdXG4gICAgICAvLyAgICAgdnZcbiAgICAgIC8vIC4uLi5ib29nZXIuLi4uXG5cbiAgICAgIC8vIFdoaWNoIGV2ZXIgcmVzdWx0cyBpbiBhIG1hdGNoIGZpcnN0IGlzIHRoZW4gdXNlZC4gU28gdGhpcyAzLTQgc3RlcFxuICAgICAgLy8gcHJvY2VzcyBlc3NlbnRpYWxseSBhbGxvd3MgdXMgdG8gc2F5IFwibWF0Y2ggYXQgdGhpcyBwb3NpdGlvbiwgZXhjbHVkaW5nXG4gICAgICAvLyBhIHByaW9yIHJ1bGUgdGhhdCB3YXMgaWdub3JlZFwiLlxuICAgICAgLy9cbiAgICAgIC8vIDEuIE1hdGNoIFwiYm9vZ2VyXCIgZmlyc3QsIGlnbm9yZS4gQWxzbyBwcm92ZXMgdGhhdCBbc3RyaW5nXSBkb2VzIG5vbiBtYXRjaC5cbiAgICAgIC8vIDIuIFJlc3VtZSBtYXRjaGluZyBmb3IgW251bWJlcl1cbiAgICAgIC8vIDMuIE1hdGNoIGF0IGluZGV4ICsgMSBmb3IgW3N0cmluZywgXCJib29nZXJcIiwgbnVtYmVyXVxuICAgICAgLy8gNC4gSWYgIzIgYW5kICMzIHJlc3VsdCBpbiBtYXRjaGVzLCB3aGljaCBjYW1lIGZpcnN0P1xuICAgICAgaWYgKHRoaXMucmVzdW1pbmdTY2FuQXRTYW1lUG9zaXRpb24oKSkge1xuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5pbmRleCA9PT0gdGhpcy5sYXN0SW5kZXgpIDsgZWxzZSB7IC8vIHVzZSB0aGUgc2Vjb25kIG1hdGNoZXIgcmVzdWx0XG4gICAgICAgICAgY29uc3QgbTIgPSB0aGlzLmdldE1hdGNoZXIoMCk7XG4gICAgICAgICAgbTIubGFzdEluZGV4ID0gdGhpcy5sYXN0SW5kZXggKyAxO1xuICAgICAgICAgIHJlc3VsdCA9IG0yLmV4ZWMocyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnJlZ2V4SW5kZXggKz0gcmVzdWx0LnBvc2l0aW9uICsgMTtcbiAgICAgICAgaWYgKHRoaXMucmVnZXhJbmRleCA9PT0gdGhpcy5jb3VudCkge1xuICAgICAgICAgIC8vIHdyYXAtYXJvdW5kIHRvIGNvbnNpZGVyaW5nIGFsbCBtYXRjaGVzIGFnYWluXG4gICAgICAgICAgdGhpcy5jb25zaWRlckFsbCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgbW9kZSwgYnVpbGRzIGEgaHVnZSBSZXN1bWFibGVNdWx0aVJlZ2V4IHRoYXQgY2FuIGJlIHVzZWQgdG8gd2Fsa1xuICAgKiB0aGUgY29udGVudCBhbmQgZmluZCBtYXRjaGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0NvbXBpbGVkTW9kZX0gbW9kZVxuICAgKiBAcmV0dXJucyB7UmVzdW1hYmxlTXVsdGlSZWdleH1cbiAgICovXG4gIGZ1bmN0aW9uIGJ1aWxkTW9kZVJlZ2V4KG1vZGUpIHtcbiAgICBjb25zdCBtbSA9IG5ldyBSZXN1bWFibGVNdWx0aVJlZ2V4KCk7XG5cbiAgICBtb2RlLmNvbnRhaW5zLmZvckVhY2godGVybSA9PiBtbS5hZGRSdWxlKHRlcm0uYmVnaW4sIHsgcnVsZTogdGVybSwgdHlwZTogXCJiZWdpblwiIH0pKTtcblxuICAgIGlmIChtb2RlLnRlcm1pbmF0b3JFbmQpIHtcbiAgICAgIG1tLmFkZFJ1bGUobW9kZS50ZXJtaW5hdG9yRW5kLCB7IHR5cGU6IFwiZW5kXCIgfSk7XG4gICAgfVxuICAgIGlmIChtb2RlLmlsbGVnYWwpIHtcbiAgICAgIG1tLmFkZFJ1bGUobW9kZS5pbGxlZ2FsLCB7IHR5cGU6IFwiaWxsZWdhbFwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtbTtcbiAgfVxuXG4gIC8qKiBza2lwIHZzIGFib3J0IHZzIGlnbm9yZVxuICAgKlxuICAgKiBAc2tpcCAgIC0gVGhlIG1vZGUgaXMgc3RpbGwgZW50ZXJlZCBhbmQgZXhpdGVkIG5vcm1hbGx5IChhbmQgY29udGFpbnMgcnVsZXMgYXBwbHkpLFxuICAgKiAgICAgICAgICAgYnV0IGFsbCBjb250ZW50IGlzIGhlbGQgYW5kIGFkZGVkIHRvIHRoZSBwYXJlbnQgYnVmZmVyIHJhdGhlciB0aGFuIGJlaW5nXG4gICAqICAgICAgICAgICBvdXRwdXQgd2hlbiB0aGUgbW9kZSBlbmRzLiAgTW9zdGx5IHVzZWQgd2l0aCBgc3VibGFuZ3VhZ2VgIHRvIGJ1aWxkIHVwXG4gICAqICAgICAgICAgICBhIHNpbmdsZSBsYXJnZSBidWZmZXIgdGhhbiBjYW4gYmUgcGFyc2VkIGJ5IHN1Ymxhbmd1YWdlLlxuICAgKlxuICAgKiAgICAgICAgICAgICAtIFRoZSBtb2RlIGJlZ2luIGFuZHMgZW5kcyBub3JtYWxseS5cbiAgICogICAgICAgICAgICAgLSBDb250ZW50IG1hdGNoZWQgaXMgYWRkZWQgdG8gdGhlIHBhcmVudCBtb2RlIGJ1ZmZlci5cbiAgICogICAgICAgICAgICAgLSBUaGUgcGFyc2VyIGN1cnNvciBpcyBtb3ZlZCBmb3J3YXJkIG5vcm1hbGx5LlxuICAgKlxuICAgKiBAYWJvcnQgIC0gQSBoYWNrIHBsYWNlaG9sZGVyIHVudGlsIHdlIGhhdmUgaWdub3JlLiAgQWJvcnRzIHRoZSBtb2RlIChhcyBpZiBpdFxuICAgKiAgICAgICAgICAgbmV2ZXIgbWF0Y2hlZCkgYnV0IERPRVMgTk9UIGNvbnRpbnVlIHRvIG1hdGNoIHN1YnNlcXVlbnQgYGNvbnRhaW5zYFxuICAgKiAgICAgICAgICAgbW9kZXMuICBBYm9ydCBpcyBiYWQvc3Vib3B0aW1hbCBiZWNhdXNlIGl0IGNhbiByZXN1bHQgaW4gbW9kZXNcbiAgICogICAgICAgICAgIGZhcnRoZXIgZG93biBub3QgZ2V0dGluZyBhcHBsaWVkIGJlY2F1c2UgYW4gZWFybGllciBydWxlIGVhdHMgdGhlXG4gICAqICAgICAgICAgICBjb250ZW50IGJ1dCB0aGVuIGFib3J0cy5cbiAgICpcbiAgICogICAgICAgICAgICAgLSBUaGUgbW9kZSBkb2VzIG5vdCBiZWdpbi5cbiAgICogICAgICAgICAgICAgLSBDb250ZW50IG1hdGNoZWQgYnkgYGJlZ2luYCBpcyBhZGRlZCB0byB0aGUgbW9kZSBidWZmZXIuXG4gICAqICAgICAgICAgICAgIC0gVGhlIHBhcnNlciBjdXJzb3IgaXMgbW92ZWQgZm9yd2FyZCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQGlnbm9yZSAtIElnbm9yZXMgdGhlIG1vZGUgKGFzIGlmIGl0IG5ldmVyIG1hdGNoZWQpIGFuZCBjb250aW51ZXMgdG8gbWF0Y2ggYW55XG4gICAqICAgICAgICAgICBzdWJzZXF1ZW50IGBjb250YWluc2AgbW9kZXMuICBJZ25vcmUgaXNuJ3QgdGVjaG5pY2FsbHkgcG9zc2libGUgd2l0aFxuICAgKiAgICAgICAgICAgdGhlIGN1cnJlbnQgcGFyc2VyIGltcGxlbWVudGF0aW9uLlxuICAgKlxuICAgKiAgICAgICAgICAgICAtIFRoZSBtb2RlIGRvZXMgbm90IGJlZ2luLlxuICAgKiAgICAgICAgICAgICAtIENvbnRlbnQgbWF0Y2hlZCBieSBgYmVnaW5gIGlzIGlnbm9yZWQuXG4gICAqICAgICAgICAgICAgIC0gVGhlIHBhcnNlciBjdXJzb3IgaXMgbm90IG1vdmVkIGZvcndhcmQuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb21waWxlcyBhbiBpbmRpdmlkdWFsIG1vZGVcbiAgICpcbiAgICogVGhpcyBjYW4gcmFpc2UgYW4gZXJyb3IgaWYgdGhlIG1vZGUgY29udGFpbnMgY2VydGFpbiBkZXRlY3RhYmxlIGtub3duIGxvZ2ljXG4gICAqIGlzc3Vlcy5cbiAgICogQHBhcmFtIHtNb2RlfSBtb2RlXG4gICAqIEBwYXJhbSB7Q29tcGlsZWRNb2RlIHwgbnVsbH0gW3BhcmVudF1cbiAgICogQHJldHVybnMge0NvbXBpbGVkTW9kZSB8IG5ldmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gY29tcGlsZU1vZGUobW9kZSwgcGFyZW50KSB7XG4gICAgY29uc3QgY21vZGUgPSAvKiogQHR5cGUgQ29tcGlsZWRNb2RlICovIChtb2RlKTtcbiAgICBpZiAobW9kZS5jb21waWxlZCkgcmV0dXJuIGNtb2RlO1xuXG4gICAgW1xuICAgICAgLy8gZG8gdGhpcyBlYXJseSBzbyBjb21waWxlciBleHRlbnNpb25zIGdlbmVyYWxseSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0XG4gICAgICAvLyB0aGUgZGlzdGluY3Rpb24gYmV0d2VlbiBtYXRjaC9iZWdpblxuICAgICAgY29tcGlsZU1hdGNoXG4gICAgXS5mb3JFYWNoKGV4dCA9PiBleHQobW9kZSwgcGFyZW50KSk7XG5cbiAgICBsYW5ndWFnZS5jb21waWxlckV4dGVuc2lvbnMuZm9yRWFjaChleHQgPT4gZXh0KG1vZGUsIHBhcmVudCkpO1xuXG4gICAgLy8gX19iZWZvcmVCZWdpbiBpcyBjb25zaWRlcmVkIHByaXZhdGUgQVBJLCBpbnRlcm5hbCB1c2Ugb25seVxuICAgIG1vZGUuX19iZWZvcmVCZWdpbiA9IG51bGw7XG5cbiAgICBbXG4gICAgICBiZWdpbktleXdvcmRzLFxuICAgICAgLy8gZG8gdGhpcyBsYXRlciBzbyBjb21waWxlciBleHRlbnNpb25zIHRoYXQgY29tZSBlYXJsaWVyIGhhdmUgYWNjZXNzIHRvIHRoZVxuICAgICAgLy8gcmF3IGFycmF5IGlmIHRoZXkgd2FudGVkIHRvIHBlcmhhcHMgbWFuaXB1bGF0ZSBpdCwgZXRjLlxuICAgICAgY29tcGlsZUlsbGVnYWwsXG4gICAgICAvLyBkZWZhdWx0IHRvIDEgcmVsZXZhbmNlIGlmIG5vdCBzcGVjaWZpZWRcbiAgICAgIGNvbXBpbGVSZWxldmFuY2VcbiAgICBdLmZvckVhY2goZXh0ID0+IGV4dChtb2RlLCBwYXJlbnQpKTtcblxuICAgIG1vZGUuY29tcGlsZWQgPSB0cnVlO1xuXG4gICAgbGV0IGtleXdvcmRQYXR0ZXJuID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIG1vZGUua2V5d29yZHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGtleXdvcmRQYXR0ZXJuID0gbW9kZS5rZXl3b3Jkcy4kcGF0dGVybjtcbiAgICAgIGRlbGV0ZSBtb2RlLmtleXdvcmRzLiRwYXR0ZXJuO1xuICAgIH1cblxuICAgIGlmIChtb2RlLmtleXdvcmRzKSB7XG4gICAgICBtb2RlLmtleXdvcmRzID0gY29tcGlsZUtleXdvcmRzKG1vZGUua2V5d29yZHMsIGxhbmd1YWdlLmNhc2VfaW5zZW5zaXRpdmUpO1xuICAgIH1cblxuICAgIC8vIGJvdGggYXJlIG5vdCBhbGxvd2VkXG4gICAgaWYgKG1vZGUubGV4ZW1lcyAmJiBrZXl3b3JkUGF0dGVybikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRVJSOiBQcmVmZXIgYGtleXdvcmRzLiRwYXR0ZXJuYCB0byBgbW9kZS5sZXhlbWVzYCwgQk9USCBhcmUgbm90IGFsbG93ZWQuIChzZWUgbW9kZSByZWZlcmVuY2UpIFwiKTtcbiAgICB9XG5cbiAgICAvLyBgbW9kZS5sZXhlbWVzYCB3YXMgdGhlIG9sZCBzdGFuZGFyZCBiZWZvcmUgd2UgYWRkZWQgYW5kIG5vdyByZWNvbW1lbmRcbiAgICAvLyB1c2luZyBga2V5d29yZHMuJHBhdHRlcm5gIHRvIHBhc3MgdGhlIGtleXdvcmQgcGF0dGVyblxuICAgIGtleXdvcmRQYXR0ZXJuID0ga2V5d29yZFBhdHRlcm4gfHwgbW9kZS5sZXhlbWVzIHx8IC9cXHcrLztcbiAgICBjbW9kZS5rZXl3b3JkUGF0dGVyblJlID0gbGFuZ1JlKGtleXdvcmRQYXR0ZXJuLCB0cnVlKTtcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGlmICghbW9kZS5iZWdpbikgbW9kZS5iZWdpbiA9IC9cXEJ8XFxiLztcbiAgICAgIGNtb2RlLmJlZ2luUmUgPSBsYW5nUmUobW9kZS5iZWdpbik7XG4gICAgICBpZiAobW9kZS5lbmRTYW1lQXNCZWdpbikgbW9kZS5lbmQgPSBtb2RlLmJlZ2luO1xuICAgICAgaWYgKCFtb2RlLmVuZCAmJiAhbW9kZS5lbmRzV2l0aFBhcmVudCkgbW9kZS5lbmQgPSAvXFxCfFxcYi87XG4gICAgICBpZiAobW9kZS5lbmQpIGNtb2RlLmVuZFJlID0gbGFuZ1JlKG1vZGUuZW5kKTtcbiAgICAgIGNtb2RlLnRlcm1pbmF0b3JFbmQgPSBzb3VyY2UobW9kZS5lbmQpIHx8ICcnO1xuICAgICAgaWYgKG1vZGUuZW5kc1dpdGhQYXJlbnQgJiYgcGFyZW50LnRlcm1pbmF0b3JFbmQpIHtcbiAgICAgICAgY21vZGUudGVybWluYXRvckVuZCArPSAobW9kZS5lbmQgPyAnfCcgOiAnJykgKyBwYXJlbnQudGVybWluYXRvckVuZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1vZGUuaWxsZWdhbCkgY21vZGUuaWxsZWdhbFJlID0gbGFuZ1JlKC8qKiBAdHlwZSB7UmVnRXhwIHwgc3RyaW5nfSAqLyAobW9kZS5pbGxlZ2FsKSk7XG4gICAgaWYgKCFtb2RlLmNvbnRhaW5zKSBtb2RlLmNvbnRhaW5zID0gW107XG5cbiAgICBtb2RlLmNvbnRhaW5zID0gW10uY29uY2F0KC4uLm1vZGUuY29udGFpbnMubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiBleHBhbmRPckNsb25lTW9kZShjID09PSAnc2VsZicgPyBtb2RlIDogYyk7XG4gICAgfSkpO1xuICAgIG1vZGUuY29udGFpbnMuZm9yRWFjaChmdW5jdGlvbihjKSB7IGNvbXBpbGVNb2RlKC8qKiBAdHlwZSBNb2RlICovIChjKSwgY21vZGUpOyB9KTtcblxuICAgIGlmIChtb2RlLnN0YXJ0cykge1xuICAgICAgY29tcGlsZU1vZGUobW9kZS5zdGFydHMsIHBhcmVudCk7XG4gICAgfVxuXG4gICAgY21vZGUubWF0Y2hlciA9IGJ1aWxkTW9kZVJlZ2V4KGNtb2RlKTtcbiAgICByZXR1cm4gY21vZGU7XG4gIH1cblxuICBpZiAoIWxhbmd1YWdlLmNvbXBpbGVyRXh0ZW5zaW9ucykgbGFuZ3VhZ2UuY29tcGlsZXJFeHRlbnNpb25zID0gW107XG5cbiAgLy8gc2VsZiBpcyBub3QgdmFsaWQgYXQgdGhlIHRvcC1sZXZlbFxuICBpZiAobGFuZ3VhZ2UuY29udGFpbnMgJiYgbGFuZ3VhZ2UuY29udGFpbnMuaW5jbHVkZXMoJ3NlbGYnKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkVSUjogY29udGFpbnMgYHNlbGZgIGlzIG5vdCBzdXBwb3J0ZWQgYXQgdGhlIHRvcC1sZXZlbCBvZiBhIGxhbmd1YWdlLiAgU2VlIGRvY3VtZW50YXRpb24uXCIpO1xuICB9XG5cbiAgLy8gd2UgbmVlZCBhIG51bGwgb2JqZWN0LCB3aGljaCBpbmhlcml0IHdpbGwgZ3VhcmFudGVlXG4gIGxhbmd1YWdlLmNsYXNzTmFtZUFsaWFzZXMgPSBpbmhlcml0KGxhbmd1YWdlLmNsYXNzTmFtZUFsaWFzZXMgfHwge30pO1xuXG4gIHJldHVybiBjb21waWxlTW9kZSgvKiogQHR5cGUgTW9kZSAqLyAobGFuZ3VhZ2UpKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgbW9kZSBoYXMgYSBkZXBlbmRlbmN5IG9uIGl0J3MgcGFyZW50IG9yIG5vdFxuICpcbiAqIElmIGEgbW9kZSBkb2VzIGhhdmUgYSBwYXJlbnQgZGVwZW5kZW5jeSB0aGVuIG9mdGVuIHdlIG5lZWQgdG8gY2xvbmUgaXQgaWZcbiAqIGl0J3MgdXNlZCBpbiBtdWx0aXBsZSBwbGFjZXMgc28gdGhhdCBlYWNoIGNvcHkgcG9pbnRzIHRvIHRoZSBjb3JyZWN0IHBhcmVudCxcbiAqIHdoZXJlLWFzIG1vZGVzIHdpdGhvdXQgYSBwYXJlbnQgY2FuIG9mdGVuIHNhZmVseSBiZSByZS11c2VkIGF0IHRoZSBib3R0b20gb2ZcbiAqIGEgbW9kZSBjaGFpbi5cbiAqXG4gKiBAcGFyYW0ge01vZGUgfCBudWxsfSBtb2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBpcyB0aGVyZSBhIGRlcGVuZGVuY3kgb24gdGhlIHBhcmVudD9cbiAqICovXG5mdW5jdGlvbiBkZXBlbmRlbmN5T25QYXJlbnQobW9kZSkge1xuICBpZiAoIW1vZGUpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gbW9kZS5lbmRzV2l0aFBhcmVudCB8fCBkZXBlbmRlbmN5T25QYXJlbnQobW9kZS5zdGFydHMpO1xufVxuXG4vKipcbiAqIEV4cGFuZHMgYSBtb2RlIG9yIGNsb25lcyBpdCBpZiBuZWNlc3NhcnlcbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgbW9kZXMgd2l0aCBwYXJlbnRhbCBkZXBlbmRlbmNlaXMgKHNlZSBub3RlcyBvblxuICogYGRlcGVuZGVuY3lPblBhcmVudGApIGFuZCBmb3Igbm9kZXMgdGhhdCBoYXZlIGB2YXJpYW50c2AgLSB3aGljaCBtdXN0IHRoZW4gYmVcbiAqIGV4cGxvZGVkIGludG8gdGhlaXIgb3duIGluZGl2aWR1YWwgbW9kZXMgYXQgY29tcGlsZSB0aW1lLlxuICpcbiAqIEBwYXJhbSB7TW9kZX0gbW9kZVxuICogQHJldHVybnMge01vZGUgfCBNb2RlW119XG4gKiAqL1xuZnVuY3Rpb24gZXhwYW5kT3JDbG9uZU1vZGUobW9kZSkge1xuICBpZiAobW9kZS52YXJpYW50cyAmJiAhbW9kZS5jYWNoZWRWYXJpYW50cykge1xuICAgIG1vZGUuY2FjaGVkVmFyaWFudHMgPSBtb2RlLnZhcmlhbnRzLm1hcChmdW5jdGlvbih2YXJpYW50KSB7XG4gICAgICByZXR1cm4gaW5oZXJpdChtb2RlLCB7IHZhcmlhbnRzOiBudWxsIH0sIHZhcmlhbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRVhQQU5EXG4gIC8vIGlmIHdlIGhhdmUgdmFyaWFudHMgdGhlbiBlc3NlbnRpYWxseSBcInJlcGxhY2VcIiB0aGUgbW9kZSB3aXRoIHRoZSB2YXJpYW50c1xuICAvLyB0aGlzIGhhcHBlbnMgaW4gY29tcGlsZU1vZGUsIHdoZXJlIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGZyb21cbiAgaWYgKG1vZGUuY2FjaGVkVmFyaWFudHMpIHtcbiAgICByZXR1cm4gbW9kZS5jYWNoZWRWYXJpYW50cztcbiAgfVxuXG4gIC8vIENMT05FXG4gIC8vIGlmIHdlIGhhdmUgZGVwZW5kZW5jaWVzIG9uIHBhcmVudHMgdGhlbiB3ZSBuZWVkIGEgdW5pcXVlXG4gIC8vIGluc3RhbmNlIG9mIG91cnNlbHZlcywgc28gd2UgY2FuIGJlIHJldXNlZCB3aXRoIG1hbnlcbiAgLy8gZGlmZmVyZW50IHBhcmVudHMgd2l0aG91dCBpc3N1ZVxuICBpZiAoZGVwZW5kZW5jeU9uUGFyZW50KG1vZGUpKSB7XG4gICAgcmV0dXJuIGluaGVyaXQobW9kZSwgeyBzdGFydHM6IG1vZGUuc3RhcnRzID8gaW5oZXJpdChtb2RlLnN0YXJ0cykgOiBudWxsIH0pO1xuICB9XG5cbiAgaWYgKE9iamVjdC5pc0Zyb3plbihtb2RlKSkge1xuICAgIHJldHVybiBpbmhlcml0KG1vZGUpO1xuICB9XG5cbiAgLy8gbm8gc3BlY2lhbCBkZXBlbmRlbmN5IGlzc3VlcywganVzdCByZXR1cm4gb3Vyc2VsdmVzXG4gIHJldHVybiBtb2RlO1xufVxuXG52YXIgdmVyc2lvbiA9IFwiMTAuNi4wXCI7XG5cbi8vIEB0cy1ub2NoZWNrXG5cbmZ1bmN0aW9uIGhhc1ZhbHVlT3JFbXB0eUF0dHJpYnV0ZSh2YWx1ZSkge1xuICByZXR1cm4gQm9vbGVhbih2YWx1ZSB8fCB2YWx1ZSA9PT0gXCJcIik7XG59XG5cbmZ1bmN0aW9uIEJ1aWxkVnVlUGx1Z2luKGhsanMpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0ge1xuICAgIHByb3BzOiBbXCJsYW5ndWFnZVwiLCBcImNvZGVcIiwgXCJhdXRvZGV0ZWN0XCJdLFxuICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGV0ZWN0ZWRMYW5ndWFnZTogXCJcIixcbiAgICAgICAgdW5rbm93bkxhbmd1YWdlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBjbGFzc05hbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnVua25vd25MYW5ndWFnZSkgcmV0dXJuIFwiXCI7XG5cbiAgICAgICAgcmV0dXJuIFwiaGxqcyBcIiArIHRoaXMuZGV0ZWN0ZWRMYW5ndWFnZTtcbiAgICAgIH0sXG4gICAgICBoaWdobGlnaHRlZCgpIHtcbiAgICAgICAgLy8gbm8gaWRlYSB3aGF0IGxhbmd1YWdlIHRvIHVzZSwgcmV0dXJuIHJhdyBjb2RlXG4gICAgICAgIGlmICghdGhpcy5hdXRvRGV0ZWN0ICYmICFobGpzLmdldExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgbGFuZ3VhZ2UgXCIke3RoaXMubGFuZ3VhZ2V9XCIgeW91IHNwZWNpZmllZCBjb3VsZCBub3QgYmUgZm91bmQuYCk7XG4gICAgICAgICAgdGhpcy51bmtub3duTGFuZ3VhZ2UgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBlc2NhcGVIVE1MKHRoaXMuY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIGlmICh0aGlzLmF1dG9EZXRlY3QpIHtcbiAgICAgICAgICByZXN1bHQgPSBobGpzLmhpZ2hsaWdodEF1dG8odGhpcy5jb2RlKTtcbiAgICAgICAgICB0aGlzLmRldGVjdGVkTGFuZ3VhZ2UgPSByZXN1bHQubGFuZ3VhZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gaGxqcy5oaWdobGlnaHQodGhpcy5sYW5ndWFnZSwgdGhpcy5jb2RlLCB0aGlzLmlnbm9yZUlsbGVnYWxzKTtcbiAgICAgICAgICB0aGlzLmRldGVjdGVkTGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gICAgICB9LFxuICAgICAgYXV0b0RldGVjdCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmxhbmd1YWdlIHx8IGhhc1ZhbHVlT3JFbXB0eUF0dHJpYnV0ZSh0aGlzLmF1dG9kZXRlY3QpO1xuICAgICAgfSxcbiAgICAgIGlnbm9yZUlsbGVnYWxzKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIHRoaXMgYXZvaWRzIG5lZWRpbmcgdG8gdXNlIGEgd2hvbGUgVnVlIGNvbXBpbGF0aW9uIHBpcGVsaW5lIGp1c3RcbiAgICAvLyB0byBidWlsZCBIaWdobGlnaHQuanNcbiAgICByZW5kZXIoY3JlYXRlRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJwcmVcIiwge30sIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImNvZGVcIiwge1xuICAgICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzTmFtZSxcbiAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IHRoaXMuaGlnaGxpZ2h0ZWQgfVxuICAgICAgICB9KVxuICAgICAgXSk7XG4gICAgfVxuICAgIC8vIHRlbXBsYXRlOiBgPHByZT48Y29kZSA6Y2xhc3M9XCJjbGFzc05hbWVcIiB2LWh0bWw9XCJoaWdobGlnaHRlZFwiPjwvY29kZT48L3ByZT5gXG4gIH07XG5cbiAgY29uc3QgVnVlUGx1Z2luID0ge1xuICAgIGluc3RhbGwoVnVlKSB7XG4gICAgICBWdWUuY29tcG9uZW50KCdoaWdobGlnaHRqcycsIENvbXBvbmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IENvbXBvbmVudCwgVnVlUGx1Z2luIH07XG59XG5cbi8qIHBsdWdpbiBpdHNlbGYgKi9cblxuLyoqIEB0eXBlIHtITEpTUGx1Z2lufSAqL1xuY29uc3QgbWVyZ2VIVE1MUGx1Z2luID0ge1xuICBcImFmdGVyOmhpZ2hsaWdodEJsb2NrXCI6ICh7IGJsb2NrLCByZXN1bHQsIHRleHQgfSkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsU3RyZWFtID0gbm9kZVN0cmVhbShibG9jayk7XG4gICAgaWYgKCFvcmlnaW5hbFN0cmVhbS5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IHJlc3VsdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXN1bHROb2RlLmlubmVySFRNTCA9IHJlc3VsdC52YWx1ZTtcbiAgICByZXN1bHQudmFsdWUgPSBtZXJnZVN0cmVhbXMob3JpZ2luYWxTdHJlYW0sIG5vZGVTdHJlYW0ocmVzdWx0Tm9kZSksIHRleHQpO1xuICB9XG59O1xuXG4vKiBTdHJlYW0gbWVyZ2luZyBzdXBwb3J0IGZ1bmN0aW9ucyAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIEV2ZW50XG4gKiBAcHJvcGVydHkgeydzdGFydCd8J3N0b3AnfSBldmVudFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldFxuICogQHByb3BlcnR5IHtOb2RlfSBub2RlXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqL1xuZnVuY3Rpb24gdGFnKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqL1xuZnVuY3Rpb24gbm9kZVN0cmVhbShub2RlKSB7XG4gIC8qKiBAdHlwZSBFdmVudFtdICovXG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAoZnVuY3Rpb24gX25vZGVTdHJlYW0obm9kZSwgb2Zmc2V0KSB7XG4gICAgZm9yIChsZXQgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7IGNoaWxkOyBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nKSB7XG4gICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgb2Zmc2V0ICs9IGNoaWxkLm5vZGVWYWx1ZS5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3N0YXJ0JyxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICBub2RlOiBjaGlsZFxuICAgICAgICB9KTtcbiAgICAgICAgb2Zmc2V0ID0gX25vZGVTdHJlYW0oY2hpbGQsIG9mZnNldCk7XG4gICAgICAgIC8vIFByZXZlbnQgdm9pZCBlbGVtZW50cyBmcm9tIGhhdmluZyBhbiBlbmQgdGFnIHRoYXQgd291bGQgYWN0dWFsbHlcbiAgICAgICAgLy8gZG91YmxlIHRoZW0gaW4gdGhlIG91dHB1dC4gVGhlcmUgYXJlIG1vcmUgdm9pZCBlbGVtZW50cyBpbiBIVE1MXG4gICAgICAgIC8vIGJ1dCB3ZSBsaXN0IG9ubHkgdGhvc2UgcmVhbGlzdGljYWxseSBleHBlY3RlZCBpbiBjb2RlIGRpc3BsYXkuXG4gICAgICAgIGlmICghdGFnKGNoaWxkKS5tYXRjaCgvYnJ8aHJ8aW1nfGlucHV0LykpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBldmVudDogJ3N0b3AnLFxuICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICBub2RlOiBjaGlsZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH0pKG5vZGUsIDApO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvcmlnaW5hbCAtIHRoZSBvcmlnaW5hbCBzdHJlYW1cbiAqIEBwYXJhbSB7YW55fSBoaWdobGlnaHRlZCAtIHN0cmVhbSBvZiB0aGUgaGlnaGxpZ2h0ZWQgc291cmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB0aGUgb3JpZ2luYWwgc291cmNlIGl0c2VsZlxuICovXG5mdW5jdGlvbiBtZXJnZVN0cmVhbXMob3JpZ2luYWwsIGhpZ2hsaWdodGVkLCB2YWx1ZSkge1xuICBsZXQgcHJvY2Vzc2VkID0gMDtcbiAgbGV0IHJlc3VsdCA9ICcnO1xuICBjb25zdCBub2RlU3RhY2sgPSBbXTtcblxuICBmdW5jdGlvbiBzZWxlY3RTdHJlYW0oKSB7XG4gICAgaWYgKCFvcmlnaW5hbC5sZW5ndGggfHwgIWhpZ2hsaWdodGVkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsLmxlbmd0aCA/IG9yaWdpbmFsIDogaGlnaGxpZ2h0ZWQ7XG4gICAgfVxuICAgIGlmIChvcmlnaW5hbFswXS5vZmZzZXQgIT09IGhpZ2hsaWdodGVkWzBdLm9mZnNldCkge1xuICAgICAgcmV0dXJuIChvcmlnaW5hbFswXS5vZmZzZXQgPCBoaWdobGlnaHRlZFswXS5vZmZzZXQpID8gb3JpZ2luYWwgOiBoaWdobGlnaHRlZDtcbiAgICB9XG5cbiAgICAvKlxuICAgIFRvIGF2b2lkIHN0YXJ0aW5nIHRoZSBzdHJlYW0ganVzdCBiZWZvcmUgaXQgc2hvdWxkIHN0b3AgdGhlIG9yZGVyIGlzXG4gICAgZW5zdXJlZCB0aGF0IG9yaWdpbmFsIGFsd2F5cyBzdGFydHMgZmlyc3QgYW5kIGNsb3NlcyBsYXN0OlxuXG4gICAgaWYgKGV2ZW50MSA9PSAnc3RhcnQnICYmIGV2ZW50MiA9PSAnc3RhcnQnKVxuICAgICAgcmV0dXJuIG9yaWdpbmFsO1xuICAgIGlmIChldmVudDEgPT0gJ3N0YXJ0JyAmJiBldmVudDIgPT0gJ3N0b3AnKVxuICAgICAgcmV0dXJuIGhpZ2hsaWdodGVkO1xuICAgIGlmIChldmVudDEgPT0gJ3N0b3AnICYmIGV2ZW50MiA9PSAnc3RhcnQnKVxuICAgICAgcmV0dXJuIG9yaWdpbmFsO1xuICAgIGlmIChldmVudDEgPT0gJ3N0b3AnICYmIGV2ZW50MiA9PSAnc3RvcCcpXG4gICAgICByZXR1cm4gaGlnaGxpZ2h0ZWQ7XG5cbiAgICAuLi4gd2hpY2ggaXMgY29sbGFwc2VkIHRvOlxuICAgICovXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkWzBdLmV2ZW50ID09PSAnc3RhcnQnID8gb3JpZ2luYWwgOiBoaWdobGlnaHRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIG9wZW4obm9kZSkge1xuICAgIC8qKiBAcGFyYW0ge0F0dHJ9IGF0dHIgKi9cbiAgICBmdW5jdGlvbiBhdHRyaWJ1dGVTdHJpbmcoYXR0cikge1xuICAgICAgcmV0dXJuICcgJyArIGF0dHIubm9kZU5hbWUgKyAnPVwiJyArIGVzY2FwZUhUTUwoYXR0ci52YWx1ZSkgKyAnXCInO1xuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmVzdWx0ICs9ICc8JyArIHRhZyhub2RlKSArIFtdLm1hcC5jYWxsKG5vZGUuYXR0cmlidXRlcywgYXR0cmlidXRlU3RyaW5nKS5qb2luKCcnKSArICc+JztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIGNsb3NlKG5vZGUpIHtcbiAgICByZXN1bHQgKz0gJzwvJyArIHRhZyhub2RlKSArICc+JztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyKGV2ZW50KSB7XG4gICAgKGV2ZW50LmV2ZW50ID09PSAnc3RhcnQnID8gb3BlbiA6IGNsb3NlKShldmVudC5ub2RlKTtcbiAgfVxuXG4gIHdoaWxlIChvcmlnaW5hbC5sZW5ndGggfHwgaGlnaGxpZ2h0ZWQubGVuZ3RoKSB7XG4gICAgbGV0IHN0cmVhbSA9IHNlbGVjdFN0cmVhbSgpO1xuICAgIHJlc3VsdCArPSBlc2NhcGVIVE1MKHZhbHVlLnN1YnN0cmluZyhwcm9jZXNzZWQsIHN0cmVhbVswXS5vZmZzZXQpKTtcbiAgICBwcm9jZXNzZWQgPSBzdHJlYW1bMF0ub2Zmc2V0O1xuICAgIGlmIChzdHJlYW0gPT09IG9yaWdpbmFsKSB7XG4gICAgICAvKlxuICAgICAgT24gYW55IG9wZW5pbmcgb3IgY2xvc2luZyB0YWcgb2YgdGhlIG9yaWdpbmFsIG1hcmt1cCB3ZSBmaXJzdCBjbG9zZVxuICAgICAgdGhlIGVudGlyZSBoaWdobGlnaHRlZCBub2RlIHN0YWNrLCB0aGVuIHJlbmRlciB0aGUgb3JpZ2luYWwgdGFnIGFsb25nXG4gICAgICB3aXRoIGFsbCB0aGUgZm9sbG93aW5nIG9yaWdpbmFsIHRhZ3MgYXQgdGhlIHNhbWUgb2Zmc2V0IGFuZCB0aGVuXG4gICAgICByZW9wZW4gYWxsIHRoZSB0YWdzIG9uIHRoZSBoaWdobGlnaHRlZCBzdGFjay5cbiAgICAgICovXG4gICAgICBub2RlU3RhY2sucmV2ZXJzZSgpLmZvckVhY2goY2xvc2UpO1xuICAgICAgZG8ge1xuICAgICAgICByZW5kZXIoc3RyZWFtLnNwbGljZSgwLCAxKVswXSk7XG4gICAgICAgIHN0cmVhbSA9IHNlbGVjdFN0cmVhbSgpO1xuICAgICAgfSB3aGlsZSAoc3RyZWFtID09PSBvcmlnaW5hbCAmJiBzdHJlYW0ubGVuZ3RoICYmIHN0cmVhbVswXS5vZmZzZXQgPT09IHByb2Nlc3NlZCk7XG4gICAgICBub2RlU3RhY2sucmV2ZXJzZSgpLmZvckVhY2gob3Blbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdHJlYW1bMF0uZXZlbnQgPT09ICdzdGFydCcpIHtcbiAgICAgICAgbm9kZVN0YWNrLnB1c2goc3RyZWFtWzBdLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZVN0YWNrLnBvcCgpO1xuICAgICAgfVxuICAgICAgcmVuZGVyKHN0cmVhbS5zcGxpY2UoMCwgMSlbMF0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0ICsgZXNjYXBlSFRNTCh2YWx1ZS5zdWJzdHIocHJvY2Vzc2VkKSk7XG59XG5cbi8qXG5cbkZvciB0aGUgcmVhc29uaW5nIGJlaGluZCB0aGlzIHBsZWFzZSBzZWU6XG5odHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL2lzc3Vlcy8yODgwI2lzc3VlY29tbWVudC03NDcyNzU0MTlcblxuKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICovXG5jb25zdCBlcnJvciA9IChtZXNzYWdlKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcGFyYW0ge2FueX0gYXJnc1xuICovXG5jb25zdCB3YXJuID0gKG1lc3NhZ2UsIC4uLmFyZ3MpID0+IHtcbiAgY29uc29sZS5sb2coYFdBUk46ICR7bWVzc2FnZX1gLCAuLi5hcmdzKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKi9cbmNvbnN0IGRlcHJlY2F0ZWQgPSAodmVyc2lvbiwgbWVzc2FnZSkgPT4ge1xuICBjb25zb2xlLmxvZyhgRGVwcmVjYXRlZCBhcyBvZiAke3ZlcnNpb259LiAke21lc3NhZ2V9YCk7XG59O1xuXG4vKlxuU3ludGF4IGhpZ2hsaWdodGluZyB3aXRoIGxhbmd1YWdlIGF1dG9kZXRlY3Rpb24uXG5odHRwczovL2hpZ2hsaWdodGpzLm9yZy9cbiovXG5cbmNvbnN0IGVzY2FwZSQxID0gZXNjYXBlSFRNTDtcbmNvbnN0IGluaGVyaXQkMSA9IGluaGVyaXQ7XG5jb25zdCBOT19NQVRDSCA9IFN5bWJvbChcIm5vbWF0Y2hcIik7XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IGhsanMgLSBvYmplY3QgdGhhdCBpcyBleHRlbmRlZCAobGVnYWN5KVxuICogQHJldHVybnMge0hMSlNBcGl9XG4gKi9cbmNvbnN0IEhMSlMgPSBmdW5jdGlvbihobGpzKSB7XG4gIC8vIEdsb2JhbCBpbnRlcm5hbCB2YXJpYWJsZXMgdXNlZCB3aXRoaW4gdGhlIGhpZ2hsaWdodC5qcyBsaWJyYXJ5LlxuICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIExhbmd1YWdlPn0gKi9cbiAgY29uc3QgbGFuZ3VhZ2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSAqL1xuICBjb25zdCBhbGlhc2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLyoqIEB0eXBlIHtITEpTUGx1Z2luW119ICovXG4gIGNvbnN0IHBsdWdpbnMgPSBbXTtcblxuICAvLyBzYWZlL3Byb2R1Y3Rpb24gbW9kZSAtIHN3YWxsb3dzIG1vcmUgZXJyb3JzLCB0cmllcyB0byBrZWVwIHJ1bm5pbmdcbiAgLy8gZXZlbiBpZiBhIHNpbmdsZSBzeW50YXggb3IgcGFyc2UgaGl0cyBhIGZhdGFsIGVycm9yXG4gIGxldCBTQUZFX01PREUgPSB0cnVlO1xuICBjb25zdCBmaXhNYXJrdXBSZSA9IC8oXig8W14+XSs+fFxcdHwpK3xcXG4pL2dtO1xuICBjb25zdCBMQU5HVUFHRV9OT1RfRk9VTkQgPSBcIkNvdWxkIG5vdCBmaW5kIHRoZSBsYW5ndWFnZSAne30nLCBkaWQgeW91IGZvcmdldCB0byBsb2FkL2luY2x1ZGUgYSBsYW5ndWFnZSBtb2R1bGU/XCI7XG4gIC8qKiBAdHlwZSB7TGFuZ3VhZ2V9ICovXG4gIGNvbnN0IFBMQUlOVEVYVF9MQU5HVUFHRSA9IHsgZGlzYWJsZUF1dG9kZXRlY3Q6IHRydWUsIG5hbWU6ICdQbGFpbiB0ZXh0JywgY29udGFpbnM6IFtdIH07XG5cbiAgLy8gR2xvYmFsIG9wdGlvbnMgdXNlZCB3aGVuIHdpdGhpbiBleHRlcm5hbCBBUElzLiBUaGlzIGlzIG1vZGlmaWVkIHdoZW5cbiAgLy8gY2FsbGluZyB0aGUgYGhsanMuY29uZmlndXJlYCBmdW5jdGlvbi5cbiAgLyoqIEB0eXBlIEhMSlNPcHRpb25zICovXG4gIGxldCBvcHRpb25zID0ge1xuICAgIG5vSGlnaGxpZ2h0UmU6IC9eKG5vLT9oaWdobGlnaHQpJC9pLFxuICAgIGxhbmd1YWdlRGV0ZWN0UmU6IC9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pLFxuICAgIGNsYXNzUHJlZml4OiAnaGxqcy0nLFxuICAgIHRhYlJlcGxhY2U6IG51bGwsXG4gICAgdXNlQlI6IGZhbHNlLFxuICAgIGxhbmd1YWdlczogbnVsbCxcbiAgICAvLyBiZXRhIGNvbmZpZ3VyYXRpb24gb3B0aW9ucywgc3ViamVjdCB0byBjaGFuZ2UsIHdlbGNvbWUgdG8gZGlzY3Vzc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzEwODZcbiAgICBfX2VtaXR0ZXI6IFRva2VuVHJlZUVtaXR0ZXJcbiAgfTtcblxuICAvKiBVdGlsaXR5IGZ1bmN0aW9ucyAqL1xuXG4gIC8qKlxuICAgKiBUZXN0cyBhIGxhbmd1YWdlIG5hbWUgdG8gc2VlIGlmIGhpZ2hsaWdodGluZyBzaG91bGQgYmUgc2tpcHBlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VOYW1lXG4gICAqL1xuICBmdW5jdGlvbiBzaG91bGROb3RIaWdobGlnaHQobGFuZ3VhZ2VOYW1lKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubm9IaWdobGlnaHRSZS50ZXN0KGxhbmd1YWdlTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIaWdobGlnaHRlZEhUTUxFbGVtZW50fSBibG9jayAtIHRoZSBIVE1MIGVsZW1lbnQgdG8gZGV0ZXJtaW5lIGxhbmd1YWdlIGZvclxuICAgKi9cbiAgZnVuY3Rpb24gYmxvY2tMYW5ndWFnZShibG9jaykge1xuICAgIGxldCBjbGFzc2VzID0gYmxvY2suY2xhc3NOYW1lICsgJyAnO1xuXG4gICAgY2xhc3NlcyArPSBibG9jay5wYXJlbnROb2RlID8gYmxvY2sucGFyZW50Tm9kZS5jbGFzc05hbWUgOiAnJztcblxuICAgIC8vIGxhbmd1YWdlLSogdGFrZXMgcHJlY2VkZW5jZSBvdmVyIG5vbi1wcmVmaXhlZCBjbGFzcyBuYW1lcy5cbiAgICBjb25zdCBtYXRjaCA9IG9wdGlvbnMubGFuZ3VhZ2VEZXRlY3RSZS5leGVjKGNsYXNzZXMpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBnZXRMYW5ndWFnZShtYXRjaFsxXSk7XG4gICAgICBpZiAoIWxhbmd1YWdlKSB7XG4gICAgICAgIHdhcm4oTEFOR1VBR0VfTk9UX0ZPVU5ELnJlcGxhY2UoXCJ7fVwiLCBtYXRjaFsxXSkpO1xuICAgICAgICB3YXJuKFwiRmFsbGluZyBiYWNrIHRvIG5vLWhpZ2hsaWdodCBtb2RlIGZvciB0aGlzIGJsb2NrLlwiLCBibG9jayk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFuZ3VhZ2UgPyBtYXRjaFsxXSA6ICduby1oaWdobGlnaHQnO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzXG4gICAgICAuc3BsaXQoL1xccysvKVxuICAgICAgLmZpbmQoKF9jbGFzcykgPT4gc2hvdWxkTm90SGlnaGxpZ2h0KF9jbGFzcykgfHwgZ2V0TGFuZ3VhZ2UoX2NsYXNzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29yZSBoaWdobGlnaHRpbmcgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZU5hbWUgLSB0aGUgbGFuZ3VhZ2UgdG8gdXNlIGZvciBoaWdobGlnaHRpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgLSB0aGUgY29kZSB0byBoaWdobGlnaHRcbiAgICogQHBhcmFtIHtib29sZWFufSBbaWdub3JlSWxsZWdhbHNdIC0gd2hldGhlciB0byBpZ25vcmUgaWxsZWdhbCBtYXRjaGVzLCBkZWZhdWx0IGlzIHRvIGJhaWxcbiAgICogQHBhcmFtIHtDb21waWxlZE1vZGV9IFtjb250aW51YXRpb25dIC0gY3VycmVudCBjb250aW51YXRpb24gbW9kZSwgaWYgYW55XG4gICAqXG4gICAqIEByZXR1cm5zIHtIaWdobGlnaHRSZXN1bHR9IFJlc3VsdCAtIGFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIHJlc3VsdFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gbGFuZ3VhZ2UgLSB0aGUgbGFuZ3VhZ2UgbmFtZVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gcmVsZXZhbmNlIC0gdGhlIHJlbGV2YW5jZSBzY29yZVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdmFsdWUgLSB0aGUgaGlnaGxpZ2h0ZWQgSFRNTCBjb2RlXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb2RlIC0gdGhlIG9yaWdpbmFsIHJhdyBjb2RlXG4gICAqIEBwcm9wZXJ0eSB7Q29tcGlsZWRNb2RlfSB0b3AgLSB0b3Agb2YgdGhlIGN1cnJlbnQgbW9kZSBzdGFja1xuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlsbGVnYWwgLSBpbmRpY2F0ZXMgd2hldGhlciBhbnkgaWxsZWdhbCBtYXRjaGVzIHdlcmUgZm91bmRcbiAgKi9cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0KGxhbmd1YWdlTmFtZSwgY29kZSwgaWdub3JlSWxsZWdhbHMsIGNvbnRpbnVhdGlvbikge1xuICAgIC8qKiBAdHlwZSB7QmVmb3JlSGlnaGxpZ2h0Q29udGV4dH0gKi9cbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgY29kZSxcbiAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZU5hbWVcbiAgICB9O1xuICAgIC8vIHRoZSBwbHVnaW4gY2FuIGNoYW5nZSB0aGUgZGVzaXJlZCBsYW5ndWFnZSBvciB0aGUgY29kZSB0byBiZSBoaWdobGlnaHRlZFxuICAgIC8vIGp1c3QgYmUgY2hhbmdpbmcgdGhlIG9iamVjdCBpdCB3YXMgcGFzc2VkXG4gICAgZmlyZShcImJlZm9yZTpoaWdobGlnaHRcIiwgY29udGV4dCk7XG5cbiAgICAvLyBhIGJlZm9yZSBwbHVnaW4gY2FuIHVzdXJwIHRoZSByZXN1bHQgY29tcGxldGVseSBieSBwcm92aWRpbmcgaXQncyBvd25cbiAgICAvLyBpbiB3aGljaCBjYXNlIHdlIGRvbid0IGV2ZW4gbmVlZCB0byBjYWxsIGhpZ2hsaWdodFxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQucmVzdWx0XG4gICAgICA/IGNvbnRleHQucmVzdWx0XG4gICAgICA6IF9oaWdobGlnaHQoY29udGV4dC5sYW5ndWFnZSwgY29udGV4dC5jb2RlLCBpZ25vcmVJbGxlZ2FscywgY29udGludWF0aW9uKTtcblxuICAgIHJlc3VsdC5jb2RlID0gY29udGV4dC5jb2RlO1xuICAgIC8vIHRoZSBwbHVnaW4gY2FuIGNoYW5nZSBhbnl0aGluZyBpbiByZXN1bHQgdG8gc3VpdGUgaXRcbiAgICBmaXJlKFwiYWZ0ZXI6aGlnaGxpZ2h0XCIsIHJlc3VsdCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIHByaXZhdGUgaGlnaGxpZ2h0IHRoYXQncyB1c2VkIGludGVybmFsbHkgYW5kIGRvZXMgbm90IGZpcmUgY2FsbGJhY2tzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZU5hbWUgLSB0aGUgbGFuZ3VhZ2UgdG8gdXNlIGZvciBoaWdobGlnaHRpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgLSB0aGUgY29kZSB0byBoaWdobGlnaHRcbiAgICogQHBhcmFtIHtib29sZWFufSBbaWdub3JlSWxsZWdhbHNdIC0gd2hldGhlciB0byBpZ25vcmUgaWxsZWdhbCBtYXRjaGVzLCBkZWZhdWx0IGlzIHRvIGJhaWxcbiAgICogQHBhcmFtIHtDb21waWxlZE1vZGV9IFtjb250aW51YXRpb25dIC0gY3VycmVudCBjb250aW51YXRpb24gbW9kZSwgaWYgYW55XG4gICAqIEByZXR1cm5zIHtIaWdobGlnaHRSZXN1bHR9IC0gcmVzdWx0IG9mIHRoZSBoaWdobGlnaHQgb3BlcmF0aW9uXG4gICovXG4gIGZ1bmN0aW9uIF9oaWdobGlnaHQobGFuZ3VhZ2VOYW1lLCBjb2RlLCBpZ25vcmVJbGxlZ2FscywgY29udGludWF0aW9uKSB7XG4gICAgY29uc3QgY29kZVRvSGlnaGxpZ2h0ID0gY29kZTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybiBrZXl3b3JkIGRhdGEgaWYgYSBtYXRjaCBpcyBhIGtleXdvcmRcbiAgICAgKiBAcGFyYW0ge0NvbXBpbGVkTW9kZX0gbW9kZSAtIGN1cnJlbnQgbW9kZVxuICAgICAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hBcnJheX0gbWF0Y2ggLSByZWdleHAgbWF0Y2ggZGF0YVxuICAgICAqIEByZXR1cm5zIHtLZXl3b3JkRGF0YSB8IGZhbHNlfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGtleXdvcmREYXRhKG1vZGUsIG1hdGNoKSB7XG4gICAgICBjb25zdCBtYXRjaFRleHQgPSBsYW5ndWFnZS5jYXNlX2luc2Vuc2l0aXZlID8gbWF0Y2hbMF0udG9Mb3dlckNhc2UoKSA6IG1hdGNoWzBdO1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2RlLmtleXdvcmRzLCBtYXRjaFRleHQpICYmIG1vZGUua2V5d29yZHNbbWF0Y2hUZXh0XTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzS2V5d29yZHMoKSB7XG4gICAgICBpZiAoIXRvcC5rZXl3b3Jkcykge1xuICAgICAgICBlbWl0dGVyLmFkZFRleHQobW9kZUJ1ZmZlcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICB0b3Aua2V5d29yZFBhdHRlcm5SZS5sYXN0SW5kZXggPSAwO1xuICAgICAgbGV0IG1hdGNoID0gdG9wLmtleXdvcmRQYXR0ZXJuUmUuZXhlYyhtb2RlQnVmZmVyKTtcbiAgICAgIGxldCBidWYgPSBcIlwiO1xuXG4gICAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgYnVmICs9IG1vZGVCdWZmZXIuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpO1xuICAgICAgICBjb25zdCBkYXRhID0ga2V5d29yZERhdGEodG9wLCBtYXRjaCk7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgY29uc3QgW2tpbmQsIGtleXdvcmRSZWxldmFuY2VdID0gZGF0YTtcbiAgICAgICAgICBlbWl0dGVyLmFkZFRleHQoYnVmKTtcbiAgICAgICAgICBidWYgPSBcIlwiO1xuXG4gICAgICAgICAgcmVsZXZhbmNlICs9IGtleXdvcmRSZWxldmFuY2U7XG4gICAgICAgICAgY29uc3QgY3NzQ2xhc3MgPSBsYW5ndWFnZS5jbGFzc05hbWVBbGlhc2VzW2tpbmRdIHx8IGtpbmQ7XG4gICAgICAgICAgZW1pdHRlci5hZGRLZXl3b3JkKG1hdGNoWzBdLCBjc3NDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnVmICs9IG1hdGNoWzBdO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RJbmRleCA9IHRvcC5rZXl3b3JkUGF0dGVyblJlLmxhc3RJbmRleDtcbiAgICAgICAgbWF0Y2ggPSB0b3Aua2V5d29yZFBhdHRlcm5SZS5leGVjKG1vZGVCdWZmZXIpO1xuICAgICAgfVxuICAgICAgYnVmICs9IG1vZGVCdWZmZXIuc3Vic3RyKGxhc3RJbmRleCk7XG4gICAgICBlbWl0dGVyLmFkZFRleHQoYnVmKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzU3ViTGFuZ3VhZ2UoKSB7XG4gICAgICBpZiAobW9kZUJ1ZmZlciA9PT0gXCJcIikgcmV0dXJuO1xuICAgICAgLyoqIEB0eXBlIEhpZ2hsaWdodFJlc3VsdCAqL1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICAgIGlmICh0eXBlb2YgdG9wLnN1Ykxhbmd1YWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoIWxhbmd1YWdlc1t0b3Auc3ViTGFuZ3VhZ2VdKSB7XG4gICAgICAgICAgZW1pdHRlci5hZGRUZXh0KG1vZGVCdWZmZXIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBfaGlnaGxpZ2h0KHRvcC5zdWJMYW5ndWFnZSwgbW9kZUJ1ZmZlciwgdHJ1ZSwgY29udGludWF0aW9uc1t0b3Auc3ViTGFuZ3VhZ2VdKTtcbiAgICAgICAgY29udGludWF0aW9uc1t0b3Auc3ViTGFuZ3VhZ2VdID0gLyoqIEB0eXBlIHtDb21waWxlZE1vZGV9ICovIChyZXN1bHQudG9wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGhpZ2hsaWdodEF1dG8obW9kZUJ1ZmZlciwgdG9wLnN1Ykxhbmd1YWdlLmxlbmd0aCA/IHRvcC5zdWJMYW5ndWFnZSA6IG51bGwpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb3VudGluZyBlbWJlZGRlZCBsYW5ndWFnZSBzY29yZSB0b3dhcmRzIHRoZSBob3N0IGxhbmd1YWdlIG1heSBiZSBkaXNhYmxlZFxuICAgICAgLy8gd2l0aCB6ZXJvaW5nIHRoZSBjb250YWluaW5nIG1vZGUgcmVsZXZhbmNlLiBVc2UgY2FzZSBpbiBwb2ludCBpcyBNYXJrZG93biB0aGF0XG4gICAgICAvLyBhbGxvd3MgWE1MIGV2ZXJ5d2hlcmUgYW5kIG1ha2VzIGV2ZXJ5IFhNTCBzbmlwcGV0IHRvIGhhdmUgYSBtdWNoIGxhcmdlciBNYXJrZG93blxuICAgICAgLy8gc2NvcmUuXG4gICAgICBpZiAodG9wLnJlbGV2YW5jZSA+IDApIHtcbiAgICAgICAgcmVsZXZhbmNlICs9IHJlc3VsdC5yZWxldmFuY2U7XG4gICAgICB9XG4gICAgICBlbWl0dGVyLmFkZFN1Ymxhbmd1YWdlKHJlc3VsdC5lbWl0dGVyLCByZXN1bHQubGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NCdWZmZXIoKSB7XG4gICAgICBpZiAodG9wLnN1Ykxhbmd1YWdlICE9IG51bGwpIHtcbiAgICAgICAgcHJvY2Vzc1N1Ykxhbmd1YWdlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzS2V5d29yZHMoKTtcbiAgICAgIH1cbiAgICAgIG1vZGVCdWZmZXIgPSAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01vZGV9IG1vZGUgLSBuZXcgbW9kZSB0byBzdGFydFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN0YXJ0TmV3TW9kZShtb2RlKSB7XG4gICAgICBpZiAobW9kZS5jbGFzc05hbWUpIHtcbiAgICAgICAgZW1pdHRlci5vcGVuTm9kZShsYW5ndWFnZS5jbGFzc05hbWVBbGlhc2VzW21vZGUuY2xhc3NOYW1lXSB8fCBtb2RlLmNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgICB0b3AgPSBPYmplY3QuY3JlYXRlKG1vZGUsIHsgcGFyZW50OiB7IHZhbHVlOiB0b3AgfSB9KTtcbiAgICAgIHJldHVybiB0b3A7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtDb21waWxlZE1vZGUgfSBtb2RlIC0gdGhlIG1vZGUgdG8gcG90ZW50aWFsbHkgZW5kXG4gICAgICogQHBhcmFtIHtSZWdFeHBNYXRjaEFycmF5fSBtYXRjaCAtIHRoZSBsYXRlc3QgbWF0Y2hcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hQbHVzUmVtYWluZGVyIC0gbWF0Y2ggcGx1cyByZW1haW5kZXIgb2YgY29udGVudFxuICAgICAqIEByZXR1cm5zIHtDb21waWxlZE1vZGUgfCB2b2lkfSAtIHRoZSBuZXh0IG1vZGUsIG9yIGlmIHZvaWQgY29udGludWUgb24gaW4gY3VycmVudCBtb2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gZW5kT2ZNb2RlKG1vZGUsIG1hdGNoLCBtYXRjaFBsdXNSZW1haW5kZXIpIHtcbiAgICAgIGxldCBtYXRjaGVkID0gc3RhcnRzV2l0aChtb2RlLmVuZFJlLCBtYXRjaFBsdXNSZW1haW5kZXIpO1xuXG4gICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICBpZiAobW9kZVtcIm9uOmVuZFwiXSkge1xuICAgICAgICAgIGNvbnN0IHJlc3AgPSBuZXcgUmVzcG9uc2UobW9kZSk7XG4gICAgICAgICAgbW9kZVtcIm9uOmVuZFwiXShtYXRjaCwgcmVzcCk7XG4gICAgICAgICAgaWYgKHJlc3AuaWdub3JlKSBtYXRjaGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgIHdoaWxlIChtb2RlLmVuZHNQYXJlbnQgJiYgbW9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIG1vZGUgPSBtb2RlLnBhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGV2ZW4gaWYgb246ZW5kIGZpcmVzIGFuIGBpZ25vcmVgIGl0J3Mgc3RpbGwgcG9zc2libGVcbiAgICAgIC8vIHRoYXQgd2UgbWlnaHQgdHJpZ2dlciB0aGUgZW5kIG5vZGUgYmVjYXVzZSBvZiBhIHBhcmVudCBtb2RlXG4gICAgICBpZiAobW9kZS5lbmRzV2l0aFBhcmVudCkge1xuICAgICAgICByZXR1cm4gZW5kT2ZNb2RlKG1vZGUucGFyZW50LCBtYXRjaCwgbWF0Y2hQbHVzUmVtYWluZGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgbWF0Y2hpbmcgYnV0IHRoZW4gaWdub3JpbmcgYSBzZXF1ZW5jZSBvZiB0ZXh0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGV4ZW1lIC0gc3RyaW5nIGNvbnRhaW5pbmcgZnVsbCBtYXRjaCB0ZXh0XG4gICAgICovXG4gICAgZnVuY3Rpb24gZG9JZ25vcmUobGV4ZW1lKSB7XG4gICAgICBpZiAodG9wLm1hdGNoZXIucmVnZXhJbmRleCA9PT0gMCkge1xuICAgICAgICAvLyBubyBtb3JlIHJlZ2V4cyB0byBwb3RlbnRpYWxseSBtYXRjaCBoZXJlLCBzbyB3ZSBtb3ZlIHRoZSBjdXJzb3IgZm9yd2FyZCBvbmVcbiAgICAgICAgLy8gc3BhY2VcbiAgICAgICAgbW9kZUJ1ZmZlciArPSBsZXhlbWVbMF07XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gbmVlZCB0byBtb3ZlIHRoZSBjdXJzb3IsIHdlIHN0aWxsIGhhdmUgYWRkaXRpb25hbCByZWdleGVzIHRvIHRyeSBhbmRcbiAgICAgICAgLy8gbWF0Y2ggYXQgdGhpcyB2ZXJ5IHNwb3RcbiAgICAgICAgcmVzdW1lU2NhbkF0U2FtZVBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBzdGFydCBvZiBhIG5ldyBwb3RlbnRpYWwgbW9kZSBtYXRjaFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbmhhbmNlZE1hdGNofSBtYXRjaCAtIHRoZSBjdXJyZW50IG1hdGNoXG4gICAgICogQHJldHVybnMge251bWJlcn0gaG93IGZhciB0byBhZHZhbmNlIHRoZSBwYXJzZSBjdXJzb3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkb0JlZ2luTWF0Y2gobWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxleGVtZSA9IG1hdGNoWzBdO1xuICAgICAgY29uc3QgbmV3TW9kZSA9IG1hdGNoLnJ1bGU7XG5cbiAgICAgIGNvbnN0IHJlc3AgPSBuZXcgUmVzcG9uc2UobmV3TW9kZSk7XG4gICAgICAvLyBmaXJzdCBpbnRlcm5hbCBiZWZvcmUgY2FsbGJhY2tzLCB0aGVuIHRoZSBwdWJsaWMgb25lc1xuICAgICAgY29uc3QgYmVmb3JlQ2FsbGJhY2tzID0gW25ld01vZGUuX19iZWZvcmVCZWdpbiwgbmV3TW9kZVtcIm9uOmJlZ2luXCJdXTtcbiAgICAgIGZvciAoY29uc3QgY2Igb2YgYmVmb3JlQ2FsbGJhY2tzKSB7XG4gICAgICAgIGlmICghY2IpIGNvbnRpbnVlO1xuICAgICAgICBjYihtYXRjaCwgcmVzcCk7XG4gICAgICAgIGlmIChyZXNwLmlnbm9yZSkgcmV0dXJuIGRvSWdub3JlKGxleGVtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdNb2RlICYmIG5ld01vZGUuZW5kU2FtZUFzQmVnaW4pIHtcbiAgICAgICAgbmV3TW9kZS5lbmRSZSA9IGVzY2FwZShsZXhlbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3TW9kZS5za2lwKSB7XG4gICAgICAgIG1vZGVCdWZmZXIgKz0gbGV4ZW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5ld01vZGUuZXhjbHVkZUJlZ2luKSB7XG4gICAgICAgICAgbW9kZUJ1ZmZlciArPSBsZXhlbWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc0J1ZmZlcigpO1xuICAgICAgICBpZiAoIW5ld01vZGUucmV0dXJuQmVnaW4gJiYgIW5ld01vZGUuZXhjbHVkZUJlZ2luKSB7XG4gICAgICAgICAgbW9kZUJ1ZmZlciA9IGxleGVtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3RhcnROZXdNb2RlKG5ld01vZGUpO1xuICAgICAgLy8gaWYgKG1vZGVbXCJhZnRlcjpiZWdpblwiXSkge1xuICAgICAgLy8gICBsZXQgcmVzcCA9IG5ldyBSZXNwb25zZShtb2RlKTtcbiAgICAgIC8vICAgbW9kZVtcImFmdGVyOmJlZ2luXCJdKG1hdGNoLCByZXNwKTtcbiAgICAgIC8vIH1cbiAgICAgIHJldHVybiBuZXdNb2RlLnJldHVybkJlZ2luID8gMCA6IGxleGVtZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBwb3RlbnRpYWwgZW5kIG9mIG1vZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hBcnJheX0gbWF0Y2ggLSB0aGUgY3VycmVudCBtYXRjaFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvRW5kTWF0Y2gobWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxleGVtZSA9IG1hdGNoWzBdO1xuICAgICAgY29uc3QgbWF0Y2hQbHVzUmVtYWluZGVyID0gY29kZVRvSGlnaGxpZ2h0LnN1YnN0cihtYXRjaC5pbmRleCk7XG5cbiAgICAgIGNvbnN0IGVuZE1vZGUgPSBlbmRPZk1vZGUodG9wLCBtYXRjaCwgbWF0Y2hQbHVzUmVtYWluZGVyKTtcbiAgICAgIGlmICghZW5kTW9kZSkgeyByZXR1cm4gTk9fTUFUQ0g7IH1cblxuICAgICAgY29uc3Qgb3JpZ2luID0gdG9wO1xuICAgICAgaWYgKG9yaWdpbi5za2lwKSB7XG4gICAgICAgIG1vZGVCdWZmZXIgKz0gbGV4ZW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCEob3JpZ2luLnJldHVybkVuZCB8fCBvcmlnaW4uZXhjbHVkZUVuZCkpIHtcbiAgICAgICAgICBtb2RlQnVmZmVyICs9IGxleGVtZTtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzQnVmZmVyKCk7XG4gICAgICAgIGlmIChvcmlnaW4uZXhjbHVkZUVuZCkge1xuICAgICAgICAgIG1vZGVCdWZmZXIgPSBsZXhlbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKHRvcC5jbGFzc05hbWUpIHtcbiAgICAgICAgICBlbWl0dGVyLmNsb3NlTm9kZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdG9wLnNraXAgJiYgIXRvcC5zdWJMYW5ndWFnZSkge1xuICAgICAgICAgIHJlbGV2YW5jZSArPSB0b3AucmVsZXZhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHRvcCA9IHRvcC5wYXJlbnQ7XG4gICAgICB9IHdoaWxlICh0b3AgIT09IGVuZE1vZGUucGFyZW50KTtcbiAgICAgIGlmIChlbmRNb2RlLnN0YXJ0cykge1xuICAgICAgICBpZiAoZW5kTW9kZS5lbmRTYW1lQXNCZWdpbikge1xuICAgICAgICAgIGVuZE1vZGUuc3RhcnRzLmVuZFJlID0gZW5kTW9kZS5lbmRSZTtcbiAgICAgICAgfVxuICAgICAgICBzdGFydE5ld01vZGUoZW5kTW9kZS5zdGFydHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdpbi5yZXR1cm5FbmQgPyAwIDogbGV4ZW1lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQ29udGludWF0aW9ucygpIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICAgIGZvciAobGV0IGN1cnJlbnQgPSB0b3A7IGN1cnJlbnQgIT09IGxhbmd1YWdlOyBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgbGlzdC51bnNoaWZ0KGN1cnJlbnQuY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4gZW1pdHRlci5vcGVuTm9kZShpdGVtKSk7XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHt7dHlwZT86IE1hdGNoVHlwZSwgaW5kZXg/OiBudW1iZXIsIHJ1bGU/OiBNb2RlfX19ICovXG4gICAgbGV0IGxhc3RNYXRjaCA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogIFByb2Nlc3MgYW4gaW5kaXZpZHVhbCBtYXRjaFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRCZWZvcmVNYXRjaCAtIHRleHQgcHJlY2VlZGluZyB0aGUgbWF0Y2ggKHNpbmNlIHRoZSBsYXN0IG1hdGNoKVxuICAgICAqIEBwYXJhbSB7RW5oYW5jZWRNYXRjaH0gW21hdGNoXSAtIHRoZSBtYXRjaCBpdHNlbGZcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcm9jZXNzTGV4ZW1lKHRleHRCZWZvcmVNYXRjaCwgbWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxleGVtZSA9IG1hdGNoICYmIG1hdGNoWzBdO1xuXG4gICAgICAvLyBhZGQgbm9uLW1hdGNoZWQgdGV4dCB0byB0aGUgY3VycmVudCBtb2RlIGJ1ZmZlclxuICAgICAgbW9kZUJ1ZmZlciArPSB0ZXh0QmVmb3JlTWF0Y2g7XG5cbiAgICAgIGlmIChsZXhlbWUgPT0gbnVsbCkge1xuICAgICAgICBwcm9jZXNzQnVmZmVyKCk7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSd2ZSBmb3VuZCBhIDAgd2lkdGggbWF0Y2ggYW5kIHdlJ3JlIHN0dWNrLCBzbyB3ZSBuZWVkIHRvIGFkdmFuY2VcbiAgICAgIC8vIHRoaXMgaGFwcGVucyB3aGVuIHdlIGhhdmUgYmFkbHkgYmVoYXZlZCBydWxlcyB0aGF0IGhhdmUgb3B0aW9uYWwgbWF0Y2hlcnMgdG8gdGhlIGRlZ3JlZSB0aGF0XG4gICAgICAvLyBzb21ldGltZXMgdGhleSBjYW4gZW5kIHVwIG1hdGNoaW5nIG5vdGhpbmcgYXQgYWxsXG4gICAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzIxNDBcbiAgICAgIGlmIChsYXN0TWF0Y2gudHlwZSA9PT0gXCJiZWdpblwiICYmIG1hdGNoLnR5cGUgPT09IFwiZW5kXCIgJiYgbGFzdE1hdGNoLmluZGV4ID09PSBtYXRjaC5pbmRleCAmJiBsZXhlbWUgPT09IFwiXCIpIHtcbiAgICAgICAgLy8gc3BpdCB0aGUgXCJza2lwcGVkXCIgY2hhcmFjdGVyIHRoYXQgb3VyIHJlZ2V4IGNob2tlZCBvbiBiYWNrIGludG8gdGhlIG91dHB1dCBzZXF1ZW5jZVxuICAgICAgICBtb2RlQnVmZmVyICs9IGNvZGVUb0hpZ2hsaWdodC5zbGljZShtYXRjaC5pbmRleCwgbWF0Y2guaW5kZXggKyAxKTtcbiAgICAgICAgaWYgKCFTQUZFX01PREUpIHtcbiAgICAgICAgICAvKiogQHR5cGUge0Fubm90YXRlZEVycm9yfSAqL1xuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignMCB3aWR0aCBtYXRjaCByZWdleCcpO1xuICAgICAgICAgIGVyci5sYW5ndWFnZU5hbWUgPSBsYW5ndWFnZU5hbWU7XG4gICAgICAgICAgZXJyLmJhZFJ1bGUgPSBsYXN0TWF0Y2gucnVsZTtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBsYXN0TWF0Y2ggPSBtYXRjaDtcblxuICAgICAgaWYgKG1hdGNoLnR5cGUgPT09IFwiYmVnaW5cIikge1xuICAgICAgICByZXR1cm4gZG9CZWdpbk1hdGNoKG1hdGNoKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gudHlwZSA9PT0gXCJpbGxlZ2FsXCIgJiYgIWlnbm9yZUlsbGVnYWxzKSB7XG4gICAgICAgIC8vIGlsbGVnYWwgbWF0Y2gsIHdlIGRvIG5vdCBjb250aW51ZSBwcm9jZXNzaW5nXG4gICAgICAgIC8qKiBAdHlwZSB7QW5ub3RhdGVkRXJyb3J9ICovXG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignSWxsZWdhbCBsZXhlbWUgXCInICsgbGV4ZW1lICsgJ1wiIGZvciBtb2RlIFwiJyArICh0b3AuY2xhc3NOYW1lIHx8ICc8dW5uYW1lZD4nKSArICdcIicpO1xuICAgICAgICBlcnIubW9kZSA9IHRvcDtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaC50eXBlID09PSBcImVuZFwiKSB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IGRvRW5kTWF0Y2gobWF0Y2gpO1xuICAgICAgICBpZiAocHJvY2Vzc2VkICE9PSBOT19NQVRDSCkge1xuICAgICAgICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZWRnZSBjYXNlIGZvciB3aGVuIGlsbGVnYWwgbWF0Y2hlcyAkIChlbmQgb2YgbGluZSkgd2hpY2ggaXMgdGVjaG5pY2FsbHlcbiAgICAgIC8vIGEgMCB3aWR0aCBtYXRjaCBidXQgbm90IGEgYmVnaW4vZW5kIG1hdGNoIHNvIGl0J3Mgbm90IGNhdWdodCBieSB0aGVcbiAgICAgIC8vIGZpcnN0IGhhbmRsZXIgKHdoZW4gaWdub3JlSWxsZWdhbHMgaXMgdHJ1ZSlcbiAgICAgIGlmIChtYXRjaC50eXBlID09PSBcImlsbGVnYWxcIiAmJiBsZXhlbWUgPT09IFwiXCIpIHtcbiAgICAgICAgLy8gYWR2YW5jZSBzbyB3ZSBhcmVuJ3Qgc3R1Y2sgaW4gYW4gaW5maW5pdGUgbG9vcFxuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgLy8gaW5maW5pdGUgbG9vcHMgYXJlIEJBRCwgdGhpcyBpcyBhIGxhc3QgZGl0Y2ggY2F0Y2ggYWxsLiBpZiB3ZSBoYXZlIGFcbiAgICAgIC8vIGRlY2VudCBudW1iZXIgb2YgaXRlcmF0aW9ucyB5ZXQgb3VyIGluZGV4IChjdXJzb3IgcG9zaXRpb24gaW4gb3VyXG4gICAgICAvLyBwYXJzaW5nKSBzdGlsbCAzeCBiZWhpbmQgb3VyIGluZGV4IHRoZW4gc29tZXRoaW5nIGlzIHZlcnkgd3JvbmdcbiAgICAgIC8vIHNvIHdlIGJhaWxcbiAgICAgIGlmIChpdGVyYXRpb25zID4gMTAwMDAwICYmIGl0ZXJhdGlvbnMgPiBtYXRjaC5pbmRleCAqIDMpIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdwb3RlbnRpYWwgaW5maW5pdGUgbG9vcCwgd2F5IG1vcmUgaXRlcmF0aW9ucyB0aGFuIG1hdGNoZXMnKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuXG4gICAgICAvKlxuICAgICAgV2h5IG1pZ2h0IGJlIGZpbmQgb3Vyc2VsdmVzIGhlcmU/ICBPbmx5IG9uZSBvY2Nhc2lvbiBub3cuICBBbiBlbmQgbWF0Y2ggdGhhdCB3YXNcbiAgICAgIHRyaWdnZXJlZCBidXQgY291bGQgbm90IGJlIGNvbXBsZXRlZC4gIFdoZW4gbWlnaHQgdGhpcyBoYXBwZW4/ICBXaGVuIGFuIGBlbmRTYW1lYXNCZWdpbmBcbiAgICAgIHJ1bGUgc2V0cyB0aGUgZW5kIHJ1bGUgdG8gYSBzcGVjaWZpYyBtYXRjaC4gIFNpbmNlIHRoZSBvdmVyYWxsIG1vZGUgdGVybWluYXRpb24gcnVsZSB0aGF0J3NcbiAgICAgIGJlaW5nIHVzZWQgdG8gc2NhbiB0aGUgdGV4dCBpc24ndCByZWNvbXBpbGVkIHRoYXQgbWVhbnMgdGhhdCBhbnkgbWF0Y2ggdGhhdCBMT09LUyBsaWtlXG4gICAgICB0aGUgZW5kIChidXQgaXMgbm90LCBiZWNhdXNlIGl0IGlzIG5vdCBhbiBleGFjdCBtYXRjaCB0byB0aGUgYmVnaW5uaW5nKSB3aWxsXG4gICAgICBlbmQgdXAgaGVyZS4gIEEgZGVmaW5pdGUgZW5kIG1hdGNoLCBidXQgd2hlbiBgZG9FbmRNYXRjaGAgdHJpZXMgdG8gXCJyZWFwcGx5XCJcbiAgICAgIHRoZSBlbmQgcnVsZSBhbmQgZmFpbHMgdG8gbWF0Y2gsIHdlIHdpbmQgdXAgaGVyZSwgYW5kIGp1c3Qgc2lsZW50bHkgaWdub3JlIHRoZSBlbmQuXG5cbiAgICAgIFRoaXMgY2F1c2VzIG5vIHJlYWwgaGFybSBvdGhlciB0aGFuIHN0b3BwaW5nIGEgZmV3IHRpbWVzIHRvbyBtYW55LlxuICAgICAgKi9cblxuICAgICAgbW9kZUJ1ZmZlciArPSBsZXhlbWU7XG4gICAgICByZXR1cm4gbGV4ZW1lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCBsYW5ndWFnZSA9IGdldExhbmd1YWdlKGxhbmd1YWdlTmFtZSk7XG4gICAgaWYgKCFsYW5ndWFnZSkge1xuICAgICAgZXJyb3IoTEFOR1VBR0VfTk9UX0ZPVU5ELnJlcGxhY2UoXCJ7fVwiLCBsYW5ndWFnZU5hbWUpKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsYW5ndWFnZTogXCInICsgbGFuZ3VhZ2VOYW1lICsgJ1wiJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbWQgPSBjb21waWxlTGFuZ3VhZ2UobGFuZ3VhZ2UsIHsgcGx1Z2lucyB9KTtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgLyoqIEB0eXBlIHtDb21waWxlZE1vZGV9ICovXG4gICAgbGV0IHRvcCA9IGNvbnRpbnVhdGlvbiB8fCBtZDtcbiAgICAvKiogQHR5cGUgUmVjb3JkPHN0cmluZyxDb21waWxlZE1vZGU+ICovXG4gICAgY29uc3QgY29udGludWF0aW9ucyA9IHt9OyAvLyBrZWVwIGNvbnRpbnVhdGlvbnMgZm9yIHN1Yi1sYW5ndWFnZXNcbiAgICBjb25zdCBlbWl0dGVyID0gbmV3IG9wdGlvbnMuX19lbWl0dGVyKG9wdGlvbnMpO1xuICAgIHByb2Nlc3NDb250aW51YXRpb25zKCk7XG4gICAgbGV0IG1vZGVCdWZmZXIgPSAnJztcbiAgICBsZXQgcmVsZXZhbmNlID0gMDtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBpdGVyYXRpb25zID0gMDtcbiAgICBsZXQgcmVzdW1lU2NhbkF0U2FtZVBvc2l0aW9uID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgdG9wLm1hdGNoZXIuY29uc2lkZXJBbGwoKTtcblxuICAgICAgZm9yICg7Oykge1xuICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgIGlmIChyZXN1bWVTY2FuQXRTYW1lUG9zaXRpb24pIHtcbiAgICAgICAgICAvLyBvbmx5IHJlZ2V4ZXMgbm90IG1hdGNoZWQgcHJldmlvdXNseSB3aWxsIG5vdyBiZVxuICAgICAgICAgIC8vIGNvbnNpZGVyZWQgZm9yIGEgcG90ZW50aWFsIG1hdGNoXG4gICAgICAgICAgcmVzdW1lU2NhbkF0U2FtZVBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9wLm1hdGNoZXIuY29uc2lkZXJBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICB0b3AubWF0Y2hlci5sYXN0SW5kZXggPSBpbmRleDtcblxuICAgICAgICBjb25zdCBtYXRjaCA9IHRvcC5tYXRjaGVyLmV4ZWMoY29kZVRvSGlnaGxpZ2h0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYXRjaFwiLCBtYXRjaFswXSwgbWF0Y2gucnVsZSAmJiBtYXRjaC5ydWxlLmJlZ2luKVxuXG4gICAgICAgIGlmICghbWF0Y2gpIGJyZWFrO1xuXG4gICAgICAgIGNvbnN0IGJlZm9yZU1hdGNoID0gY29kZVRvSGlnaGxpZ2h0LnN1YnN0cmluZyhpbmRleCwgbWF0Y2guaW5kZXgpO1xuICAgICAgICBjb25zdCBwcm9jZXNzZWRDb3VudCA9IHByb2Nlc3NMZXhlbWUoYmVmb3JlTWF0Y2gsIG1hdGNoKTtcbiAgICAgICAgaW5kZXggPSBtYXRjaC5pbmRleCArIHByb2Nlc3NlZENvdW50O1xuICAgICAgfVxuICAgICAgcHJvY2Vzc0xleGVtZShjb2RlVG9IaWdobGlnaHQuc3Vic3RyKGluZGV4KSk7XG4gICAgICBlbWl0dGVyLmNsb3NlQWxsTm9kZXMoKTtcbiAgICAgIGVtaXR0ZXIuZmluYWxpemUoKTtcbiAgICAgIHJlc3VsdCA9IGVtaXR0ZXIudG9IVE1MKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIGF2b2lkIHBvc3NpYmxlIGJyZWFrYWdlIHdpdGggdjEwIGNsaWVudHMgZXhwZWN0aW5nXG4gICAgICAgIC8vIHRoaXMgdG8gYWx3YXlzIGJlIGFuIGludGVnZXJcbiAgICAgICAgcmVsZXZhbmNlOiBNYXRoLmZsb29yKHJlbGV2YW5jZSksXG4gICAgICAgIHZhbHVlOiByZXN1bHQsXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZU5hbWUsXG4gICAgICAgIGlsbGVnYWw6IGZhbHNlLFxuICAgICAgICBlbWl0dGVyOiBlbWl0dGVyLFxuICAgICAgICB0b3A6IHRvcFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZSAmJiBlcnIubWVzc2FnZS5pbmNsdWRlcygnSWxsZWdhbCcpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWxsZWdhbDogdHJ1ZSxcbiAgICAgICAgICBpbGxlZ2FsQnk6IHtcbiAgICAgICAgICAgIG1zZzogZXJyLm1lc3NhZ2UsXG4gICAgICAgICAgICBjb250ZXh0OiBjb2RlVG9IaWdobGlnaHQuc2xpY2UoaW5kZXggLSAxMDAsIGluZGV4ICsgMTAwKSxcbiAgICAgICAgICAgIG1vZGU6IGVyci5tb2RlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzb2ZhcjogcmVzdWx0LFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB2YWx1ZTogZXNjYXBlJDEoY29kZVRvSGlnaGxpZ2h0KSxcbiAgICAgICAgICBlbWl0dGVyOiBlbWl0dGVyXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKFNBRkVfTU9ERSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlsbGVnYWw6IGZhbHNlLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB2YWx1ZTogZXNjYXBlJDEoY29kZVRvSGlnaGxpZ2h0KSxcbiAgICAgICAgICBlbWl0dGVyOiBlbWl0dGVyLFxuICAgICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZU5hbWUsXG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgZXJyb3JSYWlzZWQ6IGVyclxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGEgdmFsaWQgaGlnaGxpZ2h0IHJlc3VsdCwgd2l0aG91dCBhY3R1YWxseSBkb2luZyBhbnkgYWN0dWFsIHdvcmssXG4gICAqIGF1dG8gaGlnaGxpZ2h0IHN0YXJ0cyB3aXRoIHRoaXMgYW5kIGl0J3MgcG9zc2libGUgZm9yIHNtYWxsIHNuaXBwZXRzIHRoYXRcbiAgICogYXV0by1kZXRlY3Rpb24gbWF5IG5vdCBmaW5kIGEgYmV0dGVyIG1hdGNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlXG4gICAqIEByZXR1cm5zIHtIaWdobGlnaHRSZXN1bHR9XG4gICAqL1xuICBmdW5jdGlvbiBqdXN0VGV4dEhpZ2hsaWdodFJlc3VsdChjb2RlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgZW1pdHRlcjogbmV3IG9wdGlvbnMuX19lbWl0dGVyKG9wdGlvbnMpLFxuICAgICAgdmFsdWU6IGVzY2FwZSQxKGNvZGUpLFxuICAgICAgaWxsZWdhbDogZmFsc2UsXG4gICAgICB0b3A6IFBMQUlOVEVYVF9MQU5HVUFHRVxuICAgIH07XG4gICAgcmVzdWx0LmVtaXR0ZXIuYWRkVGV4dChjb2RlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gIEhpZ2hsaWdodGluZyB3aXRoIGxhbmd1YWdlIGRldGVjdGlvbi4gQWNjZXB0cyBhIHN0cmluZyB3aXRoIHRoZSBjb2RlIHRvXG4gIGhpZ2hsaWdodC4gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG5cbiAgLSBsYW5ndWFnZSAoZGV0ZWN0ZWQgbGFuZ3VhZ2UpXG4gIC0gcmVsZXZhbmNlIChpbnQpXG4gIC0gdmFsdWUgKGFuIEhUTUwgc3RyaW5nIHdpdGggaGlnaGxpZ2h0aW5nIG1hcmt1cClcbiAgLSBzZWNvbmRfYmVzdCAob2JqZWN0IHdpdGggdGhlIHNhbWUgc3RydWN0dXJlIGZvciBzZWNvbmQtYmVzdCBoZXVyaXN0aWNhbGx5XG4gICAgZGV0ZWN0ZWQgbGFuZ3VhZ2UsIG1heSBiZSBhYnNlbnQpXG5cbiAgICBAcGFyYW0ge3N0cmluZ30gY29kZVxuICAgIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gW2xhbmd1YWdlU3Vic2V0XVxuICAgIEByZXR1cm5zIHtBdXRvSGlnaGxpZ2h0UmVzdWx0fVxuICAqL1xuICBmdW5jdGlvbiBoaWdobGlnaHRBdXRvKGNvZGUsIGxhbmd1YWdlU3Vic2V0KSB7XG4gICAgbGFuZ3VhZ2VTdWJzZXQgPSBsYW5ndWFnZVN1YnNldCB8fCBvcHRpb25zLmxhbmd1YWdlcyB8fCBPYmplY3Qua2V5cyhsYW5ndWFnZXMpO1xuICAgIGNvbnN0IHBsYWludGV4dCA9IGp1c3RUZXh0SGlnaGxpZ2h0UmVzdWx0KGNvZGUpO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IGxhbmd1YWdlU3Vic2V0LmZpbHRlcihnZXRMYW5ndWFnZSkuZmlsdGVyKGF1dG9EZXRlY3Rpb24pLm1hcChuYW1lID0+XG4gICAgICBfaGlnaGxpZ2h0KG5hbWUsIGNvZGUsIGZhbHNlKVxuICAgICk7XG4gICAgcmVzdWx0cy51bnNoaWZ0KHBsYWludGV4dCk7IC8vIHBsYWludGV4dCBpcyBhbHdheXMgYW4gb3B0aW9uXG5cbiAgICBjb25zdCBzb3J0ZWQgPSByZXN1bHRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIC8vIHNvcnQgYmFzZSBvbiByZWxldmFuY2VcbiAgICAgIGlmIChhLnJlbGV2YW5jZSAhPT0gYi5yZWxldmFuY2UpIHJldHVybiBiLnJlbGV2YW5jZSAtIGEucmVsZXZhbmNlO1xuXG4gICAgICAvLyBhbHdheXMgYXdhcmQgdGhlIHRpZSB0byB0aGUgYmFzZSBsYW5ndWFnZVxuICAgICAgLy8gaWUgaWYgQysrIGFuZCBBcmR1aW5vIGFyZSB0aWVkLCBpdCdzIG1vcmUgbGlrZWx5IHRvIGJlIEMrK1xuICAgICAgaWYgKGEubGFuZ3VhZ2UgJiYgYi5sYW5ndWFnZSkge1xuICAgICAgICBpZiAoZ2V0TGFuZ3VhZ2UoYS5sYW5ndWFnZSkuc3VwZXJzZXRPZiA9PT0gYi5sYW5ndWFnZSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGdldExhbmd1YWdlKGIubGFuZ3VhZ2UpLnN1cGVyc2V0T2YgPT09IGEubGFuZ3VhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJ3aXNlIHNheSB0aGV5IGFyZSBlcXVhbCwgd2hpY2ggaGFzIHRoZSBlZmZlY3Qgb2Ygc29ydGluZyBvblxuICAgICAgLy8gcmVsZXZhbmNlIHdoaWxlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIG9yZGVyaW5nIC0gd2hpY2ggaXMgaG93IHRpZXNcbiAgICAgIC8vIGhhdmUgaGlzdG9yaWNhbGx5IGJlZW4gc2V0dGxlZCwgaWUgdGhlIGxhbmd1YWdlIHRoYXQgY29tZXMgZmlyc3QgYWx3YXlzXG4gICAgICAvLyB3aW5zIGluIHRoZSBjYXNlIG9mIGEgdGllXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIGNvbnN0IFtiZXN0LCBzZWNvbmRCZXN0XSA9IHNvcnRlZDtcblxuICAgIC8qKiBAdHlwZSB7QXV0b0hpZ2hsaWdodFJlc3VsdH0gKi9cbiAgICBjb25zdCByZXN1bHQgPSBiZXN0O1xuICAgIHJlc3VsdC5zZWNvbmRfYmVzdCA9IHNlY29uZEJlc3Q7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gIFBvc3QtcHJvY2Vzc2luZyBvZiB0aGUgaGlnaGxpZ2h0ZWQgbWFya3VwOlxuXG4gIC0gcmVwbGFjZSBUQUJzIHdpdGggc29tZXRoaW5nIG1vcmUgdXNlZnVsXG4gIC0gcmVwbGFjZSByZWFsIGxpbmUtYnJlYWtzIHdpdGggJzxicj4nIGZvciBub24tcHJlIGNvbnRhaW5lcnNcblxuICAgIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gICAgQHJldHVybnMge3N0cmluZ31cbiAgKi9cbiAgZnVuY3Rpb24gZml4TWFya3VwKGh0bWwpIHtcbiAgICBpZiAoIShvcHRpb25zLnRhYlJlcGxhY2UgfHwgb3B0aW9ucy51c2VCUikpIHtcbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sLnJlcGxhY2UoZml4TWFya3VwUmUsIG1hdGNoID0+IHtcbiAgICAgIGlmIChtYXRjaCA9PT0gJ1xcbicpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMudXNlQlIgPyAnPGJyPicgOiBtYXRjaDtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50YWJSZXBsYWNlKSB7XG4gICAgICAgIHJldHVybiBtYXRjaC5yZXBsYWNlKC9cXHQvZywgb3B0aW9ucy50YWJSZXBsYWNlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgbmV3IGNsYXNzIG5hbWUgZm9yIGJsb2NrIGdpdmVuIHRoZSBsYW5ndWFnZSBuYW1lXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtjdXJyZW50TGFuZ11cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXN1bHRMYW5nXVxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIGN1cnJlbnRMYW5nLCByZXN1bHRMYW5nKSB7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBjdXJyZW50TGFuZyA/IGFsaWFzZXNbY3VycmVudExhbmddIDogcmVzdWx0TGFuZztcblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhsanNcIik7XG4gICAgaWYgKGxhbmd1YWdlKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQobGFuZ3VhZ2UpO1xuICB9XG5cbiAgLyoqIEB0eXBlIHtITEpTUGx1Z2lufSAqL1xuICBjb25zdCBiclBsdWdpbiA9IHtcbiAgICBcImJlZm9yZTpoaWdobGlnaHRCbG9ja1wiOiAoeyBibG9jayB9KSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy51c2VCUikge1xuICAgICAgICBibG9jay5pbm5lckhUTUwgPSBibG9jay5pbm5lckhUTUwucmVwbGFjZSgvXFxuL2csICcnKS5yZXBsYWNlKC88YnJbIC9dKj4vZywgJ1xcbicpO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJhZnRlcjpoaWdobGlnaHRCbG9ja1wiOiAoeyByZXN1bHQgfSkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMudXNlQlIpIHtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gcmVzdWx0LnZhbHVlLnJlcGxhY2UoL1xcbi9nLCBcIjxicj5cIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFRBQl9SRVBMQUNFX1JFID0gL14oPFtePl0rPnxcXHQpKy9nbTtcbiAgLyoqIEB0eXBlIHtITEpTUGx1Z2lufSAqL1xuICBjb25zdCB0YWJSZXBsYWNlUGx1Z2luID0ge1xuICAgIFwiYWZ0ZXI6aGlnaGxpZ2h0QmxvY2tcIjogKHsgcmVzdWx0IH0pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnRhYlJlcGxhY2UpIHtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gcmVzdWx0LnZhbHVlLnJlcGxhY2UoVEFCX1JFUExBQ0VfUkUsIChtKSA9PlxuICAgICAgICAgIG0ucmVwbGFjZSgvXFx0L2csIG9wdGlvbnMudGFiUmVwbGFjZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgaGlnaGxpZ2h0aW5nIHRvIGEgRE9NIG5vZGUgY29udGFpbmluZyBjb2RlLiBBY2NlcHRzIGEgRE9NIG5vZGUgYW5kXG4gICAqIHR3byBvcHRpb25hbCBwYXJhbWV0ZXJzIGZvciBmaXhNYXJrdXAuXG4gICAqXG4gICAqIEBwYXJhbSB7SGlnaGxpZ2h0ZWRIVE1MRWxlbWVudH0gZWxlbWVudCAtIHRoZSBIVE1MIGVsZW1lbnQgdG8gaGlnaGxpZ2h0XG4gICovXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodEJsb2NrKGVsZW1lbnQpIHtcbiAgICAvKiogQHR5cGUgSFRNTEVsZW1lbnQgKi9cbiAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBibG9ja0xhbmd1YWdlKGVsZW1lbnQpO1xuXG4gICAgaWYgKHNob3VsZE5vdEhpZ2hsaWdodChsYW5ndWFnZSkpIHJldHVybjtcblxuICAgIGZpcmUoXCJiZWZvcmU6aGlnaGxpZ2h0QmxvY2tcIixcbiAgICAgIHsgYmxvY2s6IGVsZW1lbnQsIGxhbmd1YWdlOiBsYW5ndWFnZSB9KTtcblxuICAgIG5vZGUgPSBlbGVtZW50O1xuICAgIGNvbnN0IHRleHQgPSBub2RlLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHJlc3VsdCA9IGxhbmd1YWdlID8gaGlnaGxpZ2h0KGxhbmd1YWdlLCB0ZXh0LCB0cnVlKSA6IGhpZ2hsaWdodEF1dG8odGV4dCk7XG5cbiAgICBmaXJlKFwiYWZ0ZXI6aGlnaGxpZ2h0QmxvY2tcIiwgeyBibG9jazogZWxlbWVudCwgcmVzdWx0LCB0ZXh0IH0pO1xuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSByZXN1bHQudmFsdWU7XG4gICAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIGxhbmd1YWdlLCByZXN1bHQubGFuZ3VhZ2UpO1xuICAgIGVsZW1lbnQucmVzdWx0ID0ge1xuICAgICAgbGFuZ3VhZ2U6IHJlc3VsdC5sYW5ndWFnZSxcbiAgICAgIC8vIFRPRE86IHJlbW92ZSB3aXRoIHZlcnNpb24gMTEuMFxuICAgICAgcmU6IHJlc3VsdC5yZWxldmFuY2UsXG4gICAgICByZWxhdmFuY2U6IHJlc3VsdC5yZWxldmFuY2VcbiAgICB9O1xuICAgIGlmIChyZXN1bHQuc2Vjb25kX2Jlc3QpIHtcbiAgICAgIGVsZW1lbnQuc2Vjb25kX2Jlc3QgPSB7XG4gICAgICAgIGxhbmd1YWdlOiByZXN1bHQuc2Vjb25kX2Jlc3QubGFuZ3VhZ2UsXG4gICAgICAgIC8vIFRPRE86IHJlbW92ZSB3aXRoIHZlcnNpb24gMTEuMFxuICAgICAgICByZTogcmVzdWx0LnNlY29uZF9iZXN0LnJlbGV2YW5jZSxcbiAgICAgICAgcmVsYXZhbmNlOiByZXN1bHQuc2Vjb25kX2Jlc3QucmVsZXZhbmNlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGhpZ2hsaWdodC5qcyBnbG9iYWwgb3B0aW9ucyB3aXRoIHRoZSBwYXNzZWQgb3B0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8SExKU09wdGlvbnM+fSB1c2VyT3B0aW9uc1xuICAgKi9cbiAgZnVuY3Rpb24gY29uZmlndXJlKHVzZXJPcHRpb25zKSB7XG4gICAgaWYgKHVzZXJPcHRpb25zLnVzZUJSKSB7XG4gICAgICBkZXByZWNhdGVkKFwiMTAuMy4wXCIsIFwiJ3VzZUJSJyB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjExLjBcIik7XG4gICAgICBkZXByZWNhdGVkKFwiMTAuMy4wXCIsIFwiUGxlYXNlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL2lzc3Vlcy8yNTU5XCIpO1xuICAgIH1cbiAgICBvcHRpb25zID0gaW5oZXJpdCQxKG9wdGlvbnMsIHVzZXJPcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWdobGlnaHRzIHRvIGFsbCA8cHJlPjxjb2RlPiBibG9ja3Mgb24gYSBwYWdlXG4gICAqXG4gICAqIEB0eXBlIHtGdW5jdGlvbiAmIHtjYWxsZWQ/OiBib29sZWFufX1cbiAgICovXG4gIC8vIFRPRE86IHJlbW92ZSB2MTIsIGRlcHJlY2F0ZWRcbiAgY29uc3QgaW5pdEhpZ2hsaWdodGluZyA9ICgpID0+IHtcbiAgICBpZiAoaW5pdEhpZ2hsaWdodGluZy5jYWxsZWQpIHJldHVybjtcbiAgICBpbml0SGlnaGxpZ2h0aW5nLmNhbGxlZCA9IHRydWU7XG5cbiAgICBkZXByZWNhdGVkKFwiMTAuNi4wXCIsIFwiaW5pdEhpZ2hsaWdodGluZygpIGlzIGRlcHJlY2F0ZWQuICBVc2UgaGlnaGxpZ2h0QWxsKCkgaW5zdGVhZC5cIik7XG5cbiAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZScpO1xuICAgIGJsb2Nrcy5mb3JFYWNoKGhpZ2hsaWdodEJsb2NrKTtcbiAgfTtcblxuICAvLyBIaWdsaWdodHMgYWxsIHdoZW4gRE9NQ29udGVudExvYWRlZCBmaXJlc1xuICAvLyBUT0RPOiByZW1vdmUgdjEyLCBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIGluaXRIaWdobGlnaHRpbmdPbkxvYWQoKSB7XG4gICAgZGVwcmVjYXRlZChcIjEwLjYuMFwiLCBcImluaXRIaWdobGlnaHRpbmdPbkxvYWQoKSBpcyBkZXByZWNhdGVkLiAgVXNlIGhpZ2hsaWdodEFsbCgpIGluc3RlYWQuXCIpO1xuICAgIHdhbnRzSGlnaGxpZ2h0ID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCB3YW50c0hpZ2hsaWdodCA9IGZhbHNlO1xuICBsZXQgZG9tTG9hZGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGF1dG8taGlnaGxpZ2h0cyBhbGwgcHJlPmNvZGUgZWxlbWVudHMgb24gdGhlIHBhZ2VcbiAgICovXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodEFsbCgpIHtcbiAgICAvLyBpZiB3ZSBhcmUgY2FsbGVkIHRvbyBlYXJseSBpbiB0aGUgbG9hZGluZyBwcm9jZXNzXG4gICAgaWYgKCFkb21Mb2FkZWQpIHsgd2FudHNIaWdobGlnaHQgPSB0cnVlOyByZXR1cm47IH1cblxuICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZSBjb2RlJyk7XG4gICAgYmxvY2tzLmZvckVhY2goaGlnaGxpZ2h0QmxvY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYm9vdCgpIHtcbiAgICBkb21Mb2FkZWQgPSB0cnVlO1xuICAgIC8vIGlmIGEgaGlnaGxpZ2h0IHdhcyByZXF1ZXN0ZWQgYmVmb3JlIERPTSB3YXMgbG9hZGVkLCBkbyBub3dcbiAgICBpZiAod2FudHNIaWdobGlnaHQpIGhpZ2hsaWdodEFsbCgpO1xuICB9XG5cbiAgLy8gbWFrZSBzdXJlIHdlIGFyZSBpbiB0aGUgYnJvd3NlciBlbnZpcm9ubWVudFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGJvb3QsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGxhbmd1YWdlIGdyYW1tYXIgbW9kdWxlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZU5hbWVcbiAgICogQHBhcmFtIHtMYW5ndWFnZUZufSBsYW5ndWFnZURlZmluaXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyTGFuZ3VhZ2UobGFuZ3VhZ2VOYW1lLCBsYW5ndWFnZURlZmluaXRpb24pIHtcbiAgICBsZXQgbGFuZyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGxhbmcgPSBsYW5ndWFnZURlZmluaXRpb24oaGxqcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IkMSkge1xuICAgICAgZXJyb3IoXCJMYW5ndWFnZSBkZWZpbml0aW9uIGZvciAne30nIGNvdWxkIG5vdCBiZSByZWdpc3RlcmVkLlwiLnJlcGxhY2UoXCJ7fVwiLCBsYW5ndWFnZU5hbWUpKTtcbiAgICAgIC8vIGhhcmQgb3Igc29mdCBlcnJvclxuICAgICAgaWYgKCFTQUZFX01PREUpIHsgdGhyb3cgZXJyb3IkMTsgfSBlbHNlIHsgZXJyb3IoZXJyb3IkMSk7IH1cbiAgICAgIC8vIGxhbmd1YWdlcyB0aGF0IGhhdmUgc2VyaW91cyBlcnJvcnMgYXJlIHJlcGxhY2VkIHdpdGggZXNzZW50aWFsbHkgYVxuICAgICAgLy8gXCJwbGFpbnRleHRcIiBzdGFuZC1pbiBzbyB0aGF0IHRoZSBjb2RlIGJsb2NrcyB3aWxsIHN0aWxsIGdldCBub3JtYWxcbiAgICAgIC8vIGNzcyBjbGFzc2VzIGFwcGxpZWQgdG8gdGhlbSAtIGFuZCBvbmUgYmFkIGxhbmd1YWdlIHdvbid0IGJyZWFrIHRoZVxuICAgICAgLy8gZW50aXJlIGhpZ2hsaWdodGVyXG4gICAgICBsYW5nID0gUExBSU5URVhUX0xBTkdVQUdFO1xuICAgIH1cbiAgICAvLyBnaXZlIGl0IGEgdGVtcG9yYXJ5IG5hbWUgaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBpbiB0aGUgbWV0YS1kYXRhXG4gICAgaWYgKCFsYW5nLm5hbWUpIGxhbmcubmFtZSA9IGxhbmd1YWdlTmFtZTtcbiAgICBsYW5ndWFnZXNbbGFuZ3VhZ2VOYW1lXSA9IGxhbmc7XG4gICAgbGFuZy5yYXdEZWZpbml0aW9uID0gbGFuZ3VhZ2VEZWZpbml0aW9uLmJpbmQobnVsbCwgaGxqcyk7XG5cbiAgICBpZiAobGFuZy5hbGlhc2VzKSB7XG4gICAgICByZWdpc3RlckFsaWFzZXMobGFuZy5hbGlhc2VzLCB7IGxhbmd1YWdlTmFtZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ1tdfSBMaXN0IG9mIGxhbmd1YWdlIGludGVybmFsIG5hbWVzXG4gICAqL1xuICBmdW5jdGlvbiBsaXN0TGFuZ3VhZ2VzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhsYW5ndWFnZXMpO1xuICB9XG5cbiAgLyoqXG4gICAgaW50ZW5kZWQgdXNhZ2U6IFdoZW4gb25lIGxhbmd1YWdlIHRydWx5IHJlcXVpcmVzIGFub3RoZXJcblxuICAgIFVubGlrZSBgZ2V0TGFuZ3VhZ2VgLCB0aGlzIHdpbGwgdGhyb3cgd2hlbiB0aGUgcmVxdWVzdGVkIGxhbmd1YWdlXG4gICAgaXMgbm90IGF2YWlsYWJsZS5cblxuICAgIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgbGFuZ3VhZ2UgdG8gZmV0Y2gvcmVxdWlyZVxuICAgIEByZXR1cm5zIHtMYW5ndWFnZSB8IG5ldmVyfVxuICAqL1xuICBmdW5jdGlvbiByZXF1aXJlTGFuZ3VhZ2UobmFtZSkge1xuICAgIGRlcHJlY2F0ZWQoXCIxMC40LjBcIiwgXCJyZXF1aXJlTGFuZ3VhZ2Ugd2lsbCBiZSByZW1vdmVkIGVudGlyZWx5IGluIHYxMS5cIik7XG4gICAgZGVwcmVjYXRlZChcIjEwLjQuMFwiLCBcIlBsZWFzZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9wdWxsLzI4NDRcIik7XG5cbiAgICBjb25zdCBsYW5nID0gZ2V0TGFuZ3VhZ2UobmFtZSk7XG4gICAgaWYgKGxhbmcpIHsgcmV0dXJuIGxhbmc7IH1cblxuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignVGhlIFxcJ3t9XFwnIGxhbmd1YWdlIGlzIHJlcXVpcmVkLCBidXQgbm90IGxvYWRlZC4nLnJlcGxhY2UoJ3t9JywgbmFtZSkpO1xuICAgIHRocm93IGVycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGxhbmd1YWdlIHRvIHJldHJpZXZlXG4gICAqIEByZXR1cm5zIHtMYW5ndWFnZSB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldExhbmd1YWdlKG5hbWUpIHtcbiAgICBuYW1lID0gKG5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGxhbmd1YWdlc1tuYW1lXSB8fCBsYW5ndWFnZXNbYWxpYXNlc1tuYW1lXV07XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGFsaWFzTGlzdCAtIHNpbmdsZSBhbGlhcyBvciBsaXN0IG9mIGFsaWFzZXNcbiAgICogQHBhcmFtIHt7bGFuZ3VhZ2VOYW1lOiBzdHJpbmd9fSBvcHRzXG4gICAqL1xuICBmdW5jdGlvbiByZWdpc3RlckFsaWFzZXMoYWxpYXNMaXN0LCB7IGxhbmd1YWdlTmFtZSB9KSB7XG4gICAgaWYgKHR5cGVvZiBhbGlhc0xpc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICBhbGlhc0xpc3QgPSBbYWxpYXNMaXN0XTtcbiAgICB9XG4gICAgYWxpYXNMaXN0LmZvckVhY2goYWxpYXMgPT4geyBhbGlhc2VzW2FsaWFzXSA9IGxhbmd1YWdlTmFtZTsgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBhIGdpdmVuIGxhbmd1YWdlIGhhcyBhdXRvLWRldGVjdGlvbiBlbmFibGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgbGFuZ3VhZ2VcbiAgICovXG4gIGZ1bmN0aW9uIGF1dG9EZXRlY3Rpb24obmFtZSkge1xuICAgIGNvbnN0IGxhbmcgPSBnZXRMYW5ndWFnZShuYW1lKTtcbiAgICByZXR1cm4gbGFuZyAmJiAhbGFuZy5kaXNhYmxlQXV0b2RldGVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hMSlNQbHVnaW59IHBsdWdpblxuICAgKi9cbiAgZnVuY3Rpb24gYWRkUGx1Z2luKHBsdWdpbikge1xuICAgIHBsdWdpbnMucHVzaChwbHVnaW4pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7UGx1Z2luRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7YW55fSBhcmdzXG4gICAqL1xuICBmdW5jdGlvbiBmaXJlKGV2ZW50LCBhcmdzKSB7XG4gICAgY29uc3QgY2IgPSBldmVudDtcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICBpZiAocGx1Z2luW2NiXSkge1xuICAgICAgICBwbHVnaW5bY2JdKGFyZ3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gIE5vdGU6IGZpeE1hcmt1cCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjExXG5cbiAgQHBhcmFtIHtzdHJpbmd9IGFyZ1xuICBAcmV0dXJucyB7c3RyaW5nfVxuICAqL1xuICBmdW5jdGlvbiBkZXByZWNhdGVGaXhNYXJrdXAoYXJnKSB7XG4gICAgZGVwcmVjYXRlZChcIjEwLjIuMFwiLCBcImZpeE1hcmt1cCB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjExLjBcIik7XG4gICAgZGVwcmVjYXRlZChcIjEwLjIuMFwiLCBcIlBsZWFzZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjUzNFwiKTtcblxuICAgIHJldHVybiBmaXhNYXJrdXAoYXJnKTtcbiAgfVxuXG4gIC8qIEludGVyZmFjZSBkZWZpbml0aW9uICovXG4gIE9iamVjdC5hc3NpZ24oaGxqcywge1xuICAgIGhpZ2hsaWdodCxcbiAgICBoaWdobGlnaHRBdXRvLFxuICAgIGhpZ2hsaWdodEFsbCxcbiAgICBmaXhNYXJrdXA6IGRlcHJlY2F0ZUZpeE1hcmt1cCxcbiAgICBoaWdobGlnaHRCbG9jayxcbiAgICBjb25maWd1cmUsXG4gICAgaW5pdEhpZ2hsaWdodGluZyxcbiAgICBpbml0SGlnaGxpZ2h0aW5nT25Mb2FkLFxuICAgIHJlZ2lzdGVyTGFuZ3VhZ2UsXG4gICAgbGlzdExhbmd1YWdlcyxcbiAgICBnZXRMYW5ndWFnZSxcbiAgICByZWdpc3RlckFsaWFzZXMsXG4gICAgcmVxdWlyZUxhbmd1YWdlLFxuICAgIGF1dG9EZXRlY3Rpb24sXG4gICAgaW5oZXJpdDogaW5oZXJpdCQxLFxuICAgIGFkZFBsdWdpbixcbiAgICAvLyBwbHVnaW5zIGZvciBmcmFtZXdvcmtzXG4gICAgdnVlUGx1Z2luOiBCdWlsZFZ1ZVBsdWdpbihobGpzKS5WdWVQbHVnaW5cbiAgfSk7XG5cbiAgaGxqcy5kZWJ1Z01vZGUgPSBmdW5jdGlvbigpIHsgU0FGRV9NT0RFID0gZmFsc2U7IH07XG4gIGhsanMuc2FmZU1vZGUgPSBmdW5jdGlvbigpIHsgU0FGRV9NT0RFID0gdHJ1ZTsgfTtcbiAgaGxqcy52ZXJzaW9uU3RyaW5nID0gdmVyc2lvbjtcblxuICBmb3IgKGNvbnN0IGtleSBpbiBNT0RFUykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAodHlwZW9mIE1PREVTW2tleV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGRlZXBGcmVlemVFczYoTU9ERVNba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgLy8gbWVyZ2UgYWxsIHRoZSBtb2Rlcy9yZWdleHMgaW50byBvdXIgbWFpbiBvYmplY3RcbiAgT2JqZWN0LmFzc2lnbihobGpzLCBNT0RFUyk7XG5cbiAgLy8gYnVpbHQtaW4gcGx1Z2lucywgbGlrZWx5IHRvIGJlIG1vdmVkIG91dCBvZiBjb3JlIGluIHRoZSBmdXR1cmVcbiAgaGxqcy5hZGRQbHVnaW4oYnJQbHVnaW4pOyAvLyBzbGF0ZWQgdG8gYmUgcmVtb3ZlZCBpbiB2MTFcbiAgaGxqcy5hZGRQbHVnaW4obWVyZ2VIVE1MUGx1Z2luKTtcbiAgaGxqcy5hZGRQbHVnaW4odGFiUmVwbGFjZVBsdWdpbik7XG4gIHJldHVybiBobGpzO1xufTtcblxuLy8gZXhwb3J0IGFuIFwiaW5zdGFuY2VcIiBvZiB0aGUgaGlnaGxpZ2h0ZXJcbnZhciBoaWdobGlnaHQgPSBITEpTKHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBoaWdobGlnaHQ7XG4iLCIvLyBUaGlzIGZpbGUgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBjb3JlLmpzXG52YXIgaGxqcyA9IHJlcXVpcmUoJy4vY29yZScpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdywgbG9jYWxlIH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcikge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaWRsZVRpbWVvdXQ8VD4obXM6IG51bWJlciwgZXJyOiBFcnJvcik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIpLCBtcykpXG4gIClcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIGlkbGVUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICAgICksXG4gIF0pXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGUpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0PFJvdXRlTG9hZGVyRW50cnk+KFxuICAgICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlKSB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8XG4gIHN0cmluZyxcbiAge1xuICAgIGlkOiBzdHJpbmdcbiAgICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbiAgfVxuPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SID0gJ1NTRyBEYXRhIE5PVF9GT1VORCdcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgcmVsb2FkaW5nIGluIGRldmVsb3BtZW50IGZyb20gZmFsbGJhY2sgcmV0dXJuaW5nIDIwMFxuICAgICAgICAvLyB0byBvbi1kZW1hbmQtZW50cnktaGFuZGxlciBjYXVzaW5nIGl0IHRvIHJlbG9hZCBwZXJpb2RpY2FsbHlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFNTR19EQVRBX05PVF9GT1VORF9FUlJPUilcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICAgICAgfSA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG5cbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3NnNDA0ID0gZXJyLm1lc3NhZ2UgPT09IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUlxuXG4gICAgICBpZiAoc3NnNDA0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG1vZDogYW55XG4gICAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMsIG1vZCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAgICcvNDA0J1xuICAgICAgICAgICkpXG5cbiAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgd2UgdG9sZXJhdGUgdGhlc2UgcHJvcHMgbWlzc2luZyBhbmQgc3RpbGwgcmVuZGVyIHRoZVxuICAgICAgICAgIC8vIHBhZ2UgaW5zdGVhZCBvZiBmYWxsaW5nIGJhY2sgdG8gX2Vycm9yP1xuICAgICAgICAgIGlmIChtb2QgJiYgbW9kLl9fTl9TU0cpIHtcbiAgICAgICAgICAgIHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCcvNDA0JywgJy80MDQnLCB0cnVlLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAvLyBub24tZmF0YWwgZmFsbGJhY2sgdG8gX2Vycm9yXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnI6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgICAgZXJyb3I6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZSgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuICAgICAgICAubm9ybWFsaXplTG9jYWxlUGF0aCBhcyB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpLm5vcm1hbGl6ZUxvY2FsZVBhdGhcblxuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzUGF0aCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZU5vblBhdGgodmFsdWU6IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBzdHJpbmcge1xuICBpZiAoIXZhbHVlLmluY2x1ZGVzKCc6JykpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhcmFtcykpIHtcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoYDoke2tleX1gKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCpgLCAnZycpLFxuICAgICAgICAgIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLU2BcbiAgICAgICAgKVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXD9gLCAnZycpLFxuICAgICAgICAgIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OYFxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcK2AsICdnJyksIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1BMVVNgKVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9KD8hXFxcXHcpYCwgJ2cnKSxcbiAgICAgICAgICBgLS1FU0NBUEVEX1BBUkFNX0NPTE9OJHtrZXl9YFxuICAgICAgICApXG4gICAgfVxuICB9XG4gIHZhbHVlID0gdmFsdWVcbiAgICAucmVwbGFjZSgvKDp8XFwqfFxcP3xcXCt8XFwofFxcKXxcXHt8XFx9KS9nLCAnXFxcXCQxJylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1BMVVMvZywgJysnKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQ09MT04vZywgJzonKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT04vZywgJz8nKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTL2csICcqJylcblxuICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgLy8gY29ycmVjdGx5XG4gIHJldHVybiBwYXRoVG9SZWdleHBcbiAgICAuY29tcGlsZShgLyR7dmFsdWV9YCwgeyB2YWxpZGF0ZTogZmFsc2UgfSkocGFyYW1zKVxuICAgIC5zdWJzdHIoMSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIC8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSlcbiAgY29uc3QgaGFkTG9jYWxlID0gcXVlcnkuX19uZXh0TG9jYWxlXG4gIGRlbGV0ZSBxdWVyeS5fX25leHRMb2NhbGVcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dERlZmF1bHRMb2NhbGVcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGNvbXBpbGVOb25QYXRoKHZhbHVlLCBwYXJhbXMpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgbGV0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICAvLyByZW1vdmUgaW50ZXJuYWwgcGFyYW0gZm9yIGkxOG5cbiAgaWYgKGhhZExvY2FsZSkge1xuICAgIHBhcmFtS2V5cyA9IHBhcmFtS2V5cy5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09ICduZXh0SW50ZXJuYWxMb2NhbGUnKVxuICB9XG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIChwYXJzZWREZXN0aW5hdGlvbiBhcyBhbnkpLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGdldFBvc3QsIGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uLy4uL3NyYy9saWIvcG9zdHMnXHJcbmltcG9ydCB7IFBvc3REYXRhIH0gZnJvbSAnLi4vLi4vc3JjL3R5cGVzL3Bvc3RzJ1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wc0NvbnRleHQsIEdldFN0YXRpY1Byb3BzUmVzdWx0IH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzJ1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL21vbm9rYWkuY3NzJ1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2hpZ2hsaWdodCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvU2x1Zy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBQYWdlSGVhZGluZyB9IGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL1BhZ2VIZWFkaW5nJ1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkTWVkaWEsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1YidcclxuaW1wb3J0IFRvcGljc0Rpc3BsYXkgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvVG9waWNzRGlzcGxheSdcclxuaW1wb3J0IFByZXZpZXdDYXJkIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL1ByZXZpZXdDYXJkJ1xyXG5pbXBvcnQgeyBCQVNFX1VSTCwgTkFNRSB9IGZyb20gJy4uLy4uL3NyYy90eXBlcy9jb25zdGFudHMnXHJcblxyXG50eXBlIFByb3BzID0geyBwb3N0RGF0YTogUG9zdERhdGE7IG5leHRQYXRoOiBQb3N0RGF0YSB9XHJcblxyXG5jb25zdCBTbHVnOiBGQzxQcm9wcz4gPSAoeyBwb3N0RGF0YSwgbmV4dFBhdGggfSk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgbWFya2VkLnNldE9wdGlvbnMoe1xyXG4gICAgaGlnaGxpZ2h0OiBmdW5jdGlvbiAoY29kZSkge1xyXG4gICAgICByZXR1cm4gaGxqcy5oaWdobGlnaHRBdXRvKGNvZGUpLnZhbHVlXHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZScpLmZvckVhY2goKGJsb2NrOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKVxyXG4gICAgfSlcclxuICB9LCBbcG9zdERhdGFdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwb3N0RGF0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3REYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiIGNvbnRlbnQ9e2Ake3Bvc3REYXRhLmRhdGV9VDEwOjAwOjAwWmB9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3REYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17cG9zdERhdGEudGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtgJHtCQVNFX1VSTH0vc21hbGwvJHtwb3N0RGF0YS5pZH0ucG5nYH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3Bvc3REYXRhLnRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0RGF0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2Ake0JBU0VfVVJMfS9ibG9nLyR7cG9zdERhdGEuaWR9YH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e05BTUV9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake0JBU0VfVVJMfS9zbWFsbC8ke3Bvc3REYXRhLmlkfS5wbmdgfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiIGNvbnRlbnQ9e2Ake0JBU0VfVVJMfS9zbWFsbC8ke3Bvc3REYXRhLmlkfS5wbmdgfSAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RleHQtY29udGVudCddfT5cclxuICAgICAgICA8UGFnZUhlYWRpbmcgdGl0bGU9e3Bvc3REYXRhLnRpdGxlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snaW1hZ2UtY29udGFpbmVyJ119PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cclxuICAgICAgICAgICAge3Bvc3REYXRhLmRhdGV9IOKAlCB3cml0dGVuIGJ5eycgJ31cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5naXRodWIuY29tL3NhaWVtZ2lsYW5pXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNhaWVtIEdpbGFuaSA8R2l0SHViSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAgfX0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFRvcGljc0Rpc3BsYXkgdG9waWNzPXtwb3N0RGF0YS50b3BpY3N9IG49ezEwfSBub01hcmdpbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snaW1hZ2UtY29udGFpbmVyJ119PlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT5cclxuICAgICAgICAgIDxDYXJkTWVkaWE+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PXtwb3N0RGF0YS50aXRsZX0gbG9hZGluZz1cImxhenlcIiBzcmM9e2Avc21hbGwvJHtwb3N0RGF0YS5pZH0ucG5nYH0gLz5cclxuICAgICAgICAgIDwvQ2FyZE1lZGlhPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3Bvc3QtY29udGFpbmVyJ119IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWFya2VkKHBvc3REYXRhLmNvbnRlbnQpIH19IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3Bvc3QtY29udGFpbmVyJ119IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDUwIH19PlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbXBvbmVudD1cInBcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAyMCB9fT5cclxuICAgICAgICAgIFJlY29tbWVuZGVkXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxQcmV2aWV3Q2FyZCBwb3N0PXtuZXh0UGF0aH0gbm9NYXJnaW4gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbnR5cGUgU3RhdGljUGF0aHMgPSB7IHBhdGhzOiB7IHBhcmFtczogeyBzbHVnOiBzdHJpbmcgfSB9W107IGZhbGxiYWNrOiBib29sZWFuIH1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7XHJcbiAgcGFyYW1zOiB7IHNsdWcgfSxcclxufTogR2V0U3RhdGljUHJvcHNDb250ZXh0PHsgc2x1Zzogc3RyaW5nIH0+KTogUHJvbWlzZTxcclxuICBHZXRTdGF0aWNQcm9wc1Jlc3VsdDx7XHJcbiAgICBwb3N0RGF0YTogUG9zdERhdGFcclxuICAgIG5leHRQYXRoOiBQb3N0RGF0YVxyXG4gIH0+XHJcbj4gPT4ge1xyXG4gIGNvbnN0IHBvc3REYXRhID0gZ2V0UG9zdChzbHVnLCB0cnVlKVxyXG5cclxuICBjb25zdCBwYXRocyA9IGdldFNvcnRlZFBvc3RzRGF0YSgpXHJcblxyXG4gIGNvbnN0IG5leHRQYXRoID0gIXBvc3REYXRhLnJlY29tbWVuZGVkXHJcbiAgICA/IHBhdGhzLnJlZHVjZSgocHJldiwgY3VyciwgaSkgPT4gKGN1cnIuaWQgPT09IHNsdWcgJiYgaSA+PSAxID8gcGF0aHNbaSAtIDFdIDogY3VyciksIHBhdGhzW3BhdGhzLmxlbmd0aCAtIDFdKVxyXG4gICAgOiBwYXRocy5maWx0ZXIoKHApID0+IHAuaWQgPT09IHBvc3REYXRhLnJlY29tbWVuZGVkKS5wb3AoKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdERhdGEsXHJcbiAgICAgIG5leHRQYXRoLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpOiBQcm9taXNlPFN0YXRpY1BhdGhzPiA9PiB7XHJcbiAgY29uc3QgcGF0aHMgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKS5tYXAoKHsgaWQgfSkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBzbHVnOiBpZCxcclxuICAgIH0sXHJcbiAgfSkpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsdWdcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9TaGFyZWQubW9kdWxlLmNzcydcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnXHJcblxyXG50eXBlIFBhZ2VIZWFkaW5nUHJvcHMgPSB7XHJcbiAgdGl0bGU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZUhlYWRpbmc6IEZDPFBhZ2VIZWFkaW5nUHJvcHM+ID0gKHsgdGl0bGUgfSk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmdzfT5cclxuICAgICAgICA8Qm94IHA9ezV9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29tcG9uZW50PVwiaDFcIj5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSdcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJ1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnXHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IHsgUG9zdERhdGEgfSBmcm9tICcuLi90eXBlcy9wb3N0cydcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IENoZXZyb25SaWdodCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0J1xyXG5cclxudHlwZSBQcmV2aWV3Q2FyZFByb3BzID0ge1xyXG4gIHBvc3Q6IFBvc3REYXRhXHJcbiAgbm9NYXJnaW4/OiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNhcmQ6IHtcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcclxuICAgICAgd2lkdGg6IDQzMCxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgd2lkdGg6IDQ1MCxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICB3aWR0aDogNDEwLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneGwnKV06IHtcclxuICAgICAgd2lkdGg6IDQ1MCxcclxuICAgIH0sXHJcbiAgICBoZWlnaHQ6IDQzMCxcclxuICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgaGVpZ2h0OiAxNjAsXHJcbiAgfSxcclxuICBhY3Rpb25zOiB7XHJcbiAgICByaWdodDogMjAsXHJcbiAgICBib3R0b206IDEwLFxyXG4gICAgcGFkZGluZzogMTAsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB9LFxyXG59KSlcclxuZXhwb3J0IGNvbnN0IFByZXZpZXdDYXJkOiBGQzxQcmV2aWV3Q2FyZFByb3BzPiA9ICh7IHBvc3QsIG5vTWFyZ2luIH0pOiBSZWFjdEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC9ibG9nLyR7cG9zdC5pZH1gfT5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9IGVsZXZhdGlvbj17M30gc3R5bGU9e25vTWFyZ2luID8geyBtYXJnaW46IDAgfSA6IHt9fT5cclxuICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICA8Q2FyZE1lZGlhIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX0gaW1hZ2U9e2Avc21hbGwvJHtwb3N0LmlkfS5wbmdgfSB0aXRsZT17cG9zdC50aXRsZX0gLz5cclxuICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgIHtwb3N0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgPEJveCBwdD17M30+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cInRleHRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgUmVhZCBNb3JlIDxDaGV2cm9uUmlnaHQgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjAgfX0gLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3Q2FyZFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENoaXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgYnV0dG9uUGFkZGluZzoge1xyXG4gICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICBwYWRkaW5nOiAzLFxyXG4gIH0sXHJcbiAgYnV0dG9uUGFkZGluZ05vTWFyZ2luOiB7XHJcbiAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxyXG4gICAgbWFyZ2luVG9wOiAnM3B4JyxcclxuICB9LFxyXG59KVxyXG5cclxudHlwZSBUb3BpY3NEaXNwbGF5UHJvcHMgPSB7XHJcbiAgdG9waWNzOiBzdHJpbmdbXVxyXG4gIG4/OiBudW1iZXJcclxuICBub01hcmdpbj86IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgVG9waWNzRGlzcGxheSA9ICh7IHRvcGljcywgbiwgbm9NYXJnaW4gPSB1bmRlZmluZWQgfTogVG9waWNzRGlzcGxheVByb3BzKTogUmVhY3RFbGVtZW50ID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17bm9NYXJnaW4gPyB7fSA6IHsgd2lkdGg6ICc5MCUnLCBtYXJnaW46ICdhdXRvJywgdGV4dEFsaWduOiAnY2VudGVyJywgZGlzcGxheTogJ2Fic29sdXRlJyB9fT5cclxuICAgICAge3RvcGljcy5zbGljZSgwLCBuID8/IDEwMDApLm1hcCgodCkgPT4gKFxyXG4gICAgICAgIDxMaW5rIGtleT17dH0gaHJlZj17YC90b3BpY3MvJHt0LnJlcGxhY2UoJyAnLCAnLScpfWB9PlxyXG4gICAgICAgICAgPENoaXAgY2xhc3NOYW1lPXtub01hcmdpbiA/IGNsYXNzZXMuYnV0dG9uUGFkZGluZ05vTWFyZ2luIDogY2xhc3Nlcy5idXR0b25QYWRkaW5nfSBsYWJlbD17dH0gLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkpfVxyXG4gICAgICB7dG9waWNzLmxlbmd0aCA+IG4gJiYgKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvdG9waWNzYH0+XHJcbiAgICAgICAgICA8Q2hpcCBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uUGFkZGluZ30gbGFiZWw9XCLigKZcIiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9waWNzRGlzcGxheVxyXG4iLCJpbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXHJcbmltcG9ydCB7IFBvc3REYXRhIH0gZnJvbSAnLi4vdHlwZXMvcG9zdHMnXHJcblxyXG5jb25zdCBwb3N0c0RpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncG9zdHMnKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3QgPSAoaWQ6IHN0cmluZywgaW5jbHVkZUNvbnRlbnQgPSBmYWxzZSk6IFBvc3REYXRhID0+IHtcclxuICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihwb3N0c0RpcmVjdG9yeSwgYCR7aWR9Lm1kYClcclxuICByZXR1cm4gZ2V0UG9zdEZyb21GaWxlKGZ1bGxQYXRoLCBpZCwgaW5jbHVkZUNvbnRlbnQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTb3J0ZWRQb3N0c0RhdGEgPSAoKTogUG9zdERhdGFbXSA9PiB7XHJcbiAgLy8gR2V0IGZpbGUgbmFtZXMgdW5kZXIgL3Bvc3RzXHJcbiAgY29uc3QgZmlsZU5hbWVzID0gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpXHJcbiAgY29uc3QgYWxsUG9zdHNEYXRhOiBQb3N0RGF0YVtdID0gZmlsZU5hbWVzLm1hcCgoZmlsZU5hbWUpID0+IHtcclxuICAgIC8vIFJlbW92ZSBcIi5tZFwiIGZyb20gZmlsZSBuYW1lIHRvIGdldCBpZFxyXG4gICAgY29uc3QgaWQgPSBmaWxlTmFtZS5yZXBsYWNlKC9cXC5tZCQvLCAnJylcclxuXHJcbiAgICAvLyBSZWFkIG1hcmtkb3duIGZpbGUgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihwb3N0c0RpcmVjdG9yeSwgZmlsZU5hbWUpXHJcbiAgICByZXR1cm4gZ2V0UG9zdEZyb21GaWxlKGZ1bGxQYXRoLCBpZClcclxuICB9KVxyXG4gIC8vIFNvcnQgcG9zdHMgYnkgZGF0ZVxyXG4gIHJldHVybiBhbGxQb3N0c0RhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgaWYgKGEuZGF0ZSA8IGIuZGF0ZSkge1xyXG4gICAgICByZXR1cm4gMVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIC0xXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgZ2V0UG9zdEZyb21GaWxlID0gKGZ1bGxQYXRoOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGluY2x1ZGVDb250ZW50ID0gZmFsc2UpOiBQb3N0RGF0YSA9PiB7XHJcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpXHJcblxyXG4gIC8vIFVzZSBncmF5LW1hdHRlciB0byBwYXJzZSB0aGUgcG9zdCBtZXRhZGF0YSBzZWN0aW9uXHJcbiAgY29uc3QgbWF0dGVyUmVzdWx0ID0gbWF0dGVyKGZpbGVDb250ZW50cylcclxuICAvLyBDb21iaW5lIHRoZSBkYXRhIHdpdGggdGhlIGlkXHJcbiAgcmV0dXJuIHtcclxuICAgIGlkLFxyXG4gICAgLi4ubWF0dGVyUmVzdWx0LmRhdGEsXHJcbiAgICBjb250ZW50OiBpbmNsdWRlQ29udGVudCA/IG1hdHRlclJlc3VsdC5jb250ZW50IDogbnVsbCxcclxuICAgIHRvcGljczogbWF0dGVyUmVzdWx0LmRhdGEudG9waWNzLnNwbGl0KCcsJyksXHJcbiAgfSBhcyBQb3N0RGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U29ydGVkVG9waWNzID0gKCk6IHN0cmluZ1tdID0+IHtcclxuICBjb25zdCBwb3N0cyA9IGdldFNvcnRlZFBvc3RzRGF0YSgpXHJcblxyXG4gIGNvbnN0IGFsbFRvcGljcyA9IHBvc3RzLnJlZHVjZSgocHJldjogc3RyaW5nW10sIGN1cnJlbnQ6IFBvc3REYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gWy4uLnByZXYsIC4uLmN1cnJlbnQudG9waWNzXVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxyXG5cclxuICBhbGxUb3BpY3MubWFwKCh0KSA9PiB7XHJcbiAgICBtYXBbdF0gPSBhbGxUb3BpY3MuZmlsdGVyKCh0b3BpYykgPT4gdCA9PT0gdG9waWMpLmxlbmd0aFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYWxsVG9waWNzKSkuc29ydCgoYSwgYikgPT4gbWFwW2JdIC0gbWFwW2FdKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBOQU1FID0gJ1NHJ1xyXG5leHBvcnQgY29uc3QgTkFNRV9BTkRfRE9NQUlOID0gJ1NHJ1xyXG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9zYWllbWdpbGFuaS5tZSdcclxuZXhwb3J0IGNvbnN0IERFUExPWU1FTlRTX1VSTCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3NhaWVtZ2lsYW5pL3NhaWVtLWJsb2cvZGVwbG95bWVudHMnXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRpbmdzXCI6IFwiU2hhcmVkX2hlYWRpbmdzX19yM3k3MlwiLFxuXHRcInNlY29uZEhlYWRpbmdcIjogXCJTaGFyZWRfc2Vjb25kSGVhZGluZ19fZ3FBeE9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRleHQtY29udGVudFwiOiBcIlNsdWdfdGV4dC1jb250ZW50X18yN19yQlwiLFxuXHRcImltYWdlXCI6IFwiU2x1Z19pbWFnZV9fMmVlekdcIixcblx0XCJpbmZvXCI6IFwiU2x1Z19pbmZvX19UY09qWFwiLFxuXHRcInBvc3QtY29udGFpbmVyXCI6IFwiU2x1Z19wb3N0LWNvbnRhaW5lcl9fMVV0SzhcIixcblx0XCJpbWFnZS1jb250YWluZXJcIjogXCJTbHVnX2ltYWdlLWNvbnRhaW5lcl9fM0VtQnNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=