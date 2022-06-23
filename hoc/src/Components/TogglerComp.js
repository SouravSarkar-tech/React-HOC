import React from 'react';
import './TogglerComp.css'
import withToggler from './withToggler';

class TogglerComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hey! Change this text 😉',
      prevTitle: 'Hey! Change this text '
    };
  }

  changeHandler = e => {
    this.setState({
      title: e.target.value
    });
  };

  saveTitle = e => {
    this.setState({
      prevTitle: this.state.title
    });
  };

  render() {
    return (
      <div className='main'>
        <h1>Change The Input(HOC)</h1>
        {this.props.toggleStatus ? (
          <>
          <label>Enter Something In The Text Box Below: </label> <br/><br/>
          <input
            type="text"
            onChange={this.changeHandler}
            value={this.state.title}
          /> </>
        ) : (
          <p> {this.state.title} </p>
        )}
        <br/>
        <button
          onClick={() => {
            this.props.toggle();
            this.saveTitle();
          }}
        >
          {this.props.toggleStatus
            ? this.state.title === this.state.prevTitle
              ? 'Leave It!'
              : 'Save It!'
            : 'Edit the Input'}
        </button>
         <br/>
        <h4> See The Result Here: <span>{this.state.prevTitle}</span></h4>
      </div>
    );
  }
}

export default withToggler(TogglerComp);
