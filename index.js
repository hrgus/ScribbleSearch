



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
      console.log(respArray);
      respArray.forEach(result => createSongCard(result));
	})
   .catch((error) => console.log(error))
}

searchForm.addEventListener('submit', searchForSong)

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
   function createSavedSongsList() {
      let savedSongsContainer = document.querySelector('#savedSongs');
         savedSongsContainer.appendChild(savedSongsList);
      const unSaveSongBtn = document.createElement('button');
         unSaveSongBtn.className = 'unsavedSongBtn';
         unSaveSongBtn.textContent = "-";
         unSaveSongBtn.addEventListener('click', unSaveSongFunc);
         savedSongsList.appendChild(unSaveSongBtn);
      const postNoteBtn = document.createElement('button');
         postNoteBtn.setAttribute('class', 'postNoteBtn')
         postNoteBtn.textContent = 'post';
         postNoteBtn.addEventListener('keyup', createNoteBook)
   
      const addNoteToCard = document.createElement('input');
         addNoteToCard.setAttribute('class', 'note');
         savedSongsList.appendChild(addNoteToCard);
         savedSongsList.appendChild(postNoteBtn);
      function createNoteBook(){
         const note = document.createElement('p');
            note.setAttribute('class', 'note');
            note.textContent = addNoteToCard.value;
         const noteBook = document.createElement('div');
            noteBook.setAttribute('class', 'noteBook');
         noteBook.appendChild(note);
         savedSongsList.appendChild(noteBook);
      }
      function unSaveSongFunc() {
         savedSongsList.innerHTML = " ";
         savedSongsContainer.removeChild(savedSongsList);
         songCardsContainer.prepend(songCardHouse);
      }

   }
   function clearSongCardsContainer() {
      // songCardHouse.innerHTML = " ";
      songCardsContainer.removeChild(songCardHouse);
      createSavedSongsList()

   }
   
}

// const savedSongsList = document.createElement('ul');


