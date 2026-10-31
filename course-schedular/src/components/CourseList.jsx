
import React from 'react'
import { useState } from "react";
import UseFetch from "../hooks/useFetch.js";
import CourseCard from "./CourseCard.jsx";

function CourseList(props) {

    const { data: courses, loading, error } = UseFetch();
    // array that stors the id of the course completed
    const [completed, setCompleted] = useState(()=>{
        const saved = localStorage.getItem("completedCourses");
        if(saved){
            try{
                // check if the saved value is an array if not return an empty array
                const pasrsed = JSON.parse(saved);
                return Array.isArray(pasrsed) ? pasrsed : [];
            }catch(e){
                return [];
            }
        }
        return [];
    });

    const [filter, setFilter] = React.useState("all");

// completed is an array of course ids the student has marked done
// course.prerequisites is an array of ids that must be completed first


    const isAvailable = (course, completed) => {
        return course.prerequisites.every(prereqId => completed.includes(String(prereqId)))
    }
    const completedCount = courses.filter(course => completed.includes(String(course.id))).length;
    const availableCount = courses.filter(course => !completed.includes(String(course.id)) && isAvailable(course,completed)).length;
    const lockedCount = courses.filter(course => !completed.includes(String(course.id)) && !isAvailable(course,completed)).length;

    const filterCourses = courses.filter(course => {
        // onlu completed courses
        if(filter === "completed"){
            return completed.includes(String(course.id));
        }
        // the left over
        if(filter === "remaining"){
            return !completed.includes(String(course.id));
        }
        // all courses
       return true;
    })


    console.log(completedCount,availableCount,lockedCount);

   function handleComplete(course) {
        setCompleted((prev)=>{
           // already completed , uncheck it, revemove it from completed
            if(prev.includes(course.id)){
                // find the id and remove it from the completed
                let newCompleted = prev.filter((id)=>id!== course.id);

                let change = true;
                while(change){

                    const val = newCompleted.filter((id)=>{
                        const course = courses.find((c)=>String(c.id) === id);

                        return course && isAvailable(course,newCompleted);
                    })
                    change = val.length !== newCompleted.length;
                    newCompleted = val;
                }
                return newCompleted;
            }
            // locked, do nothing
            if(!isAvailable(course,prev)){
                return prev;
            }
            // mark it as completed and add it to completed
            return [...prev,course.id];
        })
   }
   function handleSave(){
       localStorage.setItem("completedCourses",JSON.stringify(completed));
   }

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="btn-group mb-3" role="group">
                <button type={"button"} className={`btn ${filter ==='all' ?" btn-dark":"btn-outline-dark"}`} onClick={()=>setFilter("all")}>All Courses</button>
                <button type={"button"} className={`btn ${filter ==='completed' ?" btn-dark":"btn-outline-dark"}`} onClick={()=>setFilter("completed")}>Completed ({completedCount})</button>
                <button type={"button"} className={`btn ${filter ==='remaining' ?" btn-dark":"btn-outline-dark"}`} onClick={()=>setFilter("remaining")}>Remaining ({courses.length-completedCount})</button>
                <button type={"button"} className="btn btn-success" onClick={handleSave}>Save</button>
            </div>
            <div className="row g-3">
                {filterCourses.map((course) => (
                    <div key={course.id} className="col-12 col-md-6 col-lg-4">
                        <CourseCard
                            course={course}
                            courses={courses}
                            isCompleted = {completed.includes(course.id)}
                            isAvailable = {isAvailable(course,completed)}
                            handleComplete = {handleComplete}
                        />
                    </div>

                ))}
            </div>

        </>
    );
}

export default CourseList;
