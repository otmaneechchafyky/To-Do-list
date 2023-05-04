// import _ from 'lodash';
import './style.css';
import populate from './modules/populate.js';

const tasks = [
  {
    description: 'Go to work',
    completed: false,
    index: 0,
  },
  {
    description: 'sleep',
    completed: true,
    index: 7,
  },
  {
    description: 'cool',
    completed: true,
    index: 2,
  },
  {
    description: 'need allah',
    completed: true,
    index: 55,
  },
];

populate(tasks);