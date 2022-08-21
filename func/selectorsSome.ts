interface selectorsSomeComparingStringFuncI {
  (selectedValue: string, selectors: string[]): boolean;
}
export const selectorsSomeComparingStrings: selectorsSomeComparingStringFuncI =
  (selectedValue, selectors) => {
    return selectors.some((select) => selectedValue === select);
  };

interface selectorsSomeComparingNumberFuncI {
  (selectedValue: number, selectors: number[]): boolean;
}
export const selectorsSomeComparingNumbers: selectorsSomeComparingNumberFuncI =
  (selectedValue, selectors) => {
    return selectors.some((select) => selectedValue === select);
  };
