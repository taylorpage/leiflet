import React from 'react';
import axios from 'axios';
import languages from '../../languages/languages.js';
import Conversation from '../conversation/Conversation';

export default class Translator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      languages: languages,
      clientPhrase: '',
      clientLang: '',
      userPhrase: '',
      userLang: '',
      recording: false,
      dialogue: [ { pers: 'user', phrase: 'hello' },
                  { pers: 'client', phrase: 'how are you?'},
                  { pers: 'user', phrase: 'good and you?' },
                  { pers: 'client', phrase: 'quite well!' },
                  { pers: 'user', phrase: 'thats good to hear' },
                  { pers: 'user', phrase: 'Do you know how to find the bakery?' }
                ]
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
    const context = this;
    axios.post('/translate/client', { phrase: this.state.clientPhrase,
                                      from: this.state.clientLang,
                                      to: this.state.userLang })
    .then(function(data) {
      context.setState({
        dialogue: context.state.dialogue.concat({ pers: 'client', phrase: data })
      })
    })
  }

  translateUserPhrase() {
    const context = this;
    axios.post('/translate/user', { phrase: this.state.userPhrase,
                                    from: this.state.userLang,
                                    to: this.state.clientLang })
    .then(function(data) {
      context.setState({
        dialogue: context.state.dialogue.concat({ pers: 'user', phrase: data })
      })
    })
  }

  record(id) {
    if (this.state.recording) {
      document.getElementById(id).src = '../../styles/mic.png';
    } else {
      document.getElementById(id).src = '../../styles/mic-red.png';
    }
    this.setState({
      recording: !this.state.recording
    });
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12 text-field">
          <h3>Friend</h3>
          <select id="client-lang"
                  className="dropdown"
                  onChange={ this.handleClientChange.bind(this) }>
            {
              this.state.languages.map(lang => {
                return (
                  <option value= { lang.code }>{ lang.lang }</option>
                )
              })
            }
          </select>
          <input className="text-inputs"
                 type="text"
                 id="client-text"
                 onChange={ this.handleClientChange.bind(this) }>
          </input>
          <button className="translate"
                  onClick={ this.translateClientPhrase.bind(this) }>Translate</button>
        </div>
        <div className="col-xs-12">
          <button className="btn btn-default mic-button"
                  onClick={ this.record.bind(this, 'client-mic') }>
            <img className="mic"
                 id="client-mic"
                 src="../../styles/mic.png"></img>
          </button>
        </div>

        <div className="col-xs-12 text-field">
          <h3>You</h3>
          <select id="user-lang"
                  className="dropdown"
                  onChange={ this.handleUserChange.bind(this) }>
            {
              this.state.languages.map(lang => {
                return (
                  <option value= { lang.code }>{ lang.lang }</option>
                )
              })
            }
          </select>
          <input className="text-inputs"
                 type="text"
                 id="user-text"
                 onChange={ this.handleUserChange.bind(this) }>
          </input>
          <button className="translate"
                  onClick={ this.translateUserPhrase.bind(this) }>Translate</button>
        </div>
        <div className="col-xs-12">
          <button className="btn btn-default mic-button"
                  onClick={ this.record.bind(this, 'user-mic') }>
            <img className="mic"
                 id="user-mic"
                 src="../../styles/mic.png"></img>
          </button>
        </div>
        <Conversation dialogue={ this.state.dialogue } />
      </div>
    )
  }
}
