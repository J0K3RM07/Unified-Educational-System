import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url: string, flag?: boolean) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [flag]);

  return { data, isLoading };
};

export default useFetch;
