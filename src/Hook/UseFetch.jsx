import { useEffect, useState } from 'react';

function UseFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, [url]);
  
  return [data, isLoading];
}

export default UseFetch;
