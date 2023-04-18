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

let sample = "30 Days Of Javascript"

console.log(sample.charAt(0)) // 0. İndeksin değerini döndürdük. Çıktı: 3

let lastIndex = sample.length - 1 // Toplamda 21 karakter olan bu string'de -1 yaparak 20 sayısına ulaşacağız.
console.log(sample.charAt(lastIndex)) // 0'dan başlayarak saydığımızda t harfine ulaşacağız. Yani 20. karaktere.



// CHARCODEAT()

console.log(sample.charCodeAt(3)) // İndex değerinin ASCII tablosuna göre değerini bastık. Çıktı: 68

console.log(sample.charCodeAt(lastIndex)) // Aynı şekilde tablo üzerinde değerini bastık. Çıktı: 116



// INDEXOF()

// Belirtilen değerin index'ini bulmamızı sağlar, bulamazsa -1 döndürür. Bu metot büyük/küçük harfe duyarlıdır.

console.log(sample.indexOf("D"))           // 3
console.log(sample.indexOf('Days'))       // 3
console.log(sample.indexOf('days'))       // -1
console.log(sample.indexOf('a'))          // 4
console.log(sample.indexOf('JavaScript')) // 11
console.log(sample.indexOf('Script'))     //15
console.log(sample.indexOf('script'))     // -1



// LASTINDEXOF()

console.log(sample.lastIndexOf("Days")) // 3 - Bu metot ile belirtilen değerin son indeksini bulduk
console.log(sample.lastIndexOf("java")) // -1 - Büyük küçük harfa duyarlı olmasından dolayı burada -1 döndürür.



// CONCAT()

let sampleConcat = "30"
// concat() metodu ile değişkenimizin devamında ne yazmasını istediğimizi belirttik.
console.log(sampleConcat.concat(" Days ","of ", "Javascript")) // Çıktı: 30 Days of Javascript
console.log(sampleConcat.concat(" ways ","to ","die")) // Çıktı: 30 ways to die



// STARTSWITH()

let sampleStartsWith = "Love is the best to in this world"

console.log(sampleStartsWith.startsWith("Love")) // True - Bu metot ile string ögesinin ne ile başladığını döndürdük.
console.log(sampleStartsWith.startsWith("love")) // false - Büyük/küçük harfe duyarlı bir metotdur.



// ENDSWITH()

/* Bu metot ise startsWith() metodunun tam tersi olarak çalışır. Ne ile bittiğini döndürmemizi sağlar
Yine aynı şekilde büyük/küçük harfe duyarlıdır. */



// SEARCH

let sampleSearch = "I love Javascript. If you do not love Javascript what else can you love."
// Argüman olarak bir alt dize alır ve ilk eşleşmenin dizinini döndürür. Arama değeri bir dize veya normal ifade kalıbı olabilir.
console.log(sampleSearch.search("love")) // Çıktı: 2
console.log(sampleSearch.search("you")) // Çıktı: 22



// MATCH()

let sampleMatch = "Love is love"
/*Argüman olarak bir alt dize veya normal ifade kalıbı alır ve eşleşme varsa bir dizi döndürür, değilse null döndürür. Normal bir ifade kalıbının nasıl göründüğünü görelim. / işareti ile başlar ve / işareti ile biter.*/

let patternOne = /love/ // Koşulsuz
let patternTwo = /love/gi // Burada g - tümünde ara, i - ise büyük küçük harfi duyarsız kıl anlamında kullanılır.

let sampleMatchString = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(sampleMatchString.match('love'))

let pattern = /love/gi // Büyük küçük harfe duyarsız bir şekilde tamamında aramasını istedik.
console.log(sampleMatchString.match(pattern))



// REPEAT()

let carName = "Mercedes "
console.log(carName.repeat(5)) // Bu metot ile string değerini belirtilen sayı kadar tekrarlattık.



// STRING TO INT

/*
- parseInt()
- Number()
- Plus sign (+)
*/

let num = "10" // Tırnak içine aldığımız için şu an sayımız string niteliğinde.
let numInt = parseInt(num)

console.log(numInt) // Bu şekilde string değerini number yapmış olduk.

/*
Diğer yöntemler:

let num = "10"
let numInt = Number(num)

console.log(numInt) // Çıktı: 10 - Type: Number


let num = "10"
let numInt = +num

console.log(numInt) // Çıktı: 10 - Type: Number
*/



// FLOAT TO INT

// parseInt() ile oluşturacağımız bu yapıda, ondalık sayıları yuvarlayarak tam sayı haline getireceğiz.

let floatNum = 9.81
let floatInt = parseInt(floatNum) // Bu kısımda sayımızı otomatik olarak yakın olan tam sayıya yuvarlıyoruz.

console.log(floatInt) // Ekrana tam sayı olarak çıktı verecektir. Çıktı: 9


