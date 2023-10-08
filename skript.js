var inp_coll = document.getElementById("inp_coll");
var prod = document.getElementById("select_prod")
var btn = document.getElementById("btn_sub");
var img = document.getElementById("img_prod")

prod.addEventListener("change", function() {
    var product = prod.value;
    if(product === "Банан"){
        img.src = "img/banan.jpg";
    }else if(product === "Клубника"){
        img.src = "img/clubnika.jpg";
    }else if(product === "Вишня"){
        img.src = "img/vishnya.jpg";
    }else if(product === "Апельсин"){
        img.src = "img/apelsun.jpg";
    }else if(product === "Ананас"){
        img.src = "img/ananas.jpg";
    }else if(product === "Яблоки"){
        img.src = "img/yabloki.jpg";
    }else if(product === "Виноград"){
        img.src = "img/inograd.jpg";
    }else if(product === "Лимон"){
        img.src = "img/limone.jpg";
    }
});

btn.addEventListener("click", function() {
    if(inp_coll.value != ""){
        var chek = confirm("Вы уверены в заказе? " + inp_coll.value + " " + prod.value)
        if(chek){
            alert(inp_coll.value + " " + prod.value + " успешно заказаны")
        }
        
    }
});