import React, { useState } from 'react';
import reviews from '../../reviewdata/Review-Data';
import weather from '../../assets/weather.jpg';
import { MdArrowRightAlt, MdShoppingCart } from "react-icons/md";
import { HiAcademicCap, HiArrowsExpand } from "react-icons/hi";
import { WiCloudUp } from "react-icons/wi";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Header from '../header/Header';
import ProductDetail from '../products-detail/ProductDetail';
import Footer from '../footer/Footer';
import './HomePage.scss';

const HomePage = (props) => {
    // The beginning of the nexting and previewing function
    const [index, setIndex] = useState(3);
    const {name, job, text} = reviews[index];

    // limit setting
   const checkNumber =(number) =>{
       if(number > reviews.length - 1){
           return 0;
       }
       if(number < 0){
           return reviews.length - 1;
       }
       return number;
   }

   //nexting function
    const nextPerson = () =>{
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
   }

    //previewing function
   const prePerson = () =>{
    setIndex((index)=>{
        let newIndex = index - 1;
        return checkNumber(newIndex);
        });
    }
    //The end of the nexting and previewing function

    return(
        <div className='homepage'>
         <Header currentUser={props.currentUser} />
          <div className='container'>
              <div className='outer'>
                <div className='details'>
                    <h1>We help farmers get the most from harvest, connect the dot between farmers and buyers, quick access to soft loans and efficient storage system.</h1>
                    <p>Our Mission is Zero Hunger in 2030</p>
                    <a href='#guideline-content'>
                    <button 
                    className='get-started'>
                    <span className='get-started-btn'>Overview</span>
                    <span 
                    className="get-started-icon"
                    size='30px'
                    ><MdArrowRightAlt /></span>
                    </button>
                    </a>
                </div>
              </div>
          </div>
        
          
          {/* The beginning of service*/}
          <section className="service">
          <h3 className='horizontal-line service-title'><hr/>
              What We Do
          <hr/></h3>
            <div className="service-container">  
                <div className="container-item">
                <WiCloudUp 
                    className="service-icon"
                    size="70px"
                />
                <p>

                <a href="https://link.springer.com/article/10.1007/s12230-017-9629-6" target="_blank" rel="noreferrer">Ensusring that the weather condition is compartible with the farmer soil</a>
                </p>
                </div>
            <div className="container-item">
                <HiArrowsExpand 
                    className="service-icon"
                    size="70px"
                />
                <p><a href="https://www.sciencedirect.com/science/article/pii/S0570178319300375" target="_blank" rel="noreferrer">Reducing the wastage of perishable food through efficient and cost effective storage system</a></p>
            </div>
            <div className="container-item">
                <MdShoppingCart 
                    className="service-icon"
                    size="70px"
                />
                <p><a href="https://foodprint.org/issues/the-problem-of-food-waste/" target="_blank" rel="noreferrer">Reducing the billions of food wasted every year from adverse weather condition</a></p>
            </div>
            <div className="container-item">
                <HiAcademicCap 
                    className="service-icon"
                    size="70px"
                />
                <p ><a href="https://www.fb.org/news/more-farmers-connecting-with-local-buyers-via-websites-and-social-media" target="_blank" rel="noreferrer">We connect farmers to buyers fast and easy</a></p>
            </div>
        </div>
    </section>
    {/* end of the service */}
            
    {/* the beginning of user reviews */}
    <section className="review">
    <ProductDetail />
        <div className="user-reviews">
            <div  className='userss'>

                <FaChevronLeft className='change-review' size='30px' onClick={prePerson} />
             <div>
                <h4>User Reviews</h4>
                <p className='info'>{text}</p>
                <p className='name'>{name}</p>
                <p className='job'>{job}</p>
              </div>
                   <FaChevronRight className='change-review' size='30px' onClick={nextPerson} />
            </div>
        </div>
    </section>
        {/* the end of user reviews */}

        <section>
        <div>
          <div className='guideline-content' id='guideline-content'>
          <div className='guideline'>
          <h3 className="horizontal-line guideline-tittle"><hr/>
             GUIDELINE
            <hr/></h3>
           Welcome to NWASTE. This is a step by step guide on how to get the most in using NWASTE. If you are new, click on the login button in the navigation bar and then sign up with your email and password or you can just head on to signing with your Google account. On signing in, you will be redirected to your user page in less than a minute. In your user page, you can monitor your current soil data such as soil moisture and soil surface temperature with a graph so as to keep track of soil state in order to increase productivity.<br/><br/>

           The soil data is updated two times in every 12 hours period. On the navigation click on submit product, when you click on it, you will be redirected to a page where you can submit your available farm products with your location, price and product name for potential and prospective customers to reach out.
           <br/><br/>

            There is also a NEWS section where we display soft loans that are available for farmers to help increase productivity and maintenance of farming activities.
          </div>
          </div>
        </div>
    </section>

        {/* future plan beginning */}
      <section className='future-plan'>
            <h3 className='horizontal-line future-center' ><hr/>Our Future Plan<hr/></h3>
        <div className='mission'>
            <p>Out of the Billions of food wasted every year, perishable foods have been identified to be the most paramount, which has been due to inefficient and uneffective method of preservation, as a result NWASTE plan to address this problem by creating the most effective preservation method as our mission strongly tie to this, which is zero hunger in 2030.</p>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgsj5dNoXh4EhBkYAP_SEDWDnJ3YRaQ-spg&usqp=CAU' alt='' ></img>
        </div>
        <div className='mission'>
          <p>
              As NWASTE  is committed to keeping to its future plan which is zero hunger in 2030, we plan to help farmers with crop data decision, what deos this mean? Based on the crop the farmer wish to plant in a particular season, farmers get to know if their crop is compartible with the soil type and weather condition before, during and after planting. But for the mean time our solution solely address soil type, soil moisture and temperatue.
            </p>
              <img src={weather} alt='' />
        </div>
      </section>
      <Footer />
      {/* future plan ending */}
    </div>
    );
}

export default HomePage;