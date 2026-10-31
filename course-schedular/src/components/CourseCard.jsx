import React from 'react';

function CourseCard({course,courses}) {
    const prereqs = course.prerequisites || [];

    const prereqCourses = prereqs.map((id) => {
        const c = courses.find((c) => c.id == id);
        return c ? c.number : "";
    });

    return (
        <div className="card mb-3">
            <div className={ "card-header"}>
                {course.number}
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
                <div className="card-footer">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id={`complete-${course.id}`}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={`complete-${course.id}`}
                        >
                            Complete
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;