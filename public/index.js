var app = function(){
}



function populateHeader(superHeroes) {
  var header = document.querySelector('header');
  var myH1 = document.createElement('h1');
  myH1.textContent = superHeroes['squadName'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + superHeroes['homeTown'] + ' // Formed: ' + superHeroes['formed'];
  header.appendChild(myPara);
};

function showHeroes(superHeroes) {
  var section = document.querySelector('section');

  var heros = superHeroes['members'];
      
  for (var i = 0; i < heros.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heros[i].name;
    myPara1.textContent = 'Secret identity: ' + heros[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heros[i].age;
    myPara3.textContent = 'Superpowers:';
        
    var superPowers = heros[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
};

window.addEventListener('load', app);