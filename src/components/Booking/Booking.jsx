import React from "react";
import "./Booking.css";

const Booking = () => {
    return (
        <div className="booking-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="information shadow bg-body rounded">
                            <div className="shipping">
                                <h1>Your Information:</h1>
                                {/* font here  */}
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputName"
                                            className="form-label"
                                        >
                                            Patient Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputEmail4"
                                            className="form-label"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail4"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputName"
                                            className="form-label"
                                        >
                                            Birth Date
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputName"
                                            className="form-label"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                        />
                                    </div>
                                    <div className="col-md-1">
                                        <label
                                            htmlFor="inputName"
                                            className="form-label"
                                        >
                                            Gender
                                        </label>
                                    </div>
                                    <div className="col-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="gridCheck"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="gridCheck"
                                            >
                                                Male
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="gridCheck"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="gridCheck"
                                            >
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label
                                            htmlFor="inputAddress"
                                            className="form-label"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputAddress"
                                            placeholder="1234 Main St"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputCity"
                                            className="form-label"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputCity"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputState"
                                            className="form-label"
                                        >
                                            Hospital
                                        </label>
                                        <select
                                            id="inputState"
                                            className="form-select"
                                        >
                                            <option defaultValue>
                                                Choose...
                                            </option>
                                            <option>Hospital One</option>
                                            <option>Hospital Two</option>
                                            <option>Hospital Three</option>
                                            <option>Hospital Four</option>
                                            <option>Hospital Five</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="payment-form">
                                <h1>Payment Information:</h1>
                                <form className="row g-3">
                                    <div className="col-md-12">
                                        <label
                                            htmlFor="inputName"
                                            className="form-label"
                                        >
                                            Name On Card
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputEmail4"
                                            className="form-label"
                                        >
                                            Card Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputEmail4"
                                            className="form-label"
                                        >
                                            Expiration Date
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="inputEmail4"
                                            className="form-label"
                                        >
                                            Security Code
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="gridCheck"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="gridCheck"
                                            >
                                                I accept Terms and conditions
                                                and general policy
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* booking summary part here  */}
                    <div className="col-lg-5">
                        <div className="summary shadow bg-body rounded">
                            <h1>Booking Summary</h1>
                            <div className="price-data d-flex">
                                <label
                                    className="form-check-label"
                                    htmlFor="autoSizingCheck2"
                                >
                                    Date
                                </label>{" "}
                                <p>
                                    <b>07/20/2021</b>
                                </p>
                            </div>
                            <div className="price-data d-flex">
                                <label
                                    className="form-check-label"
                                    htmlFor="autoSizingCheck2"
                                >
                                    Time
                                </label>{" "}
                                <p>
                                    <b>08.30 PM</b>
                                </p>
                            </div>
                            <div className="price-data d-flex">
                                <label
                                    className="form-check-label"
                                    htmlFor="autoSizingCheck2"
                                >
                                    Doctor
                                </label>{" "}
                                <p>
                                    <b>Dr. Joseph Doe</b>
                                </p>
                            </div>

                            <hr />

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
                            <hr />
                            <div className="price-data d-flex">
                                <label
                                    className="form-check-label"
                                    htmlFor="autoSizingCheck2"
                                >
                                    Total
                                </label>{" "}
                                <p>
                                    <b>170$</b>
                                </p>
                            </div>
                            <div>
                                <button className="btn btn-booking">
                                    Confirm And Pay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
