import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPAge";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import axiosInstance from "./axios";
import { setInitialData } from "./store/slices/userSlices";

function App() {
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const resp = await axiosInstance.get("/users");
      dispatch(setInitialData(resp.data));
    } catch (error) {
      console.error(error);
      toast({
        title: "Something Wrong Happen",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
