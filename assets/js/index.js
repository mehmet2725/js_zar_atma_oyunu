alert(`Zar tahmin oyununa hoş geldiniz.`);
let zar = Math.floor(Math.random()*6) +1;
let tahmin = Number(prompt(`Lütfen 0 ile 6 arasında bir tahmin yazınız`));

if(zar === tahmin){
    alert(`Tebrikler tahmininiz doğru.
bilgisayarın attığı zar: ${zar}  Tahmininiz: ${tahmin}`);
}
else{
    alert(`Maalesef tahmininiz yanlış.
bilgisayarın attığı zar: ${zar}  Tahmininiz: ${tahmin}`);
}