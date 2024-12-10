import { useState, useEffect } from "react";

const UseFetch_comp = (link) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [link]);

  return [data];
};

export default UseFetch_comp;