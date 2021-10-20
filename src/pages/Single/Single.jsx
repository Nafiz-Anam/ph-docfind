// import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Single.css";
import { useEffect, useState } from "react";

const Single = () => {
    const { id } = useParams();

    // set all data
    const [allDoctors, setAllDoctors] = useState([]);

    // set single data
    const [singleDoctor, setSingleDoctor] = useState({});

    // fetch all data here
    useEffect(() => {
        fetch("/doctorsData.json")
            .then((res) => res.json())
            .then((data) => setAllDoctors(data.results));
    }, []);

    // fetch single data here
    useEffect(() => {
        const foundDoctor = allDoctors.find((doctor) => doctor.id == id);
        setSingleDoctor(foundDoctor);
    }, [allDoctors]);

    return (
        <div className="single-doc">
            <div className="banner-img">
                <div className="container">
                    <div className="about-banner">
                        <h1>Doctor Details</h1>
                        <p>
                            <b>Doctor</b> / Details
                        </p>
                    </div>
                </div>
            </div>
            {/* data loads here  */}
            <div className="details-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 details-area">
                            <div className="doctor-info row shadow bg-body ">
                                <div className="col-lg-5 col-sm-12">
                                    <img src={singleDoctor?.img} alt="" />
                                </div>
                                <div className="col-lg-7 col-sm-12">
                                    <h1>{singleDoctor?.name}</h1>
                                    <div className="mt-3 mb-3 star">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half"></i>{" "}
                                        <b>{singleDoctor?.ratings}</b>
                                    </div>
                                    <h3>{singleDoctor?.title}</h3>
                                    <p>
                                        <i className="fal fa-envelope"></i>{" "}
                                        {singleDoctor?.email}
                                    </p>
                                </div>
                            </div>
                            <div className="desc">
                                <h1>Overview of {singleDoctor?.name}</h1>
                                <p>{singleDoctor?.details}</p>
                            </div>
                            <div className="specialities">
                                <h1>Subspecialities</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard.
                                </p>
                                <div className="row">
                                    <div className="col-6">
                                        <ul>
                                            <li>Best Fitness Excercises</li>
                                            <li>
                                                Combine Fitness and Lifestyle
                                            </li>
                                            <li>Achieve a Specific Goal</li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li>Best Fitness Excercises</li>
                                            <li>
                                                Combine Fitness and Lifestyle
                                            </li>
                                            <li>Achieve a Specific Goal</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* booking part area  */}
                        <div className="col-lg-4 ">
                            <div className="booking-form shadow bg-body ">
                                <h1>Booking Summary</h1>
                                <form>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="formGroupExampleInput"
                                            className="form-label"
                                        >
                                            Date
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            placeholder="07/20/2021"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="formGroupExampleInput2"
                                            className="form-label"
                                        >
                                            Time
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="formGroupExampleInput2"
                                            placeholder="08.30 PM"
                                        />
                                    </div>
                                    <h2>Choose Services</h2>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="autoSizingCheck2"
                                        />
                                        <div className="price-data d-flex">
                                            <label
                                                className="form-check-label"
                                                htmlFor="autoSizingCheck2"
                                            >
                                                Service One
                                            </label>{" "}
                                            <p>
                                                <b>80$</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="autoSizingCheck2"
                                        />
                                        <div className="price-data d-flex">
                                            <label
                                                className="form-check-label"
                                                htmlFor="autoSizingCheck2"
                                            >
                                                Service Two
                                            </label>{" "}
                                            <p>
                                                <b>90$</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="autoSizingCheck2"
                                        />
                                        <div className="price-data d-flex">
                                            <label
                                                className="form-check-label"
                                                htmlFor="autoSizingCheck2"
                                            >
                                                Service Three
                                            </label>{" "}
                                            <p>
                                                <b>70$</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="autoSizingCheck2"
                                        />
                                        <div className="price-data d-flex">
                                            <label
                                                className="form-check-label"
                                                htmlFor="autoSizingCheck2"
                                            >
                                                Service Four
                                            </label>{" "}
                                            <p>
                                                <b>99$</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="btn btn-booking"
                                        >
                                            Book Appointment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* booking part area  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;
