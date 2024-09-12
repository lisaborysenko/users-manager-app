import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "./store/userSlice";
import { AppDispatch, RootState } from "./store";

import UsersContainer from "./containers/Users";
import Spinner from "./components/Spinner";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector((state: RootState) => state.users.users);
  const isLoading = useSelector((state: RootState) => state.users.isLoading);
  const error = useSelector((state: RootState) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <Spinner />;
  if (error) return <p>{error}</p>;

  return <UsersContainer users={users} />;
}

export default App;

