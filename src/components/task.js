import React from 'react'; 
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    background-color: #181A1B;
    border: 3px solid #038EAC;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDragging ? 'Darkgreen' : '#181A1B')};
    @media only screen and (max-width: 600px) {
        img {
            display: none;
        }
        justify-content: center;
    }
    h2 {
        display: flex;
        justify-content: center;
    }
`;

export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    
                >
                <h2> {this.props.task.name} </h2>
                    <img src={this.props.task.image} alt={this.props.task.name} /> 
                </Container>
            )}
            </Draggable>
        );
    }
}