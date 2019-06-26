import React, { Component } from 'react'
import Characterlist from './Characterlist';
class Character extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Users:[]
         }
    }
    componentDidMount(){
        fetch('https://www.anapioficeandfire.com/api/characters?page=2&pageSize=50')
        .then(response=>response.json())
        .then(user=>this.setState({Users:user}))
          }
    render() { 
             const ch=this.state.Users;
        return (ch.map((c,i)=>{
            return <Characterlist key={ch[i].url} name={ch[i].name} id={ch[i].url} father={ch[i].father} mother={ch[i].mother} books={ch[i].books}/>
        })
          );
    }
}
 
export default Character;