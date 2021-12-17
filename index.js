

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
   .then((result) => { 
      searchResultInArray = search;
      // console.log(searchResultInArray);
      return result
   })
}
// Event Listener(s)
searchForm.addEventListener('submit', search)



function createResultsBox() {
   resultsBox = document.querySelector('#searchResults');
   resultsBox.foreach(async function(){
      
   })

}

resultsBox = document.querySelector('#searchResults');

