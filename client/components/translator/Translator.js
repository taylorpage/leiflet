import React from 'react';
import axios from 'axios';
import languages from '../../languages/languages.js';

export default class Translator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      languages: languages,
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
    axios.post('/translate/client', { phrase: this.state.clientPhrase, from: this.state.clientLang, to: this.state.userLang })
    .then(function(data) {
      console.log(data);
    })
  }

  translateUserPhrase() {
    axios.post('/translate/user', { phrase: this.state.userPhrase, from: this.state.userLang, to: this.state.clientLang })
    .then(function(data) {
      console.log(data);
    })
  }

  render() {
    return (
      <div>
        <div className="col-xs-12">
          <input className="text-inputs" type="text" id="client-text" onChange={ this.handleClientChange.bind(this) }></input>
          <select id="client-lang" onChange={ this.handleClientChange.bind(this) }>
            {
              this.state.languages.map(lang => {
                return (
                  <option value= { lang.code }>{ lang.lang }</option>
                )
              })
            }
          </select>
          <button onClick={ this.translateClientPhrase.bind(this) }>TRANSLATE</button>
        </div>
        <div className="col-xs-12">
          <input className="text-inputs" type="text" id="user-text" onChange={ this.handleUserChange.bind(this) }></input>
          <select id="user-lang" onChange={ this.handleUserChange.bind(this) }>
            {
              this.state.languages.map(lang => {
                return (
                  <option value= { lang.code }>{ lang.lang }</option>
                )
              })
            }
          </select>
          <button onClick={ this.translateUserPhrase.bind(this) }>TRANSLATE</button>
        </div>
      </div>
    )
  }
}
