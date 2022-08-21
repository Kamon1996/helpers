interface everyStringComparingFuncI {
  (selectedValues: string[] | [], selectors: string[]): boolean;
}
export const everyStringComparing: everyStringComparingFuncI = (
  selectedValues,
  selectors
) => {
  if (selectedValues.length === 0) return false;
  return selectors.every((select) =>
    selectedValues.some((selectedValue) => selectedValue === select)
  );
};

interface everyNumberComparingFuncI {
  (selectedValues: number[] | [], selectors: number[]): boolean;
}
export const everyNumberComparing: everyNumberComparingFuncI = (
  selectedValues,
  selectors
) => {
  if (selectedValues.length === 0) return false;
  return selectors.every((select) =>
    selectedValues.some((selectedValue) => selectedValue === select)
  );
};
