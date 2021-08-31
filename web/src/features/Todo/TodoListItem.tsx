import React from 'react';
import { ITodo } from '../../app/models/todo';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

interface IProps {
  todo: ITodo;
  lastItem: boolean;
}

export const TodoListItem: React.FC<IProps> = ({ todo, lastItem }) => {
  return (
    <>
      <ListItem className="todoItem" key={todo.todoID}>
        <ListItemText>{todo.todoName}</ListItemText>
      </ListItem>
      {lastItem ? '' : <Divider />}
    </>
  );
};
