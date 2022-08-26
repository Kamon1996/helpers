import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { clone } from "lodash";

function removeEmptyFilters(obj: Object) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v?.length !== 0)
  );
}

const transformFiltersObjectToString = (obj: Object) => {
  return Object.keys(removeEmptyFilters(obj)).reduce((acc, k, i, arr) => {
    acc += `${k}=${obj[k]}`;
    if (i !== arr.length - 1) return (acc += "&");
    return acc;
  }, "?");
};

const filtersFromSearch = (search: string, filters) => {
  const filtersFromSearch = clone(filters);
  const searchParams = new URLSearchParams(search);
  Object.keys(filtersFromSearch).forEach((key) => {
    filtersFromSearch[key] = searchParams.has(key) ? searchParams.get(key) : "";
  });
  return filtersFromSearch;
};

type useQuery = <Type>(
  initFiltersState: Type,
  dynamic?: boolean
) => [Type, React.Dispatch<any>, () => any];

export const useQuery: useQuery = (initFiltersState, dynamic = true) => {
  const { search } = useLocation();
  const history = useHistory();
  const [filters, setFilters] = useState(
    search ? filtersFromSearch(search, initFiltersState) : initFiltersState
  );
  const filtersToString = useMemo(
    () => transformFiltersObjectToString(filters),
    [filters]
  );

  if (dynamic) {
    useEffect(() => {
      history.push(filtersToString);
    }, [filters]);
  }

  return [filters, setFilters, () => history.push(filtersToString)];
};
