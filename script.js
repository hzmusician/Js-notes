// let = Değişebilen değişkenler tanımlamamızı sağlar
// const = Değişmeyen değişkenler tanımlamamızı sağlar

// VERİ TÜRLERİ

//  **Primitive Data Types (İlkel veri türleri)**

// - Numbers 
// - Strings
// - Booleans (True & False)
// - Null (Empty Value or no Value)
// - Undefined (A declared variable without a value)

let nums = [1, 2, 3] // Köşeli parantez ile dizi oluşturduk

console.log(nums)

console.log(nums[1]) //Kaçıncı elemanı göstermesini istediğimi belirttim. 0-1-2-3 olarak gidiyor.

// YORUMLAR KODU DAHA OKUNABİLİR HALE GETİRMEYE YARDIMCI OLURLAR 

/*Burası da 
Çoklu satırlı bir 
yorum satırı*/

let ad = ("Batuhan");
let soyad = ("KARAHAN");
let yas = (23);
let evliMi = false;
let motorsiklet = (null);
let araba;  //Değer atamadık

console.log (ad, soyad, yas, evliMi, araba, motorsiklet) //Console'a yazdırdık

/*typeof ile türlerini anladık*/

console.log(typeof ad); //string
console.log(typeof soyad); //string
console.log(typeof yas); //number
console.log(typeof evliMi); //boolean
console.log(typeof motorsiklet); //nulL
console.log(typeof araba); //undefinied



// MATH OBJECT

const PI = Math.PI

console.log(PI)

console.log(Math.round(PI))                // 3.14 olduğu için 3 e yuvarlama yapıyor

console.log(Math.round(9.81))              // Ondası 0.5 üstünde olduğu için 10 yapar

console.log(Math.floor(PI))                // floor aşağı yuvarlar Bu 3 olur

console.log(Math.ceil(PI))                 // ceil yukarı yuvarlar Bu 4 olur

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // En küçük sayıyı bulmaya yaradığı için sonuç -5 döner

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // En büyük sayıyı bulmaya yaradığı için sonuç 20 döner

const randNum = Math.random() // 0 ile 0.999999 arasında rastgele bir sayı üretir.
console.log(randNum)



// STRING ÖRNEKLERİ

let myname = "Batuhan", space = " ", surName = "KARAHAN", age = 23, countryTwo = "Turkey"

console.log("Hi! I'm " + myname + space + surName + ". I'm " + age + ". I live in " + countryTwo)

// Bu şekilde yazmak hataya açık olmakla birlikte stabil olmayabilir. Daha stabil kullanım için ise:

console.log(`I am ${myname} ${surName} I'm ${age} and I live in ${countryTwo}`)

// ${} yapısını kullanıyoruz. Bu yapıyı kullanmak için `` işaretleri arasında kodlama yapıyoruz



// LENGTH

let isim = "Batuhan"

console.log(isim.length) // String ögesinin uzunluğunu ölçtük

console.log(isim[0] = "C") // Seçili karakteri değiştirdik

console.log(isim) // Ekrana değişkeni bastık

console.log(isim.length - 1) // Uzunluğunu bir karakter kısalttık



// UPPERCASE() & LOWERCASE()

let darlingName = "Sena"

console.log(darlingName.toUpperCase()) // Çıktı: SENA

console.log(darlingName.toLowerCase()) // Çıktı : sena



// SUBSTR()

let js = "Javascript" // Değişken atadık

console.log(js.substr(4,6)) // Başlangıç karakterini ve silinecek karakter sayısını belirttik Çıktı: script

console.log(js.substr(0,4)) // Aynı şekilde başlangıç değeri ve uzunluk değeri belirttik Çıktı: Java



// SUBSTRING()

console.log(js.substring(4,10)) // Başlangıç değeri ve bitiş değeri atadık Çıktı: script

console.log(js.substring(0,4)) // Aynı şekilde başlangıç ve bitiş ayarladık Çıktı: Java



// SPLIT()

let sampleString = "Merhaba ben Batuhan KARAHAN"

console.log(sampleString.split("")) // Değer vermediğimiz için bütün karakterleri ayrı ayrı sıraladı.

console.log(sampleString.split(" ")) // Bu kısımda boşlukla böl dediğimiz için 4 elementli bir array(dizi) oluşturdu

let countries = "Denmark, Germany, Holland, Turkey, Egypt, Finland, Japan"

console.log(countries.split(",")) // Sadece , ile ayırdığımız için sonraki elemanın sol tarafında boşluk oluşuyor.

console.log(countries.split(", ")) // Burada virgül ardından boşluk koyduğumuz için sadece virgül ile ayırıyor. Boşluk eklemiyor.



// TRIM()

let sigara = "     Monte Carlo Slender Dark Blue      "

console.log(sigara.trim()) // Bu şekilde tırnak içerisindeki, baştaki ve sondaki boşluklardan kurtulmuş olduk.



// INCLUDES()

console.log(sigara.includes("Carlo")) // True - String içerisinde varlık kontrolü yaptık.
console.log(sigara.includes("carlo")) // False - Bu metot büyük/küçük harfe duyarlıdır
console.log(sigara.includes("Slen")) // True
console.log(sigara.includes("dark")) // False



// REPLACE()

console.log(sigara.replace("Monte","Camel")) // Bu metot ile önce değiştirmek istediğimizi, sonra da ne olmasını istediğimiz kelimeyi yazıyoruz.
console.log(sigara.replace("Dark","Light")) // Aynı şekilde değişmesini istediğimiz ve ne yazmasını istediğimiz değerleri yazdık.



// CHARAT()

let cümle = "30 Days Of Javascript"

console.log(cümle.charAt(0)) // 0. İndeksin değerini döndürdük. Çıktı: 3

let lastIndex = cümle.length - 1 // Toplamda 21 karakter olan bu string'de -1 yaparak 20 sayısına ulaşacağız.
console.log(cümle.charAt(lastIndex)) // 0'dan başlayarak saydığımızda t harfine ulaşacağız. Yani 20. karaktere.



// CHARCODEAT()

console.log(cümle.charCodeAt(3)) // İndex değerinin ASCII tablosuna göre değerini bastık. Çıktı: 68

console.log(cümle.charCodeAt(lastIndex)) // Aynı şekilde tablo üzerinde değerini bastık. Çıktı: 116


// INDEXOF()

// Belirtilen değerin index'ini bulmamızı sağlar, bulamazsa -1 döndürür. Bu metot büyük/küçük harfe duyarlıdır.

console.log(cümle.indexOf("D"))           // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1


// LASTINDEXOF()

