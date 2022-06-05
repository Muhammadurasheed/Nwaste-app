// import React, { useState } from 'react';
// import reviews from '../../reviewdata/Review-Data';
// import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
// import './Review.components.scss';

// const Usereview = () =>{
//     const [index, setIndex] = useState(0);
//     const {name, job, text} = reviews[index];

//    const checkNumber =(number) =>{
//        if(number > reviews.length - 1){
//            return 0;
//        }
//        if(number < 0){
//            return reviews.length - 1;
//        }
//        return number;
//    }

//    const nextPerson = () =>{
//      setIndex((index)=>{
//          let newIndex = index + 1;
//          return checkNumber(newIndex);
//      });

// }   

//      const prePerson = () =>{
//         setIndex((index)=>{
//             let newIndex = index - 1;
//             return checkNumber(newIndex);
//         });
//    }

//    const randomPerson = () =>{
//      let randomNumber = Math.floor(Math.random() * 
//      reviews.length);
//      if(randomNumber === index){
//         randomNumber = index + 1
//      }
//      setIndex(checkNumber(randomNumber));
//    }
//     return(
//             <article className='review'>
//               <div className='img-container'>
//                 <span className='quote-icon'>
//                    <FaQuoteRight />
//                 </span>
//                 <h2 className='info'>{text}</h2>
//                 <h4 className='name'>{name}</h4>
//                 <p className='job'>{job}</p>
//               </div>
//               <div className='button-container'>
//                   <button className='pre-btn' onClick={prePerson}>
//                     <FaChevronLeft />
//                   </button>
//                   <button className='next-btn' onClick={nextPerson}>
//                   <FaChevronRight />
//                   </button>
//                   <button className='random-btn' onClick={randomPerson}>
//                          See Reviews
//                   </button>
//               </div>
//             </article>
//     );
// }

// export default Usereview;