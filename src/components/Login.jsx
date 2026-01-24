import { useState } from "react";

import Header from "./Header";

function Login() {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(prev => !prev)
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/3d31dac6-aaf0-4e6e-8bd7-e16c5d9cd9a3/web/IN-en-20260119-TRIFECTA-perspective_cce70d60-69c5-428f-99cf-44c212fcec3f_large.jpg"
                    alt=""
                />
            </div>
            <div className="flex justify-center items-center min-h-screen">
                <form className="relative bg-black/80 p-12 w-3/12 text-white rounded">
                    <h1 className="font-bold text-3xl text-center pb-4">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>

                    {/* Full name */}
                    {!isSignInForm && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-3 my-3 bg-gray-400 text-black w-full rounded"
                        />
                    )}

                    {/* Email address */}
                    <input
                        type="email"
                        placeholder="Email address"
                        className="p-3 my-3 bg-gray-400 text-black w-full rounded"
                    />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-3 my-3 bg-gray-400 text-black w-full rounded"
                    />

                    {/* Sign up & Sign in buttons */}
                    {
                        isSignInForm ?
                            <button type="submit"
                                className="p-3 my-5 bg-red-700 text-white w-full font-bold rounded"
                            >
                                Sign In
                            </button>
                            :
                            <button type="submit"
                                className="p-3 my-5 bg-red-700 text-white w-full font-bold rounded"
                            >
                                Sign Up
                            </button>
                    }

                    {/* Sign up & Sign in links */}
                    {isSignInForm ?
                        <p className="py-2">
                            New to Netflix? <span onClick={toggleSignInForm} className="cursor-pointer text-blue-700">Sign up now</span>
                        </p>
                        :
                        <p className="py-2">
                            Already registered? <span onClick={toggleSignInForm} className="cursor-pointer text-blue-700">Sign in</span>
                        </p>
                    }

                </form>
            </div>
        </div>
    )
};

export default Login;