import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../Store/List';

const List = props => (
   
  <div>
    <h1>List</h1>

    <p>This is another simple example of a React component.</p>
    <input type="text" id="listInput" />
    <button onClick={props.addItem}>Add item</button>
    <ul>
        {props.list.map((item) => <li key={item.id}>{item.value}</li> )}
    </ul>
  </div>
);

export default connect(
  state => state.list,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(List);
