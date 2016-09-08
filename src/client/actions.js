export const LOAD_IMAGE = "LOAD_IMAGE";
export const UPDATE_FILTER = "UPDATE_FILTER";

export function loadImage(imageData){
    return {
        type: LOAD_IMAGE,
        imageData
    }
}

export function updateFilter(filter){
    return {
        type: UPDATE_FILTER,
        filter
    }
}

export function retrieveImages(){
    return (dispatch)=>{
        const url = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1"

        const r = new XMLHttpRequest();
        r.open("GET", url, true);
        r.onreadystatechange = function () {
          if (r.readyState != 4 || r.status != 200) return;
          const imagesData = JSON.parse(r.response);

          const imageURLs = [];
          for(var i in imagesData.photos.photo){
            const imageData = imagesData.photos.photo[i];
            dispatch(retrieveImageInfo(imageData));
          }
        };
        r.send();
    }
}

export function retrieveImageInfo(imageData){
    return (dispatch)=>{
        const url = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=a5e95177da353f58113fd60296e1d250&photo_id="+imageData.id+"&format=json&nojsoncallback=1"

        const r = new XMLHttpRequest();
        r.open("GET", url, true);
        r.onreadystatechange = function () {
          if (r.readyState != 4 || r.status != 200) return;
          imageData.info = JSON.parse(r.response).photo
          dispatch(loadImage(imageData))
        };
        r.send();
    }
}
