/*
* blockquotes.js
*
* Simon Willison, 20th December 2002
*
* Explanation: 
*   http://simon.incutio.com/archive/2002/12/20/#blockquoteCitations
* Inspired by Adrian Holovaty: 
*   http://www.holovaty.com/blog/archive/2002/12/20/0454
* Alternative implementation of the same idea by Paul Hammond: 
*   http://www.paranoidfish.org/boxes/2002/12/20/
*/

function extractBlockquoteCitations() {
  quotes = document.getElementsByTagName('blockquote');
  for (i = 0; i < quotes.length; i++) {
    cite = quotes[i].getAttribute('cite');
    if (cite != '') {
      newlink = document.createElement('a');
      newlink.setAttribute('href', cite);
      newlink.setAttribute('title', cite);
      newlink.appendChild(document.createTextNode('Source'));
      newdiv = document.createElement('div');
      newdiv.className = 'blockquotesource';
      newdiv.appendChild(newlink);
      quotes[i].appendChild(newdiv);
    }
  }
}

window.onload = extractBlockquoteCitations;