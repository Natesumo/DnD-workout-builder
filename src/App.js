import React from 'react';
import StartingData from './components/StartingData';
import Column from './components/MyWorkout';

class App extends React.Component {
  state = StartingData;

  render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks} />;
    });
  }
}

export default App;
