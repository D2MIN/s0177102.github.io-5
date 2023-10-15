var inp_coll = document.getElementById("inp_coll");
var prod = document.getElementById("select_prod")
var btn = document.getElementById("btn_sub");
var img = document.getElementById("img_prod")
var cell = document.getElementById("text_cell");
var cell_text = document.getElementById("cell_text");

var add = document.getElementById("add");
var clear = document.getElementById("clear");
let xcell = 49;
var sum = 0;

prod.addEventListener("change", function() {
    var product = prod.value;
    if(product === "Банан"){
        img.src = "img/banan.jpg";
        cell.textContent = "49 рублей";
        xcell = 49;
        inp_coll.value = "";
    }else if(product === "Клубника"){
        img.src = "img/clubnika.jpg";
        cell.textContent = "28 рублей";
        xcell = 28;
        inp_coll.value = "";
    }else if(product === "Вишня"){
        img.src = "img/vishnya.jpg";
        cell.textContent = "32 рублей";
        xcell = 32;
        inp_coll.value = "";
    }else if(product === "Апельсин"){
        img.src = "img/apelsun.jpg";
        cell.textContent = "27 рублей";
        xcell = 27;
        inp_coll.value = "";
    }else if(product === "Ананас"){
        img.src = "img/ananas.jpg";
        cell.textContent = "60 рублей";
        xcell = 60;
        inp_coll.value = "";
    }else if(product === "Яблоки"){
        img.src = "img/yabloki.jpg";
        cell.textContent = "44 рублей";
        xcell = 44;
        inp_coll.value = "";
    }else if(product === "Виноград"){
        img.src = "img/inograd.jpg";
        cell.textContent = "40 рублей";
        xcell = 40;
        inp_coll.value = "";
    }else if(product === "Лимон"){
        img.src = "img/limone.jpg";
        cell.textContent = "10 рублей";
        xcell = 10;
        inp_coll.value = "";
    }
});

btn.addEventListener("click", function() {
    if(inp_coll.value != ""){
        var chek = confirm("Вы уверены в заказе? ")
    }
});

add.addEventListener("click",function(event){
    if(inp_coll.value != ""){
        sum = xcell * inp_coll.value + sum;
    }
    cell_text.textContent = "Цена : " + sum +" Руб.";
    event.preventDefault();
    inp_coll.value = "";
})

clear.addEventListener("click",function(event){
    cell_text.textContent = "Цена : 0 Руб.";
    sum = 0;
    inp_coll.value = "";
    event.preventDefault();
})
