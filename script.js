let s = document.querySelector("#registerSectionInputId");

let nameValue = s.addEventListener("click", addToLocalStorage);

let names;


    function addToLocalStorage(data) {
    var data = document.querySelector("#registerSectionInput").value;
    names= data;
    localStorage.setItem('locName', JSON.stringify(names));
    console.log(names);
    document.querySelector("#registerSectionInput").value = "";
    }

