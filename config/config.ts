import {
  isDateInRange,
  isInRange,
  isNumberInRange,
  isStringInRange,
} from "../func/inRangeComparing";
import {
  everyComparing,
  everyNumberComparing,
  everyStringComparing,
} from "../func/selectorsEvery";
import {
  selectorsSomeCompar,
  selectorsSomeComparingNumbers,
  selectorsSomeComparingStrings,
} from "../func/selectorsSome";
import {
  someOfArray,
  someOfArrayOfNumbers,
  someOfArrayOfStrings,
} from "../func/selectorsSomeOfArray";
import {
  strongComparingAny,
  strongComparingBooleans,
  strongComparingDates,
  strongComparingNumber,
  strongComparingString,
} from "../func/strongComparing";

export const config = {
  strong: {
    string: strongComparingString,
    number: strongComparingNumber,
    boolean: strongComparingBooleans,
    date: strongComparingDates,
    any: strongComparingAny,
  },
  range: {
    dates: isDateInRange,
    number: isNumberInRange,
    string: isStringInRange,
    any: isInRange,
  },
  some: {
    string: selectorsSomeComparingStrings,
    number: selectorsSomeComparingNumbers,
    any: selectorsSomeCompar,
  },
  someOfArray: {
    string: someOfArrayOfStrings,
    number: someOfArrayOfNumbers,
    any: someOfArray,
  },
  every: {
    string: everyStringComparing,
    number: everyNumberComparing,
    any: everyComparing,
  },
};
