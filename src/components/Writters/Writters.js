import React, {Fragment} from 'react';
import {Link, Route} from 'react-router-dom';
import Writter from './Writter';

class Writters extends React.Component {

  render(){
      const {writers, match} = this.props;
    return (
        <Fragment>
            <ul>
                {writers && writers.map(wr =><li key={wr.id}> <Link to={`${match.url}/${wr.id}`}>{wr.name}</Link> </li>)}
            </ul>
            <Route path={match.url} exact render={()=><h3>Please select any witer...!!!</h3>}/>
            <Route path={`${match.url}/:userId`} render={(props) => <Writter {...props} writers={writers}/>}/>
        </Fragment>
    );
  }
  
}

export default Writters;