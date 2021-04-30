import React from 'react';

const Part = ({ partName, partExercise }) => {
    return (
        <li>
            {partName} - {partExercise} points
        </li>
    )
}

export default Part