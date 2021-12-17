

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

resultsBox = document.querySelector('#searchResults');


function renderSongInfoBox(resultArray) {
   resultsBox.textContent(resultArray)

}

function search(e) {
   e.preventDefault();

   let query = document.querySelector('#search-Input')
   let queryValue = query.value
   console.log('what was searched:', queryValue)

   searchForm.reset();

   fetch(`https://musicbrainz.org/ws/2/release/?query=${queryValue}&fmt=json`)
   .then(resp => resp.json())
   .then((result) => { 
      // console.log('result:', result);
      const resultAsString = JSON.stringify(result);
      // console.log('resultAsString:', resultAsString);

      let newArray = resultAsString.split('');

      // const obj = [];

      // for (let key of resultAsString) {
      //    obj.push(key)
      // }
      console.log(newArray);
   })
}
// Event Listener(s)
searchForm.addEventListener('submit', search)

// function createResultsBox(resultAsArray) {
//    resultsBox = document.querySelector('#searchResults');
//    resultAsArray.foreach(function(){
//       resultsBox.textContent()
//    })

// }


