import React from 'react';

export default class Translator extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userPhrase: '',
      clientPhrase: ''
    }
  }

  handleUserChange() {
    this.setState({
      userPhrase: document.getElementById('user').value
    });
    console.log(this.state);
  }

  handleClientChange() {
    this.setState({
      clientPhrase: document.getElementById('client').value
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className="col-xs-12">
          <input className="text-inputs" type="text" id="user" onChange={ this.handleUserChange.bind(this) }></input>
          <select>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
        <div className="col-xs-12">
          <input className="text-inputs" type="text" id="client" onChange={ this.handleClientChange.bind(this) }></input>
          <select>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
      </div>
    )
  }
}