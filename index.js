
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
  
   
   //-----------------------------------------
   
   // Button options list for what type of content you are searching
   //-----------------------------------------
   
   //-----------------------------------------
   
   
   
   function searchOptionsFunc(){
      let optionEl1 = document.createElement('OPTION');
      let optionEl2 = document.createElement('OPTION');
      let optionEl3 = document.createElement('OPTION');
      
      optionEl1.textContent = "Artist"
      optionEl2.textContent = "Album"
      optionEl3.textContent = "Song"
      
      searchOptions.appendChild(optionEl1);
      searchOptions.appendChild(optionEl2);
searchOptions.appendChild(optionEl3);

}

function search(e) {
   e.preventDefault();
   
   let query = document.querySelector('#search-Input');
   let queryValue = query.value
   console.log('what was searched:', queryValue)
   
   searchForm.appendChild(searchOptions);
   
   searchForm.reset();
   
   fetch(`https://musicbrainz.org/ws/2/release/?query=${queryValue}&fmt=json`)
   .then(resp => resp.json())
   .then((results) => {results.forEach(results => renderSongInfoBox(results))})
   // console.log(result);
   // console.log(result['releases']); 
}

function renderSongInfoBox(results) {
   
   const resultsBox = document.createElement('div');
   const resultsBoxHead = document.createElement('h2');
   const resultsContainer = document.createElement('p');

   
   resultsBox.className = "resultBox"
   resultsBoxHead.textContent = "Search Result:";
   resultsContainer.textContent = results;
   resultsBox.appendChild(resultsBoxHead);
   resultsBox.appendChild(resultsContainer); 

}
// renderSongInfoBox();

// Event Listener(s)
//-------------------------------------------
   searchForm.addEventListener('submit', search)
   searchTypeBtn.addEventListener('click', search)

//-------------------------------------------




