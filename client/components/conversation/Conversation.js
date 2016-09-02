import React from 'react';

export default class Conversation extends React.Component {
  click() {
    console.log(this.props.dialogue);
  }
  render() {
    return (
      <div>
        {
          this.props.dialogue.map(phrase => {
            return( <h4> { phrase.phrase.data[0] } </h4> )
          })
        }
      </div>
    )
  }
}
