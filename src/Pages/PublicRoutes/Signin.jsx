import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthProvider } from "../../Auth/Authenticate";

const Signin = () => {
  const { login, goggleLogin } = useContext(AuthProvider);
  const [error, setError] = useState(null);

    const handlesignin = (e) => {
        setError(null);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
      console.log(email, pass);
      

      login(email, pass)
        .then((res) => {
          const user = res.user;
          console.log(user);
          form.reset();
         
        })
        .catch((error) => {
          setError(error.message);
        });
  
  }
  
  const handleGoogle = () => {
    goggleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

    return (
      <div className=" flex justify-center min-h-screen items-center">
        <div className="w-[95%] mx-auto md:w-full max-w-md p-4 bg-white rounded-lg shadow-xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form
            onSubmit={handlesignin}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <h5 className="text-2xl md:text-3xl font-bold text-[#53346D] dark:text-white text-center">
              Signin to our platform
            </h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 md:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 md:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex items-strat">
              <div className="flex items-center">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultValue
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>

                <label
                  htmlFor="remember"
                  className="ml-2 md:text-xl font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn-nav w-full">
                Signin
              </button>
            </div>
            <button
              onClick={handleGoogle}
              className="mt-4 block w-full select-none rounded-lg bg-gradient-to-tr from-[#085078] to-[#85D8CE] py-3 px-6 text-center align-middle font-sans text-base font-bold uppercase text-white shadow-md shadow-[#85D8CE] transition-all hover:shadow-lg hover:shadow-[#085078] 40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
            >
              <FaGoogle className="inline text-blue-800 text-xl mr-4"></FaGoogle>{" "}
              L<span className=" lowercase">ogin with </span>Google
            </button>

            <div className="md:text-lg font-medium text-gray-500 dark:text-gray-300">
              Not Signup?{" "}
              <Link
                to="/register"
                className="text-[#623785] hover:underline dark:text-[#2a1839]"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Signin;