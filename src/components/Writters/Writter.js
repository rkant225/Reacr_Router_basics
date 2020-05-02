import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {NotFound} from '../';

class Writter extends React.Component {
    state = {writer : null}
   
    async componentDidMount(){
        const response = await axios.get(`http://localhost:3001/writers/${this.props.match.params.userId}`)
        this.setState({writer : response.data})
    }

    async componentDidUpdate(prevProp){
        if(prevProp.match.params.userId !== this.props.match.params.userId){
            const response = await axios.get(`http://localhost:3001/writers/${this.props.match.params.userId}`)
            this.setState({writer : response.data})
        }
        
    }

    render(){
        const myWritter = this.props.writers && this.props.writers.find(wrts => wrts.id === this.props.match.params.userId);
        const books = myWritter ? myWritter.books : [];
        return (
            <Fragment>
                    {this.state.writer ? 
                    <div>
                        <h2>{this.state.writer.name}</h2>
                        Born : <b>{this.state.writer.born}</b>
                        <br/>
                        Deceased : <b>{this.state.writer.deceased}</b>
                        <p>{this.state.description}</p>
                        <img src={this.state.writer.image} alt="Writter" style={{height:"100px", width:"100px", borderRadius:"500px" }}/>
                        <h4>Books :</h4>
                        <ul>
                            {books.map(book=><li key={book.id}><Link to={`/book/${book.id}`}>{book.title}</Link></li>)}
                        </ul>
                    </div> : <NotFound/>}
            </Fragment>
        );
    }  
}

export default Writter;