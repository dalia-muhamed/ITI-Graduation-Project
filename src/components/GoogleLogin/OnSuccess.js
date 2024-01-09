import { jwtDecode } from "jwt-decode";

function onSuccess(credentialResponse){
    var credentialResponseDecoded = jwtDecode(credentialResponse.credential)
}

export default onSuccess