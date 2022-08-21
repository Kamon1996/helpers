export type filterKeys = "strong" | "range" | "some" | "someOfArray" | "every";
export type filterValue =
  | string
  | number
  | Date
  | boolean
  | string[]
  | number[]
  | Date[];

export interface filterObject {
  type: filterKeys;
  value: filterValue;
}

export interface filters {
  [key: string]: filterObject;
}

export const filtrationPreparation = (filters: filters) => {
  return removeEmptyFilters(filters);
};

const filters: filters = {
  status: {
    type: "range",
    value: [10, 200],
  },
  isActive: {
    type: "strong",
    value: true,
  },
};

const removeEmptyFilters = (filters: filters) => {
  Object.keys(filters).forEach((key) => {
    if (isValueEmpty(filters[key].value)) delete filters[key];
  });
  return filters;
};

const isValueEmpty = (value: filterValue) => {
  return Array.isArray(value) || typeof value === "string"
    ? value.length === 0
    : value;
};

// add sorting
