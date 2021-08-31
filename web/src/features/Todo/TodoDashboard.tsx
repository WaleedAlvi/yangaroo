import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { ITodo } from '../../app/models/todo';
import { TodoList } from './TodoList';
import { TodoNewTask } from './TodoNewTask';
import agent from '../../app/api/agent';

export const TodoDashboard = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean>(true);

  useEffect(() => {
    if (isSent) {
      agent.LstOfTodos().then((response) => {
        setTodos(response);
        setSessionStorage(response);
        setIsSent(false);
      });
    }
  }, [isSent]);

  const handleTextFieldChange = (e: any) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    agent.AddTodoItem(newTodo).then(() => {
      setNewTodo('');
      setIsSent(true);
    });
  };

  const setSessionStorage = (todos: ITodo[]) => {
    todos.map((todo: ITodo) => {
      if (window.sessionStorage.getItem(todo.todoID) === null) {
        window.sessionStorage.setItem(todo.todoID, todo.todoName);
      }
    });
  };

  return (
    <Box className="todoDashboard">
      <h1>To do:</h1>
      <TodoList lstOfTodos={todos} />
      <Divider />
      <TodoNewTask
        handleTextFieldChange={handleTextFieldChange}
        handleSubmit={handleSubmit}
        newTodo={newTodo}
      />
    </Box>
  );
};
