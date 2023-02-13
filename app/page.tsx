"use client";
import { useEffect } from "react";

import { useAppContext } from "./context/AppContext";
import { useFetch } from "../hooks/useFetch";

import Mainpage from "@/templates/Mainpage/MainPage";

const Home = () => {
  const { addUsers } = useAppContext();

  const [users, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  useEffect(() => {
    addUsers(users);
  }, [users]);

  return <Mainpage />;
};

export default Home;
