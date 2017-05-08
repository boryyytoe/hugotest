"use strict";
/* global it, describe */
/** Requires */

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _index = require('../index');

var rango = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("rango.alphabet", function () {
  describe("rango.alphabet(toChar)", function () {
    it("should return valid results", function () {
      // Lower
      _assert2.default.deepEqual(rango.alphabet("e"), ["a", "b", "c", "d", "e"]);

      // Upper
      _assert2.default.deepEqual(rango.alphabet("G"), ["A", "B", "C", "D", "E", "F", "G"]);
    });

    it("should throw error", function () {
      // Lower
      _assert2.default.throws(function () {
        rango.alphabet(1);
      }, /No such literal/);

      // Upper
      _assert2.default.throws(function () {
        rango.alphabet(4);
      }, /No such literal/);

      // Symbol
      _assert2.default.throws(function () {
        rango.alphabet("@");
      }, /No such literal/);
    });
  });

  describe("rango.alphabet(fromChar, toChar)", function () {
    it("should return valid results", function () {
      // Lower
      _assert2.default.deepEqual(rango.alphabet("h", "q"), ["h", "i", "j", "k", "l", "m", "n", "o", "p", "q"]);

      _assert2.default.deepEqual(rango.alphabet("H", "q"), ["h", "i", "j", "k", "l", "m", "n", "o", "p", "q"]);

      // Upper
      _assert2.default.deepEqual(rango.alphabet("H", "R"), ["H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"]);

      _assert2.default.deepEqual(rango.alphabet("h", "R"), ["H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"]);
    });

    it("should throw error", function () {
      // Lower
      _assert2.default.throws(function () {
        rango.alphabet(1, 2);
      }, /No such literal/);

      // Upper
      _assert2.default.throws(function () {
        rango.alphabet(4, 3);
      }, /No such literal/);

      // Symbol
      _assert2.default.throws(function () {
        rango.alphabet("A", "!");
      }, /No such literal/);

      _assert2.default.throws(function () {
        rango.alphabet("a", "!");
      }, /No such literal/);

      _assert2.default.throws(function () {
        rango.alphabet("!", "Z");
      }, /No such literal/);

      _assert2.default.throws(function () {
        rango.alphabet("!", "z");
      }, /No such literal/);
    });
  });

  describe("rango.alphabet(fromChar, toChar, lang)", function () {
    it("should return valid results", function () {
      // Lower
      _assert2.default.deepEqual(rango.alphabet("д", "м", "ru"), ["д", "е", "ж", "з", "и", "й", "к", "л", "м"]);

      _assert2.default.deepEqual(rango.alphabet("Д", "м", "ru"), ["д", "е", "ж", "з", "и", "й", "к", "л", "м"]);

      // Upper
      _assert2.default.deepEqual(rango.alphabet("Д", "М", "ru"), ["Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М"]);

      _assert2.default.deepEqual(rango.alphabet("д", "М", "ru"), ["Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М"]);
    });

    it("should throw error", function () {
      // Lower
      _assert2.default.throws(function () {
        rango.alphabet("a", "z", "de");
      }, /No such language/);

      // Upper
      _assert2.default.throws(function () {
        rango.alphabet("A", "Z", "de");
      }, /No such language/);

      // Symbol
      _assert2.default.throws(function () {
        rango.alphabet("A", "!", "de");
      }, /No such language/);

      _assert2.default.throws(function () {
        rango.alphabet("a", "!", "de");
      }, /No such language/);

      _assert2.default.throws(function () {
        rango.alphabet("!", "Z", "de");
      }, /No such language/);

      _assert2.default.throws(function () {
        rango.alphabet("!", "z", "de");
      }, /No such language/);
    });
  });
});