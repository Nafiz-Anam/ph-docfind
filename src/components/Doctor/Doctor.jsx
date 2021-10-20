import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Doctor.css";

const Doctor = () => {
    const [allDoctors, setAllDoctors] = useState([]);
    useEffect(() => {
        fetch("/doctorsData.json")
            .then((res) => res.json())
            .then((data) => setAllDoctors(data.results));
    }, []);

    return (
        <div>
            <div className="courses-body pb-5">
                <div className="courses-banner">
                    <div className="container">
                        <h3 className="text-center">Find the Best Doctors</h3>
                        <h1 className="text-center">
                            The Best Doctors We Have
                        </h1>
                    </div>
                </div>
                <div className="container all-courses pt-5">
                    {/* all course load in here  */}
                    <div className="row">
                        {allDoctors.map((doctor) => (
                            <Service Course={doctor} key={doctor.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;
