import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../Auth/Authenticate";

// https://i.ibb.co/Tvt8Nhy/ashton-bingham-EQFt-Ez-JGERg-unsplash.jpg 
// https://i.ibb.co/c8nn8gV/ben-sweet-2-Lowvi-VHZ-E-unsplash.jpg 

const Register = () => {
  const { register, ProfileUpdate } = useContext(AuthProvider);
   const [error, setError] = useState(null);

    const handleRegister = (e) => {
        setError(null);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const pic = form.photo.value;
        const email = form.email.value;
        const pass = form.password.value;
      console.log(name, pic, email, pass);
      
      register(email, pass)
        .then((result) => {
          location.reload();
          const user = result.user;
          console.log(user);
          ProfileUpdate(name, pic)
            .then(() => {

              console.log("Updated");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          setError(error.message);
        });

      form.reset();
    }
    return (
      <div className=" flex justify-center min-h-screen items-center my-10">
        <div className="w-[95%] md:w-full mx-auto max-w-lg p-4 bg-white rounded-xl shadow-xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form
            onSubmit={handleRegister}
            className="space-y-2 md:space-y-4"
            action="#"
          >
            <h5 className="text-2xl md:text-3xl font-bold text-[#53346D] dark:text-white text-center">
              Signup to our platform
            </h5>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block mb-2 md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Photo
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                className="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Photo URL"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 md:text-xl font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
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
              <button type="submit" className="btn-nav md:w-full">
                Signup
              </button>
            </div>
            <div className="md:text-lg font-medium text-gray-500 dark:text-gray-300">
              Have an account?{" "}
              <Link
                to="/signin"
                className="text-[#623785] hover:underline dark:text-[#341d47]"
              >
                Signin
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;