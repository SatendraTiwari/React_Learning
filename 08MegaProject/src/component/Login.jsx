import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import authService from "../AppWrite/auth";
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);

    const login = async (data) => {
        console.log("lohgi    hhhhh hhgggcgx",data)
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)

        }
    }
    return (
        
        <div
            className="flex items-center justify-center w-full" >

            <div className={` mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className=" inline-block w-full max-w-[100px]">
                        <Logo />
                    </span>
                </div>
                <h2 className=" text-center text-2xl font-bold leading-tight ">Sign In to your Account </h2>
                <p className="mt-2 text-center text-base text-black/60" >
                    Don&apos;t have any account?&nbsp;
                    <Link to="/signup" className="text-blue-600 hover:text-blue-700 transition duration">
                        Sign up 
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(login)} className="mt-8">
                    <div className="space-y-5">
                        <Input
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.test(value) ||
                                        "Invalid email address",
                                }
                            })}
                        />

                        <Input
                            label="Password:"
                            placeholder="Enter your password"
                            type="password"
                            {...register("password", {
                                required: true,
                            })}

                        />
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white"
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;