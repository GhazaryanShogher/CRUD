import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Close from '../Close/Close';
import './Form.css';

class Form extends Component {

// Registration popup
  render() {
    return (
      <div style = {{display:this.props.display}}>
        <div className="form" >
            <h2>{this.props.title}</h2>
            <Close callback = {this.props.close} />
            <div className="inp_edit">
              <Input id="name" type="text"  classLabel="label" text="Name" placeholder="Name" callback = {this.props.callback} val = {this.props.name}/>          
              <Input id="surname" type="text"  classLabel="label" text="Surname"  placeholder="Surname" callback = {this.props.callback} val = {this.props.surname}/>
              <Input id="age" type="number" min="1" classLabel="label" text="Age" placeholder="Age" callback = {this.props.callback} val = {this.props.age}/>
              <Input id="email" type="email"  classLabel="label"  text="Email" placeholder="Email" callback = {this.props.callback} val = {this.props.email}/>
              <Input id="password" type="password"  classLabel="label" text="Password" placeholder="Password" callback = {this.props.callback} val = {this.props.password}/>
              <Input id="male" type="radio" text="Male" name="gender" classLabel="label" checked callback = {this.props.callback} val ="0"/>
              <Input id="female" type="radio" text="Female" name="gender" classLabel="label" checked callback = {this.props.callback} val = "1"/>
            </div>
            <div style = {{display:this.props.warrning}} className="warning"><b>Please complete all required fields!</b></div>
            <div style = {{display:this.props.warrningEmail}} className="warning"><b>Please enter correct email!</b></div>
            <Button className= {"CB1 popupBtn"} name = "Save" click={this.props.save}/>
            <Button className= {"CB1 popupBtn"} name = "Cencel" click ={this.props.close} />
            
        </div> 
      </div>
    );
  }
}

export default Form;
