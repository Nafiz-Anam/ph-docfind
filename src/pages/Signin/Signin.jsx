import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Signin = () => {
    const {
        handleEmail,
        handlePass,
        signinUsingGoogle,
        signinWithGithub,
        handleLogin,
        logError,
    } = useAuth();
    return (
        <div className="signin-page">
            <div className="error container">
                <div className="alert" role="alert">
                    {logError}
                </div>
            </div>
            <h1 className="text-center signin-title">Please SignIn First</h1>
            <div className="signup-form">
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail3"
                            aria-describedby="emailHelp"
                            placeholder="Email Address"
                            onBlur={handleEmail}
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onBlur={handlePass}
                        />
                    </div>

                    <button type="submit" className="btn btn-signup">
                        Sign In
                    </button>
                </form>
            </div>
            {/* social login here  */}
            <div className="container text-center">
                <hr className="mt-5 mb-5" />
                <h2 className="text-center">Social Sign In</h2>
                <div className="btn-box">
                    <button
                        className="btn btn-google m-2"
                        onClick={signinUsingGoogle}
                    >
                        Google SignIn
                    </button>
                    <button
                        className="btn btn-git m-2"
                        onClick={signinWithGithub}
                    >
                        Github Sign In
                    </button>
                </div>
                <hr className="mt-5 mb-5" />
                <h3 className="text-center">Don'y Have a Account? </h3>
                <Link className="btn btn-here" to="/signup">
                    Sign Up Here
                </Link>
            </div>
        </div>
    );
};

export default Signin;
