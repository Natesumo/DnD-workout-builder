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

const initialData = {
    tasks: {
        'task-1':
        {
        name: "basketball",
        id: "task-1",
        image: basketball
        },
        'task-2':
        {
        name: "benchpress",
        id: "task-2",
        image: benchpress
        },
        'task-3':
        {
        name: "bike",
        id: "task-3",
        image: bike
        },
        'task-4':
        {
        name: "boxing",
        id: "task-4",
        image: boxing
        },
        'task-5':
        {
        name: "dumbbells",
        id: "task-5",
        image: dumbbells
        },
        'task-6':
        {
        name: "exercisebike",
        id: "task-6",
        image: exercisebike
        },
        'task-7':
        {
        name: "kettlebell",
        id: "task-7",
        image: kettlebell
        },
        'task-8':
        {
        name: "pilates",
        id: "task-8",
        image: pilates
        },
        'task-9':
        {
        name: "pullups",
        id: "task-9",
        image: pullups
        },
        'task-10':
        {
        name: "pushups",
        id: "task-10",
        image: pushups
        },
        'task-11':
        {
        name: "running",
        id: "task-11",
        image: running
        },
        'task-12':
        {
        name: "tennis",
        id: "task-12",
        image: tennis
        },
        'task-13':
        {
        name: "treadmill",
        id: "task-13",
        image: treadmill
        },
        'task-14':
        {
        name: "yoga",
        id: "task-14",
        image: yoga
        },   
    },
    columns: {
        'column-1':
        {
            title: "Exercise List",
            id: "column-1",
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7', 'task-8', 'task-9', 'task-10', 'task-11', 'task-12', 'task-13', 'task-14' ],
        },
        'column-2':
        {
            title: "My Workout",
            id: "column-2",
            taskIds: [],
        },
    },
    columnOrder: ['column-2', 'column-1'],
};

export default initialData;