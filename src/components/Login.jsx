import { Link } from "react-router";

const Login = () => {
    let handleLogin = () => {
        console.log("login ")
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Welcome Back</h2>
        
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button onClick={handleLogin}
            className="w-full bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300 cursor-pointer"
            type="button"
          >
            Login
          </button>

          {/* Footer Links */}
          <div className="mt-4 text-center flex justify-between text-sm">
            <a href="#" className="text-gray-600 hover:text-black hover:underline">
              Forgot Password?
            </a>
            <Link to='/signup' href="#" className="text-gray-600 hover:text-black hover:underline">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;