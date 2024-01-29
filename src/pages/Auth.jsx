import React, { useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast';
import { useCartContext } from '../providers/CartProvider';
import Profile from './Profile';

const SignUp = ({ state, setState }) => {

    const [data, setData] = useState({ email: "", password: "", username: "" });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Clicked");

        if (!email || !password) return;


        try {
            axios.post("http://localhost:5555/signup", {
                ...data
            }).then((res) => {
                console.log(res.data.data);
                toast.success("Signup in successful!")

                localStorage.setItem("ecommuser", JSON.stringify(res.data.data))
                window.location.reload()
            }).catch((error) => {
                toast.error(error.response.data.message)
                console.log(error);


            })
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error);

        }


    }

    console.log(data);


    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto bg-blue-600 w-10" src="../../dist/assets/logo.png" alt="Your Company" />
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div class="mt-2">
                            <input id="username" name="username" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-2">Sign up</button>
                    </div>
                </form>

                <p class="mt-10 text-center text-sm text-gray-500">
                    Have an account?
                    <a href="#" onClick={() => setState(1)} class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in</a>
                </p>


            </div>
        </div>
    )
}


const SignIn = ({ state, setState }) => {
    const [data, setData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Clicked");

        if (!email || !password) return;


        try {
            axios.post("http://localhost:5555/signin", {
                ...data
            }).then((res) => {
                console.log(res.data.data);
                toast.success("Login in successful!")

                localStorage.setItem("ecommuser", JSON.stringify(res.data.data))
                window.location.reload()
            }).catch((error) => {
                toast.error(error.response.data.message)
                console.log(error);


            })
        } catch (error) {

            console.log(error);

        }


    }

    console.log(data);
    return (

        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto bg-blue-600 w-10" src="../../dist/assets/logo.png" alt="Your Company" />
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>

                <p class="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <p class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" onClick={() => setState(0)}>Sign up</p>
                </p>
            </div>
        </div>

    )
}


const Render = () => {
    const [render, setRender] = useState(0);

    const {user} = useCartContext()

    if(user.user) return <Profile />

    return render === 1 ? <SignIn state={render} setState={setRender} /> : <SignUp state={render} setState={setRender} />
}

export default Render