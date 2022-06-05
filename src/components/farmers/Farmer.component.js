import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase/firebase.utils';
import HeaderTwo from "../header_two/Header_two";
import {addItem} from '../../redux/cart/cart.actions';
// import WhatsappFloat from "../floating.whatsapp/Floating.whatsapp";
// import SupportEngine from '../user-support/support-engine/SupportEngine';
import { AiOutlineClose } from 'react-icons/ai';
import Footer from '../footer/Footer';
// import { getTokenOrRefresh } from '../../token_utils';
// import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
import Fruits from './fruits';
import Cereals from './cereals';
import NutsAndSeeds from './nutsandseeds';
import SpicesAndHearbs from './spicesandhearb';
import StemAndTubers from './stemandtuber';

// import { Route, Routes, useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';

// import { getAllFoodItems } from '../../firebase/firebaseFunction';
import "tachyons";

import {
  getDocs,
  collection,
  query,
  orderBy
} from 'firebase/firestore';
import './Farmers.scss';

// const speechsdk = require('microsoft-cognitiveservices-speech-sdk');


const Farmer = ({ addItem }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const[micspeak, setMicSpeak] = useState('');



//   useEffect(() =>{
//     const getTokenFromApi = async () =>{
//        const tokenRes = await getTokenOrRefresh();
//        if (tokenRes.authToken === null) {
//            setMicSpeak(micspeak);
//         }
//     }
//     getTokenFromApi()
// }, [])


// const sttFromMic = async () => {
//     const tokenObj = await getTokenOrRefresh();
//     const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
//     speechConfig.speechRecognitionLanguage = 'en-US';
//     const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
//     const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

//     setMicSpeak('Listening...');
//     recognizer.recognizeOnceAsync(result => {
//         let micspeak;
//         if (result.reason === ResultReason.RecognizedSpeech) {
//             micspeak = `${(result.text.toLowerCase())}`
//         }

//         setMicSpeak(micspeak);
//     });
// }

  
    useEffect(() => {
        const getAllFoodItems = async () => {
        const items = await getDocs(
            query(collection(firestore, 'foodBank'), orderBy('id', 'desc'))
        );
        setProducts(items.docs.map(doc => doc.data()));
    }
    getAllFoodItems();
    }, []);

    useEffect(() => {
        const filterHandler = products.filter(
          user => user.title.toLowerCase().includes(search.toLowerCase())           
        )
        setFilteredProducts(filterHandler)
    }, [search, products, micspeak]);

  const clearBtn =()=> {
    setSearch('');
    setProducts(products);
  }


  const ProductDetail = () => {
    return ( 
        <div className='more-detail'>
        <AiOutlineClose />
        <button className='more-detail-button'>ADD TO CART</button>
    </div>
     );
}

   
    return (
        <div>
        <HeaderTwo
        search={ search }
        clearBtn={clearBtn}
        products={products}
        setSearch={setSearch}
        // sttFromMic={sttFromMic}
        micspeak={micspeak} />

<Fruits filteredProducts={filteredProducts} addItem={addItem} products={products} ProductDetail={ProductDetail} />
<Cereals filteredProducts={filteredProducts} addItem={addItem} products={products} ProductDetail={ProductDetail} />
<StemAndTubers filteredProducts={filteredProducts} addItem={addItem} products={products} ProductDetail={ProductDetail} />
<SpicesAndHearbs filteredProducts={filteredProducts} addItem={addItem} products={products} ProductDetail={ProductDetail} />
<NutsAndSeeds filteredProducts={filteredProducts} addItem={addItem} products={products} ProductDetail={ProductDetail} />

          {/* <Routes>
            <Route path='/fruits' element={<Fruits filteredProducts={filteredProducts} addItem={addItem} products={products}/>} />
            <Route path='/cereals' element={<Cereals filteredProducts={filteredProducts} addItem={addItem} products={products}/>} />
            <Route path='/stemandtubers' element={<StemAndTubers filteredProducts={filteredProducts} addItem={addItem} products={products}/>} />
            <Route path='/spicesandhearbs' element={<SpicesAndHearbs filteredProducts={filteredProducts} addItem={addItem} products={products}/>} />
            <Route path='/nutsandseeds' element={ <NutsAndSeeds filteredProducts={filteredProducts} addItem={addItem} products={products}/>} />
          </Routes> */}
        
       {/* <WhatsappFloat /> */}
       {/* <SupportEngine /> */}
    <footer className="position-footer">
    <Footer /> 
    </footer>     
       </div>
    );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Farmer);