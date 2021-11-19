import { AddTodo } from '../components/helper';

test('Should add todo to the list', () => {
  // Arrange
  const defaultTodo = [{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  },
  {
    id: 2,
    name: 'Build awasome react app',
    isComplete: false,
  },
  {
    id: 3,
    name: 'Ship it',
    isComplete: false,
  }
];

const newTodoList = {
  id: 3,
  name: "New Todo List",
  isComplete: false,
};
const expectedResult = [newTodoList, ...defaultTodo]
const expectedTrue = JSON.stringify(expectedResult)

// Act
const todoListData = AddTodo(defaultTodo, newTodoList);
const result = JSON.stringify(todoListData)

// Assert
expect(result).toBe(expectedTrue);
})

test('should not mutate the existing todo array', () => {
  // Arrange
  const todoList = [{
    id: 1,
    name: "Learn JSX",
    isComplete: false,
  },
  {
    id: 2,
    name: "Build awasome react app",
    isComplete: false,
  },
];

const newTodo = {
  id: 3,
  name: "New Todo List",
  isComplete: false,
};

const expectedResult = [{
    id: 1,
    name: "Learn JSX",
    isComplete: false,
  },
  {
    id: 2,
    name: "Build awasome react app",
    isComplete: false,
  },
];

// Act
AddTodo(todoList, newTodo);
const compareTodoList = JSON.stringify(expectedResult) === JSON.stringify(todoList);

// // Assert
expect(true).toBe(compareTodoList);
})