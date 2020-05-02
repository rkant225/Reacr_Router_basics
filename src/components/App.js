import React from 'react';
import axios from 'axios';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {Home, Writters, Book, Books, NotFound} from './';

class App extends React.Component {
  state = {writers : []}

  async componentDidMount(){
    const response = await axios.get('http://localhost:3001/writers?_embed=books');
    this.setState({writers : response.data})
  }

  render(){
    const {writers} = this.state;

    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/writters">Writters</Link></li>
            <li><Link to="/books">Books</Link></li>
          </ul>
        </div>

        <hr/>


        <div>
          <Switch>
            <Route path="/" exact render={(props)=><Home {...props} />}/>
            <Route path="/writters" render={(props)=><Writters {...props} writers={writers} />}/>
            <Route exact path={"/books"} render={(props)=><Books {...props}/>}/>
            <Route path={"/book/:bookId"} render={(props)=><Book {...props}/>}/>
            <Route render={()=><NotFound/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
