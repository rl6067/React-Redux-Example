import React, { Component } from 'react';

export class List extends Component {

    constructor(props) {
        super(props);
        this.state = { list: [], nextId: 0 };
        this.addItem = this.addItem.bind(this);
    }

    addItem() {
        const item = document.getElementById('listInput').value;
        const newArray = this.state.list;
        const newId = this.state.nextId + 1;

        newArray.push({'value' : item, 'id' : newId});
        document.getElementById('listInput').value = "";
        this.setState({
            list: newArray,
            nextId: newId
        });

    }

    render() {
        return (
            <div>
                <h1>List</h1>

                <p>This is another simple example of a React component.</p>
                <input type="text" id="listInput" />
                <button onClick={this.addItem}>Add item</button>
                <ul>
                    {this.state.list.map((item) => <li key={item.id}>{item.value}</li>)}
                </ul>
            </div>
        );
    }
}
