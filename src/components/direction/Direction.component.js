import React, { useRef, useState } from 'react';
// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Flex,
//   HStack,
//   IconButton,
//   Input,
//   SkeletonText,
//   Text,
// } from '@chakra-ui/react';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api';
const center = { lat: 48.8584, lng: 2.2945 }

const Direction = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
      })
    
      const [map, setMap] = useState(/** @type google.maps.Map */ (null))
      const [directionsResponse, setDirectionsResponse] = useState(null)
      const [distance, setDistance] = useState('')
      const [duration, setDuration] = useState('')
    
      /** @type React.MutableRefObject<HTMLInputElement> */
      const originRef = useRef()
      /** @type React.MutableRefObject<HTMLInputElement> */
      const destinationRef = useRef()
    
      if (!isLoaded) {
        return <div></div>
      }
    
      async function calculateRoute() {
        if (originRef.current.value === '' || destinationRef.current.value === '') {
          return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
          origin: originRef.current.value,
          destination: destinationRef.current.value,
          // eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
      }
    
      function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destinationRef.current.value = ''
      }
    
      return (
    <div 
    style={{position:'relative',
    flexDirection:'column',
    alignItems:'center',
    height:'100vh',
    width:'100vw'}}>
          <div style={{position:'absolute', left:'0px', top:'0px', height:'100%',width:'100%'}}>
            {/* Google Map Box */}
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{ width: '50%', height: '50%' }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={map => setMap(map)}
            >
              <Marker position={center} />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </div>
          <div
          style={{padding: '4px',
          borderRadius:'large',
          margin:'4px',
          backgroundColor:'orange',
          zIndex: '1' }}
          >
            <div style={{spacing: '2', justifyContent:'space-between'}} >
              <div style={{flexGrow: '1'}}>
                <Autocomplete>
                  <input type='text' placeholder='Origin' ref={originRef} />
                </Autocomplete>
              </div>
              <div style={{flexGrow: '1'}}>
                <Autocomplete>
                  <input
                    type='text'
                    placeholder='Destination'
                    ref={destinationRef}
                  />
                </Autocomplete>
              </div>
    
                <button style={{backgroundColor:'pink', color:'white'}}
                type='submit' onClick={calculateRoute}>
                  Calculate Route
                </button>
                <AiOutlineClose
                  style={{ariaLabel:'center back'}}
                  icon={<FaTimes />}
                  onClick={clearRoute}
                />
           
            <div style={{spacing:'4px', marginTop:'4px', justifyContent:'space-between'}}>
              <p>Distance: {distance} </p>
              <p>Duration: {duration} </p>
              <AiOutlineClose
                icon={<FaLocationArrow />}
                isRound
                onClick={() => {
                  map.panTo(center)
                  map.setZoom(15)
                }}
              />
            </div>
          </div>
          </div>
    </div>   
      )
}

export default Direction;