import React, { Component, Fragment } from 'react';
import './tableContent.css';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Form from '../Forms/Form';

class TableContent extends Component{
  state = {
    display:"none",
    name:"",
    surname:"",
    age:"",
    email:"",
    password:"",
    male:"",
    female:"",
    users:[],
    warrning:"none",
    warrningEmail:"none"
  }
  
  save=()=>{
    
  }
  close = ()=>{
    this.setState ({
      update:0,
      display:"none",
      name: "",
      surname: "", 
      age: "",
      email: "",
      password: "",
      male: "",
      female: "",
      warrning:"none",
      warrningEmail:"none"
    })
  }


callback = (e) => {
  switch(e.target.id){
    case "name":
    this.setState({name:e.target.value})
    break;
    case "surname":
    this.setState({surname:e.target.value})
    break;
    case "age":
    this.setState({age:e.target.value})
    break;
    case "email":
    this.setState({email:e.target.value})
    break;
    case "password":
    this.setState({password:e.target.value})
    break;
    case "male":
    this.setState({male:e.target.value})
    break;
    case "female":
    this.setState({female:e.target.value})
    break;
    default: 
    break;
  }
}
addUser = ()=> {
  var user = {};
  let regEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (this.state.name === "" || this.state.surname === "" || this.state.age === "" || this.state.email === "" || this.state.password === "" ||(this.state.male ==="" && this.state.female ==="")) {
    this.setState({warrning: "block"})
  } 
  else if (regEmail.test(this.state.email) === false) {
     this.setState({warrningEmail: "block"})
  } else {
      user["name"]= this.state.name;
      user["surname"] = this.state.surname;
      user["age"] = this.state.age;
      user["email"] = this.state.email;
      user["password"] = this.state.password;
      user["male"] = this.state.male;
      user["female"] = this.state.female;
      let mail = '';
      mail += this.state.email;
      localStorage.setItem(mail,JSON.stringify(user));
      this.setState ({
          update:1,
          name: "",
          surname: "", 
          age: "",
          email: "",
          password: "",
          male: "",
          female: "",
          warrning:"none",
          warrningEmail:"none"
      })
}
  
}
show = ()=>{
  this.setState({
    display:"block"
   })
}

getUsers =()=>{
         let  keys = Object.keys(localStorage),
         values = [],
        i = keys.length;

   for(let j=0;j<i;j++) {
        values.push(JSON.parse(localStorage.getItem(keys[j])) );
    }
    this.setState({
      users: values
    })
}

componentDidMount(){
  this.getUsers()
  
}

componentDidUpdate(){
 if(this.state.update == 1){
  this.getUsers();
  this.setState({
    update: 0
  })
} 

}
delete=(e)=>{
  let mail = "";
  mail = e.target.id;
  localStorage.removeItem(mail);
  this.setState({
    update: 1
  })
}
edit = (e)=>{
  let editUser = JSON.parse(localStorage.getItem(e.target.id));
  this.setState({
    name:editUser.name,
    surname:editUser.surname,
    age:editUser.age,
    email:editUser.email,
    password:editUser.password,
    male:editUser.male,
    female:editUser.female,
    display:"block"
  })
}

   render() {
        return (
            <Fragment>
              <Form warrning = {this.state.warrning} warrningEmail = {this.state.warrningEmail} display={this.state.display} close={this.close} callback={this.callback} save={this.addUser} name={this.state.name} surname={this.state.surname} age={this.state.age} email={this.state.email} password={this.state.password} male={this.state.male} female={this.state.female}/>
             
          <div className="table_box">
              <div>
                <Button name="Create new user" className= {"CB1 popupBtn createUser"} click={this.show}/>
                <div className="table_header">
                    <div className="header_name">Name</div>
                    <div className="header_name">Surname</div>
                    <div className="header_name">Age</div>
                    <div className="header_name">Email</div>
                    <div className="header_name">Password</div>
                    <div className="header_name">Gender</div>
                    <div className="header_btn1 header_name">Edit</div>
                    <div className="header_btn1">Delete</div>
                </div>
              </div>
              </div>
              
            <div className="overflow_div">
            {this.state.users.map((v,i) =>
            
          <div className="tbl_content" key={v.email}>
            <div className="td_style" style={{contenteditable:this.state.editTd}}>{v["name"]}</div>
            <div className="td_style" style={{contenteditable:this.state.editTd}}>{v["surname"]}</div>
            <div className="td_style" style={{contenteditable:this.state.editTd}}>{v.age}</div>
            <div  className="td_style" style={{contenteditable:this.state.editTd}}>{v.email}</div>
            <div className="td_style" style={{contenteditable:this.state.editTd}}>{v.password}</div>
            <div className="td_style" style={{contenteditable:this.state.editTd}}>{v.male =="" ? "Male" : "Female"}</div>
            <div onClick = {this.edit} className="editbox" id = {v.email}><Icon id = {v.email} className="fa fa-pencil" aria-hidden="true"></Icon></div>
            <div onClick = {this.delete} className="editbox" id = {v.email}><Icon onClick = {this.delete} className="fa fa-trash" aria-hidden="true"></Icon></div>    
          </div>
      
        )
      }   
      </div> 
</Fragment>
        );
    }
}

export default TableContent;