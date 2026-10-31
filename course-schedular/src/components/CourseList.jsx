
import React from 'react';
import UseFetch from "../hooks/useFetch.js";
import CourseCard from "./CourseCard.jsx";

function CourseList(props) {

    const { data: courses, loading, error } = UseFetch();
    // array that stors the id of the course completed
    const [completed, setCompleted] = React.useState([]);

// completed is an array of course ids the student has marked done
// course.prerequisites is an array of ids that must be completed first


    const isAvailable = (course, completed) => {
        return course.prerequisites.every(prereqId => completed.includes(String(prereqId)))
    }

   function handleComplete(course) {
        setCompleted((prev)=>{
           // already completed , uncheck it, revemove it from completed
            if(prev.includes(course.id)){

                return prev.filter((id)=>id !== course.id);
            }
            // locked, do nothing
            if(!isAvailable(course,prev)){
                return prev;
            }
            // mark it as completed and add it to completed
            return [...prev,course.id];
        })
   }


    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {courses.map((course) => (
                <CourseCard key={course.id}
                            course={course}
                            courses={courses}
                            isCompleted = {completed.includes(course.id)}
                            isAvailable = {isAvailable(course,completed)}
                            handleComplete = {handleComplete}
                />
            ))}
        </>
    );
}

export default CourseList;
