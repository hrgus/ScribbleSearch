
let results = []


document.addEventListener('DOMContentLoaded', function() {

   const searchForm = document.querySelector('#searchForm');

   function searchForSong(e){
      e.preventDefault();
   
      let query = document.querySelector('#search-Input');
      let queryValue = query.value;
      searchForm.reset();
   
      fetch(`https://musicbrainz.org/ws/2/release/?query=${queryValue}&fmt=json`)
      .then(resp => resp.json())
      .then((respObj) => { 
         respArray = respObj['releases'];
         
         results = respArray;

         let songCardsContainer = document.querySelector('#songCardsContainer');
         songCardsContainer.innerHTML = " ";
         // console.log(respArray);
         respArray.forEach(result => createSongCard(result));
      })
      .catch(function(error) {
         if(resp === " "){
            const errorMessageHome = document.createElement('div');
            errorMessageHome.id('errorMessageHome');

            const errorMessage = document.createElement('p');
            errorMessage.id('errorMessage');
            errorMessage.textContent = error;
            errorMessageHome.appendChild(errorMessage);
            document.appendChild(errorMessageHome);
            console.log(error);
         } 
         
      })
   }
   
   searchForm.addEventListener('submit', searchForSong)
   
   const buttonToSort = document.getElementById('buttonToSort');
   buttonToSort.addEventListener('click', function(e) {
      // console.log(results);
      
      console.log(results.sort((a,b) => (a.date.slice(0,3) - b.date.slice(0,3))) );

   })

   function createSongCard(result) {
      const saveSongBtn = document.createElement('button');
         saveSongBtn.setAttribute('class', 'saveSongBtn')
         saveSongBtn.textContent = '+';
         saveSongBtn.addEventListener('click', clearSongCardsContainer)

      let releaseDate = document.createElement('p');
         releaseDate.textContent = 'Release Date: ' + result.date;

      let songTitle = document.createElement('p');
         songTitle.textContent = 'Song Title: ' + result.title;

      let artistName = document.createElement('h4');
         artistName.textContent = result['artist-credit'][0].artist.name + "  "; 
         
      let songList = document.createElement('li');
         songList.className = 'song';
         songList.textContent = artistName.innerText;

      let songCard = document.createElement('ul');
         songCard.className = 'songCard'
         songCard.appendChild(saveSongBtn);
         songList.appendChild(songTitle);
         songList.appendChild(releaseDate);
         songCard.appendChild(songList);
         
      let songCardHouse = document.createElement('div');
         songCardHouse.setAttribute('class', 'songCardHouseDiv');
         songCardHouse.appendChild(songCard);
         songCardHouse.appendChild(saveSongBtn);

      let songCardsContainer = document.querySelector('#songCardsContainer');
         songCardsContainer.appendChild(songCardHouse);

      let body = document.querySelector('body');
         body.appendChild(songCardsContainer);

      let savedSongsList = songCardHouse.cloneNode(true);
         savedSongsList.className = 'savedSongsList';


      
      function createSavedSongsList(e) {
         let savedSongsContainer = document.querySelector('#savedSongs');
            savedSongsContainer.appendChild(savedSongsList);

         const unSaveSongBtn = document.createElement('button');

         const btnToKill = savedSongsList.childNodes[1];
            btnToKill.parentNode.removeChild( btnToKill );
            unSaveSongBtn.className = 'unsavedSongBtn';
            unSaveSongBtn.textContent = "-";
           
            unSaveSongBtn.addEventListener('click', (e) => unSaveSongFunc(btnToKill));
            savedSongsList.appendChild(unSaveSongBtn);
        
         function unSaveSongFunc(btn) {
            savedSongsList.removeChild(unSaveSongBtn);
            savedSongsList.appendChild(btn)

            savedSongsContainer.removeChild(savedSongsList);
            songCardsContainer.prepend(songCardHouse);
         }
   
      }
      function clearSongCardsContainer(e) {
         songCardsContainer.removeChild(songCardHouse);
         createSavedSongsList(e);
   
      }
      
   }      

})


