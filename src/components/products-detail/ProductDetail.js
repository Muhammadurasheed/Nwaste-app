import React from 'react';
import './ProductDetail.scss';
import { AiOutlineClose } from 'react-icons/ai'
import { toggleDetailHidden } from "../../redux/detail/detail.action";

import { connect } from "react-redux";

const ProductDetail = ({ keepOut }) => {
    return ( 
        <div className='more-detail'>
        <div 
        className='close-icon'
        onClick={toggleDetailHidden}
        >
        <AiOutlineClose />
        </div>

        {/* {
            keepOut ? null : null
        } */}
      
        <button className='more-detail-button'>ADD TO CART</button>
    </div>
     );
}
 
const mapStateToProps = ({detail: {keepOut}}) => ({
    keepOut
  })
  
  const mapsDispatchToProps = dispatch => ({
    toggleDetailHidden: () => dispatch(toggleDetailHidden)
  })
   
  export default connect(
    mapStateToProps, 
    mapsDispatchToProps
    )(ProductDetail);