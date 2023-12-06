// to install the library use (  npm install @react-oauth/google@latest )
// import { useGoogleOneTapLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";

// const GoogleLog = () => {
//   return (
//     useGoogleOneTapLogin({
//         onSuccess: credentialResponse => {
//             var credentialResponseDecoded = jwtDecode(credentialResponse.credential)
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
//         },
//         onError: () => {
//           console.log('Login Failed');
//         },
//     })
// }

// export default GoogleLog

// .....................................................
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const GoogleLogin = () => {
  const [imageSrc, setImageSrc] = useState(
    'https://www.mgp.net.au/wp-content/uploads/2023/05/150-1503945_transparent-user-png-default-user-image-png-png.png'
  );

  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
      const credentialResponseDecoded = jwtDecode(
        credentialResponse.credential
      );
      setImageSrc(credentialResponseDecoded.picture);
      localStorage.setItem('hasLogged', 'true');
      localStorage.setItem('userImage', credentialResponseDecoded.picture);
    },
    onError: error => {
      console.error('Error during login:', error);
    },
  });

  return <img src={imageSrc} />;
};

export default GoogleLogin;
