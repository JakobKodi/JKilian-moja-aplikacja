import './App.css';
import Header from "./components/Header.js";
import CarList from "./components/CarList.js";
import UserList from "./components/UserList.js";
import React from "react";
class App extends React.Component{
save = function(){
  localStorage.setItem("users", JSON.stringify(this.state.users));
  localStorage.setItem("cars", JSON.stringify(this.state.cars));
};
constructor(){
  super();
  var users = localStorage.getItem("users");
  var cars = localStorage.getItem("cars");
  if (users == null){
    users = [
      {
          checked:false,
          name:"TEST1",
          surname:"TEST1",
          email:"TEST1",
          phone:"TEST1",
          document:"TEST1",
      }];
  }
  else{
    users = JSON.parse(users);
  }
  if (cars == null){
    cars = [
      {
          checked:false,
          name:"TEST1",
          brand:"TEST1",
          color:"TEST1",
          year:"TEST1",
          registration:"TEST1",
          user:""
      }];
  }
  else{
    cars = JSON.parse(cars);
  }
  this.state ={
      users: users, cars: cars
  };
  var self = this;

  window.checkedcar = function(item, checked){
    self.state.cars.forEach(element => {
      if (element.registration == item.registration){
        element.checked = checked;
      }
    });
    self.setState(self.state);
    console.log (self.state.cars);
  }

  window.deletecars = function(){
    self.state.cars = self.state.cars.filter(element => {
      return (element.checked != true);
    });
    self.setState(self.state);
    console.log (self.state.cars);
    self.save();
  }

  window.setUser = function(car, user){
    self.state.cars.forEach(c =>{
      if(c.registration == car.registration){
        c.user = user;
      }
    });
    self.setState(self.state);
    self.save();
  }

  window.addcar = function(car){
    self.state.cars.push(car);
    self.setState(self.state);
    console.log (self.state.cars);
    self.save();
  }

  window.checked = function(item, checked){
    self.state.users.forEach(element => {
      if (element.email == item.email){
        element.checked = checked;
      }
    });
    self.setState(self.state);
    console.log (self.state.users);
  }

  window.deleteusers = function(){
    self.state.users = self.state.users.filter(element => {
      return (element.checked != true);
    });
    self.setState(self.state);
    console.log (self.state.users);
    self.save();
  }

  window.adduser = function(user){
    self.state.users.push(user);
    self.setState(self.state);
    console.log (self.state.users);
    self.save();
  }

}
  render(){
  return (
    <div>
    <Header/>
    <CarList cars={this.state.cars} users={this.state.users}/>
    <UserList users={this.state.users}/>
    </div>
  );
}
}

export default App;