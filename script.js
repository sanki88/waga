const oblicz = document.querySelector("#oblicz");
let result = document.querySelector(".result");
let resultCNG = document.querySelector(".resultCNG");
let resultElektryk = document.querySelector(".resultElektryk");


oblicz.addEventListener("click", function(){
   //zmienne
   //pobieranie danych z pól
    let waga = document.querySelector("#waga").value;
    let pojemnosc = document.querySelector("#pojemnosc").value;
    let paliwo = document.querySelector("#paliwo").value;
    //waga paliwa
    const wagaPaliwa = 0.83;

    let wagaInt = parseInt(waga);
    let paliwoInt = parseInt(paliwo);
    let pojemnoscInt = parseInt(pojemnosc);
    let wagazKierowca = wagaInt + 75;
    let procentZatankowanegoZbiornika = 100-paliwoInt-10;
    let procentIleLitrow = (procentZatankowanegoZbiornika*pojemnoscInt)/100;
    let litryNaKg = procentIleLitrow * wagaPaliwa;
    let zbiornik90procent = pojemnoscInt * 0.9;
    let tankowanieDo90 = zbiornik90procent - paliwoInt;
    let wagaCalkowita = wagazKierowca + litryNaKg;

   

    
    //działania
    let suma = wagaInt + pojemnoscInt;
    // console.log(suma);
    //console.log("pojemność zatankowanego zbiornika")
    console.log(procentZatankowanegoZbiornika);
    console.log(procentIleLitrow);
    console.log(litryNaKg);
    // console.log(zbiornik90procent);
    // console.log(tankowanieDo90);

    result.innerHTML=`
    <br>
    <h3>wynik:<b> ${wagaCalkowita}</b> kg</h3>
    `;



})

obliczCNG.addEventListener("click", function(){
    //zmienne
    //pobieranie danych z pól
     let wagaCNG = document.querySelector("#wagaCNG").value;
     let pojemnoscCNG = document.querySelector("#pojemnoscCNG").value;
     let paliwoCNG = document.querySelector("#paliwoCNG").value;
     let wagaCNGInt = parseInt(wagaCNG);
     let paliwoCNGInt = parseInt(paliwoCNG);
     let pojemnoscCNGInt = parseInt(pojemnoscCNG);
     let wagazKierowcaCNG = wagaCNGInt + 75;
     const wagaZatankowanegoZbiornikaCNG = 189;
     let procentZatankowanegoZbiornikaCNG = 100-paliwoCNGInt-10;
     let procentIleLitrowCNG = (procentZatankowanegoZbiornikaCNG*wagaZatankowanegoZbiornikaCNG)/100;
     let wagaCalkowitaCNG = procentIleLitrowCNG + wagazKierowcaCNG;
    

    
 

     console.log(procentZatankowanegoZbiornikaCNG);
     console.log(procentIleLitrowCNG);
     console.log(wagaCalkowitaCNG);


     

 
     resultCNG.innerHTML=`
     <br>
     <h3>wynik:<b>${wagaCalkowitaCNG}</b> kg</h3>
     `;
    });


    obliczElektryk.addEventListener("click", function(){
        //zmienne
        //pobieranie danych z pól
         let wagaElektryk = document.querySelector("#wagaElektryk").value;
         let wagaElektrykInt = parseInt(wagaElektryk);
         let wagaCalkowitaElektryk = wagaElektrykInt + 75;
    
        
     
    
         console.log(wagaElektrykInt);

    
    
         
    
     
         resultElektryk.innerHTML=`
         <br>
         <h3>wynik:<b>${wagaCalkowitaElektryk}</b> kg</h3>
         `;
        })