// import EmailForm from "./EmailForm";

// import ChatEngine from './ChatEngine';

// import { useState } from 'react';

// import { EngineStyle } from '../SupportEngine.style';

// const SupportWindow = props => {
//     const [user, setUser] = useState(null);
//     const [chat, setChat] = useState(null);
//     return ( 
//         <div 
//         className="transition-5"
//         style={{
//             ...EngineStyle.supportWindow,
//             ...{opacity: props.visible ? '1' : '0'}
//         }}>
//             <EmailForm 
//             setUser={user => setUser(user)}
//             setChat={chat => setChat(chat)}
//             visible={user === null || chat === null}
//             />

//             <ChatEngine 
//             visible={user !== null && chat !== null}
//             chat={chat}
//             user={user}
//             />
//         </div>
//      )
// }
 
// export default SupportWindow;