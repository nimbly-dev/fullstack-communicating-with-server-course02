import React from 'react';

const Note = ({ key, note }) => {
    return (
        <li id={key}>
            {note}
        </li>
    )
}

export default Note