
let page2conten=document.getElementById('page2content')
let page2contenList=document.getElementById('infoList')

const form = document.getElementById('form')
const content = document.getElementById('movies')
const input = document.getElementById('searchMovie')
const MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?api_key=3ab8ef4daaab566f487cfd328b160b3d&language=en-US&page=1'
const moviesImg = 'https://image.tmdb.org/t/p/w500/'
const mainContent = document.getElementById('main')
const movieCard = document.getElementsByClassName('card')
const singleMovieArr=document.getElementsByClassName('singleMovie')


async function addMovies() {
    try {
        let moviesUrl = await fetch(MOVIES_API)
        let moviesArr = await moviesUrl.json()
        showMovies(moviesArr)
    } catch (err) {
        console.log(new Error())
    }
} addMovies()


 async function showMoviesList(){
     let movieInfo= await fetch('./db.json')
     let moviesList= await movieInfo.json()
     let html2=''
     for (let item of moviesList.movies){
         html2+=`<img src='${moviesImg}${item.poster_path}'/>`
         content.innerHTML=html2
         console.log(item);
     }
     console.log(moviesList.movies);

 }showMoviesList()




function showMovies(url) {
    let html = ''
    url.results.forEach(movies => {
        html +=`<ul class="singleMovie">
                <li>${movies.id}</li>
                <li>${moviesImg}${movies.poster_path}</li>
                <li>${moviesImg}${movies.backdrop_path}</li>
                <li>${movies.title}</li>
                <li>${movies.overview}</li>
                <li>${movies.video}</li>
                </ul>
               `
    })
    page2conten.innerHTML = html

}

// function showSingleMovies() {
//     let body= document.body
//     let previewMovie = ''
//     for (let item of movieCard) {
//         item.addEventListener('click', () => {
//             let moviesImg=document.querySelectorAll('.moviesImg')
//             previewMovie = `<img class="poster" src='${item.childNodes[1].currentSrc}'>
//                           <div class="text">
//                             <h2 class="title">${item.childNodes[5].innerHTML}</h2>
//                             <p  class="overview">${item.childNodes[7].innerHTML}</p>
//                      <video src="${item.childNodes[9].innerHTML}" controls></video>
//                           </div>`
//             body.style.backgroundImage=`url(${item.childNodes[3].currentSrc})`
//             mainContent.innerHTML = previewMovie
//             content.style.height='22vh'
//             moviesImg.forEach(img  =>{
//                 img.style.width='10rem'
//             })
//
//         })
//     }
// }

// form.addEventListener('input', (e) => {
//     e.preventDefault()
//     const inputValue = input.value.toLowerCase()
//     for (let item of movieCard) {
//         let movieTitle = item.childNodes[5].innerHTML.toLowerCase()
//         if (movieTitle.includes(inputValue)) {
//             content.style.alignItems = 'center'
//             content.style.justifyContent = 'center'
//             item.style.display = 'block'
//          if(inputValue===''){
//
//          }
//         } else {
//             item.style.display = 'none'
//         }
//     }
// })
