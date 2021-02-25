const form=document.getElementById('form')
const file=document.getElementById('file')
const content=document.getElementById('movies')
const MOVIES_API='https://www.themoviedb.org/search/movie?query=API'

file.addEventListener('change',(e)=>{
    const uploadImg=file.files[0]
    console.log(URL.createObjectURL(uploadImg));

    let main =`
    <img src=${URL.createObjectURL(uploadImg)}>
    `
    content.innerHTML=main
})
async function uploadMovise(){
    let getMovies= await fetch(MOVIES_API)
    let moviesArr=[await getMovies.json()]

    console.log(moviesArr)

}
uploadMovise()