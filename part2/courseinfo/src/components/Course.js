import React from 'react'

//Import child components
import Header from "./course_components/Header.js"
import Content from "./course_components/Content.js"
import TotalExercises from "./course_components/TotalExercises.js"

const Course = ({ course }) => {
    return (
        <div>
            <Header headerTitle={course.name} />
            <Content parts={course.parts} />
            <TotalExercises parts={course.parts} />
        </div>
    )
}

export default Course;