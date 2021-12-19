
const brewList = document.getElementById('search-list');

// Info brought over from html/css
//-----------------------------------------
   // Divs declared as variables
   const searchResultContainer = document.querySelector('#searchResultContainer');
   const searchForm = document.querySelector('#searchForm');
   const searchBar = document.querySelector('#searchSubmitButton').value;
   const searchTypeBtn = document.querySelector('#searchTypeBtn');
   const searchOptions = document.createElement('select', '#selectOptions');
   
   
//-----------------------------------------

// Button options list for what type of content you are searching
//-----------------------------------------
   
//-----------------------------------------
function renderSongInfoBox(resultArray) {
   resultsBox.textContent(resultArray)

}

function searchOptions
let optionEl1 = document.createElement('OPTION');
let optionEl2 = document.createElement('OPTION');
let optionEl3 = document.createElement('OPTION');

optionEl1.textContent = "Artist"
optionEl2.textContent = "Album"
optionEl3.textContent = "Song"

searchOptions.appendChild(optionEl1);
searchOptions.appendChild(optionEl2);
searchOptions.appendChild(optionEl3);


function search(e) {
   e.preventDefault();


   
   let query = document.querySelector('#search-Input');
   let queryValue = query.value
   console.log('what was searched:', queryValue)
   
   searchForm.appendChild(searchOptions);

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
   searchTypeBtn.addEventListener('click', search)

//-------------------------------------------




