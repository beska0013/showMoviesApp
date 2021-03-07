
 const content = document.getElementById('movies')
const form = document.getElementById('form')
const input = document.getElementById('searchMovie')
const moviesImg = 'https://image.tmdb.org/t/p/w500/'
const poster=document.getElementsByClassName('poster')
const mainContent = document.getElementById('mainContent')



 async function showMoviesList(){
     let movieInfo= await fetch('./db.json')
     let moviesList= await movieInfo.json()
     moviesArray(moviesList)
}
 showMoviesList()





function moviesArray(arr){
    let html=''
    for (let item of arr.movies){
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
        console.log(item);
    }
    const moviePosters=content.children
    showSingleMovies(moviePosters)
    searchForm(moviePosters)
}

function showSingleMovies(url1) {
    const body=document.body
    let previewMovie = ''
    for(let item of url1){
        let itemImg=item.children[0]
        let itemText=item.children[1]
        console.log(item);
        item.addEventListener('click', () => {
            previewMovie = `<img class="singlePoster" src=${itemImg.src} alt="poster"/>
                               <div class="text">
                              <h2>${itemText.children[1].innerHTML}</h2>
                              <p>${itemText.children[2].innerHTML}</p>
                                </div>
                                <video src=${itemText.children[3].innerHTML} controls></video>
                                `
            body.style.backgroundImage=`url(${itemText.children[0].src})`
            mainContent.style.display='flex'
            mainContent.style.margin='3rem'
            mainContent.innerHTML = previewMovie
            content.style.height='22vh'
            for(item of poster){
                item.style.width='8vw'
            }})}}

////////////////// BUTTONS ///////////////////////////////////
const btnRight=document.getElementById('rightBtn')
const btnLeft=document.getElementById('leftBtn')

btnRight.addEventListener('click',()=>{
    content.scrollLeft+=475
})
btnLeft.addEventListener('click',()=>{
    content.scrollLeft-=475
})

 ///////////////////////// FORM /////////////////////////
 function searchForm(x){
     form.addEventListener('input', (e) => {
             e.preventDefault()
             const inputValue = input.value.toLowerCase()
             for (let item of x) {
                 let movieTitle = item.childNodes[3].childNodes[3].innerHTML.toLowerCase()
                 if (movieTitle.includes(inputValue)) {
                     content.style.alignItems = 'center'
                     content.style.justifyContent = 'center'
                     content.style.height='max-content'
                     content.style.width='max-content'
                     item.style.display = 'block'
                     if(inputValue===''){
                         content.style.alignItems = 'flex-start'
                         content.style.justifyContent = 'flec-start'
                         content.style.height='70vh'
                         content.style.width='80vw'
                         window.location.reload(true)
                     }
                 } else {
                     item.style.display = 'none'
 }}})}



