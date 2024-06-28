import { useLocation } from 'react-router-dom';

const NotFound = () => {
  let location = useLocation();

  return (
    <div>
      <h1>Nie znaleziono elementu: {location.pathname}</h1>
    </div>
  );
};

export default NotFound;
