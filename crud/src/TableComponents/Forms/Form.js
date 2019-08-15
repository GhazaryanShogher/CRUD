import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Close from '../Close/Close';
import './Form.css';
import Div from '../../Div/Div';

class Form extends Component {

// Registration popup
  render() {
    return (
      <div style = {{display:this.props.display}}>
        <div className="form" >
            <h2>{this.props.title}</h2>
            <Close callback = {this.props.close} />
            <div className="inp_edit">
              <Input id="full" type="text"  classLabel="label" text="Full Name" placeholder="Full Name" callback = {this.props.callback} val = {this.props.name}/>          
              <Input id="company" type="text"  classLabel="label" text="Company Name"  placeholder="Company Name" callback = {this.props.callback} val = {this.props.company}/>
              <Input id="emailaddress" type="text"  classLabel="label" text="Email" placeholder="Email" callback = {this.props.callback} val = {this.props.emailaddress}/>
              <Input id="country" type="test"  classLabel="label"  text="Country" placeholder="Country" callback = {this.props.callback} val = {this.props.country}/>
              <Input id="position" type="text"  classLabel="label" text="Position" placeholder="Position" callback = {this.props.callback} val = {this.props.position}/>
            </div>
            <Button className= {"CB1 popupBtn"} name = "Save"/>
            <Button className= {"CB1 popupBtn"} name = "Cencel"/>
            
        </div> 
      </div>
    );
  }
}

export default Form;
