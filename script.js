function _load() {
  //toDo: 10 soros, minden sorban - checkbox + text + törlés gomb.
  // A sorok bővíthetők egy hozzáadás gomb lenyomásávál.
  
  //0. rootE változóban eltároljuk a root Id-jű divet
  let rootE = document.getElementById("root");

  //1. lineE változóba eltároljuk a div sorait (szöveg checkbox, gomb (class-okkal)
  let lineE = `
          <div class="row">
              <input type="checkbox" class = "1" id="check" name="check">
              <input type="text" class = "1" id="text" name="text">
              <button class="delete">Delete</button>
          </div>
          `;

  //2. lineNumber változóban megadjuk a sorok mennyiségét: 10
  let lineNumber = 10;

  //3. for ciklussal berakjuk a rootE div-be a sorokat - lineE
  for(let index = 0; index < lineNumber; index++) {
    rootE.insertAdjacentHTML("beforeend", lineE);
  }

  //4. a rootE diven kívülre rakjuk a hozzáadás(add)-gombot
  rootE.insertAdjacentHTML("afterend", `
          <button id="added">Add item</button>
  `);

//5. az added id-jű gombra click eseményt teszünk, ehhez függvényt készítünk
// a neWAdded függvény hozzáad új sort (lineE) a rootE div-be
  function newAdded() {
    rootE.insertAdjacentHTML("beforeend", lineE);
            //toDo valahogy rá kellene tenni a törlést
  }
  document.getElementById("added").addEventListener("click", newAdded);

//6. delsE változóba tesszük az összes törlés gombot 
  let delsE = rootE.querySelectorAll(".delete");

  function deleteItem(e) {
  //7.törli a klikk eseménnyel kiválasztott indexű sort
  
  // console.log(e.target.parentElement);   e.path eseményfigyelőn e
    e.target.parentElement.remove();
  }

  for (let index = 0; index < delsE.length; index++) {
    delsE[index].addEventListener("click", deleteItem); 
  }
}

window.addEventListener("load", _load);
