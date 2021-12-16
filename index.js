

let base_URL = 'https://musicbrainz.org/ws/2/release?query='
const brewList = document.getElementById('search-list');
const searchForm = document.querySelector('.searchForm');

// Info brought over from html/css

const searchBar = document.querySelector('.submitButton').value;
// const searchBarValue = searchBar.value



// function getTracksByTitle(title){
//    fetch(base_UR + " " + title, {
//       // headers: 'Access-Control-Allow-Origin'
//    })
//    .then(resp => resp.json())
//    // .then(tracks => { console.log(tracks)});
// }

// // Event Listeners

function search(e) {
   e.preventDefault();

   let query = document.querySelector('#search-Input')
   let queryValue = query.value
   console.log(queryValue)

   searchForm.reset();

   fetch(`https://musicbrainz.org/ws/2/release/?query=${queryValue}&fmt=json`)
   .then(resp => resp.json())
   .then(result => console.log(result))
}

searchForm.addEventListener('submit', search);

// Changes XML to JSON
// function xmlToJson(xml) {
	
// 	// Create the return object
// 	var obj = {};

// 	if (xml.nodeType == 1) { // element
// 		// do attributes
// 		if (xml.attributes.length > 0) {
// 		obj["@attributes"] = {};
// 			for (var j = 0; j < xml.attributes.length; j++) {
// 				var attribute = xml.attributes.item(j);
// 				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
// 			}
// 		}
// 	} else if (xml.nodeType == 3) { // text
// 		obj = xml.nodeValue;
// 	}

// 	// do children
// 	if (xml.hasChildNodes()) {
// 		for(var i = 0; i < xml.childNodes.length; i++) {
// 			var item = xml.childNodes.item(i);
// 			var nodeName = item.nodeName;
// 			if (typeof(obj[nodeName]) == "undefined") {
// 				obj[nodeName] = xmlToJson(item);
// 			} else {
// 				if (typeof(obj[nodeName].push) == "undefined") {
// 					var old = obj[nodeName];
// 					obj[nodeName] = [];
// 					obj[nodeName].push(old);
// 				}
// 				obj[nodeName].push(xmlToJson(item));
// 			}
// 		}
// 	}
// 	return obj;
// };

// xmlToJson(h);

