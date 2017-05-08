"use strict";
/* global it, describe */
/** Requires */
import assert       from 'assert';

import * as rango   from '../index';

describe("rango.alphabet", () => {
  describe("rango.alphabet(toChar)", () => {
    it("should return valid results", function () {
      // Lower
      assert.deepEqual(rango.alphabet("e")
        , ["a", "b", "c", "d", "e"]);

      // Upper
      assert.deepEqual(rango.alphabet("G")
        , ["A", "B", "C", "D", "E", "F", "G"]);
    });

    it("should throw error", function () {
      // Lower
      assert.throws(function () {
        rango.alphabet(1);
      }, /No such literal/);

      // Upper
      assert.throws(function () {
        rango.alphabet(4);
      }, /No such literal/);

      // Symbol
      assert.throws(function () {
        rango.alphabet("@");
      }, /No such literal/);
    });
  });

  describe("rango.alphabet(fromChar, toChar)", () => {
    it("should return valid results", function () {
      // Lower
      assert.deepEqual(rango.alphabet("h", "q")
        , ["h", "i", "j", "k", "l", "m", "n", "o", "p", "q"]);

      assert.deepEqual(rango.alphabet("H", "q")
        , ["h", "i", "j", "k", "l", "m", "n", "o", "p", "q"]);

      // Upper
      assert.deepEqual(rango.alphabet("H", "R")
        , ["H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"]);

      assert.deepEqual(rango.alphabet("h", "R")
        , ["H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"]);
    });

    it("should throw error", function () {
      // Lower
      assert.throws(function () {
        rango.alphabet(1, 2);
      }, /No such literal/);

      // Upper
      assert.throws(function () {
        rango.alphabet(4, 3);
      }, /No such literal/);

      // Symbol
      assert.throws(function () {
        rango.alphabet("A", "!");
      }, /No such literal/);

      assert.throws(function () {
        rango.alphabet("a", "!");
      }, /No such literal/);

      assert.throws(function () {
        rango.alphabet("!", "Z");
      }, /No such literal/);

      assert.throws(function () {
        rango.alphabet("!", "z");
      }, /No such literal/);
    });
  });

  describe("rango.alphabet(fromChar, toChar, lang)", () => {
    it("should return valid results", function () {
      // Lower
      assert.deepEqual(rango.alphabet("д", "м", "ru")
        , ["д", "е", "ж", "з", "и", "й", "к", "л", "м"]);

      assert.deepEqual(rango.alphabet("Д", "м", "ru")
        , ["д", "е", "ж", "з", "и", "й", "к", "л", "м"]);

      // Upper
      assert.deepEqual(rango.alphabet("Д", "М", "ru")
        , ["Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М"]);

      assert.deepEqual(rango.alphabet("д", "М", "ru")
        , ["Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М"]);
    });

    it("should throw error", function () {
      // Lower
      assert.throws(function () {
        rango.alphabet("a", "z", "de");
      }, /No such language/);

      // Upper
      assert.throws(function () {
        rango.alphabet("A", "Z", "de");
      }, /No such language/);

      // Symbol
      assert.throws(function () {
        rango.alphabet("A", "!", "de");
      }, /No such language/);

      assert.throws(function () {
        rango.alphabet("a", "!", "de");
      }, /No such language/);

      assert.throws(function () {
        rango.alphabet("!", "Z", "de");
      }, /No such language/);

      assert.throws(function () {
        rango.alphabet("!", "z", "de");
      }, /No such language/);
    });
  });
});
