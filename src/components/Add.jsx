import { useLocation } from 'react-router-dom';

const Add = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = parseFloat(params.get('x'));
  const y = parseFloat(params.get('y'));
  const result = x + y;

  return (
    <div>
      <h1>Addition</h1>
      <p>{x} + {y} = {result}</p>
    </div>
  );
};

export default Add;
