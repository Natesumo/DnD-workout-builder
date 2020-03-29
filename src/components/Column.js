import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
    margin: 8px; 
    border: 4px solid black;
    border-radius: 6px;
    width: 100%;
    margin-top: 24px;

    display: flex;
    flex-direction: column;
`;
const Title = styled.div`
    padding: 22px;
    font-size: 32px;
    color: #F2F2F2;
    background-color: #181A1B;
    display: flex;
    justify-content: center;
    
`;
const TaskList = styled.div`
    padding: 8px;
    flex-grow: 1;
    transition: background-color 0.8s ease;
    background-color: ${props => (props.isDraggingOver ? '#82BF45' : '#181A1B')}
`;


export default class Column extends React.Component {
    render() {
        return(
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                    <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    >
                        {this.props.tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </TaskList>
                    )}
                </Droppable>
            </Container>
        );
    }
}