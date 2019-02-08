//HELPER FUNCTIONALITY  
const request = (url, callback) => {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function (data) {
        const rData = JSON.parse(data.target.responseText);
        callback(rData);
    });
    oReq.open('GET', url);
    oReq.send();
}

//PERSON 4
request('https://swapi.co/api/people/4/', personFour);

function personFour(data) {
    console.log(data);
    const p4NameTag = document.querySelector('#person4Name');
    p4NameTag.innerHTML = data.name;

    const p4Home = document.querySelector('#person4HomeWorld');
    request('https://swapi.co/api/planets/1/', homeworld);

    function homeworld(e) {
        p4Home.innerHTML = e.name;
    }
}

//PERSON 14
request('https://swapi.co/api/people/14/', personFourteen);

function personFourteen(data) {
    console.log(data)
    const p14Name = document.querySelector('#person14Name');
    p14Name.innerHTML = data.name;

    const p14Species = document.querySelector('#person14Species');
    request('https://swapi.co/api/species/1/', getSpecies);

    function getSpecies(e) {
        p14Species.innerHTML = e.name;
    }
}

//FILMS
request('https://swapi.co/api/films/', getFilms);

function getFilms(data) {
    let films = data.results;
    console.log(films)
    films.forEach(i => {
        let filmTitle = document.createElement('h4');
        filmTitle.innerHTML = i.title;
        let filmList = document.querySelector('#filmList');
        filmList.appendChild(filmTitle);

        let planets = i.planets;
        planets.forEach(e => {
            request(e, planetNames);
            console.log(e)

            function planetNames(p) {
                let pName = document.createElement('li');
                pName.innerHTML = p.name;
                filmTitle.appendChild(pName);
            }

        })
    })
}