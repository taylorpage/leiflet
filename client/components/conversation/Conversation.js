import React from 'react';

export default class Conversation extends React.Component {
  click() {
    console.log(this.props.dialogue);
  }
  render() {
    return (
      <div className=" col-xs-12 conversation">
        {
          this.props.dialogue.map(phrase => {
            return( <h4 className={ phrase.pers }> { phrase.phrase } </h4> )
          })
        }
      </div>
    )
  }
}

//return( <h4> { phrase.phrase.data[0] } </h4> )