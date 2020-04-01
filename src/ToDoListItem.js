import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  handleDeleteItem = () => {
    this.props.onToDoDelete();
  };
  render() {
    if (this.props.list) {
	    return this.props.list.map((item, index) => (
	    <div className="ToDoListItem" onClick={() =>{this.props.deleteHandler(index)}}>
	      <div className="ToDoListItem-title">{item.title}</div>
	      <div className="ToDoListItem-description">{item.description}</div>
	    </div>
	  );
	  }
	}
}

export default ToDoListItem;
