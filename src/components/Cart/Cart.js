import React,{useContext} from 'react';
import Title from '../layout/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import {ProductContext} from '../../contextt';

const Cart =()=>{
    const value= useContext(ProductContext);
    const {cart} = value.megaState;

    if(cart.length > 0){
        return(
            <React.Fragment>
                <Title name="Your" title="Cart" />
                <CartColumns/>
                <CartList value={value} />
                <CartTotals value={value} />
            </React.Fragment>
        );
    }else{
        return(
            <EmptyCart/>
        );
    }
}

export default Cart;