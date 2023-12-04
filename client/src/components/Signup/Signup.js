import React from "react";
import { useState } from "react";
import Layout from "../../core/Layout";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { signup } from "../auth/index";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import BG from "../car/white-waves.webp";
function Signup() {
  //navigateTo
  const navigate = useNavigate();
  //react hooks
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [redirect, setRedirect] = useState(false);
  const [msg, setMsg] = useState({
    msgType: "",
    message: "",
  });
  //on Change method
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  //on submit method
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signup(userData);
    if (user.error) {
      setMsg({
        msgType: "error",
        message:
          user.error.code === 11000
            ? "Email already exist! Try signing in."
            : user.error.code,
      });
    } else setRedirect(true);
  };

  //redirect method
  const redirectUser = () => {
    if (redirect) {
      navigate("/signin", { replace: true });
    }
  };

  //show error or success alert
  const showMsg = () => {
    return (
      msg && <ErrorHandler alertMessage={msg.message} alertType={msg.msgType} />
    );
  };
  return (
    <Layout className={`flex flex-col justify-center items-center p-3 mt-16`}>
      {showMsg()}
      <div
        className="w-96 bg-white shadow-xl rounded-lg mt-4 py-4"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <h1 className="register-heading px-6">Шинэ бүртгэл үүсгэх</h1>
        <br />
        <form className="flex p-3 mx-10 flex-col">
          <input
            type="text"
            name="name"
            placeholder="Нэр"
            value={userData.name}
            onChange={handleChange}
            className="px-3 py-1 rounded-lg outline-none input-bg placeholder:input-placeHolder"
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="И-Мэйл"
            value={userData.email}
            onChange={handleChange}
            className="px-3 py-1 rounded-lg input-bg outline-none placeholder:input-placeHolder"
          />
          <br />
          <input
            type="text"
            name="phone"
            placeholder="Утас"
            value={userData.phone}
            onChange={handleChange}
            className="px-3 py-1 rounded-lg input-bg outline-none placeholder:input-placeHolder"
          />
          <br />
          <input
            type="text"
            name="address"
            placeholder="Гэрийн хаяг"
            value={userData.address}
            onChange={handleChange}
            className="px-3 py-1 rounded-lg input-bg outline-none placeholder:input-placeHolder"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Нууц үг"
            value={userData.password}
            onChange={handleChange}
            className="px-3 py-1 rounded-lg input-bg outline-none placeholder:input-placeHolder"
          />
          <br />
          <button
            className="submit-btn px-3 py-1 rounded-md w-24 cursor-pointer bg-yellow-main"
            onClick={handleSubmit}
          >
            Бүртгүүлэх
          </button>
          <br />
          <div>
            <hr className="hr-line rounded-sm"></hr>
            <br />
            <span className="font-normal text-sm relative -top-9 z-1 bg-white px-1 left-32">
              эсхүл
            </span>
          </div>
          <div>
            <span className="text-md">Хэрэв бүртгэлтэй бол? &nbsp; </span>
            <Link
              to="/signin"
              className="border border-black px-4 py-1 rounded-3xl hover:bg-blue-500 hover:border-none hover:text-white"
            >
              Нэвтрэх
            </Link>
          </div>
        </form>
      </div>
      <br />
      {redirectUser()}
    </Layout>
  );
}

export default Signup;
