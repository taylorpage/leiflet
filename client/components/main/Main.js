import React from 'react';
import Translator from '../translator/Translator';

export default class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        Test
        <Translator />
      </div>
    )
  }
}