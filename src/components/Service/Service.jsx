import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
    // destructuring data here 
    const { id, title, img, name, ratings, price, details } = props.Course;
    return (
        <div className="col-lg-4">
            {/* single course card  */}
            <div className="course-card">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body py-4">
                    <h1 className="card-title"> {name}</h1>
                    <p>
                        <b>{title}</b>
                    </p>
                    <p className="mt-2 star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i> <b>{ratings}</b>
                    </p>
                    <p>{details.slice(0, 200)}</p>
                    <h6>${price}</h6>
                    <button className="btn course-btn m-2">
                        <Link to="/booking">Book Appointment</Link>
                    </button>
                    {/* <button className="btn course-btn btn2 m-2">
                        <Link to="/single">Details</Link>
                    </button> */}

                    <Link to={`/single/${id}`}>
                        <button className="btn course-btn btn2 m-2">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
