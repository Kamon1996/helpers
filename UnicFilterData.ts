import { config } from "./config";
import { filtrationPreparation, filters } from "./preparation";

const filters: filters = {
  status: {
    type: "strong",
    value: 10,
  },
  active: {
    type: "strong",
    value: true,
  },
};

const data = [
  { status: 10, active: true },
  { status: 23, active: true },
  { status: 10, active: true },
  { status: 23, active: true },
  { status: 3, active: true },
  { status: 10, active: false },
];

// version 1.0
export const mainFilterFunc = (data: any[], allFilters: filters) => {
  const filters = filtrationPreparation(allFilters);
  const filteredData = data.filter((elem) => {
    Object.entries(filters).forEach((arr) => {
      const key = arr[0];
      const filter = arr[1];
      config[filter.type]
      switch (filter.type) {
        case "strong":
          return config.strong.any(elem[key], filter.value);
        case "range":
          console.log(
            config.strong[typeof filter.value](elem[key], filter.value)
          );
          return config.strong[typeof filter.value](elem[key], filter.value);
      }
    });
  });
};

// filters should be {}
// for more effectivity it should be sorted by:
// 1. strict comparison ('boolean', 'number', 'string')
// 2. range (Array of Dates, numbers)
// 3. non strict comparison ('string')
//
// Example:
//
// const filters = {
//     isValid: true,
//     status: 'active',
//     withCountOfSomething: 5,
//     betweenDates: [new Date('2020-01-01'), new Date('2022-01-01')],
//     inPriceRange: [100, 1000],
//     includesString: 'Love you guys'
// }
