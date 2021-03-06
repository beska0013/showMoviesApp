
let page2conten=document.getElementById('page2content')


const form = document.getElementById('form')
const content = document.getElementById('movies')
const input = document.getElementById('searchMovie')
const MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?api_key=3ab8ef4daaab566f487cfd328b160b3d&language=en-US&page=1'
const moviesImg = 'https://image.tmdb.org/t/p/w500/'
const mainContent = document.getElementById('main')
const poster=document.getElementsByClassName('poster')
const btnRight=document.getElementById('rightBtn')
const btnLeft=document.getElementById('leftBtn')


async function showMoviesList(){
     let movieInfo= await fetch('./db.json')
     let moviesList= await movieInfo.json()
     let html=''
     for (let item of moviesList.movies){
         html+=`  <div class="card">
                <img class="poster" src='${moviesImg}${item.poster_path}'/>
                 <div class="collapse">
                 <img src='${moviesImg}${item.backdrop_path}'>
                 <h2>${item.title}</h2>
                 <p>${item.overview}</p>
                 <p>${item.video}</p>
                    </div>
                    </div>
                `
         content.innerHTML=html
     }
     const moviePosters=content.children
     showSingleMovies(moviePosters)
     console.log(moviePosters);
 }
 showMoviesList()

btnRight.addEventListener('click',()=>{
    content.scrollLeft+=475
})

btnLeft.addEventListener('click',()=>{
    content.scrollLeft-=475
})


function showSingleMovies(url1) {
    let body= document.body
    let previewMovie = ''
    for(let item of url1){
        let itemImg=item.children[0]
        let itemText=item.children[1]
        // console.log(itemText.children);
        item.addEventListener('click', () => {
            previewMovie = `<img class="singlePoster" src=${itemImg.src}>
                               <div>
                              <h2>${itemText.children[1].innerHTML}</h2>
                              <p>${itemText.children[2].innerHTML}</p>
                              <video src=${itemText.children[3].innerHTML} controls></video>
                                </div>
                                `
            body.style.backgroundImage=`url(${itemText.children[0].src})`
            mainContent.innerHTML = previewMovie
            content.style.height='22vh'


            // body.style.backgroundImage=`url(${url2.backdrop_path})`
        })}
}

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
