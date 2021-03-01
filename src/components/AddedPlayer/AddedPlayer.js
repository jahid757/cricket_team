import React from 'react';
import AddedPlayerName from '../AddedPlayerName/AddedPlayerName';

const AddedPlayer = (props) => {
    const addedPlayer = props.player;
    const totalSalary = addedPlayer.reduce((sum, player) => sum+player.salary,0 )
    return (
        <div>
            {
                addedPlayer.map(player => <AddedPlayerName name ={player.name} key={player.id}></AddedPlayerName>)
            }
            <h4>Total Salary: {totalSalary} ৳</h4>
        </div>
    );
};

export default AddedPlayer;