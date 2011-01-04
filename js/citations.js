addEvent(window, "load", init);

function init() {
  if (document.getElementsByTagName && document.createElement && document.createTextNode && document.insertBefore) {
    quotes = document.getElementsByTagName('blockquote');
    for(var i=quotes.length; i-->0;) {
      var quote = quotes[i];
      if(quote.cite) {
        var block = document.createElement('p');
        block.className = 'blockquotecite';
        var link = document.createElement('a');
        link.href = quote.cite;
        var text = document.createTextNode('[source]')
        link.appendChild(text);
        block.appendChild(link);
// if you want the p tag after the quote instead of in it
//        quote.parentNode.insertBefore(block,quote.nextSibling);      
        quote.appendChild(block);
      }
    }
  }
}


// from scottandrew.com
function addEvent(obj, evType, fn){
  if (obj.addEventListener){
    obj.addEventListener(evType, fn, true);
    return true;
  } else if (obj.attachEvent){
    var r = obj.attachEvent("on"+evType, fn);
    return r;
  } else {
    return false;
  }
}