import React from 'react';

//Import child components
import Part from "./content_components/Part.js"

const Content = ({ parts }) => {
    return (
        <ul>
            {parts.map(part => (
                <li key={part.id}>
                    <Part partName={part.name} partExercise={part.exercises} />
                </li>
            ))}
        </ul>
    )
}


export default Content