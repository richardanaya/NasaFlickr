export function stripHTMLFromString(html)
{
 var tmp = document.createElement("DIV");
 tmp.innerHTML = html;
 return tmp.textContent || tmp.innerText || "";
}
