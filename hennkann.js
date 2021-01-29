function hennkann(){
    syuturyoku = "";
    kekka = [];
    let moto = document.getElementById("nyuuryokubunn").value;
    moto = moto.toLowerCase();
    moto = moto.replace(/[.,\/#?!$%\^&\*;:{}=\-_`~()]/g,"");
    moto = moto.replace(/[\n\r]/g," ");
    moto = moto.replace(/à/g,"â").replace(/è/g,"ê").replace(/ì/g,"î").replace(/ò/g,"ô").replace(/ù/g,"û").replace(/ỳ/g,"ŷ").replace(/ə̀/g,"ə̂");
    console.log(moto);
    let nyuuryoku = moto.split(/\s/);
    for (var i = 0; i < nyuuryoku.length; i++) { // それぞれの音節について
        hakkenn = false;
        kekka.push(new Array());
        for (var j = 0; j < itirann.length; j++) { // itirannの各行において
            if (itirann[j][1] == nyuuryoku[i]){
                kekka[i].push(itirann[j][0]);
                hakkenn = true;
            } else {
                if (hakkenn == true) {
                    break;
                }
            }
        }
    }
    for (var i = 0; i < nyuuryoku.length; i++) {
        syuturyoku += "<div>" + "<span class='zuipinn'>" + nyuuryoku[i] + "</span>";
        for (var j = 0; j < kekka[i].length; j++) {
            syuturyoku += "<span class='kouho'><a target='_blank' href='https://ctext.org/dictionary.pl?if=gb&char=" + kekka[i][j] + "'>" + kekka[i][j] + "</a></span>";
        }
        syuturyoku += "</div>";
    }
    document.getElementById("syuturyokurann").innerHTML = syuturyoku;
}
