// import React, { useState } from 'react';
// import {ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
// import { storage, db } from '../../firebase/firebase.utils';
// import { collection, addDoc } from 'firebase/firestore';
// import { Link } from 'react-router-dom';
// import Logo from '../../assets/logo1.png';
// // import UpdateProduct from '../updateproducts/UpdateProduct.component';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
// import "./ProductForm.scss";

// const ProductForm = ({currentUser}) =>{
//     const [formData, setFormData] = useState({
//         title: "",
//         location: "",
//         description: "",
//         price: "",
//         image: "",
//       });
//       const [progress, setProgress] = useState(0);
//       const handleChange = (e) =>{
//       setFormData({ ...formData, [e.target.name]: e.target.value })  
//       }
//       const handleImageChange = (e) =>{
//         setFormData({ ...formData, image:e.target.files[0] })
//       }
//       const handleProducts = (e) =>{
//         e.preventDefault();
//         if(!formData.title || !formData.location || !formData.description || !formData.price || !formData.image){
//             return;
//           }
//           const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);
//           const uploadImage = uploadBytesResumable(storageRef, formData.image);
//           uploadImage.on('state_changed',
//           (snapshot) =>{
//             const progressPercent = Math.round((snapshot.bytesTransferred /snapshot.totalBytes) * 100);
//             setProgress(progressPercent);
//           },
//           (error) =>{
//             console.log(error)
//           },
//           () =>{
            
//               getDownloadURL(uploadImage.snapshot.ref)
//               .then(async (url) =>{
//                 const productRef = collection(db, "Products");
//                 console.log(productRef);
// <<<<<<< HEAD
//                 console.log(formData);
//                  await addDoc(productRef,{
// =======
//                 console.log(formDa7ta);
//                  await addDoc(productRef, {
// >>>>>>> 3c2449f0b1ae2cce487af3dc29b722ce188cc9df
//                   title: formData.title,
//                   location: formData.location,
//                   description: formData.description,
//                   price: formData.price,
//                   imageUrl: url,
//                 })
//                 .then(() =>{
//                   setFormData({
//                     title: "",
//                     location: "",
//                     description: "",
//                     price: "",
//                     image: "",
//                   });
//                   toast("Products submitted successfully, ready to viewed by potential buyers",{type: "success"});
//                   setProgress(0);
//                 }).catch(error =>{
//                    toast("error adding products", {type: "error"})
//                 })
//               })
//           }
//           )
//       }
  

//     return (
      
//        <form className='form-container'>
//           <div className='form-bg'>
//           <Link to="/">
//                 <img className='sign-logo' title='Go to home page' alt='logo' src={Logo} style={{height: '55px', width: '55px'}} /> 
//               </Link>
//           <h2 className='title'>Submit products</h2>
//                <p className="form-tag">Product Name</p>
//                <input type='text' name='title'
//                className='product-input'
//                placeholder='product name' 
//                value={formData.title}
//                onChange={(e)=>handleChange(e)}
//                required /> <br/><br/>

//                 <p className="form-tag">Location</p>
//                <input type='text' name='location'
//                className='product-input'
//                placeholder='location' 
//                value={formData.location}
//                onChange={(e)=>handleChange(e)}
//                required /> <br/><br/>

//                <p className="form-tag">Description</p>
//                <input type='text' name='description'
//                className='product-input'
//                placeholder='description' 
//                value={formData.description}
//                onChange={(e)=>handleChange(e)}
//                required /> <br/><br/>

//                 <p className="form-tag">Price</p>
//                <input type='text' name='price'
//                className='product-input'
//                placeholder='price' 
//                value={formData.price}
//                onChange={(e) =>handleChange(e)}
//                required
//                /> <br/><br/>
//                 <p className="form-tag">Image</p>
//                <input type='file'
//                className='product-input' 
//                name='image' 
//                accept="image/*"
//                onChange={(e) =>handleImageChange(e)} /><br/><br/>

//                {progress === 0 ? null :(
//                <div className='progress-bar' style={{width: `${progress}%` }}>
//                  {`uploading products ${progress}%`}
//                </div>) }
//                <button onClick={handleProducts} className='submit-btn'>Submit product</button>
               
//           </div>
//        </form>
//     );
// }


// export default ProductForm;