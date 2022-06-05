import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './components/homecomponent/Home.components';
import AboutPage from './components/aboutcomponent/About.components';
import DisplayFaq from './components/displayfaq/Display-Faq.components';
import './App.css';
import CheckoutPage from './components/checkout/Checkout.component';
import SignIn from './components/signincomponent/SignIn.components';
import SignUp from './components/signup-component/SignUp.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import UserHomePage from './components/userhomepage/Userhome.component';
import { AnimatePresence } from 'framer-motion';
import ForgotPassword from './components/forgot-password/ForgotPassword.component';
import ResetMessage from './components/reset-password/ResetPassword.component';
import Farmer from './components/farmers/Farmer.component';

import Loan from './components/news/News.component';
import CreateProduct from './components/create-product/CreateProduct';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import Flood from './components/flood/Flood.component';
import Direction from './components/direction/Direction.component';



class App extends React.Component {
    unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} =this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
            });
          })
      }
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
   this.unsubscribeFromAuth();
  }
  render() {
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="App">
      
       <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/faq' element={<DisplayFaq  />} />
          <Route path='/signin' element={this.props.currentUser? <Navigate to='/userhome'/> : <SignIn /> } />
          <Route path='/signup' element={this.props.currentUser? <Navigate to='/userhome'/> : <SignUp /> } /> 
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/resetmessage' element= {<ResetMessage />} />

          <Route path="/farmers" element= {<Farmer  />} />
          <Route path='/flood' element= {<Flood  />} />
          <Route path='/loan' element= {<Loan  />} />
          <Route path='/checkout' element={<CheckoutPage />}  />
          <Route path='/submitform' element= {<CreateProduct />} />
          <Route path='/userhome' element={<UserHomePage currentUser={this.props.currentUser} />}  />
          <Route path='/direction' element={<Direction />} />
       </Routes>
    </div>
    </AnimatePresence>
  );
  }
}

const mapInitialStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapInitialStateToProps,mapDispatchToProps)(App);
