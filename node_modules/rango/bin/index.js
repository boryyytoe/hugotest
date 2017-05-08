"use strict";
/** Constants */
// English

Object.defineProperty(exports, "__esModule", {
  value: true
});
var alphabets = {
  en: {
    lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  },
  ru: {
    lower: ["а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"]
  }
};

/** Reduces */
var langs = Object.keys(alphabets);
langs.forEach(function (lang) {
  var alphabet = alphabets[lang];

  alphabet.lower = alphabetToLowerCase(alphabet.lower);
  alphabet.upper = alphabetToUpperCase(alphabet.lower);

  alphabet.indexes = {
    lower: alphabetToIndexes(alphabet.lower),
    upper: alphabetToIndexes(alphabet.upper)
  };
});

/** Helps */
/**
 * Преобразуем каждую букву в массиве алфавита в верхний регистр
 * @param  {String[]} arr
 *
 * @return {String[]}
 */
function alphabetToLowerCase(arr) {
  return arr.map(function (char) {
    return char.toLowerCase();
  });
}

/**
 * Преобразуем каждую букву в массиве алфавита в нижний регистр
 * @param  {String[]} arr
 *
 * @return {String[]}
 */
function alphabetToUpperCase(arr) {
  return arr.map(function (char) {
    return char.toUpperCase();
  });
}

/**
 * Формирует объект индексов из массива
 * @param  {String[]} arr
 *
 * @return {Object}
 */
function alphabetToIndexes(arr) {
  return arr.reduce(function (res, char, i) {
    res[char] = i;
    return res;
  }, {});
}

/** Functions */
/**
 * Создает массив алфавита в указаном диапазоне
 * @param  {String} [fromChar=first literal]  - первая буква среза. Если передается только один аргумент берется первая буква алфавита.
 * @param  {String} toChar                    - последняя (включительно) буква среза.
 * @param  {String} [lang="en"]               - язык алфавита.
 *
 * @return {String[]}
 */
function alphabetRange(fromChar, toChar, lang) {
  var isUpperCase = false;
  var fromIndex = 0;
  var toIndex = 0;

  if (arguments.length === 1) {
    toChar = fromChar;

    fromChar = "a";
    lang = "en";
  } else if (arguments.length === 2) {
    lang = "en";
  }

  var alphabet = alphabets[lang];
  if (!alphabet) {
    throw new Error("No such language");
  }

  if (typeof alphabet.indexes.lower[toChar] === 'number') {
    isUpperCase = false;
  } else if (typeof alphabet.indexes.upper[toChar] === 'number') {
    isUpperCase = true;
  } else {
    throw new Error("No such literal");
  }

  if (isUpperCase) {
    fromChar = fromChar.toUpperCase();
    toChar = toChar.toUpperCase();
  } else {
    fromChar = fromChar.toLowerCase();
    toChar = toChar.toLowerCase();
  }

  var indexes = isUpperCase ? alphabet.indexes.upper : alphabet.indexes.lower;

  var alphabetArr = isUpperCase ? alphabet.upper : alphabet.lower;

  fromIndex = indexes[fromChar];
  toIndex = indexes[toChar];

  if (fromIndex === undefined || toIndex === undefined) {
    throw new Error("No such literal");
  }

  return alphabetArr.slice(fromIndex, toIndex + 1);
}

exports.alphabet = alphabetRange;