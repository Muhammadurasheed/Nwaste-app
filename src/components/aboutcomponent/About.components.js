import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './About.scss';

const AboutPage = (props) => {
    return(
      <div>
     <Header currentUser={props.currentUser} />
    <section className="about-us">
        <div className='about-container'>
          <div className="bg-text">
              <h1 >Explore More About NWASTE</h1>
          </div>
        </div>
        <div className='about-content'>
          <div>
          <h2 className="about-tittle">ABOUT NWASTE AND WHAT WE DO</h2>
          <p className='what-we-do'>
            NWASTE is passionately affecting the way farmers do farm so as to address a major problem in the world today which is <mark>Zero hunger in 2030.</mark> We're devoted to helping Farmers in making smart decision before planting by supplying them with soil data information such as soil moisture, surface soil temperature in order to increase productivity and avoid wastage. We are highly committed to reducing hunger to the barest minimum and as a result, we have devised an efficient and effective storage system which uses solar powered battery which we plan to implement in the nearest future. <br/>

            In the process of testing our solution, a Farmer provided a feedback and says <span style={{fontStyle: 'italic'}}>'One of the reason food do get wasted is due to the inability of Farmers to reach out to buyers.' </span> We immediately moved into action as our passion tie to seeing the world in a state of zero hunger in 2030,  we implemented a feature on our software called <mark>Market place</mark>. With it Farmers can display their products available for sales, their location as well as the product price so buyers can easily reach out to Farmers for the type of product they are in need of. 
          </p>
          </div>
        </div>
        <Footer />
    </section>
    </div>
    );
}

export default AboutPage;