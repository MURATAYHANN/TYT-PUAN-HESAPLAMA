

// function method(){
//     var a=10;
//     console.log(a)

// }
// method()12


// let nineclass=Number(prompt("9.Sınıf flört sayınız:"));
// let tenclass=Number(prompt("10.Sınıf flört sayınız:"));
// let elevenclass=Number(prompt("11.Sınıf flört sayınız:"));
// let twelweclass=Number(prompt("12.Sınıf flört sayınız:"));
// let ortalama=((nineclass+tenclass+elevenclass+twelweclass)/4)

// if(ortalama>=7){
//   document.write("ortalamanız:"+ortalama+" "+"MURAT SEVİYESİ.ZİRVEDESİNİZ...")
// }
// else if(ortalama>=5){
//     document.write("ortalamanız:"+ortalama+" "+"SİNAN SEVİYESİ.KARİZMA EKSİKLİĞİ.")

// }
// else if(ortalama>=3){
//     document.write("ortalamanız:"+ortalama+" "+"ŞEHMUZ SEVİYESİ.ZEKA EKSİKLİĞİ.")

// }
// else if(ortalama>=1){
//     document.write("ortalamanız:"+ortalama+" "+"KAYA SEVİYESİ.KONUŞMA EKSİKLİĞİ.")

// }
// else{
//  document.write("Ortalamanız:"+ortalama+" "+"BERKAY SEVİYESİ.ŞAKŞUKAYA DEVAM...")
// }



// !tyt1
// matematik doğru-yanlış sayısı
// türkçe doğru-yanlış sayısı
// sosyal doğru yanlış
// fen doğru yanlış
// 4 yanlış 1 doğru götürür
debugger;
let obp=0;
let turkcedogru,turkceyanlis,turkcenet=0;
let matematikdogru,matematikyanlis,matematiknet=0;
let sosyaldogru,sosyalyanlis,sosyalnet=0;
let fendogru,fenyanlis,fennet=0;
let toplamdogru=0;
let toplamyanlis=0;
let net=0;
let puan=0;
let toplamPuan;
let yenisatir = "\r\n";

let mesaj="TYT-AYT puan hesaplama uygulamasına hoşgeldiniz"+yenisatir+
"1-TYT puan hesaplama"+yenisatir+
"2-AYT puan hesaplama"+yenisatir+
"3-Çıkış yap";

let secim=prompt(mesaj);

if(secim=="1"){
    obp=Number(prompt("okul puanınızı girin"))
 turkcedogru=Number(prompt("Türkçe doğru sayınız:"));
 turkceyanlis=Number(prompt("Türkçe Yanlış Sayınız:"));
 turkcenet=Number(turkcedogru-(turkceyanlis/4))

 matematikdogru=Number(prompt("Matematik doğru sayınız:"));
 matematikyanlis=Number(prompt("Matematik Yanlış Sayınız:"));
 matematiknet=Number(matematikdogru-(matematikyanlis/4))

 sosyaldogru=Number(prompt("Sosyal doğru sayınız:"));
 sosyalyanlis=Number(prompt("Sosyal Yanlış Sayınız:"));
 sosyalnet=Number(sosyaldogru-(sosyalyanlis/4))

 fendogru=Number(prompt("Fen doğru sayınız:"));
 fenyanlis=Number(prompt("Fen Yanlış Sayınız:"));
 fennet=Number(fendogru-(fenyanlis/4))
 toplamdogru=(matematikdogru+turkcedogru+sosyaldogru+fendogru);
 toplamyanlis=(matematikyanlis+turkceyanlis+sosyalyanlis+fenyanlis);

net=((toplamdogru) - (toplamyanlis/4));
puan=(net*4);
toplamPuan=(puan)+100+(obp);
console.log("Puanınız:"+ toplamPuan +yenisatir+
"Türkçe Netiniz:" +turkcenet+yenisatir+
"Matematik Netiniz:"+matematiknet+yenisatir+
"Sosyal Netiniz:"+sosyalnet+yenisatir+
"Fen Netiniz:"+fennet)

}
else if(secim=="2"){

}
else{

}
