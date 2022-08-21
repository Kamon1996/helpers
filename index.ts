import { config } from "./config/config";
import { filtrationPreparation, filters } from "./config/preparation";

// version 1.0
export const greateFilter = (data: any[], allFilters: filters) => {
  const filters = filtrationPreparation(allFilters);
  return data.filter((elem) => {
    Object.entries(filters).every((arr) => {
      const key = arr[0];
      const filter = arr[1];
      return config[filter.type].any(elem[key], filter.value);
    });
  });
};
