//dropdown
let select = document.querySelector('select');
let startOption = select.selectedIndex = 1;
let lijstKeuze = "wordlists/" + select.value + ".json";
const box1 = document.getElementById("NL");
const box2 = document.getElementById("TR");
const volgende = document.getElementById("next");
const switchElem  = document.getElementById("toggle");
const Keuze = document.getElementById("NLofTR");
//SWITCH  default
Keuze.innerHTML="NL-TR";

//TOGGLEBTN
function btntog() {
    if (Keuze.innerHTML=="NL-TR"){
        Keuze.innerHTML="TR-NL";
        box1.className = '';
        box2.className = '';
        box1.classList.add("zwart");
    } else if ( Keuze.innerHTML="TR-NL"){
        Keuze.innerHTML="NL-TR";
        box1.className = '';
        box2.className = '';
        box2.classList.add("zwart");
    }
}

switchElem.addEventListener("click", btntog);
box2.classList.add("zwart");
box2.addEventListener("click", boxcolor2);
box1.classList.add("wit");
box1.addEventListener("click", boxcolor1);

//change boxcolor
function boxcolor2() {
    box2.classList.toggle("wit");
}

function boxcolor1() {
    box1.classList.toggle("zwart");
}


// read JSON
fetch(lijstKeuze)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    var runner = Object.keys(data).length;
    var randomGetal = Math.floor(Math.random() * (runner + 1));
    box1.innerHTML  = Object.keys(data)[randomGetal];
    box2.innerHTML  = Object.values(data)[randomGetal];

    function randomrunner() {
        var randomGetal = Math.floor(Math.random() * runner);
        box1.innerHTML  = Object.keys(data)[randomGetal];
        box2.innerHTML  = Object.values(data)[randomGetal];

            //vakje zwart maken
            //als turks nederlands dan box 1 zwart

            if (Keuze.innerHTML=="NL-TR") {
                //als ned turks dan box 2 zwart
                box2.className = '';
                box2.classList.add("zwart");
            }else if (Keuze.innerHTML="TR-NL"){
                box1.className = '';
                box1.classList.add("zwart");
            }
        }
        volgende.addEventListener("click", randomrunner);

});

//WL onchange
select.addEventListener('change', () => {
    let selectOption = select.value;
    lijstKeuze = "wordlists/" + `${selectOption}.json`;
    console.log(lijstKeuze);

    fetch(lijstKeuze)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var runner = Object.keys(data).length;
            var randomGetal = Math.floor(Math.random() * (runner + 1));
            box1.innerHTML  = Object.keys(data)[randomGetal];
            box2.innerHTML  = Object.values(data)[randomGetal];

            function randomrunner() {
                var randomGetal = Math.floor(Math.random() * runner);
                box1.innerHTML  = Object.keys(data)[randomGetal];
                box2.innerHTML  = Object.values(data)[randomGetal];

                    //vakje zwart maken
                    //als turks nederlands dan box 1 zwart
                    if (Keuze.innerHTML=="NL-TR") {
                        //als ned turks dan box 2 zwart
                        box2.className = '';
                        box2.classList.add("zwart");
                    }else if (Keuze.innerHTML="TR-NL"){
                        box1.className = '';
                        box1.classList.add("zwart");
                    }

                }
                volgende.addEventListener("click", randomrunner);
        })
});
