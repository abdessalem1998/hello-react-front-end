import { useDispatch } from 'react-redux';
import { fetchMessage } from './redux/greeting';
import Greeting from './Greeting';

const GreetingsContainer = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Greeting />
      <button type="button" onClick={() => dispatch(fetchMessage())}>change</button>
    </>
  );
};

export default GreetingsContainer;
