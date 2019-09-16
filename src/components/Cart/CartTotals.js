import React from 'react';
import {Link} from 'react-router-dom';
const CartTotals =({value})=>{
    
    const {cartSubTotal,cartTax,cartTotal} = value.megaState;
    const {clearCart} = value;
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/" >
                            <button className="btn btn-outline-danger
                            text-uppercase mb-3 px-5"type="button"
                            onClick={()=>clearCart()}
                            >clear cart</button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal :</span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">carttax :</span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">total :</span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        <h5>
                        <button className="btn btn-md btn-info
                            text-uppercase mb-3 px-5"type="button" onClick={()=>alert('working on it')}
                            ><i className="fas fa-paypal" >paypal</i></button>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CartTotals;