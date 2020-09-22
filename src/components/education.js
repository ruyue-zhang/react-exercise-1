import React, { Component } from 'react';
import "../styles/education.scss"

class Education extends Component {
  render() {
    return (
      <div className="education">
        <div className="year">
          <p>{this.props.year}</p>
        </div>
        <div className="content">
          <p className="title">{this.props.title}</p>
          <p className="value">{this.props.value}</p>
        </div>
      </div>
    );
  }
}

export default Education;