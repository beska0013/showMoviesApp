const form = document.getElementById('form')
const content = document.getElementById('movies')
const input = document.getElementById('searchMovie')
const MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?api_key=3ab8ef4daaab566f487cfd328b160b3d&language=en-US&page=1'
const moviesImg = 'https://image.tmdb.org/t/p/w500/'
const BASE_API='http://localhost:3000/movies'
const mainContent = document.getElementById('main')
const movieCard = document.getElementsByClassName('card')




async function addMovies() {
    try {
        let moviesUrl = await fetch(MOVIES_API)
        let moviesArr = await moviesUrl.json()
        const response=await  fetch(BASE_API,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(moviesArr.results)
        })
        // showMovies(moviesArr)
    } catch (err) {
        console.log(new Error())
    }
}addMovies()


async function getMovies(){
    let urlMovies=await fetch(BASE_API)
    let arrMovies=await urlMovies.json()
    let moviesList=arrMovies[1]
    showMovies(moviesList)
    console.log(moviesList);
}getMovies()



function showMovies(url) {
    let html = ''
    url.forEach(movies => {
        html += `  <div class="card">
              <img class="moviesImg" src=${moviesImg}${movies.poster_path}>
              <img class="postrerImage" src= ${moviesImg}${movies.backdrop_path}>
              <h2 >${movies.title}</h2>
              <p>${movies.overview}</p>
              <p>${movies.video}</p>
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
            let moviesImg=document.querySelectorAll('.moviesImg')
            previewMovie = `<img class="poster" src='${item.childNodes[1].currentSrc}'>
                          <div class="text">
                            <h2 class="title">${item.childNodes[5].innerHTML}</h2>
                            <p  class="overview">${item.childNodes[7].innerHTML}</p>
                     <video src="${item.childNodes[9].innerHTML}" controls></video>
                          </div>`
            body.style.backgroundImage=`url(${item.childNodes[3].currentSrc})`
            mainContent.innerHTML = previewMovie
            content.style.height='22vh'
            moviesImg.forEach(img  =>{
                img.style.width='10rem'
            })

        })
    }
}
form.addEventListener('input', (e) => {
    e.preventDefault()
    const inputValue = input.value.toLowerCase()
    for (let item of movieCard) {
        let movieTitle = item.childNodes[5].innerHTML.toLowerCase()
        if (movieTitle.includes(inputValue)) {
            content.style.alignItems = 'center'
            content.style.justifyContent = 'center'
            item.style.display = 'block'
         if(inputValue===''){

         }
        } else {
            item.style.display = 'none'
        }
    }
})
