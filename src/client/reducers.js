import {LOAD_IMAGE,UPDATE_FILTER} from "./actions"
import {stripHTMLFromString} from "./utils"

function imageMatchesFilter(image,filter){
  if(filter.trim() === "") return true;
  var filterElements = filter.match(/\S+/g) || []
  for(var i in filterElements){
    var txt = filterElements[i].toLowerCase();
    if(image.title.toLowerCase().indexOf(txt)!==-1 || image.description.toLowerCase().indexOf(txt)!==-1){
        return true;
    }
  }
  return false;
}

export default function(state = {
    filter: "",
    images:[],
    filteredImages:[]
}, action) {
    switch (action.type) {
        case LOAD_IMAGE:
            const {id,server,secret,farm} = action.imageData;
            const description = stripHTMLFromString(action.imageData.info.description._content);
            const title = stripHTMLFromString(action.imageData.info.title._content);
            const dateTaken = action.imageData.info.dates.taken
            const url = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';
            const urlLarge = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '_b.jpg';
            var image = {id,url,urlLarge,description,title,dateTaken};
            return {
                ...state,
                images: state.images.concat(image),
                filteredImages: state.filteredImages.concat(image)
            }
        case UPDATE_FILTER:
            const filteredImages = [];
            for(var i in state.images){
              var image = state.images[i];
              if(imageMatchesFilter(image,action.filter)){
                filteredImages.push(image);
              }
            }
            return {
                ...state,
                filteredImages,
                filter: action.filter
            }
        default:
            return state
    }
}
