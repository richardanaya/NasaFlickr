export function stripHTMLFromString(txt)
{
   var rex = /(<([^>]+)>)/ig;
   return txt.replace(rex , "")
}
