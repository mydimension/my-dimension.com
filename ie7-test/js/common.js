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

function clickableMasthead() {
	if (document.getElementById) {
		var masthead = document.getElementById("masthead");
		if (document.all) { // IE5.x does not understand 'pointer' as a cursor type
			masthead.style.cursor = "hand";
		} else {
			masthead.style.cursor = "pointer";
		}
		addEvent(masthead, "click", function() { document.location = '/'; });
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
	
addEvent(window, "load", extractBlockquoteCitations);
addEvent(window, "load", clickableMasthead);

if (window.attachEvent) {
	//window.attachEvent("onload", function () { document.recalc(); });
}
