
import React from 'react';
import UseFetch from "../hooks/useFetch.js";
import CourseCard from "./CourseCard.jsx";

function CourseList(props) {

    const { data: courses, loading, error } = UseFetch();
    console.log(courses);
    return (
        <>
            <h2>Course List</h2>
            {loading && <p>Loading...</p>}

            {error && <p>Error: {error}</p>}

            {!loading && !error && courses.map((c)=>(
                <CourseCard key={c.id} course={c} courses={courses}/>
            ))}
        </>
    );
}

export default CourseList;
