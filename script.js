const logo = document.querySelector("#logo");
logo.addEventListener("click",(e) => {window.location.reload()} )

let bancodedados = [
    {   
        search : "tenis",
        imgitem : "Img/B67-5096-000_zoom1.webp",
        type: "Calçados",
        title: "Tênis Marrom Reserva",
        text: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        value: "R$ 105,00",
        add: "Adicionar ao Carrinho"
    },
    {   
        search : "camisetas",
        imgitem : "Img/download (6).jpg",
        type: "Camisetas",
        title: "Camiseta Preta Reserva",
        text: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        value: "R$ 75,00",
        add: "Adicionar ao Carrinho"
    },
    {   
        search : "mascara",
        imgitem : "Img/download (7).jpg",
        type: "Acessórios",
        title: "Máscara Reserva",
        text: "Proteja-se Contra a Covid-19",
        value: "R$ 35,00",
        add: "Adicionar ao Carrinho"
    },
    {   
        search : "tenis",
        imgitem : "Img/download (3).jpg",
        type: "Calçados",
        title: "Tênis Cinza Reserva",
        text: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        value: "R$ 105,00",
        add: "Adicionar ao Carrinho"
    },
    {   
        search : "bone",
        imgitem : "Img/download (5).jpg",
        type: "Acessórios",
        title: "Boné Reserva",
        text: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        value: "R$ 57,00",
        add: "Adicionar ao Carrinho"
    },
    {   
        
        search : "camisetas",
        imgitem : "Img/shopping (3).png",
        type: "Camisetas",
        title: "Camiseta Branca Reserva",
        text: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        value: "R$ 75,00",
        add: "Adicionar ao Carrinho"
    }
];

const section = document.querySelector("section");

for (let i = 0;i < bancodedados.length;i++){
const div = document.createElement("div");
    div.innerHTML = 
        `<img src = "${bancodedados[i].imgitem}"/>
        <p class = "type">${bancodedados[i].type}</p>
        <h2 class = "title">${bancodedados[i].title}</h2>
        <p class = "text">${bancodedados[i].text}</p>
        <p class = "value">${bancodedados[i].value}</p>
        <a class = "add" id = ${i}>${bancodedados[i].add}</a>`;
    section.appendChild(div)
}

function items(){
    section.innerHTML = ""
    for (let i = 0;i < bancodedados.length;i++){
        const div = document.createElement("div");
            div.innerHTML = 
                `<img src = "${bancodedados[i].imgitem}"/>
                <p class = "type">${bancodedados[i].type}</p>
                <h2 class = "title">${bancodedados[i].title}</h2>
                <p class = "text">${bancodedados[i].text}</p>
                <p class = "value">${bancodedados[i].value}</p>
                <a class = "add" id = "${i}">${bancodedados[i].add}</a>`;
            section.appendChild(div)
        }
}


function atualizaitems(e){                           
    section.innerHTML = "";
    for (let i = 0;i < bancodedados.length;i++){
        if(e == bancodedados[i].type || e == bancodedados[i].search || e == bancodedados[i].title){
        const div = document.createElement("div");
            div.innerHTML = 
                `<img src = "${bancodedados[i].imgitem}"/>
                <p class = "type">${bancodedados[i].type}</p>
                <h2 class = "title">${bancodedados[i].title}</h2>
                <p class = "text">${bancodedados[i].text}</p>
                <p class = "value">${bancodedados[i].value}</p>
                <a class = "add" id = "${i}">${bancodedados[i].add}</a>`;
            section.appendChild(div)
}}}

document.addEventListener("click",function(e){
    const div = document.querySelector("div");
    const value = e.target.innerText;
    switch(value){
        case "Todos": items();break;
        case "Acessórios": atualizaitems(value);break;
        case "Calçados": atualizaitems(value);break;
        case "Camisetas": atualizaitems(value);break;
    }})
    
    
    
document.querySelector("button").addEventListener("click",(e)=>{
        e.preventDefault()
        const input = document.querySelector("input").value;
        const inputformat = input.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        for (let i = 0;i < bancodedados.length;i++){
            const searchformat = bancodedados[i].search.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
            const titleformat = bancodedados[i].title.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
            if (searchformat.includes(inputformat)){atualizaitems(bancodedados[i].search)}
            else if (titleformat.includes(inputformat)){atualizaitems(bancodedados[i].title)}
            
        }
    })
    
    const div = document.createElement("div");
        div.classList.add("carrinhovazio");
        div.style.display = "flex";
        div.style.flexDirection = "column"
        div.style.justifyContent = "space-evenly"
        div.style.textAlign = "center"
        div.style.marginLeft = "90px"
        div.style.width = "160px";
        div.style.border = "none";
        div.style.height = "110px";
        div.innerHTML = `<h2 class = "titlecart">Carrinho Vázio</h2>
        <p class = "remove">Adicione Itens ao Carrinho</p>`;
            document.querySelector("nav").appendChild(div);

    
        let countadd = 0
        let countremove = 0
    document.addEventListener("click", (e) => {
        
        if (e.target.innerText == "Adicionar ao Carrinho"){
        countadd += 1
        const cartcls = document.querySelector(".carrinhovazio");
        const id = e.target.id;
        const div = document.createElement("div");
        div.classList.add("textdiv");
        div.innerHTML = ` <div class="img"> 
            <img class="imgcart" src = "${bancodedados[id].imgitem}"> 
            </div>
                <div class="textcart">
                    <h2 class = "titlecart">${bancodedados[id].title}</h2>
                    <p class="valuecart">${bancodedados[id].value}</p>
                    <a class = "remove">Remover do Carrinho</a>
                    </div>`;
        document.querySelector("nav").appendChild(div);
        cartcls.style.display = "none";
        divinfo.style.display = "";
    }})
    
    const divinfo = document.createElement("div");
    divinfo.className = "info"
    divinfo.style.display = "none"
    divinfo.innerHTML = `<h3>Quantidade:<span>1</span></h3>
    <h3>Total:<span>R$ 180,00</span></h3>`
    document.querySelector("aside").appendChild(divinfo);
    
    
    
    document.addEventListener("click",(e) => {
        const nav = document.getElementsByTagName("nav");
        const cartcls = document.querySelector(".carrinhovazio");
        const event = e.target.parentElement;
        const item= event.parentElement;
        const cls = e.target.innerText;
        if (cls === "Remover do Carrinho"){item.remove();countremove += 1}
        if (countadd === countremove){cartcls.style.display = "";divinfo.style.display = "none"};
        })

