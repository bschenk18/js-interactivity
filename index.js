console.log(`hello world`)

const myForm = document.querySelector(`form`)
const message = document.querySelector(`#message`)

const addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector(`input`)

    const movie = document.createElement(`li`)

    const movieTitle = document.createElement(`span`)
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener(`click`, crossOffMovie)

    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement(`button`)
    deleteBtn.textContent = `x`
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener(`click`, deletMovie);

    document.querySelector(`ul`).appendChild(movie) 

    inputField.value = ``
}
const deletMovie = (event) => {
    event.target.parentNode.remove();
    message.textContent = `Movie deleted!`
}
const crossOffMovie = (event) => {
    event.target.classList.toggle(`checked`)

    if(event.target.classList.contains(`checked`)){
        message.textContent = `Movie watched!`
    } else {
        message.textContent = `Movie added back!`
    }
}


myForm.addEventListener("submit", addMovie);

