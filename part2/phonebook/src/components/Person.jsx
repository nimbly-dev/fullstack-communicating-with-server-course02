import React from 'react';

const Person = ({ id, name }) => {
    return (
        <p key={id}>
            {name}
        </p>
    )
}

export default Person