import {
  isDateInRange,
  isNumberInRange,
  isStringInRange,
} from "./func/inRangeComparing";
import {
  everyNumberComparing,
  everyStringComparing,
} from "./func/selectorsEvery";
import {
  selectorsSomeComparingNumbers,
  selectorsSomeComparingStrings,
} from "./func/selectorsSome";
import {
  someOfArrayOfNumbers,
  someOfArrayOfStrings,
} from "./func/selectorsSomeOfArray";
import {
  strongComparingAny,
  strongComparingBooleans,
  strongComparingDates,
  strongComparingNumber,
  strongComparingString,
} from "./func/strongComparing";

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
  },
  some: {
    string: selectorsSomeComparingStrings,
    number: selectorsSomeComparingNumbers,
  },
  someOfArray: {
    string: someOfArrayOfStrings,
    number: someOfArrayOfNumbers,
  },
  every: {
    string: everyStringComparing,
    number: everyNumberComparing,
  },
  min: {},
  max: {},
};
