

let data = [
    {
        nomi: "Sabzi",
        narxi: 5000,
        category: "sabzavotlar",
        rasm: "https://avitsenna.uz/wp-content/uploads/2016/07/sabza.jpg"
    },
    {
        nomi: "Piyoz",
        narxi: 7000,
        category: "sabzavotlar",
        rasm: "https://shifo.uz/upload/iblock/93c/93c40c13f3577921e806071f0b963ba7.jpg"
    },
]

let Korzina_data=[]

let korzina = document.querySelector(".offcanvas-body");

let row = document.getElementById("mahsulot_row")

function Mapping(massivi) {
    row.innerHTML = ""

    massivi.map((v, i) => {
        let col = document.createElement("div")
        let card = document.createElement("card")
        let img = document.createElement("img")
        let incard = document.createElement("div")
        let h2 = document.createElement("h2")
        let p = document.createElement("p")
        let p2 = document.createElement("p")
        let div1 = document.createElement("div")
        let button1 = document.createElement("button")
        let button2 = document.createElement("button")

        // style berish

        col.classList.add("col-lg-3", "col-md-6", "col-sm-12");
        card.classList.add("card")
        div1.classList.add("d-flex", "justify-content-between")
        img.classList.add("rasm");
        p2.classList.add("text-danger", "fw-bold")
        incard.classList.add("p-2")

        button1.classList.add("btn", "btn-primary")
        button2.classList.add("btn", "btn-danger")

        // qiymatlarni berish

        img.src = v.rasm
        img.alt = "pruducts"

        h2.innerHTML = v.nomi
        p.innerText = v.category
        p2.innerText = v.narxi

        button1.innerText = "Buy"
        button2.innerText = "Korzina"
        button2.setAttribute("onclick", `Korzina(${i})`)
        card.appendChild(img)
        card.appendChild(incard)

        incard.appendChild(h2)
        incard.appendChild(p)
        incard.appendChild(p2)
        incard.appendChild(div1)
        div1.appendChild(button1)
        div1.appendChild(button2)
        col.appendChild(card)
        row.appendChild(col)

    })
}

Mapping(data)

function Addd() {
    let product_name = document.getElementById("product_name")
    let product_cost = document.getElementById("product_cost")
    let kategory = document.getElementById("kategory");
    
    // console.log(product_cost.value);

    
    data.push({
        nomi: product_name.value,
        narxi: product_cost.value,
        category: kategory.value,
        rasm: new_Picture

    })


    Mapping(data)

    
}


let new_Picture = ""

function picturing(val) {
    val.src = window.URL.createObjectURL(val.files[0]);
    new_Picture = val.src;
    console.log(new_Picture);

}

function Korzina(index) {
    Korzina_data.push(data[index])
    Mapping_korzina(Korzina_data)
}

function Mapping_korzina(massivi) {
    korzina.innerHTML = ""

    massivi.map((v, i) => {
        let col = document.createElement("div")
        let card = document.createElement("card")
        let img = document.createElement("img")
        let incard = document.createElement("div")
        let h2 = document.createElement("h2")
        let p = document.createElement("p")
        let p2 = document.createElement("p")
        let div1 = document.createElement("div")
        let button1 = document.createElement("button")
     

        // style berish

        col.classList.add("col-6");
        card.classList.add("card")
        div1.classList.add("d-flex", "justify-content-between")
        img.classList.add("rasm");
        p2.classList.add("text-danger", "fw-bold")
        incard.classList.add("p-2")

        button1.classList.add("btn", "btn-primary")
     

        // qiymatlarni berish

        img.src = v.rasm
        img.alt = "pruducts"

        h2.innerHTML = v.nomi
        p.innerText = v.category
        p2.innerText = v.narxi

        button1.innerText = "Buy"
       
        card.appendChild(img)
        card.appendChild(incard)

        incard.appendChild(h2)
        incard.appendChild(p)
        incard.appendChild(p2)
        incard.appendChild(div1)
        div1.appendChild(button1)
       
        col.appendChild(card)
        korzina.appendChild(col)

    })
}
