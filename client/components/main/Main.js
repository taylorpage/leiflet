import React from 'react';
import Translator from '../translator/Translator';

export default class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="col-xs-12 title">Leiflet</h1>
        <Translator />
      </div>
    )
  }
}