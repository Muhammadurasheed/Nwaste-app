import React, { useState, useEffect } from 'react';
import HeaderThree from '../header_three/Header_three';
import Sidebar from '../sidebar/Sidebar';
import Flood from '../flood/Flood.component';
// import { Chart as ChartJS, LineElement,LinearScale, CategoryScale, PointElement } from 'chart.js';
// import {Line} from 'react-chartjs-2';
import './Userhome.scss';




// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement
// )



const UserHomePage = () => {
    

    const [usersoil, setUserSoil] = useState({});
    const [polyshape, setPolyShape] = useState([]);

  useEffect(() => {
    const getSoilData = async () => {
      const response = await fetch('http://localhost:5000/soil',{
        method: 'GET',
         headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json'
          }
        });
      const jsonData = await response.json();
      console.log(jsonData);
      setUserSoil(jsonData);
    };
    getSoilData();
    
  }, []);

  useEffect(() => {
    const getPolygonShape = async () => {
      const shape_response = await fetch('http://localhost:5000/shape',{
         method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      });
      const polyjsonData = await shape_response.json();
      console.log(polyjsonData)
      setPolyShape(polyjsonData);
    };
    getPolygonShape();
  }, []);
     

//   const data = {
//     labels: polyshape?.map(y => y.name),
//     datasets: [{
//         label: `${polyshape.length} graph available`,
//         data: polyshape?.map(x => x.area),
//         xAxisID: polyshape.center,
//         yAxisID: polyshape.area ,
//         backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//     }]
// }

// const options = {
//   maintainAspectRatio: false,
//   scales: {
//       y: {
//           beginAtZero: true
//       },
//       legend: {
//         labels: {
//           fontSize: 26
//         }
//       }
//     }
//   }

            
    return(
      <div className='user-page'>
      <HeaderThree/>
     <article className='userpage-layout'>
      <Sidebar  />
        <main className='user-main-page'>
         <div className='soil-params'>
         <p className='content-description'>
            Soil moisture is one of the determining variables of the health on land surface ecosystems and managed system such as those in agriculture. Monitoring soil moisture provides the necessary information to adopt and implement strategies to reduce damage due to defect in precipitation as well as determine approaches to optimize the management of natural ecosystems under the threat of climate changes.
         </p>    
           <div className='about-soil'>
           <h3>Condition of the Land:</h3>    
            <ul>
            <li>
            <p>Temperature on the 10 centimeters depth: {usersoil.t10}K</p>
            </li>
            <li>
            <p>Soil moisture: {usersoil.moisture}m2/m3</p>
            </li>
            <li>
            <p> Surface temperature: {usersoil.t0}K</p>
            </li>
            </ul>
           </div>
          </div>
        <section>
          {/* <div className="chart-section" >
            <Line
              data={data}
              options={options}
            />
          </div> */}
       </section>
       <div>
         <h4>Detect if land is flooded or not</h4>
         <Flood />
       </div>  
        </main>
      </article>
        </div>
    );
}

export default UserHomePage;
