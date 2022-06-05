import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/logo1.png';


const StriprCheckoutButton = ({ price }) =>{

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Kco5LFusehQlq139HMRKyH0LonyUCpZOdvzWzwwtzDOTubBOoeeujDnvCNUzL3xOK0qh2TKfZl016nMBLHsGRSL00LKkwoHeI';
     const onToken = token =>{
         console.log(token)
         alert('payment successful')
     }
    return(
        <StripeCheckout
        label='pay with stripe'
        name='Nwaste'
        billingAddress
        shippingAddress
        image={Logo}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='pay with stripe'
        token={onToken} 
        stripeKey={publishableKey}
          />
    )
}

export default StriprCheckoutButton;
