import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

interface IProps {
  handleTextFieldChange: any;
  handleSubmit: any;
  newTodo: string;
}

export const TodoNewTask: React.FC<IProps> = ({
  handleTextFieldChange,
  handleSubmit,
  newTodo,
}) => {
  return (
    <div className="newTodo">
      <TextField
        className="txtNewTodo"
        label="What do you need to do?"
        variant="outlined"
        onChange={handleTextFieldChange}
        value={newTodo}
      />
      <div className="btnNewTodo">
        <Button
          startIcon={<SaveIcon />}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Save Item
        </Button>
      </div>
    </div>
  );
};
