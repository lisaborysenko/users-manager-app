import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "./store/userSlice";
import { AppDispatch, RootState } from "./store";

import "./App.module.css";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector((state: RootState) => state.users.users);
  const isLoading = useSelector((state: RootState) => state.users.isLoading);
  const error = useSelector((state: RootState) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(users);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <div></div>;
}

export default App;

