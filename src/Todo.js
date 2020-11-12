import React from 'react'
import './Todo.css'
import { ListItem, Avatar, ListItemText, ListItemSecondaryAction, IconButton, List, ListItemAvatar } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FolderIcon from '@material-ui/icons/Folder';


function Todo(props) {
    return (
        <List className = "todo__list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                      {/* <FolderIcon /> */}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Todos"/>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      {/* <DeleteIcon /> */}
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    )
}

export default Todo
