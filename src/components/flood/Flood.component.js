import React, { useState, useEffect } from 'react';
import {ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/firebase.utils';

import axios from 'axios';
// const Buffer = require('buffer/').Buffer


const Flood = () => {

    const [flood, setFlood ] = useState([]);
    const [imageUrl, setimageUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const Base_url = 'http://localhost:5000/flood';
    const username = 'william nnamani';
    const password = 'Successfully#5697';
    const basicAuth = 'Basic ' + btoa(username + ':' + password);
    // const auth = 'Basic ' + Buffer.from('' + ':' + '').toString('base64');

    const uploadImageFile = e => {
      setIsLoading(true);
      const imageFile = e.target.files[0];
      const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      uploadTask.on('state_changed', (snapshot) => {
        const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      }, (error) => {
        console.log(error);
        setTimeout(() => {
        setIsLoading(false);
        }, 3000)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setimageUrl(downloadURL);
          setIsLoading(false);
        })
      })
    }

    useEffect(() => {
       const DetectIfFlood = async () =>{
             await axios.post(Base_url, {}, {
              method: 'POST',
              headers:{
                  'Content-Type': 'application/json',
                  'accept': 'application/json',
                  'Authorization': + basicAuth
              },
              body:JSON.stringify({
                base64_Photo_String: "iVBORw...base64 encoded string photo...GSuQmCC"
            })
            }).then(response => {
              console.log(response);
              return response.json();
             
            }).then((data) => {
              console.log(data)
            })
          //  const floodData = await flood_response.json();
          //  console.log(floodData)
          //  setFlood(floodData);
          // iVBORw...base64 encoded string photo...GSuQmCC
     };
       DetectIfFlood();
    }, [])


    return (
     <div>
     {!imageUrl ? 
      <form >
          <input 
          type='file'
          name='upload image'
          accept='image/*'
          onChange={uploadImageFile}
           />
       </form> :  
       <div>
         <img src={imageUrl} alt='flood' style={{height:'200px', width:'200px'}} />
       </div> } 

        <button 
            
            type='submit'
            style={{background:'blue',color:'white', cursor: 'pointer'}}
            >
            Detect
        </button> 

     </div>
    );
}

export default Flood;