import Header from "./Header";

function Login() {
    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/3d31dac6-aaf0-4e6e-8bd7-e16c5d9cd9a3/web/IN-en-20260119-TRIFECTA-perspective_cce70d60-69c5-428f-99cf-44c212fcec3f_large.jpg"
                    alt=""
                />
            </div>
            <div className="flex justify-center items-center">
                <form className="relative bg-gray-500 p-12 w-3/12">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="p-2 m-2 bg-white"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="m-2 p-2 bg-white"
                    />
                    <button
                        type="submit"
                        className="p-2 m-4 bg-red-700"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Login;