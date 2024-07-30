
const boysHostel = [
    {
        name: "Kalam Cottage",
        Price: 110000,
        Seaters: ["Single", "Double", "Triple"],
        Type: ["AC", "NON-AC"]
    },

    {
        name: "Sun Heaven Hostel",
        Price: 125000,
        Seaters: ["Single", "Double", "Triple"],
        Type: ["AC", "NON-AC"]
    },

    {
        name: "Raksha Boys Hostel",
        Price: 120000,
        Seaters: ["Single", "Double", "Triple"],
        Type: ["AC", "NON-AC"]
    },

    {
        name: "Galaxy Residency",
        Price: 115000,
        Seaters: ["Single", "Double", "Triple"],
        Type: ["AC", "NON-AC"]
    }


]

const girlsHostel = [
    {
        name: "Clean Bridge",
        Price: 180000,
        Seaters: ["Single", "Double", "Triple"],
        Type: ["AC", "NON-AC"]
    }, 

    {
        name: "Stanza Girls Hostel",
        Price: 11854,
        Seaters: ["Single", "Double", "Triple"],
        Type: ["AC", "NON-AC"]
    }, 

    {
        name: "Annapurna Girls Hostel",
        Price: 140000,
        Seaters: ["Single", "Double", "Triple"],
        Type: ["AC", "NON-AC"]
    }, 

    {
        name: "Raksha Girls Hostel",
        Price: 125000,
        Seaters: ["Single", "Double", "Triple"],
        Type: ["AC", "NON-AC"]
    }
]


let HostelName = document.getElementById("name");
let HostelPrice = document.getElementById("price");
let Seaters = document.getElementById("seaters");
let Type = document.getElementById("type");

let HostelName1 = document.getElementById("name1");
let HostelPrice1 = document.getElementById("price1");
let Seaters1 = document.getElementById("seaters1");
let Type1 = document.getElementById("type1");

let HostelName2 = document.getElementById("name2");
let HostelPrice2 = document.getElementById("price2");
let Seaters2 = document.getElementById("seaters2");
let Type2 = document.getElementById("type2");

let HostelName3 = document.getElementById("name3");
let HostelPrice3 = document.getElementById("price3");
let Seaters3 = document.getElementById("seaters3");
let Type3 = document.getElementById("type3");


let HostelName4 = document.getElementById("name4");
let HostelPrice4 = document.getElementById("price4");
let Seaters4 = document.getElementById("seaters4");
let Type4 = document.getElementById("type4");

let HostelName5 = document.getElementById("name5");
let HostelPrice5 = document.getElementById("price5");
let Seaters5 = document.getElementById("seaters5");
let Type5 = document.getElementById("type5");

let HostelName6 = document.getElementById("name6");
let HostelPrice6 = document.getElementById("price6");
let Seaters6 = document.getElementById("seaters6");
let Type6 = document.getElementById("type6");

let HostelName7 = document.getElementById("name7");
let HostelPrice7 = document.getElementById("price7");
let Seaters7 = document.getElementById("seaters7");
let Type7 = document.getElementById("type7");


let Inputs = document.querySelectorAll(".filter");
let Listed = document.querySelector(".listedHostels");

function loadboysHostel() {
    let Data = boysHostel;
    console.log(Data);
    HostelName.innerHTML = "Name:- " + Data[0].name;
    HostelPrice.innerHTML = "Price:- " + Data[0].Price;
    Seaters.innerHTML =  "Seaters:- " + Data[0].Seaters;
    Type.innerHTML = "Room Type:- " + Data[0].Type;

    HostelName1.innerHTML =  "Name:- " + Data[1].name;
    HostelPrice1.innerHTML =  "Price:- " + Data[1].Price;
    Seaters1.innerHTML = "Seaters:- " + Data[1].Seaters;
    Type1.innerHTML =  "Room Type:- " + Data[1].Type;

    HostelName2.innerHTML = "Name:- " + Data[2].name;
    HostelPrice2.innerHTML = "Price:- " + Data[2].Price;
    Seaters2.innerHTML = "Seaters:- " + Data[2].Seaters;
    Type2.innerHTML =  " Room Type:- " + Data[2].Type;

    HostelName3.innerHTML = "Name:- " + Data[3].name;
    HostelPrice3.innerHTML = "Price:- " +  Data[3].Price;
    Seaters3.innerHTML =  "Seaters:- " + Data[3].Seaters;
    Type3.innerHTML = "Room Type:- " + Data[3].Type;
    Listed.style.display = "none";

}

function loadgirlsHostel () {
   let Data2 = girlsHostel;
   console.log(Data2);

   HostelName4.innerHTML = "Name:- " + Data2[0].name;
   HostelPrice4.innerHTML = "Price:- " + Data2[0].Price;
   Seaters4.innerHTML =  "Seaters:- " + Data2[0].Seaters;
   Type4.innerHTML = "Room Type:- " + Data2[0].Type;

   HostelName5.innerHTML =  "Name:- " + Data2[1].name;
   HostelPrice5.innerHTML =  "Price:- " + Data2[1].Price;
   Seaters5.innerHTML = "Seaters:- " + Data2[1].Seaters;
   Type5.innerHTML =  "Room Type:- " + Data2[1].Type;

   HostelName6.innerHTML = "Name:- " + Data2[2].name;
   HostelPrice6.innerHTML = "Price:- " + Data2[2].Price;
   Seaters6.innerHTML = "Seaters:- " + Data2[2].Seaters;
   Type6.innerHTML =  " Room Type:- " + Data2[2].Type;

   HostelName7.innerHTML = "Name:- " + Data2[3].name;
   HostelPrice7.innerHTML = "Price:- " +  Data2[3].Price;
   Seaters7.innerHTML =  "Seaters:- " + Data2[3].Seaters;
   Type7.innerHTML = "Room Type:- " + Data2[3].Type;
   Listed.style.display = "none";


}



function applyData() {
    if ( Inputs.checked == Inputs.value || Inputs.value == "Hostel" || Inputs.value == "Boys") {
        loadboysHostel();
        Listed.style.display = "block";
        
        document.querySelectorAll(".girlsHostel").style.display = "none";
    } 

    if (  Inputs.checked == Inputs.value || Inputs.value == "Hostel" || Inputs.value == "Girls") {
        loadgirlsHostel();
        Listed.style.display = "block";
        document.querySelectorAll(".girlsHostel").style.display = "block";
    }
}



   



function resetData() {
    Inputs.forEach((Inputs)=>{
        Inputs.checked = false;
        Listed.style.display = "none";
    })
}

loadboysHostel();
loadgirlsHostel();
