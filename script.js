const form = document.getElementById('form')
const content = document.getElementById('movies')
const input = document.getElementById('searchMovie')
const MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?api_key=3ab8ef4daaab566f487cfd328b160b3d&language=en-US&page=1'
const moviesImg = 'https://image.tmdb.org/t/p/w500/'
const mainContent = document.getElementById('main')
const movieCard = document.getElementsByClassName('card')
const monsterHunterTeaser='https://api.adjaranet.com/api/v1/trailers/2342713/files?source=adjaranet'
const redDot='https://api.adjaranet.com/api/v1/trailers/2344511/files?source=adjaranet'
const moviesArr=[
    monsterHunterTeaser,
    redDot
]
console.log(moviesArr);

async function getMovies() {
    try {
        let moviesUrl = await fetch(MOVIES_API)
        let moviesArr = await moviesUrl.json()
        console.log(moviesArr.results[0]);
        showMovies(moviesArr)
    } catch (err) {
        console.log(new Error())
    }

}getMovies()

function showMovies(url) {
    let html = ''
    url.results.forEach(movies => {

        html += `  <div class="card">
              <img class=chosenImg src=${moviesImg}${movies.poster_path}>
              <img src= ${moviesImg}${movies.backdrop_path}>
              <h2 >${movies.title}</h2>
              <p>${movies.overview}</p>
                </div>`
    })
    content.innerHTML = html
    showSingleMovies()
}
function showSingleMovies() {
    let body= document.body
    let previewMovie = ''
    for (let item of movieCard) {
        item.addEventListener('click', () => {
            previewMovie = `<img class="poster" src='${item.childNodes[1].currentSrc}'>
                          <div class="text">
                            <h2 class="title">${item.childNodes[5].innerHTML}</h2>
                            <p  class="overview">${item.childNodes[7].innerHTML}</p>
                            <video src=${monsterHunterTeaser} controls></video>
                          </div>`
            body.style.backgroundImage=`url(${item.childNodes[3].currentSrc})`
            mainContent.innerHTML = previewMovie
        })
    }
}
form.addEventListener('input', (e) => {
    e.preventDefault()
    const inputValue = input.value.toLowerCase()
    for (let item of movieCard) {
        let movieTitle = item.childNodes[3].innerHTML.toLowerCase()
        if (movieTitle.includes(inputValue)) {
            content.style.alignItems = 'center'
            content.style.justifyContent = 'center'
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    }
})


