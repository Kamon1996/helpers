interface isIncludesFuncI {
  (elem: string, temp: string): boolean;
}

export const isIncludes: isIncludesFuncI = (elem, temp) => elem.includes(temp);
