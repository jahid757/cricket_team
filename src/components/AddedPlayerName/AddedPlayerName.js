import React from 'react';

const AddedPlayerName = (props) => {
    const style = {
        margin:'0',
        padding:'0'
    }
    return (
        <div>
            <p style={style}>{props.name}</p>
        </div>
    );
};

export default AddedPlayerName;