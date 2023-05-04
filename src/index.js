// import _ from 'lodash';
import './style.css';
import populate from './modules/populate.js';

const tasks = [
  {
    description: 'emmmmmm',
    index: 7,
    completed: false,
  },
  {
    description: 'hahahahahaha',
    index: 3,
    completed: false,
  },
  {
    description: 'bvbvbvbvb',
    index: 1,
    completed: false,
  },
];

populate(tasks);
