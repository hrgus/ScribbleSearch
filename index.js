
const brewList = document.getElementById('search-list');

// Info brought over from html/css
//-----------------------------------------
   // Divs declared as variables
   const searchResultContainer = document.querySelector('#searchResultContainer');
   const searchForm = document.querySelector('#searchForm');
   const searchBar = document.querySelector('#searchSubmitButton').value;
   const searchTypeBtn = document.querySelector('#searchTypeBtn');

//-----------------------------------------

// Button options list for what type of content you are searching
//-----------------------------------------
   
//-----------------------------------------
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
      console.log(result);
      console.log(result['releases']['0']['artist-Credit']['0']['artist']['sort-name']);
      // return result;
   })
}

// Event Listener(s)
//-------------------------------------------
   searchForm.addEventListener('submit', search)


//-------------------------------------------




