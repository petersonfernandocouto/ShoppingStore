

function alternarDestaque(){

    var card = document.getElementsByClassName("PaddingIMG");

    //agora vou transformar isso em array

    // Array.from é uma maneira de criar lista em um array

    card = Array.from(card);

    for(let i = 0; i < card.length; i++){

        card[i].classList.toggle("PaddingIMG-destaque")
    }
}

setInterval(alternarDestaque, 2500)


