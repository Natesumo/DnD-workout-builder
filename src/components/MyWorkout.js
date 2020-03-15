import React from 'react';

export default class MyWorkout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            list: []
        }
    }

    changeUserInput(input) {
        this.setState({
            userInput: input
        }, ()=> console.log(input))
    }

    addToList(input){
        let listArray = this.state.list;
        listArray.push(input);
        this.setState({
            list: listArray,
            userInput: ''
        })
    }

    render() {
        return (
            <div className="workout-list">
                <input 
                    onChange={ (e)=>this.changeUserInput(e.target.value) }
                    value={this.state.userInput} 
                    type="text" 
                />
                <button onClick={ ()=> this.addToList(this.state.userInput)}>
                        Add Workout
                </button>
                <ul>
                    {this.state.list.map( (val)=> <li key={val}>{val}</li> )}
                </ul>
            </div>
        )
    }
};
