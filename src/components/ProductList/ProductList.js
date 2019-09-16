import React,{useContext} from 'react';
import Product from '../Product/Product';
import Title from '../layout/Title';
import {ProductContext} from '../../contextt';


const ProductList =()=>{
    const msg = useContext(ProductContext).megaState.productList;

    
    return(
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="Our" title="Products"/>
                    <div className="row">
                        {
                            msg.map(product=>{
                                return <Product key={product.id} product={product}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductList;