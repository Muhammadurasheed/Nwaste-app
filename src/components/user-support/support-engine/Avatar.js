// import { useState } from 'react';

// import { EngineStyle } from './SupportEngine.style';

// const Avatar = props => {
//     const [hovered, setHovered] = useState(false);
//     return (
//     <div style={props.style}>

//         <div className='transition-3'
//             style={{
//                 ...EngineStyle.avatarHello,
//                 ...{opacity: hovered? '1' : '0'}
//             }}
//         >
//             Hey it's Muhammad
//         </div>


//         <div 
//         className='transition-3'
//         onClick={() => props.onClick && props.onClick()}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         style={{
//             ...EngineStyle.chatWithMeButton,
//             ...{border: hovered ? '1px solid #f9f0ff' : '4px solid #7a39e0'}
//         }} />
//     </div>
// )}

// export default Avatar;