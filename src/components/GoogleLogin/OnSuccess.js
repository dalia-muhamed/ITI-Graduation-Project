import { jwtDecode } from "jwt-decode";

function onSuccess(credentialResponse){
    var credentialResponseDecoded = jwtDecode(credentialResponse.credential)
    console.log(credentialResponseDecoded);
}

export default onSuccess