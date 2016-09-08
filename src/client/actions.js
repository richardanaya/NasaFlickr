export const SHOW_SECRET = "SHOW_SECRET";

export function showSecret(secret){
    return {
        type: SHOW_SECRET,
        secret
    }
}

export function getSecret(){
    return (dispatch)=>{
        var r = new XMLHttpRequest();
        r.open("GET", "/secret", true);
        r.onreadystatechange = function () {
            if (r.readyState != 4 || r.status != 200) return;
            dispatch(showSecret(r.responseText))
        };
        r.send();
    }
}