import { useState, useEffect } from 'react';
import axios from 'axios';
import { IgetData, IResponse } from '../Type/Interface';

const useGetData = (url: IgetData) => {
  const [data, setData] = useState<IResponse[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios(url)
          .then(res => {
            setData(res.data);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (err: any) {
        setError(err);
        alert(err);
      }
    };
    if (isLoading) {
      fetchData();
    }
  }, [url]);

  return { data, error, isLoading };
};

export default useGetData;
