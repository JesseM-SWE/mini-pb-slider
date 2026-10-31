import React from 'react';

function CourseCard({course,courses,handleComplete, isCompleted, isAvailable}) {
    const prereqs = course.prerequisites || [];

    const prereqCourses = prereqs.map((id) => {
        const c = courses.find((c) => c.id == id);
        return c ? c.number : "";
    });

    const status = isCompleted ? "Completed" : isAvailable ? "Available" : "Locked";
    const colorStatus = isCompleted ? "bg-success" : isAvailable ? "bg-primary" : "bg-secondary";
    const boarderboxColor = isCompleted ? "border-success" : isAvailable ? "border-primary" : "border-secondary";


    return (

            <div className={`card h-100 text-start ${boarderboxColor}`}>
                <div className="card-header d-flex justify-content-between">

                    <strong> {course.number} </strong>
                    <span className={`badge ${colorStatus}`}>
                      {status === "Locked" ? "🔒 " : ""}
                        {status}
                    </span>
                </div>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
               <div className="card-text">
                   <p>{`${course.credits} Credits`}</p>
                   <p>{course.description}</p>
                   <p>
                       prerequisites:{""}
                       {prereqCourses.length == 0 ? "none" : prereqCourses.join(", ")}
                   </p>
               </div>
            </div>
            <div className="card-footer">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={`complete-${course.id}`}
                        checked={isCompleted}
                        disabled={!isCompleted &&!isAvailable}
                        onChange={() => handleComplete(course)}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`complete-${course.id}`}
                    >
                        {!isCompleted && !isAvailable ? "Complete prerequisites" : "Complete"}
                    </label>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;