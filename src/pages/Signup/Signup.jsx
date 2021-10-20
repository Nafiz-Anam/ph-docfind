import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Signup.css";

const Signup = () => {
    const { handleEmail, handlePass, handleRegister } = useAuth();
    return (
        <div className="signup">
            <h1 className="text-center">Please SignUp Here</h1>
            <div className="container">
                <div className="signup-form">
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
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
                            Sign Up
                        </button>
                    </form>
                </div>
                <hr className="mt-5 mb-5" />

                <div className="text-center">
                    <h3 className="text-center">Already Have a Account? </h3>
                    <Link className="btn btn-here" to="/signin">
                        Sign In Here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
