import React from 'react'; 
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    display: flex;
    color: black;
    justify-content: space-between;
    align-items: center;
    background-color: #181A1B;
    border: 4px solid black;
    border-radius: 6px;
    padding: 8px;
    margin-bottom: 8px;
    transition: background-color 0.8s ease;
    background-color: ${props => (props.isDragging ? '#5653A6' : '#F2F2F2')};
    @media only screen and (max-width: 600px) {
        img {
            display: none;
        }
        justify-content: center;
    }
    h2 {
        font-size: 36px;
        display: flex;
        justify-content: center;
        padding-left: 22px;
        padding-right 22px;
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