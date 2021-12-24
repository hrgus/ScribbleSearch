
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
   // const body = document.querySelector('#body');
   // const for selecting the Div that contains the <ol>
   // const resultsDiv = document.querySelector('#resultsDiv');
   
   // const for selecting the <ol> which contains the <li> items 
   const resultsOl = document.querySelector('#resultsOl');
   
   //const for creating <li> items
   const resultsListItem = document.createElement('li');
   // Appending each <li> to the <ol>
   resultsOl.appendChild(resultsListItem);
   // const for creating the <h4> for each <li> item
   const resultsListItemHead = document.createElement('h4');
   // assigning the textContent of the <h4> Elements
   resultsListItemHead.textContent = resultObj.title;
   // Appending the <h4> to the <li> items
   resultsListItem.appendChild(resultsListItemHead);
   // const for creating the <p> for each <li> item
   const resultsParagraph = document.createElement('p');
   // assigning the textContent of the <p> Elements
   resultsParagraph.textContent = '- ' + resultObj['artist-credit'][0].artist.name;
   // Appending the <p> the <li> Element
   resultsListItem.appendChild(resultsParagraph);
 
   // resultsDiv.appendChild(resultsListItemHead);
 
   // resultsDiv.appendChild(resultsParagraph); 
   
}
// renderSongInfoBox();

// Event Listener(s)
//-------------------------------------------
   searchForm.addEventListener('submit', search)
   searchTypeBtn.addEventListener('click', search)

//-------------------------------------------




