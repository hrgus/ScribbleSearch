
const savedSongsList = document.createElement('ul');
const saveSongBtn = document.createElement('button');
   saveSongBtn.textContent = "+";

function createSavedSongsList(e) {

}

saveSongBtn.addEventListener('click', createSavedSongsList)

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
   let releaseDate = document.createElement('p');
      releaseDate.textContent = 'Release Date: ' + result.date;
   let songTitle = document.createElement('p');
      songTitle.textContent = 'Song Title: ' + result.title;
   let artistName = document.createElement('h4');
      artistName.textContent = result['artist-credit'][0].artist.name;  
   let songList = document.createElement('li');
      songList.className = 'song';
   let songCard = document.createElement('ul');
	   songCard.className = 'songCard'
      songCard.appendChild(songList);
      songList.textContent = artistName.innerText + "  ";
      songCard.appendChild(saveSongBtn);
      songList.appendChild(songTitle);
      songList.appendChild(releaseDate);
   let songCardHouse = document.createElementNS('div');
      songCardHouse.setAttribute('id', 'songCardHouseDiv');
      songCardHouse.appendChild(songCard);
   let body = document.querySelector('body');
      body.appendChild(songCardHouse);
}





// const charactersList = document.getElementById('charactersList');
// const searchBar = document.getElementById('searchBar');
// let hpCharacters = [];

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();

//     const filteredCharacters = hpCharacters.filter((character) => {
//         return (
//             character.name.toLowerCase().includes(searchString) ||
//             character.house.toLowerCase().includes(searchString)
//         );
//     });
//     displayCharacters(filteredCharacters);
// });

// const loadCharacters = async () => {
//     try {
//         const res = await fetch('https://musicbrainz.org/ws/2/release/?query=${queryValue}&fmt=json');
//         hpCharacters = await res.json();
//         displayCharacters(hpCharacters);
//     } catch (err) {
//         console.error(err);
//     }
// };

// const displayCharacters = (characters) => {
//     const htmlString = characters
//         .map((character) => {
//             return `
//             <li class="character">
//                 <h2>${character.name}</h2>
//                 <p>House: ${character.house}</p>
//                 <img src="${character.image}"></img>
//             </li>
//         `;
//         })
//         .join('');
//     charactersList.innerHTML = htmlString;
// };

// loadCharacters();
