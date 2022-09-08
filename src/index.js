console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function () {
    loadImages();
    breedOptions();
});

function loadDogs() {
    let imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => {
            data.message.forEach(image => dogImage(dogs));
        });
}

function dogImage(dogs) {
    const container = document.querySelector('div')

    const ul = document.createElement('ul')

    dogs.forEach(dog => {
        const img = document.createElement('img')
        const li = document.createElement('li')
        img.src = dog
        li.appendChild(img)
        container.append(ul)
        ul.appendChild(li)
    })
}

function getBreed() {
    fetch(breedUrl)
        .then(res => res.json())
        .then(results => {
            breeds = results.message
            selectBreed(breed)
        });
}


function selectBreed(breed) {
    const ul = document.querySelector('ul');
    for (let breeds in breed) {
        let li = document.createElement('li');
        li.innerText = breeds;
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => li.target.style.color = 'red');
        ul.appendChild(li);
    }
}