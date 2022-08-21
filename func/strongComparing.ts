interface strongComparingStringFuncI {
  (elemA: string, elemB: string): boolean;
}
export const strongComparingString: strongComparingStringFuncI = (a, b) =>
  a === b;

interface strongComparingNumberFuncI {
  (elemA: number, elemB: number): boolean;
}
export const strongComparingNumber: strongComparingNumberFuncI = (a, b) =>
  a === b;

interface strongComparingDatesFuncI {
  (elemA: Date, elemB: Date): boolean;
}
export const strongComparingDates: strongComparingDatesFuncI = (a, b) =>
  a === b;

interface strongComparingBooleansFuncI {
  (elemA: boolean, elemB: boolean): boolean;
}
export const strongComparingBooleans: strongComparingBooleansFuncI = (a, b) =>
  a === b;

export const strongComparingAny = (a, b) => a === b;
