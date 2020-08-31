import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            toDos: [],
            editing: false,
        };
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const toDos = this.state.toDos.slice();
        const addition = this.state.value;
        this.setState({toDos: toDos.concat(addition)})
        this.setState({value: ''})
    }

    handleEdit() {
        this.setState({editing: true})
    }

    handleSave() {
        this.setState({editing: false})
    }

    handleDelete() {
    }

    renderNormal() {
        return (
            <div>
                <div>{this.props.children}</div>
                <button onClick={() => this.handleEdit()}>Edit</button>
                <button onClick={() => this.handleDelete()}>Delete</button>    
            </div>
        );
    }

    renderEditing () {
        return (
            <div>
                <textarea defaultValue={this.props.children}></textarea>
                <button onClick={() => this.handleSave()}>Save</button>
            </div>
        );
    }
    
    render() {
        if (this.state.editing) {
                return this.renderEditing();
            }
            else {
                return this.renderNormal();
            }
    }
}

ReactDOM.render(
    <div>
        <h1>
            To-do List:
        </h1>
        <List>to-do 1</List>
        <List>to-do 2</List>
        <List>to-do 3</List>
    </div>,
    document.getElementById('root')
);