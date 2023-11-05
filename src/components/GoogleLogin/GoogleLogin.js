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
import { useGoogleOneTapLogin } from "@react-oauth/google";
import onSuccess from "./OnSuccess";
import onError from "./OnError";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

function GoogleLog() {
  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      var credentialResponseDecoded = jwtDecode(credentialResponse.credential);
      setImageSrc(credentialResponseDecoded.picture);
    },
    onError,
  });
  const [imageSrc, setImageSrc] = useState("https://www.mgp.net.au/wp-content/uploads/2023/05/150-1503945_transparent-user-png-default-user-image-png-png.png");

  return <img style={{position:"absolute", right:"70px",top:"7px", borderRadius:"50%",width:"50px",height:"50px"}} src={imageSrc} />;
}

export default GoogleLog;
