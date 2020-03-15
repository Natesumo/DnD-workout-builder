import React from 'react';
import ExerciseIcons from './ExerciseIcons';


class Exercises extends React.Component {

    render() {
        
        return(
         <div className="Exercise-list">
            <ExerciseIcons />
                <ul>
                    {ExerciseIcons().name.map(item => (
                        <h1>{console.log(item)}</h1>
                    )
                    )};
                </ul>
            </div>
        )
}
}

export default Exercises;
