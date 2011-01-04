/* 
   a mesh of two different blockquote citation
   display scipts.
   
   Credit to:
   Simon Willison
    http://simon.incutio.com/archive/2002/12/20/#blockquoteCitations
   Paul Hammond
    http://www.paranoidfish.org/boxes/2002/12/20/
*/
addEvent(window, "load", extractBlockquoteCitations);

function extractBlockquoteCitations() {
	if (document.getElementsByTagName && document.createElement && document.createTextNode) {
		quotes = document.getElementsByTagName('blockquote');
		urlReg = /^(http:\/\/)(.*)$/;
		
		for (i = 0; i < quotes.length; i++) {
			cite = quotes[i].getAttribute('cite');
			if (cite != '') {
				//create the div.blockquotesource element
				newdiv = document.createElement('div');
				newdiv.className = 'blockquotesource';
				
				//determine if the citation is a url or not
				if (urlReg.test(cite)) {
					//yes: create a link to the url
						
					//create the anchor element
					newlink = document.createElement('a');
					newlink.setAttribute('href', cite);
					newlink.setAttribute('title', cite);
					newlink.appendChild(document.createTextNode('Source'));
					//put the link inside the div
					newdiv.appendChild(newlink);
				} else {
					//no: simply display the source. gracefully degrads for browsers that don't support RegExp
					newdiv.appendChild(document.createTextNode(cite));
				}
				
				//apend the whole thing to the blockquote
				quotes[i].appendChild(newdiv);
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