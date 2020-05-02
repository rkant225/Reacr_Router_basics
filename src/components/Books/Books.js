import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Books extends React.Component {
    state = {books : null}
    async componentDidMount(){
        const response = await axios.get("http://localhost:3001/books")
        this.setState({books : response.data})
    }

    render(){

        return (
            <div>
               {this.state.books && 
               <ul>
                   {this.state.books.map(book => <li key={book.id}><Link to={`/book/${book.id}`}>{book.title}</Link></li>)}
               </ul>}
            </div>
        );
    }
  
}

export default Books;
