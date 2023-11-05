// to install the library use (  npm install @react-oauth/google@latest )
// import { useGoogleOneTapLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";

// const GoogleLog = () => {
//   return (
//     useGoogleOneTapLogin({
//         onSuccess: credentialResponse => {
//             var credentialResponseDecoded = jwtDecode(credentialResponse.credential)
//             console.log(credentialResponseDecoded);
//         },
//         onError: () => {
//           console.log('Login Failed');
//         },
//     })
//   )
// }

// export default GoogleLog

// .....................................................

// import { useGoogleOneTapLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";

// function GoogleLog(){
//     useGoogleOneTapLogin({
//         onSuccess: credentialResponse => {
//             var credentialResponseDecoded = jwtDecode(credentialResponse.credential)
//             console.log(credentialResponseDecoded);
//         },
//         onError: () => {
//           console.log('Login Failed');
//         },
//     })
// }

// export default GoogleLog

// .....................................................

import { useGoogleOneTapLogin } from '@react-oauth/google';
import onSuccess from './OnSuccess';
import onError from './OnError';

function GoogleLog(){
    useGoogleOneTapLogin({
        onSuccess,
        onError 
    })
}

export default GoogleLog