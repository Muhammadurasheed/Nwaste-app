import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import ProductDetail from '../products-detail/ProductDetail';
import { toggleDetailHidden } from "../../redux/detail/detail.action";

import { connect } from "react-redux";

const NutsAndSeeds = ({ filteredProducts, addItem, products, keepIn }) => {
     let navigate = useNavigate();
    const data5 = filteredProducts?.filter(n => n.category === 'Nutsandseeds');
    return ( 
        <div>
           { products.length ?
            <div>
            <span className='product-title product-name-5'>Nuts & Seeds</span>
               <section className='farmer-card ml4'>
         {data5.map(i => 
              <main className='farm-products dib' key={i.id}>
                   <div className='for-hovering'>
                        <img src={i.imageURL} alt="images" 
                        className="img" />
                        <div className='product-detail ml3'>
                          <h3 className='name'> {i.title}</h3>
                          <div className='flex-wrapper'>
                          <FaMapMarkerAlt className='location'/>
                          <span><h4>{i.location}</h4></span>
                          </div>
                          <h4 className='price'>${i.price}</h4>
                          <button className='cart-button' onClick={() => addItem(i)}>
                          Add to cart
                          </button>
                        </div>
                    </div> 
                    {
                    keepIn ? null : <ProductDetail />
                    }
                    <button type='button' 
                    onClick={toggleDetailHidden}
                    className="show-detail">Detail</button>
                  </main>)
                  }
       </section> 
            </div> : null }
            <button 
            className='products'
            onClick={() => navigate('/nutsandseeds')}
            >
                See All
            </button>

        </div>
     );
}
 
const mapStateToProps = ({detail: {keepIn}}) => ({
     keepIn
   })
   
   const mapsDispatchToProps = dispatch => ({
     toggleDetailHidden: () => dispatch(toggleDetailHidden)
   })
    
   export default connect(
     mapStateToProps, 
     mapsDispatchToProps
     )(NutsAndSeeds);