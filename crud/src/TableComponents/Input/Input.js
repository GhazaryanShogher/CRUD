import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    

    callback = () => this.props.callback;

  render() {
    return (
          <div className="w3-rest">
              <label className={this.props.classLabel} >{this.props.text}</label>
              <input maxLength="20" min={this.props.min} value = {this.props.val} id={this.props.id} display = {this.props.display} className={this.props.class} type={this.props.type} placeholder={this.props.placeholder} required onChange = {this.props.callback} name={this.props.name}/>
          </div>
    );
  }
}

export default Input;
