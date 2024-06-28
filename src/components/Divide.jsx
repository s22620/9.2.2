import { useLocation } from 'react-router-dom';

const Divide = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = parseFloat(params.get('x'));
  const y = parseFloat(params.get('y'));
  const result = y !== 0 ? x / y : 'Error: Division by zero';

  return (
    <div>
      <h1>Division</h1>
      <p>{x} / {y} = {result}</p>
    </div>
  );
};

export default Divide;
