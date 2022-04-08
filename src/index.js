console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



document.addEventListener('DOMContentLoaded', () => {
    fetchAllDogs()
    fetchAllBreeds()
    // const dropDown = document.querySelectorAll('option')
    // dropDown.forEach((e) => {
    //     e.addEventListener('click', () => {
    //         // if(breed.charAt(0) === 'a') {
    //         // console.log(breed)
    //         // }
    //         console.log('ive been click')
    //     })
    // })
})
function fetchAllDogs() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(dogImg => 
        dogImg.message.forEach(renderDog))
}

function renderDog( imgUrl ) {
    //make a new element
    const newImg = document.createElement('img')    
    //change it's attribute to use the img string
    newImg.src = imgUrl
    //append it to the DOM
    const imgContainer = document.getElementById("dog-image-container")
    imgContainer.append(newImg)
}

function fetchAllBreeds() {
    fetch( breedUrl )
    .then(resp => resp.json())
    .then(dogBreed => {
        const breedArray = Object.keys(dogBreed.message)
        // console.log(breedArray)
        const breedContainer = document.getElementById('dog-breeds')

        breedArray.forEach(breed => {
            const breedList = document.createElement('li')
            breedList.addEventListener('click', event => {
                console.log('click', event.target)
                breedList.style = 'color: red'
                //breedList.style.color = 'red'
            })
            breedList.textContent = breed
            breedContainer.append(breedList)
        })
            const dropdown = document.querySelector("select");

            dropdown.addEventListener("change", filterBreeds);

            function filterBreeds(event) {
                console.log(event.target.value)
                let letter = event.target.value;
                // console.log(breedArray)
                    // we want to filter existing li breeds to only breeds that start with this letter
                    // how can we access the breeds
                    //   console.log(breeds);
                    // filter breeds using letter

                let filteredBreeds = breedArray.filter((breed) => {
                    // return breed[0] === letter;
                    return breed.charAt(0) === letter
                });

                console.log(filteredBreeds);
                const ul = document.querySelector('#dog-breeds')
                console.log(ul)
                const dropDownLists = document.createElement('li')
                dropDownLists.textContent = filteredBreeds
                // console.log(dropDownLists)
                ul.append(dropDownLists)
                ul.innerText = dropDownLists.textContent;
                dropDownLists.style = 'bullets'
            //     renderBreeds(filteredBreeds);
            }
    })   
}

