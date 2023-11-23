import * as React from 'react';
import { useLocation  } from "react-router-dom";

const SetSession = () => {
  const location = useLocation();
  console.log(new URLSearchParams(location.search).get('id_token'));
  
  return <div>set session page</div>;
};

export { SetSession };
