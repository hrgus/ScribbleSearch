
const brewList = document.getElementById('search-list');

// Info brought over from html/css
//-----------------------------------------
// Divs declared as variables
   const searchResultContainer = document.querySelector('#searchResultContainer');
   const searchForm = document.querySelector('#searchForm');
   const searchBar = document.querySelector('#searchSubmitButton').value;
   const searchBox = document.querySelector('#searchBox');
   const searchTypeBtn = document.querySelector('#searchTypeBtn');
   const searchOptions = document.createElement('select', '#selectOptions');
  
   


function search(e) {
   e.preventDefault();
   
   let query = document.querySelector('#search-Input');
   let queryValue = query.value;
   console.log('what was searched:', queryValue)
   
   searchForm.appendChild(searchOptions);
   
   searchForm.reset();
   
   fetch(`https://musicbrainz.org/ws/2/release/?query=${queryValue}&fmt=json`)
   .then(results => results.json())
   .then((resultsObj) => {
      // console.log(resultsObj)
      resultsArray = resultsObj['releases'];
      return resultsArray.forEach(renderSongInfoBox);
      
   })
   // console.log(results);
   // console.log(result['releases']); 
}

function renderSongInfoBox(resultObj) {
 
   // const for selecting the body
   const body = document.querySelector('#body');
   // const for creating the 
   const resultsDiv = document.createElement('div');
   body.appendChild(resultsDiv);

   const resultsBoxHead = document.createElement('h2');
   
   const resultsContainer = document.createElement('p');
  
   resultsBox.className = "resultBox";
   
   resultsBoxHead.textContent = resultObj.title;
  
   resultsContainer.textContent = resultObj['artist-credit'][0].artist.name;
 
   resultsBox.appendChild(resultsBoxHead);
 
   resultsBox.appendChild(resultsContainer); 

}
// renderSongInfoBox();

// Event Listener(s)
//-------------------------------------------
   searchForm.addEventListener('submit', search)
   searchTypeBtn.addEventListener('click', search)

//-------------------------------------------




