import React from 'react';
import ContactList from './ContactList';
import './App.css';

class App extends React.Component{
  state={value:""}
  handleChange=(e)=>{
    this.setState({value:e.target.value}, ()=>console.log(this.state.value))
  }
  render(){
    const contacts=[
    {
      id:1,
      "name":"Debasish",
      "phone":123456,
    },
    {
      id:2,
      "name":"Anshuman",
      "phone":4444444,
    },
    {
      id:3,
      "name":"Kajol",
      "phone":555555,
    },
    {
      id:4,
      "name":"Pihu",
      "phone":333333,
    },
    {
      id:5,
      "name":"Rishav",
      "phone":6666666,
    },
    {
      id:6,
      "name":"Sourav",
      "phone":89898989,
    },
    {
      id:7,
      "name":"Shruti",
      "phone":67676767,
    },
    {
      id:7,
      "name":"Abhijeet",
      "phone":78787878,
    },
    ];
    let filteredContacts=contacts.filter(contact=>(contact.name.toLowerCase().indexOf(this.state.value.toLowerCase())!==-1))
    return(
      <div className="App">
      <h3><i class="fa fa-address-book">Search for Contacts...</i></h3>
      <input type="text" placeholder="Search..." value={this.state.value} onChange={this.handleChange}/>
      {filteredContacts.map(contact=>(
        <ContactList key={contact.id} name={contact.name} phone={contact.phone}/>

        ))}

      </div>
      )
  }
}

export default App;
