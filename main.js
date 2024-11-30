// For + break/continue ga oid masalalar (4 ta):

////////////////////////////////////
//1-MASALA
//1 dan 100 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 50 ga yetganda tsiklni to‘xtating (break).
// for(let i=1;i<=100;i++){
//     if(i>50){
//         break
//     }
//     console.log(i);
// }

////////////////////////////////////
//2-MASALA
//1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 3 ga bo‘linadigan sonlarni tashlab o‘ting (continue).
// for(let i=1;i<=20;i++){
//     if(i%3==0){
//         continue
//     }
//     console.log(i)
// }

////////////////////////////////////
//3-MASALA
//1 dan 30 gacha bo‘lgan sonlarni chiqarib, faqat 5 ta son chiqargandan keyin tsiklni to‘xtating (break).
// for(let i=1;i<=30;i++){
//     if(i>5){
//         break
//     }
//     console.log(i)
// }

////////////////////////////////////
//4-MASALA
//1 dan 50 gacha bo‘lgan sonlar orasida 7 ga bo‘linadigan birinchi 3 ta sonni ekranga chiqaring, so‘ngra tsiklni to‘xtating.
// let sum=0
// for(let i=1;i<=50;i++){
//     if(i%7==0){
//         console.log(i)
//         sum ++;
//     }
//      if(sum==3){
//         break
//      }
// }





// Switch-case ga oid masalalar (4 ta):

////////////////////////////////////
//1-MASALA
//Foydalanuvchi kiritgan haftaning raqamiga (1-7) mos ravishda haftaning kunini (dushanba-yakshanba) chiqarib bering.
// let week=+prompt('Hafta kunini raqamini kiritng')
// switch (week) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;

//   default:
//    console.log('Bunday hafta kuni mavjud emas')
//     break;
// }

////////////////////////////////////
//2-MASALA
//Foydalanuvchi kiritgan oy raqamiga (1-12) mos ravishda faslni (qish, bahor, yoz, kuz) aniqlang.
// Foydalanuvchi kiritgan oy raqamiga mos faslni (switch-case) aniqlang va 1 dan shu oy raqamigacha bo‘lgan sonlarni (for) ekranga chiqaring.
// let fasl = +prompt("Oy raqamini kiriting");
// switch (fasl) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//     break;
//   default:
//     console.log("Bunday oy raqami  yuq");
//     break;
// }

////////////////////////////////////
//3-MASALA
//Foydalanuvchi kiritgan songa mos ravishda “juft son” yoki “toq son” ekanligini aniqlang.
// let num=+prompt('Sonni kiritng')
// if(num%2==0){
//     console.log('Juft son')
// }else{
//     console.log('Toq son')
// }

////////////////////////////////////
//4-MASALA
//Foydalanuvchi kiritgan baho (1-5) bo‘yicha izoh chiqarib bering. Masalan: 5 – “A’lo”, 4 – “Yaxshi”, va hokazo.
// let baho=+prompt('1-5 gacha baho bering.')
// switch (baho) {
//   case 1:
//     console.log("Umuman Bo'lmaydi.");
//     break;
//   case 2:
//     console.log("Qoniqarsiz.");
//     break;
//   case 3:
//     console.log("Qoniqarli.");
//     break;
//   case 4:
//     console.log("Yaxshi.");
//     break;
//   case 5:
//     console.log("A'lo.");
//     break;
//   default:
//     console.log('Faqat 1-5 gacha baho bering!')  
// }





// While va do...while ga oid masalalar (15 ta):

////////////////////////////////////
//1-MASALA
//1 dan 10 gacha bo‘lgan sonlarni ekranga chiqaring.
// let i=1
// while(i<10){
//     i++
//     console.log(i);
// }

////////////////////////////////////
//2-MASALA
//10 dan 1 gacha bo‘lgan sonlarni ekranga chiqarib bering.
// let i=11
// while(i>1){
//     i--
//     console.log(i);
// }

////////////////////////////////////
//3-MASALA
//Foydalanuvchi 0 kiritmaguncha tsiklni davom ettiring va kiritilgan sonlarning yig‘indisini hisoblang.
// let num=+prompt('Son')
// let sum=0
// while(num!=0){
//     sum=sum+num;
//     num=+prompt('Sonni kiriting')
// }
// console.log(sum)

////////////////////////////////////
//4-MASALA
//Foydalanuvchi musbat son kiritmaguncha tsiklni davom ettiring va oxirgi kiritilgan sonni chiqarib bering.
// let lastnumber;
// let num=+prompt('Sonni kiritng')
// while(num<0){
//     num=+prompt('Sonni kriting')
// }    console.log(num);

////////////////////////////////////
//5-MASALA
// Foydalanuvchidan raqam kiritishni so‘rang va raqamning raqamlar yig‘indisini hisoblang.
// let num=+prompt('Sonni kiriting')
//  let sum=0
// while(num>=1){
//     let lastnum=num%10;
//     sum+=lastnum;
//     num=(Math.trunc(num/10))
// }
// console.log(sum)

////////////////////////////////////
//6-MASALA
//Foydalanuvchi manfiy son kiritguncha tsiklni davom ettiring va kiritilgan juft sonlar sonini hisoblang.
// let num = +prompt("Sonni kiriting");
// let sum = 0;
// while (num > 0) {
//    num=+prompt('Sonni kiriting')
//    if(num%2==0){
//     sum++
//    }
//   }
//   console.log(sum)

////////////////////////////////////
//7-MASALA
// 1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin faqat toq sonlarni.
// let i=1
// while(i<20){
//     i++
//     if(i%2===1)
//       console.log(i);  
// }

////////////////////////////////////
//8-MASALA
//1 dan 50 gacha bo‘lgan sonlardan 5 ga karrali sonlarni chiqaring.
// let i=1
// while(i<=50){
//     i++
//     if(i%5==0)
//         console.log(i)
// }

////////////////////////////////////
//9-MASALA
//Foydalanuvchidan butun son kiritishni so‘rang va bu sonni teskari ko‘rinishda chiqarib bering.
//Tushunmadm

////////////////////////////////////
//10-MASALA
//100 dan 1 gacha bo‘lgan sonlarni, faqat 10 ga bo‘linadiganlarini chiqaring.
// let i=100
// while(i>1){
//     i--
//     if(i%10==0)
//         console.log(i)
// }

////////////////////////////////////
//11-MASALA
//1 dan 100 gacha bo‘lgan barcha sonlarning kvadratini chiqarib bering.
// let i=1
// while(i<100){
//     i++
//     console.log(i**2)
// }

////////////////////////////////////
//12-MASALA
//Foydalanuvchidan raqam kiritishni so‘rang. Agar kiritilgan son 5 ga bo‘linmasa, yana son kiritishni so‘rang.
// let num=+prompt('Sonni kiriting')
// while(num%5!=0){
//     num = +prompt("Sonni kiriting");
// }
// console.log(num);


////////////////////////////////////
//13-MASALA
//Foydalanuvchi 10 dan katta son kiritmaguncha davom eting. Oxirida kiritilgan sonni chiqaring.
// let num=+prompt('Sonni kiriting')
// while(num<10){
//     num=+prompt('Sonni kiriting')  
// }
// console.log(num)

////////////////////////////////////
//14-MASALA    TUSHUNMADM
//Foydalanuvchi “stop” so‘zini yozmaguncha davom eting. Oxirida nechta son kiritganini hisoblang.
// let word=+prompt("So'z yozing")
// let sum=0
// while(word=stop){
//      word = +prompt("So'z yozing");
//     sum++;  
// }
// console.log(sum);

////////////////////////////////////
//15-MASALA
//Foydalanuvchi kiritgan sonlarning o‘rtacha qiymatini hisoblang (nol kiritilganda tsikl to‘xtaydi).
// let num=+prompt('Sonni kiriting')
// let sum=0
// let sum2=0
// while(num!=0){
//     sum2 = sum2 + num;
//     num=+prompt('Sonni kiriting')
//     sum++
// }
// console.log(sum2/sum)





//  Ternary operator ga oid masalalar (5 ta):

////////////////////////////////////
//1-MASALA
//Foydalanuvchi kiritgan son musbat yoki manfiy ekanligini aniqlang.
// let num=+prompt('Sonni kiriting')
// num > 0 ? console.log("Musbat") : console.log("Manfiy");

////////////////////////////////////
//2-MASALA
//Foydalanuvchi kiritgan son juft yoki toq ekanligini aniqlang.
// let num=+prompt('Sonni kiriting')
// num%2==0 ? console.log("Juft") : console.log("Toq")

////////////////////////////////////
//3-MASALA
//Foydalanuvchi kiritgan son 100 dan katta yoki kichik ekanligini aniqlang.
// let num=+prompt("Sonni kiriting")
// num>100 ? console.log('100 dan katta') : console.log('100 dan kichik')

////////////////////////////////////
//4-MASALA
//Foydalanuvchidan ikkita son so‘rang va ularning kattasini aniqlang.
// let num = +prompt("Sonni kiriting")
// let num2 = +prompt("Sonni kiriting");
// num>num2 ? console.log("Birinchisi kattasi") : console.log("Ikkinchisi kattasi")


////////////////////////////////////
//5-MASALA
//Foydalanuvchi kiritgan son 3 ga va 5 ga bo‘linadigan yoki bo‘linmaydiganligini tekshiring.
// let num=+prompt("Sonni kiriting")
// num%15==0 ? console.log("Bu son 3 va 5 ga bo'linadi") : console.log("Bu son 3 va 5 ga bo'linmaydi")





// Math methods ga oid masalalar (4 ta):

////////////////////////////////////
//1-MASALA
//0 dan 100 gacha tasodifiy son hosil qiling (Math.random) va uni ekranga chiqarib bering.
// console.log(Math.trunc(Math.random()*100))

////////////////////////////////////
//2-MASALA
//Foydalanuvchidan haqiqiy son kiritishni so‘rang va uning faqat butun qismini chiqarib bering (Math.trunc).
// let num=+prompt('sonni kiriting')
// console.log(Math.trunc(num))

////////////////////////////////////
//3-MASALA
//Foydalanuvchidan haqiqiy son kiritishni so‘rang va uni yuqoriga qarab yaxlitlang (Math.ceil).
// let num=+prompt('Sonni kiriting')
// console.log(Math.ceil(num))

////////////////////////////////////
//4-MASALA
//Foydalanuvchidan son kiritishni so‘rang va uning modulini toping (Math.abs).
// let num = +prompt("Sonni kiriting");
// console.log(Math.abs(num))





// For ga oid masalalar (15 ta):

////////////////////////////////////
//1-MASALA
//1 dan 50 gacha bo‘lgan sonlarni ekranga chiqaring.
// for(let i=1;i<=50;i++){
//     console.log(i)
// }

////////////////////////////////////
//2-MASALA
//10 dan 1 gacha bo‘lgan sonlarni ekranga chiqaring.
// for(let i=10;i>=1;i--){
//     console.log(i)
// }

////////////////////////////////////
//3-MASALA
//1 dan 100 gacha bo‘lgan faqat toq sonlarni chiqarib bering.
// for(let i=1;i<=100;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }

////////////////////////////////////
//4-MASALA
//1 dan 50 gacha bo‘lgan faqat juft sonlarni chiqarib bering.
// for(let i=1;i<=50;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

////////////////////////////////////
//5-MASALA
//1 dan 100 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang.
// let sum=0
// for(let i=1;i<=100;i++){
//     sum+=i
// }
// console.log(sum)

////////////////////////////////////
//6-MASALA
//Foydalanuvchidan son kiritishni so‘rang va 1 dan shu songacha bo‘lgan barcha sonlarning ko‘paytmasini hisoblang.
// let num=+prompt('Sonni kiriting')
// let sum=1
// for(let i=1;i<=num;i++){
//     sum*=i
// }
// console.log(sum)

////////////////////////////////////
//7-MASALA
//1 dan 20 gacha bo‘lgan sonlarning kvadratini chiqarib bering.
// for(let i=1;i<=20;i++){
//     console.log(i**2)
// }

////////////////////////////////////
//8-MASALA
//Foydalanuvchi kiritgan sonning faktorialini hisoblang.
// let num=+prompt('Sonni kiriting')
// let sum=1
// for(let i=1;i<=num;i++){
//     sum*=i
// }
// console.log(sum)

////////////////////////////////////
//9-MASALA
//1 dan 100 gacha bo‘lgan barcha 5 ga karrali sonlarni chiqarib bering.
// for(let i=1;i<=100;i++){
//     if(i%5==0){
//         console.log(i)
//     }
// }

////////////////////////////////////
//10-MASALA
//Foydalanuvchidan musbat son kiritishni so‘rang va 1 dan shu songacha bo‘lgan sonlarning kubini chiqarib bering.
// let num=+prompt('Sonni kiriting')
// for(let i=1;i<=num;i++){
//     console.log(i**3)
// }

////////////////////////////////////
//11-MASALA
//1 dan 100 gacha bo‘lgan barcha juft sonlarning yig‘indisini hisoblang.
// let sum=0
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         sum+=i
//     }
// }
// console.log(sum);

////////////////////////////////////
//12-MASALA
//1 dan 50 gacha bo‘lgan sonlar orasida 3 ga bo‘linadigan birinchi 10 ta sonni ekranga chiqaring.
// for(let i=1;i<=50;i++){
//     if(i%3==0 && i<31)
//     console.log(i)
// }

////////////////////////////////////
//13-MASALA
//Foydalanuvchidan musbat butun son kiritishni so‘rang va shu songacha bo‘lgan sonlar yig‘indisini toping.
// let num=+prompt('Sonni kiriting')
// let sum=0
// for(let i=1;i<=num;i++){
//     if(i>0){
//         sum+=i
//     }
// }
// console.log(sum)

////////////////////////////////////
//14-MASALA
//1 dan 10 gacha bo‘lgan barcha sonlarning kvadratlar yig‘indisini toping.
// let sum=0
// for(let i=1;i<=10;i++){
//    sum+=i**2
// }
// console.log(sum)

////////////////////////////////////
//15-MASALA
//Foydalanuvchi kiritgan musbat butun sonning barcha bo‘luvchilarini chiqarib bering.
// let num=+prompt('Sonni kririting')
// for(let i=1;i<=num;i++){
//     if(num%i==0){
//         console.log(i)
//     }
// }





// Barcha mavzularni qamrab oluvchi masalalar (10 ta):

////////////////////////////////////
//1-MASALA
// Foydalanuvchidan son kiritishni so‘rang va bu son 3 ga bo‘linadiganmi yoki yo‘qligini ternary operator yordamida aniqlang. Keyin 1 dan shu songacha bo‘lgan barcha sonlarni chiqarib bering.
// let num=+prompt('Sonni kiriting')
// let sum=(num%3==0) ? "3 ga bo'linadi" : "3ga bo'linmaydi";
// console.log()
// for(let i=1;i<=num;i++){
//     console.log(i)
// }
////////////////////////////////////
//2-MASALA
//Foydalanuvchi kiritgan oy raqamiga mos faslni (switch-case) aniqlang va 1 dan shu oy raqamigacha bo‘lgan sonlarni (for) ekranga chiqaring.
// let fasl= +prompt("Oy raqamini kiriting");
// switch (fasl) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//     break;
//   default:
//     console.log("Bunday oy raqami  yuq");
//     break;
// }
// for (let i = 1; i <=fasl; i++) {
//   console.log(i);
// }

////////////////////////////////////
//3-MASALA
//Tasodifiy son hosil qiling va bu son juft yoki toq ekanligini aniqlang. Agar son juft bo‘lsa, 1 dan 20 gacha bo‘lgan juft sonlarni chiqarib bering (for).
//  let num=(Math.trunc(Math.random() * 100));
//  console.log(num)
// if(num%2==0){
//     for(let i=1;i<=20;i++){
//         console.log(i)
//     }
// }else{
//     console.log("Bu toq son")
// }

////////////////////////////////////
//4-MASALA
//Foydalanuvchidan musbat son kiritishni so‘rang va uning faktorialini hisoblang (while). Keyin sonning modul qiymatini toping (Math.abs).
// let num=+prompt('Musbat son kiriting')
// let sum=1
// for(let i=1;i<=num;i++){
//     sum*=i
// }console.log(Math.abs(sum))

////////////////////////////////////
//5-MASALA
//Foydalanuvchidan hafta kuni raqamini kiritishni so‘rang (switch-case) va unga mos kun nomini chiqaring. Agar kun raqami juft bo‘lsa, qo‘shimcha ravishda 1 dan 10 gacha bo‘lgan sonlarni chiqarib bering (for).
// let week=+prompt('Hafta kuning raqamini kiritng')
// switch (week) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;

//   default:
//    console.log('Bunday hafta kuni mavjud emas')
//     break;
// }
// if(week%2==0){
//     for(let i=1;i<=10;i++){
//         console.log(i)
//     }
// }

////////////////////////////////////
//6-MASALA
//Tasodifiy son hosil qilib, uni butun qismiga keltiring (Math.trunc) va bu songacha bo‘lgan barcha sonlarning yig‘indisini hisoblang (while).
// let num = Math.trunc(Math.random() * 100);
// console.log(`Tasodifiy son: ${num}`)
// let sum=0
// let i=1
// while(i<=num){
//     i++
//    sum+=i
// }console.log(`Ungacha bo'lgan sonlar yig'indisi: ${sum}`)

////////////////////////////////////
//7-MASALA
//Foydalanuvchi manfiy son kiritmaguncha sonlarni kiritishni davom ettiring (do...while). Yakunida barcha kiritilgan sonlarning o‘rtacha qiymatini hisoblang.
// let sum=0;
// let count=0;
// let number;
// do{
//     number=+prompt("Son kiriting")
//     if(number>=0){
//         sum+=number
//         count++
//     }
// }while(number>=0)  
//         console.log(sum/count)  

////////////////////////////////////
//8-MASALA
//Savol to'liq emas