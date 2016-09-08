import {LOAD_IMAGES} from "./actions"

export default function(state = {
    images:[]
}, action) {
    switch (action.type) {
            case LOAD_IMAGES:
            const imageURLs = [];
            for(var i in action.imageData.photos.photo){
              const photo = action.imageData.photos.photo[i];
              const urlDefault = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
              const urlLarge = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg';
              imageURLs.push({id:photo.id,url:urlDefault,urlLarge:urlLarge});
            }
            return {
                ...state,
                images: imageURLs
            }
        default:
            return state
    }
}
