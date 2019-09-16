import React from 'react';
import {Switch,Route} from 'react-router-dom';
import NavigationBar from '../layout/Navbar';
import ProductList from '../ProductList/ProductList';
import Details from '../Product/Detail';
import Cart from '../Cart/Cart';
import NotFound from '../NotFound/NotFound';
import Modal from '../layout/Modal';

const Main =()=>{
    return(
        <React.Fragment >
            <NavigationBar/>
            <Switch>
                <Route exact path="/" component={()=><ProductList/>} />
                <Route path="/details" component={()=><Details/>} />
                <Route path="/cart" component={()=><Cart/>}/>
                <Route component={()=><NotFound/>}/>
            </Switch>
            <Modal />
        </React.Fragment>
    );
}

export default Main;