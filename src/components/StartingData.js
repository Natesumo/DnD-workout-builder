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
import basketball from '../img/basketball.png';

const startingData = {
    tasks: {
        'task-1':
        {
        name: "basketball",
        taskId: "1",
        image: basketball
        },
        'task-2':
        {
        name: "benchpress",
        taskId: "2",
        image: benchpress
        },
        'task-3':
        {
        name: "bike",
        taskId: "3",
        image: bike
        },
        'task-4':
        {
        name: "boxing",
        taskId: "4",
        image: boxing
        },
        'task-5':
        {
        name: "dumbbells",
        taskId: "5",
        image: dumbbells
        },
        'task-6':
        {
        name: "exercisebike",
        taskId: "6",
        image: exercisebike
        },
        'task-7':
        {
        name: "kettlebell",
        taskId: "7",
        image: kettlebell
        },
        'task-8':
        {
        name: "pilates",
        taskId: "8",
        image: pilates
        },
        'task-9':
        {
        name: "pullups",
        taskId: "9",
        image: pullups
        },
        'task-10':
        {
        name: "pushups",
        taskId: "10",
        image: pushups
        },
        'task-11':
        {
        name: "running",
        taskId: "11",
        image: running
        },
        'task-12':
        {
        name: "tennis",
        taskId: "12",
        image: tennis
        },
        'task-13':
        {
        name: "treadmill",
        taskId: "13",
        image: treadmill
        },
        'task-14':
        {
        name: "yoga",
        taskId: "14",
        image: yoga
        },   
    },
    columns: {
        'column-1':
        {
            title: "My Workout",
            id: "column-1",
            taskIds: []
        },
        'column-2':
        {
            title: "Exercise List",
            id: "column-2",
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7', 'task-8', 'task-9', 'task-10', 'task-11', 'task-12', 'task-13', 'task-14' ]
        },
    },
    columnOrder: ['column-1', 'column-2'],
};

export default startingData;