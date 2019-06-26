import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Characterlist extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {name,id,father,mother,books}=this.props;
        return ( <Link to={{
            pathname:'/profile',
            state:{
                characterId:id,
                father:father,
                mother:mother,
                books:books
            }
        }}>
            <div className='tc bg-light-green dib br3 pa2 ma2 grow ' >
            <img src={`https://robohash.org/${id}`} alt='user'/>
          <div>
          <p className='f4 b helvetica' >{name}</p>
          </div>
          </div>
        </Link>
         );
    }
}
 
export default Characterlist;