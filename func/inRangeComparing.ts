interface isDateInRangeFuncI {
  (elem: Date, range: [Date, Date]): boolean;
}
export const isDateInRange: isDateInRangeFuncI = (value, [start, end]) => {
  return start <= value && value <= end;
};

interface isNumberInRangeFuncI {
  (elem: number, range: [number, number]): boolean;
}
export const isNumberInRange: isNumberInRangeFuncI = (value, [start, end]) => {
  return start <= value && value <= end;
};

interface isStringInRangeFuncI {
  (elem: string, range: [string, string]): boolean;
}
export const isStringInRange: isStringInRangeFuncI = (value, [start, end]) => {
  return start <= value && value <= end;
};

interface isInRangeFuncI {
  (elem: any, range: [any, any]): boolean;
}
export const isInRange: isInRangeFuncI = (value, [start, end]) => {
  return start <= value && value <= end;
};
