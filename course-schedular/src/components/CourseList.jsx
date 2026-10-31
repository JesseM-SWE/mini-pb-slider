
import React from 'react';
import UseFetch from "../hooks/useFetch.js";

function CourseList(props) {

    const courses = UseFetch();
    console.log(courses);
    function custom() {


    }

    return (
        <>
            <h2>Course List</h2>
            {courses && courses.map((c) => (
                <div key={c.id} className="card mb-3">
                    <div className="card-header">
                        {c.number}
                    </div>

                    <div className="card-body">
                        <h1 className="card-title">{c.title}</h1>

                        <div className="card-text">
                            <p>{`${c.credit_card} credits`}</p>
                            <p>{c.description}</p>
                            <p>{`Prerequisites: ${c.prerequisites == "" ? 'none' : c.prerequisites}`}</p>
                        </div>

                        <div className="card-footer">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`complete-${c.id}`}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`complete-${c.id}`}
                                >
                                    Complete</label>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CourseList;
