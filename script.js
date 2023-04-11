const oblicz = document.querySelector("#oblicz");
let result = document.querySelector(".result");


oblicz.addEventListener("click", function(){
   //zmienne
   //pobieranie danych z pól
    let waga = document.querySelector("#waga").value;
    let paliwo = document.querySelector("#paliwo").value;
    let pojemnosc = document.querySelector("#pojemnosc").value;
    //waga paliwa
    const wagaPaliwa = 0.83;

    let wagaInt = parseInt(waga);
    let paliwoInt = parseInt(paliwo);
    let pojemnoscInt = parseInt(pojemnosc);
    let wagazKierowca = wagaInt + 75;
    let procentZatankowanegoZbiornika = (100*paliwoInt)/pojemnoscInt;
    let zbiornik90procent = pojemnoscInt * 0.9;
    let tankowanieDo90 = zbiornik90procent - paliwoInt;
    let wagaCalkowita = wagazKierowca + (tankowanieDo90 * wagaPaliwa);

   

    
    //działania
    let suma = wagaInt + pojemnoscInt;
   // console.log(suma);
    console.log("pojemność zatankowanego zbiornika")
    console.log(procentZatankowanegoZbiornika);
    console.log(zbiornik90procent);
    console.log(tankowanieDo90);

    result.innerHTML=`
    <br>
    <div class="card">
    <div class="card-body">

    <h3>wynik:<b> ${wagaCalkowita}</b> kg,<br><br><br></h3>
    <p class="font-monospace">obliczenia:</p>
    waga autobusu z kierowcą:<b> ${wagazKierowca}</b>,<br>
    procent zatankowanego zbiornika:<b> ${procentZatankowanegoZbiornika}</b>, <br>
    90% całego zbiornika:<b> ${zbiornik90procent}</b>, <br>
    ilość paliwa które należy wlać żeby było 90%:<b> ${tankowanieDo90}</b>, <br>

    </div>
    </div>
    
    `;



})
