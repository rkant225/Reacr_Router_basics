import React from 'react';
import axios from 'axios';

class Book extends React.Component {
    state = {book : null}
   
    async componentDidMount(){
        const response = await axios.get(`http://localhost:3001/books/${this.props.match.params.bookId}`)
        this.setState({book : response.data})
    }

    async componentDidUpdate(prevProp){
        if(prevProp.match.params.bookId !== this.props.match.params.bookId){
            const response = await axios.get(`http://localhost:3001/books/${this.props.match.params.bookId}`)
        this.setState({book : response.data})
        }
        
    }

    render(){

        return (
            <div>
                {this.state.book && <div>
                    <button onClick={this.props.history.goBack}>Go Back</button>
                    <h3><b>Title : </b>{this.state.book.title}</h3>
                    <p><b>Description : </b>{this.state.book.description}</p>
                    <p><b>Written by : </b>{this.state.book.writerId}</p>
                    <p><b>Published in : </b>{this.state.book.published}</p>
                </div>}
            </div>
        );
    }
  
}

export default Book;
