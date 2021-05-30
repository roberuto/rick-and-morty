import { useHistory, useLocation } from "react-router-dom";

export const usePagination = () => {
  const history = useHistory();
  const { search } = useLocation();

  const updateSearchParam = (page: string) => {
    if (search.includes("page")) {
      return search.replace(/(page=)\d*/i, `$1${page}`);
    }
    return `page=${page}`;
  };

  const getPage = (url: string) => {
    try {
      const search = new URL(url).search;
      return new URLSearchParams(search).get("page");
    } catch {
      return null;
    }
  };

  const onPageChange = (url: string) => {
    const page = getPage(url);

    if (!page) {
      return;
    }

    history.push({
      pathname: history.location.pathname,
      search: updateSearchParam(page),
    });
  };

  return { onPageChange, getPage };
};
