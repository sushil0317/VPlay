import React, { useState } from "react";
import Input from "../atoms/Input";
import { RiLockPasswordLine, RiProfileLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { Formik, Form } from "formik";
import Button from "../atoms/Button";
const LoginSignup = () => {
    const [login, setIsLogin] = useState<boolean>(false);
    const initialValues = {
        firstName: "",
        secondName: "",
        email: "",
        password: "",
    };
    // const onSubmit = (values) => {
    //     console.log(values);
    // };

    return (
        <div className="min-h-screen p-4">
            <div className="flex items-center gap-3 p-8">
                <img src="/mylogo.png" alt="" className="object-contain w-20" />
                <span className="text-3xl font-bold font-gothic">VPlay</span>
            </div>
            <div className="flex flex-row justify-between ">
                <div className="flex flex-col w-1/3 gap-5 mt-10 ml-20">
                    <span className="text-sm font-semibold uppercase text-stone-500 font-gothic">
                        {!login && "Start for Free"}
                    </span>
                    <div>
                        <h2 className="my-4 text-4xl font-semibold text-white font-gothic">
                            {!login ? "Create new account" : "Welcome back"}
                        </h2>
                        {login ? (
                            <span className="font-semibold select-none text-stone-500 font-gothic">
                                Create a account{" "}
                                <span
                                    className="text-blue-500 underline cursor-pointer"
                                    onClick={() => setIsLogin(false)}
                                >
                                    Sign up
                                </span>
                            </span>
                        ) : (
                            <span className="font-semibold select-none text-stone-500 font-gothic">
                                Already A Member?{" "}
                                <span
                                    className="text-blue-500 underline cursor-pointer"
                                    onClick={() => setIsLogin(true)}
                                >
                                    Log in
                                </span>
                            </span>
                        )}
                    </div>
                    {!login && (
                        <div className="flex justify-between gap-4 mt-8">
                            <Input
                                type="text"
                                id="firstName"
                                placeholder="First name"
                                FullWidth
                                isLabel
                            />
                            <Input
                                type="text"
                                id="secondName"
                                placeholder="Second name"
                                FullWidth={true}
                                isLabel
                            />
                        </div>
                    )}
                    <div className="flex flex-col w-full gap-4 ">
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            FullWidth
                            isLabel
                        />
                        <Input
                            type="password"
                            name=""
                            id="password"
                            placeholder="Password"
                            FullWidth
                            isLabel
                        />
                    </div>
                    {!login ? (
                        <Button variant="primary">Create</Button>
                    ) : (
                        <Button variant="primary">Log in</Button>
                    )}
                </div>
                <div className="w-1/2 "></div>
            </div>
        </div>
    );
};

export default LoginSignup;
