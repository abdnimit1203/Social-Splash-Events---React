import { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
//   const { emailSignUp } = useContext(AuthContext);
const [passError ,setPassError] = useState(null)
const handleReistration = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const imgUrl = e.target.imgUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if(password.length <6){
        setPassError("*password must be more than 6 characters")
    }else if(!/(?=.*[A-Z])/.test(password)){
        
        setPassError("*must have one capital letter")
    }else if(!/(?=.*[@$!%*?&])/.test(password)){
        
        setPassError("*must contain a special character")
    }else{
        setPassError(null)
    }
    console.log(username, imgUrl, email, password);
    // emailSignUp(email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };
  return (
    <div>
      <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="/RegformImg.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Get started today!
            </h1>

            <p className="mt-4 text-gray-500">
            Join our community to get more offers and new planning ideas! Also get invites to our special events!</p>
          </div>

          <form onSubmit={handleReistration}  className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            

              <div className="relative">
                <input
                  type="text"
                  name="username"
                  required
                  className="w-full input input-bordered "
                  placeholder="Username"
                />
              </div>
            
            
              

              <div className="relative">
                <input
                  type="text"
                  name="imgUrl"
                  className="w-full input input-bordered "
                  placeholder="Photo URL"
                />

              </div>
        
            <div>
              <label className="sr-only">
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
                {
                    passError? <p className="text-red-600">{passError}</p>: ""
                }
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary text-white">
                  Register
                </button>
              </div>
              <div className="flex items-center justify-between py-4">
              <p className="text-sm text-gray-500">
                Already have an account?
                <Link className="text-secondary font-bold" to={"/login"}> Login</Link>
              </p>

              
            </div>

              
            </div>

            
          </form>
        </div>

        
      </section>
    </div>
    </div>
  );
};

export default RegistrationForm;
