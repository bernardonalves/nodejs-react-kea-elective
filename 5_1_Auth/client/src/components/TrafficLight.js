import React, { useState } from 'react';

export default function TrafficLight({ myData }) {
    const [trafficLight, changeTrafficLight] = useState("RED");

    function changeTheTrafficLight() {
        trafficLight === "RED" ? changeTrafficLight("GREEN") : changeTrafficLight("RED");
    }

    return (
        <div>
            <h1>{trafficLight}</h1>
            <button onClick={changeTheTrafficLight}>Change the traffic light</button>
        </div>
    );
}
