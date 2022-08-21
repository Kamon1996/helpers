interface someOfArrayOfStringsFuncI {
  (selectedValues: string[] | [], selectors: string[]): boolean;
}
export const someOfArrayOfStrings: someOfArrayOfStringsFuncI = (
  selectedValues,
  selectors
) => {
  if (selectedValues.length === 0) return false;
  return selectors.some((select) =>
    selectedValues.some((selectedValue) => selectedValue === select)
  );
};

interface someOfArrayOfNumbersFuncI {
  (selectedValues: number[] | [], selectors: number[]): boolean;
}
export const someOfArrayOfNumbers: someOfArrayOfNumbersFuncI = (
  selectedValues,
  selectors
) => {
  if (selectedValues.length === 0) return false;
  return selectors.some((select) =>
    selectedValues.some((selectedValue) => selectedValue === select)
  );
};
