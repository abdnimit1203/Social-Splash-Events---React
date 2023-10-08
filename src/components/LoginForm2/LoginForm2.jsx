import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginForm2 = () => {
  const { user, emailLogin,googleLogin } = useContext(AuthContext);
  const [loginErr, setLoginErr] = useState("");
  //toast
  const toastLoginSuccess = () =>
    toast.success("User logged in Successfully", { theme: "colored" });
  const toastLoginCredintialerror = () =>
    toast.error(`Opps : Email/Password Doesn't match!`, { theme: "colored" });
  const toastLoginerror = (err) =>
    toast.error(`${err}`, { theme: "colored" });
  console.log(user);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (!user) {
      emailLogin(email, password)
        .then((result) => {
          console.log(result.user);
          toastLoginSuccess();
          setLoginErr("")
          e.target.email.value ="";
          e.target.password.value ="";
         
        })
        .catch((error) => {
          console.log(error);
          toastLoginCredintialerror();
          setLoginErr(error.message.split(":")[1]);
        });
    } else {
      toastLoginerror("Already Logged in");
    }
    
  };
  const handleGoogleLogIn = ()=>{
    if(!user){
      googleLogin()
      .then(res=>{
        console.log(res.user);
        toastLoginSuccess()
      })
      .catch()
    }else{
      toastLoginerror("Sign out of other account first!");
    }
  }
  return (
    <div>
      <div>
        <section className="relative flex flex-wrap lg:h-screen lg:items-center flex-col-reverse lg:flex-col">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 ">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Login Now!</h1>

              <p className="mt-4 text-gray-500">
                Lets start your new journey to the best event planners
              </p>
            </div>

            <form
              onSubmit={handleLogIn}
              className="mx-auto mb-0 mt-8 max-w-md space-y-4 -z-10"
            >
              {loginErr && <p className="max-w-md border rounded-md bg-rose-50 border-secondary text-secondary text-center py-4">{loginErr}</p>}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full input input-bordered "
                    placeholder="Enter email"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    required
                    className="w-full input input-bordered"
                    placeholder="Enter password"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4 text-slate-400">
                    <AiOutlineEye />
                    <AiOutlineEyeInvisible />
                  </span>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-secondary text-white"
                  >
                    Login
                  </button>
                </div>
                <div className="flex items-center justify-between py-4">
                  <p className="text-sm text-gray-500">
                    Dont have an account?
                    <Link
                      className="text-secondary font-bold"
                      to={"/registration"}
                    >
                      {" "}
                      Register
                    </Link>
                  </p>
                </div>
              </div>
              <span className="capitalize font-normal hidden">
                <ToastContainer
                  position="top-center"
                  autoClose={7000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
              </span>
            </form>
            <div className="flex flex-col items-center">
              <p className="text-center font-bold text-slate-400">or</p>
              <hr className="mb-2 w-full" />
              <button onClick={handleGoogleLogIn} className="btn max-w-md w-full mt-10 ">
                <span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                    alt="google logo"
                    className="w-8"
                  />
                </span>{" "}
                Continue with Google
              </button>
            </div>
          </div>

          <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
              alt="Welcome"
              src="/formImg.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginForm2;
