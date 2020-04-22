import { API, methods } from '../API/index';
import { useState, useEffect } from 'react';

export const useApi = (methodName, requestData, initialData) => {
  if (!methods[methodName]) {
    throw new TypeError(`API doesn't have any methods named: ${methodName}`);
  }
  const [isFetching, setIsFetching] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    API[methodName](requestData)
      .then(setData)
      .catch(setHasError)
      .finally(() => setIsFetching(false));
  }, [methodName, requestData]);

  return { isFetching, data, hasError };
};
