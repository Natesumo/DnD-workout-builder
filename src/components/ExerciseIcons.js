import React from 'react';
import basketball from '../img/basketball.png';
import benchpress from '../img/benchpress.png';
import bike from '../img/bike.png';
import boxing from '../img/boxing.png';
import dumbbells from '../img/dumbbells.png';
import exercisebike from '../img/exercisebike.png';
import kettlebell from '../img/kettlebell.png';
import pilates from '../img/pilates.png';
import pullups from '../img/pullups.png';
import pushups from '../img/pushups.png';
import running from '../img/running.png';
import tennis from '../img/tennis.png';
import treadmill from '../img/treadmill.png';
import yoga from '../img/yoga.png';

function ExerciseIcons() {
    return (
        [
            {
            name: "basketball",
            id: "1",
            image: basketball
            },
            {
            name: "benchpress",
            id: "2",
            image: benchpress
            },
            {
            name: "bike",
            id: "3",
            image: bike
            },
            {
            name: "boxing",
            id: "4",
            image: boxing
            },
            {
            name: "dumbbells",
            id: "5",
            image: dumbbells
            },
            {
            name: "exercisebike",
            id: "6",
            image: exercisebike
            },
            {
            name: "kettlebell",
            id: "7",
            image: kettlebell
            },
            {
            name: "pilates",
            id: "8",
            image: pilates
            },
            {
            name: "pullups",
            id: "9",
            image: pullups
            },
            {
            name: "pushups",
            id: "10",
            image: pushups
            },
            {
            name: "running",
            id: "11",
            image: running
            },
            {
            name: "tennis",
            id: "12",
            image: tennis
            },
            {
            name: "treadmill",
            id: "13",
            image: treadmill
            },
            {
            name: "yoga",
            id: "14",
            image: yoga
            }
        ].map(item => (   
                <li key={item.id}>
                    <img src={item.image} alt={item.name} />
                </li>
        )
    ))
}

export default ExerciseIcons;