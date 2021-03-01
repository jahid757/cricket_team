import React from 'react';
import './Players.css'

const Players = (props) => {
    const {name,img,age,salary} = props.player
    return (
        <div className="player">
            <div className="player-img">
                <img src={img} alt=""/>
            </div>
            <div className="player-detail">
                <h2>{name}</h2>
                <h3>Age: {age}</h3>
                <h5><small>Salary: {salary} ৳</small></h5>
                <button className="add-btn" onClick={() => props.addPlayerHandel(props.player)}>Add Player</button>
            </div>
        </div>
    );
};

export default Players;