import React from 'react';

const Part = ({ partName, partExercise }) => {
    return (
        <p>
            {partName} - {partExercise} points
        </p>
    )
}

export default Part