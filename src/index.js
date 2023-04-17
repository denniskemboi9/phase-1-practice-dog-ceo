console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    fetchImages()
    fetchBreeds()
    document.getElementById('breed-dropdown').addEventListener('change', function (event) {
        const letter = event.target.value
        const ul = document.getElementById('dog-breeds')
        const lis = ul.querySelectorAll('li')
        lis.forEach(li => {
            if (li.innerText.startsWith(letter)) {
                li.style.display = ''
            } else {
                li.style.display = 'none'
            }
        })
    })

})

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/2"
    fetch(imgUrl)
        .then(response => response.json())
        .then(json => renderImages(json));
}

function renderImages(json) {
    const main = document.getElementById('dog-image-container')
    json.message.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        main.appendChild(img)
    })
}


function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => renderBreeds(json));
}

function renderBreeds(json) {
    const ul = document.getElementById('dog-breeds')
    // json.message.forEach(breed => {
    //     const list = document.createElement("li")
    //     list.innerText = breed
    //     ul.appendChild(list)
    // })
    for (const breed in json.message) {
        const li = document.createElement('li')
        li.innerText = breed
        ul.appendChild(li)
        li.addEventListener('click', function () {
            li.style.color = 'red'
        })
    }
}