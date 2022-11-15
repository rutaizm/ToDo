import React from 'react';
import { Button, FormControl, InputGroup } from "react-bootstrap";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";

function AddNewTask() {
    const [taskTitle, setTaskTitle] = React.useState('');
    const dispatch = useDispatch();

    function handleTaskTitleChange(e) {
        setTaskTitle(e.target.value);
    }

    function handleTaskSubmit () {
        dispatch(actions.addTask({
          title: taskTitle
        }));
        setTaskTitle('');
    }

    return (
      <InputGroup className="mb-3">
        <FormControl 
          placeholder="Добавить новую задачу" 
          value={taskTitle} 
          onChange={handleTaskTitleChange} />
          <Button 
            variant="outline-secondary" 
            onClick={handleTaskSubmit}>Сохранить</Button>
      </InputGroup>
    )
  }
  
  export default AddNewTask;