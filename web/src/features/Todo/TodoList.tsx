import React from 'react';
import { ITodo } from '../../app/models/todo';
import List from '@material-ui/core/List';
import { TodoListItem } from './TodoListItem';

interface IProps {
  lstOfTodos: ITodo[];
}

export const TodoList: React.FC<IProps> = ({ lstOfTodos }) => {
  return (
    <div className="todoListContainer">
      <List className="todoList">
        {lstOfTodos.map((todo: ITodo) => {
          const lastItem: boolean =
            lstOfTodos[lstOfTodos.length - 1].todoID === todo.todoID
              ? true
              : false;
          return (
            <TodoListItem todo={todo} lastItem={lastItem} key={todo.todoID} />
          );
        })}
      </List>
    </div>
  );
};
