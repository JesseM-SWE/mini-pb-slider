
import React from 'react';
import UseFetch from "../hooks/useFetch.js";
import CourseCard from "./CourseCard.jsx";

function CourseList(props) {

    const { data: courses, loading, error } = UseFetch();

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} courses={courses} />
            ))}
        </>
    );
}

export default CourseList;
