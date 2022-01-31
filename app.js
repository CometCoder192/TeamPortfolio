
// For this experiment, the local json file is not used. Instead the mozilla mdn json file is used

async function populate() {
  const URL = `https://raw.githubusercontent.com/CometCoder192/TeamPortfolio/main/team.json`;
  const request = new Request(URL);

  const response = await fetch(request);
  console.log(response);
  const superHeroes = await response.json();
  console.log(superHeroes);

  populateHeaders(superHeroes);
  populateHeroes(superHeroes);
}

function populateHeaders(obj) {
  const header = document.querySelector('header');
  const newH1 = document.createElement('h1');
  header.appendChild(newH1);

  const newPara = document.createElement('p');
  newPara.textContent = `Hometown: ${obj['teamContinent']}`;
  header.appendChild(newPara);
}

function populateHeroes(obj) {
  const section = document.querySelector('section');
  const heroes = obj['members'];

  for (const hero of heroes) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret Identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = `Socials: `;

    const superPowers = hero.socials;
    for (const power of superPowers) {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      myList.appendChild(listItem)
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);

  }
}

populate()