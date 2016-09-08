import {LOAD_IMAGE} from "./actions"
import {stripHTMLFromString} from "./utils"

export default function(state = {
    images:[]
}, action) {
    switch (action.type) {
        case LOAD_IMAGE:
            const {id,server,secret,farm} = action.imageData;
            const description = stripHTMLFromString(action.imageData.info.description._content);
            const title = stripHTMLFromString(action.imageData.info.title._content);
            const dateTaken = action.imageData.info.dates.taken
            const url = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';
            const urlLarge = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '_b.jpg';
            var photo = {id,url,urlLarge,description,title,dateTaken};
            return {
                ...state,
                images: state.images.concat(photo)
            }
        default:
            return state
    }
}
