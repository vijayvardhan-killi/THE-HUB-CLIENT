import { useAuth } from './hooks/useAuth';

const App = () => {
  const Test = () => {
    const { user, setUser } = useAuth();

    return (
      <button onClick={() => setUser({ name: 'vijay' })}>
        {user ? user.name : 'no user'}
      </button>
    );
  };
  return (
    <>
      <Test></Test>
    </>
  );
};

export default App;
