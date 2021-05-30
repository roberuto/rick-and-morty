import { useSearchParams } from "./useSearchParams";

export const useParams = (initialParams: Record<string, string | number>) => {
  const searchParams = useSearchParams();

  const updatedParams = Object.keys(initialParams).reduce((updatedParams, currentKey) => {
    const currentParam = searchParams.get(currentKey);

    if (!currentParam) {
      return updatedParams;
    }

    return { ...updatedParams, [currentKey]: currentParam };
  }, {});

  const stringifyParams = (params: Record<string, string | number>) => {
    if (!params) {
      return "";
    }

    const stringified = Object.entries(params)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");

    return `?${stringified}`;
  };

  const params = Object.entries({
    ...initialParams,
    ...updatedParams,
  }).reduce((acc, [key, val]) => {
    if (val) {
      return { ...acc, [key]: val };
    }
    return acc;
  }, {});

  return { params, stringifiedParams: stringifyParams(params) };
};
