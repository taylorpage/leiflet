import React from 'react';
import axios from 'axios';
import languages from '../../languages/languages.js';

export default class Translator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clientPhrase: '',
      clientLang: '',
      userPhrase: '',
      userLang: ''
    }
  }

  handleClientChange() {
    this.setState({
      clientPhrase: document.getElementById('client-text').value,
      clientLang: document.getElementById('client-lang').value
    });
  }

  handleUserChange() {
    this.setState({
      userPhrase: document.getElementById('user-text').value,
      usertLang: document.getElementById('user-lang').value
    });
  }

  translateClientPhrase() {
    // axios.post('/translate/client', { phrase: this.state.clientPhrase, lang: this.state.clientLang })
    // .then(function(data) {
    //   console.log(data);
    // })
    console.log(languages);
  }

  translateUserPhrase() {
    axios.post('/translate/user', { phrase: this.state.userPhrase, lang: this.state.userLang })
    .then(function(data) {
      console.log(data);
    })
  }

  render() {
    return (
      <div>
        <div className="col-xs-12">
          <input className="text-inputs" type="text" id="client-text" onChange={ this.handleClientChange.bind(this) }></input>
          <select id="client-lang">
            <option value="ru">Russian</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
          <button onClick={ this.translateClientPhrase.bind(this) }>TRANSLATE</button>
        </div>
        <div className="col-xs-12">
          <input className="text-inputs" type="text" id="user" onChange={ this.handleUserChange.bind(this) }></input>
          <select>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
          <button onClick={ this.translateUserPhrase.bind(this) }>TRANSLATE</button>
        </div>
      </div>
    )
  }
}