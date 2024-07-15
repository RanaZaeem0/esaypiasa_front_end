import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import SubHeading from "../componut/SubHeading";
import Input from "../componut/Input";
import Button from "../componut/Button";
import ButtonWarning from "../componut/ButtonWarning";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";

export default function Signups() {
  
  const [error, setError] = useState("");
  const Naviagte = useNavigate();
  const Dispatch = useDispatch();

  const authStatus = useSelector((state) => state.auth.status);

  console.log(authStatus);
  const { register, handleSubmit } = useForm();

  const createUser = async (data) => {
    console.log(data);
    try {
      let userDetails = data;
      console.log(userDetails);

      const response = await axios.post(
        "https://server-lovat-psi.vercel.app/api/user/signup",
        {
          userDetails,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem("token", response.data.token);
        console.log(localStorage.getItem('token'));
        Dispatch(login(response.data));
        Naviagte("/dashboard");
      }

      return userDetails;
    } catch (error) {
      console.log(`error occuor during signup ${error}`);
      setError(error);
    }
  };

  return (
    <div className="bg-slate-900 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <h2 className="!text-black font-medium">Sign up</h2>
          <SubHeading label={"Enter your info"} />
          <form onSubmit={handleSubmit(createUser)}>
            <div className="">

            
            <Input
              {...register("firstname", { required: true,minLength: 2 })}
              placeholder={"first Name"}
              label={"first Name"}
            />
            <Input
              {...register("lastname", { required: true, minLength: 2 })}
              type={"text"}
              placeholder={"Doe"}
              label={"Last Name"}
            />
            <Input
              {...register("username", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
              type={"email"}
              placeholder={"example@gmail.com"}
              label={"email"}
            />
            <Input
              {...register("password", { required: true, minLength: 6 })}
              placeholder={"******"}
              label={"password"}
            /></div>
          <Button label={'Sign up'} type="submit" />
          </form>
          <h2 className="text-red-500 font-normal">{error}</h2>
          <div className="pt-4"></div>
          <ButtonWarning
            label={"Already Have an account ?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}
