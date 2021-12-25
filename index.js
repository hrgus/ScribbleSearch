
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
  
   const refreshResultBtn = document.querySelector('#refreshResultBtn');


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
      console.log(resultsArray);
      return resultsArray.forEach(renderSongInfoBox);
   } )
   
   
}


// const for selecting the body
const body = document.querySelector('#body');
// const for selecting the Div that contains the <ol>
const resultsDiv = document.createElement('Div');
resultsDiv.setAttribute("id", "resultsDiv");
const refreshResultBtnEl = document.createElement('button');
refreshResultBtnEl.setAttribute("id", "refreshResultBtn");
refreshResultBtnEl.textContent = "Refresh";
resultsDiv.appendChild(refreshResultBtnEl);
const resultsOlEl = document.createElement('ol');
resultsOlEl.setAttribute("id", "resultsOl");
resultsDiv.appendChild(resultsOlEl);
body.appendChild(resultsDiv);


function renderSongInfoBox(resultObj) {
   
   // const for selecting the <ol> which contains the <li> items 
   // const resultsOl = document.querySelector('#resultsOl');

   const unSavedIcon = document.createElement('Button') 
   unsa 
   "\u002B";

   //const for creating <li> items
   const resultsListItem = document.createElement('li');
   // Appending each <li> to the <ol>
   resultsOlEl.appendChild(resultsListItem);
   // const for creating the <h4> for each <li> item
   const resultsListItemHead = document.createElement('h4');
   resultsListItemHead.setAttribute("id", "resultListItemH4")
   // assigning the textContent of the <h4> Elements
   resultsListItemHead.textContent = resultObj.title + " " + unSavedIcon;
   // Appending the <h4> to the <li> items
   resultsListItem.appendChild(resultsListItemHead);
   // const for creating the <p> for each <li> item
   const resultsParagraph = document.createElement('p');
   resultsParagraph.setAttribute("id", "resultListItemP");
   // assigning the textContent of the <p> Elements
   resultsParagraph.textContent = '- ' + resultObj['artist-credit'][0].artist.name;
   // Appending the <p> the <li> Element
   resultsListItem.appendChild(resultsParagraph);

   // function reset 
   
}



// Event Listener(s)
//-------------------------------------------
   searchForm.addEventListener('submit', search)
   searchTypeBtn.addEventListener('click', search)
   refreshResultBtnEl.addEventListener('click', function(e) {
      console.log(resultsDiv);
      // delete(resultsDiv);
   })
//-------------------------------------------




