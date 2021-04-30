import React from 'react';

const TotalExercises = ({ parts }) => {
    const totalExercisesCount = parts.reduce((total, part) => part.exercises + total, 0);
    console.log(parts)
    return (
        <div>
            <p>Total Exercises: {totalExercisesCount}</p>
        </div>
    )
}

export default TotalExercises