import React, { Component } from 'react'
class CharacterProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            culture:'',
            born:'',
            died:'',
            titles:[],
            aliases:[],
            father:'',
            mother:'',
            books:[],
            }
    }
    componentWillMount(){
        localStorage.getItem('state')&&this.setState({
            state:JSON.parse(localStorage.getItem('state'))
        })
    }
    componentDidMount(){
        
        const characterId=this.props.location.state.characterId;
        const father=this.props.location.state.father;
        const mother=this.props.location.state.mother;
        const books=this.props.location.state.books; 
           fetch(characterId).then(res=>res.json()).then(character=>this.setState({
            name:character.name,
            culture:character.culture,
            born:character.born,
            died:character.died,
            titles:character.titles,
            aliases:character.aliases,
            }))
        fetch(father).then(res=>res.json()).then(user=>this.setState({
            father:user.name
        })).catch(err=>{console.log("invalid father character id")})
        fetch(mother).then(res=>res.json()).then(user=>this.setState({
            mother:user.name
        })).catch(err=>{console.log("invalid mother charcater id")})
        Promise.all(books.map(book=>fetch(book)
        .then(resp=>resp.json())))
        .then(texts=>{texts.map((text,i)=>this.setState(prevState=>({books:[...prevState.books,texts[i].name]})))})
        
          
    }
         componentWillUpdate(nextProps, nextState) {
             localStorage.setItem('state',JSON.stringify(this.state))
            localStorage.setItem('statedate',Date.now())
            }
           
    render() {
         
        const {name,culture,born,died,titles,aliases,father,mother,books}=this.state;
            return ( <div className='f3 garamond '>
            <p className='ba '><span className='b'>Name:</span> {name}</p>
            <p className='ba '><span className='b'>Culture:</span> {culture}</p>
             <p className='ba '><span className='b'>Born: </span>{born}</p>
             <p className='ba '><span className='b'>Died:</span> {died}</p>
            <p className='ba '><span className='b'>Titles:</span> {titles}</p>
            <p className='ba '> <span className='b'>Aliases:</span> {aliases}</p>
            <p className='ba '><span className='b'>Father:</span> {father}</p>
            <p className='ba '><span className='b'>Mother: </span>{mother}</p>
            <p className='ba '><span className='b'>Books:</span> {books}</p> 
                 </div> );
    }
}
 
export default CharacterProfile;