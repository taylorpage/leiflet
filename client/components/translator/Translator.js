import React from 'react';

export default class Translator extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="col-xs-12">
          <input className="block-center text-inputs" type="text"></input>
          <select>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
        <div className="col-xs-12">
          <input className="text-center text-inputs" type="text"></input>
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