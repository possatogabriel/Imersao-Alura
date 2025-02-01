const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("artist-container");
const resultPlaylist = document.getElementById('playlist-container');

let i = 0;

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm));
}

function displayResults(result, searchTerm) {
    resultPlaylist.classList.add("hidden");
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Limpa os resultados anteriores    

    const filteredArtists = result.filter(artist => artist.name.toLowerCase().includes(searchTerm));


  filteredArtists.forEach(artist => {    
      const artistCard = document.createElement('div');
      artistCard.classList.add('artist-card');

      artistCard.innerHTML = `
          <div class="card-img">
              <img class="artist-img" src="${artist.urlImg}" />
              <div class="play">
                  <span class="fa fa-solid fa-play"></span>
              </div>
          </div>
      <div class="card-text">              
              <span class="artist-name">${artist.name}</span>
              <span class="artist-category">Artista</span>
          </div>
      `;
       gridContainer.appendChild(artistCard);
  });

  resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
});

function mudarCor() {
    let prop1 = "--color-background";
    let prop2 = "--color-tabs";
    let prop3 = "--color-cards";
    let prop4 = "--color-cards_hover";
    let prop5 = "--color-playlist";
    let prop6 = "--color-arrows";
    let prop7 = "--color-arrows_hover";
    let prop8 = "--color-artist_hover";
    let prop9 = "--color-plus_hover";
    let prop10 = "--color-input";
    let prop11 = "--color-input_border";
    let prop12 = "--color-gradient";
    let prop13 = "--color-artist-category";

    i++;

    // VERMELHO
    if (i == 1) {
        document.documentElement.style.setProperty(prop1, "#350101");
        document.documentElement.style.setProperty(prop2, "#6c0202");
        document.documentElement.style.setProperty(prop3, "#932626");
        document.documentElement.style.setProperty(prop4, "#973636");
        document.documentElement.style.setProperty(prop5, "#dc3939");
        document.documentElement.style.setProperty(prop6, "#350101");
        document.documentElement.style.setProperty(prop7, "#731f1f");
        document.documentElement.style.setProperty(prop8, "#6d1212");
        document.documentElement.style.setProperty(prop9, "#7e1b1b");
        document.documentElement.style.setProperty(prop10, "#932626");
        document.documentElement.style.setProperty(prop11, "#f15151");
        document.documentElement.style.setProperty(prop12, "linear-gradient(to left, #c50c0c, #dc3939)");
        document.documentElement.style.setProperty(prop13, "#6a6a6a");
    }

    // VERDE 
    else if (i == 2) {
        document.documentElement.style.setProperty(prop1, "#146d33");
        document.documentElement.style.setProperty(prop2, "#1f8643");
        document.documentElement.style.setProperty(prop3, "#35ac5f");
        document.documentElement.style.setProperty(prop4, "#3ec66e");
        document.documentElement.style.setProperty(prop5, "#32b660");
        document.documentElement.style.setProperty(prop6, "#125f2c");
        document.documentElement.style.setProperty(prop7, "#1f723d");
        document.documentElement.style.setProperty(prop8, "#31c063");
        document.documentElement.style.setProperty(prop9, "#2dad5a");
        document.documentElement.style.setProperty(prop10, "#35ac5f");
        document.documentElement.style.setProperty(prop11, "#0f4b23");
        document.documentElement.style.setProperty(prop12, "linear-gradient(to left, #013915, #02af3f)");
        document.documentElement.style.setProperty(prop13, "#3c3c3c");
    }

    // AZUL
    else if (i == 3) {
        document.documentElement.style.setProperty(prop1, "#0d0c13");
        document.documentElement.style.setProperty(prop2, "#1b1625");
        document.documentElement.style.setProperty(prop3, "#322e4c");
        document.documentElement.style.setProperty(prop4, "#4d486d");
        document.documentElement.style.setProperty(prop5, "#47445e");
        document.documentElement.style.setProperty(prop6, "#343146");
        document.documentElement.style.setProperty(prop7, "#4c4861");
        document.documentElement.style.setProperty(prop8, "#2e263d");
        document.documentElement.style.setProperty(prop9, "#392e4e");
        document.documentElement.style.setProperty(prop10, "#322e4c");
        document.documentElement.style.setProperty(prop11, "#766da9");
        document.documentElement.style.setProperty(prop12, "linear-gradient(to left, #231b33, #595574)");
        document.documentElement.style.setProperty(prop13, "#6a6a6a");
    }

    else {
        i = 0;

        document.documentElement.style.setProperty(prop1, "#000000");
        document.documentElement.style.setProperty(prop2, "#0a0a0a");
        document.documentElement.style.setProperty(prop3, "#232323");
        document.documentElement.style.setProperty(prop4, "#313131");
        document.documentElement.style.setProperty(prop5, "#494848");
        document.documentElement.style.setProperty(prop6, "#262424");
        document.documentElement.style.setProperty(prop7, "#3c3a3a");
        document.documentElement.style.setProperty(prop8, "#201f1f");
        document.documentElement.style.setProperty(prop9, "#313131");
        document.documentElement.style.setProperty(prop10, "#313131");
        document.documentElement.style.setProperty(prop11, "#838383");
        document.documentElement.style.setProperty(prop12, "linear-gradient(to left, #000000, #6e6c6c)");
        document.documentElement.style.setProperty(prop13, "#3c3c3c");
    }
}