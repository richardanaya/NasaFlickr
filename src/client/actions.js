export const RETRIEVE_IMAGES = "RETRIEVE_IMAGES";
export const LOAD_IMAGES = "LOAD_IMAGES";

export function loadImages(imageData){
    return {
        type: LOAD_IMAGES,
        imageData
    }
}

export function retrieveImages(){
    return (dispatch)=>{
        const url = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1"

        const r = new XMLHttpRequest();
        r.open("GET", url, true);
        r.onreadystatechange = function () {
          if (r.readyState != 4 || r.status != 200) return;
          dispatch(loadImages(JSON.parse(r.response)));
        };
        r.send();
    }
}
