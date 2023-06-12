import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [show,setShow] = useState(false)

  const from = location?.state?.from?.pathname || '/'
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {signIn, googleSignIn} = useContext(AuthContext)
  const onSubmit = (data) => {
    console.log(data)
    const {email,password} = data || {};
    signIn(email,password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true})
      Swal.fire({
        title: 'User Login Successfully',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    })
    .catch((error) => {
      console.log(error.message);
    });
  };
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const googleLoggedUser = result.user;
        const saveUser = {image:googleLoggedUser.photoURL, name: googleLoggedUser.displayName, email: googleLoggedUser.email, role: 'Student'}
        console.log(googleLoggedUser);
        fetch('https://summer-camp-server-tau.vercel.app/users',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body : JSON.stringify(saveUser)
          
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            alert('data was added')
          }
        })
        navigate(from, {replace: true});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-gradient-to-r from-[rgba(2,15,29,1)] to-[rgba(0,212,255,1)]  h-[100vh] flex justify-center items-center">
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://free.toppng.com/uploads/preview/dynamique-dance-dancer-icon-dance-icon-transparent-11553414145pblx7dmwtu.png"
            alt=""
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div>
            <label
              for="username"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Username
            </label>
            <input
             {...register("email", { required: true })} 
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.email && (
                <p className="mt-2 block text-red-600">Name is required</p>
              )}
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
            </div>

            <input
             {...register("password", { required: true })} 
              type={show? 'text' : 'password'}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <p className="mt-1 cursor-pointer" onClick={()=>setShow(!show)}>{show ? 'Hide Password'  : 'Show Password' }</p>
            {errors.password && (
                <p className="mt-2 block text-red-600">Name is required</p>
              )}
          </div>

          <div className="mt-6">
            <input type="submit" value="Sign In" className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"  />
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with Social Media
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
          onClick={handleGoogle}
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span  className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>

          
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Don't have an account?{" "}
          <Link to="/register" className="font-medium text-gray-700 dark:text-gray-200 hover:underline"> Create One</Link>
            
          
            
          
        </p>
      </div>
    </div>
  );
};

export default Login;
