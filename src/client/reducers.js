import {LOAD_IMAGE,UPDATE_FILTER,UPDATE_SORT} from "./actions"
import {stripHTMLFromString} from "./utils"
import moment from "moment"

function imageMatchesFilter(image,filter){
  if(filter.trim() === "") return true;

  //split by white space
  var filterElements = filter.match(/\S+/g) || []
  for(var i in filterElements){
    var txt = filterElements[i].toLowerCase();
    //match by title and description
    if(image.title.toLowerCase().indexOf(txt)!==-1 || image.description.toLowerCase().indexOf(txt)!==-1){
        return true;
    }
  }
  return false;
}

function filterImages(images,filter){
  var filteredImages = [];
  for(var i in images){
    var image = images[i];
    if(imageMatchesFilter(image,filter)){
      filteredImages.push(image);
    }
  }
  return filteredImages;
}

function sortImages(images,sort){
  if(sort === "newest"){
    images.sort(function(a, b) {
        a = a.dateTaken.date();
        b = b.dateTaken.date();
        return a>b ? -1 : a<b ? 1 : 0;
    });
  }
  else if(sort === "oldest"){
    images.sort(function(a, b) {
        a = a.dateTaken.date();
        b = b.dateTaken.date();
        return a>b ? 1 : a<b ? -1 : 0;
    });
  }
  return images;
}

export default function(state = {
    sort: "newest",
    filter: "",
    images:[],
    visibleImages:[]
}, action) {
    switch (action.type) {
        case LOAD_IMAGE:
            const {id,server,secret,farm} = action.imageData;
            const description = stripHTMLFromString(action.imageData.info.description._content);
            const title = stripHTMLFromString(action.imageData.info.title._content);
            const dateTaken = moment(action.imageData.info.dates.taken)
            const url = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';
            const urlLarge = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '_b.jpg';
            const urlFlickr = "https://www.flickr.com/photos/24662369@N07/"+id+"/"

            const image = {id,url,urlLarge,description,title,dateTaken,urlFlickr};

            var newImages = state.images.concat(image);
            //filter and sort visible images in case it should be added or put in right order
            newImages = filterImages(newImages,state.filter);
            newImages = sortImages(newImages,state.sort)
            return {
                ...state,
                images: state.images.concat(image),
                visibleImages: newImages
            }
        case UPDATE_FILTER:
            var filteredImages = filterImages(state.images,action.filter);
            filteredImages = sortImages(filteredImages,state.sort)
            return {
                ...state,
                visibleImages: filteredImages,
                filter: action.filter
            }
        case UPDATE_SORT:
                return {
                    ...state,
                    visibleImages: sortImages(state.visibleImages,action.sort),
                    sort: action.sort
                }
        default:
            return state
    }
}
