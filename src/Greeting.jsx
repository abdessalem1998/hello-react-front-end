import { useSelector } from 'react-redux';

const Greeting = () => {
  const { message } = useSelector((state) => state.greetings);

  return (
    <>
      <p>{message}</p>
    </>
  );
};

export default Greeting;
