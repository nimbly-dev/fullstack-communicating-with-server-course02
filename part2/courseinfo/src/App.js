import React from 'react'

//Import child components
import Course from "./components/Course.js"

// const Total = (props) => {
//   return (
//     <p>
//       <hr />
//       Number of exercise = {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
//     </p>
//   )
// }

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <main>
      <Course course={course} />
    </main>
  )
}

export default App;
