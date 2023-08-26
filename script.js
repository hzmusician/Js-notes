//! JAVASCRIPT KONU ÖZETLERİ / KISA NOTLAR

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



//! MATH OBJECT

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



//! STRING ÖRNEKLERİ

let myname = "Batuhan", space = " ", surName = "KARAHAN", age = 23, countryTwo = "Turkey"

console.log("Hi! I'm " + myname + space + surName + ". I'm " + age + ". I live in " + countryTwo)

// Bu şekilde yazmak hataya açık olmakla birlikte stabil olmayabilir. Daha stabil kullanım için ise:

console.log(`I am ${myname} ${surName}. I'm ${age} and I live in ${countryTwo}`)

// ${} yapısını kullanıyoruz. Bu yapıyı kullanmak için `` işaretleri arasında kodlama yapıyoruz



//! LENGTH

let isim = "Batuhan"

console.log(isim.length) // String ögesinin uzunluğunu ölçtük

console.log(isim[0] = "C") // Seçili karakteri değiştirdik

console.log(isim) // Ekrana değişkeni bastık

console.log(isim.length - 1) // Uzunluğunu bir karakter kısalttık



//! UPPERCASE() & LOWERCASE()

let darlingName = "Sena"

console.log(darlingName.toUpperCase()) // Çıktı: SENA

console.log(darlingName.toLowerCase()) // Çıktı : sena



//! SUBSTR()

let js = "Javascript" // Değişken atadık

console.log(js.substr(4,6)) // Başlangıç karakterini ve silinecek karakter sayısını belirttik Çıktı: script

console.log(js.substr(0,4)) // Aynı şekilde başlangıç değeri ve uzunluk değeri belirttik Çıktı: Java



//! SUBSTRING()

console.log(js.substring(4,10)) // Başlangıç değeri ve bitiş değeri atadık Çıktı: script

console.log(js.substring(0,4)) // Aynı şekilde başlangıç ve bitiş ayarladık Çıktı: Java



//! SPLIT()

let sampleString = "Merhaba ben Batuhan KARAHAN"

console.log(sampleString.split("")) // Değer vermediğimiz için bütün karakterleri ayrı ayrı sıraladı.

console.log(sampleString.split(" ")) // Bu kısımda boşlukla böl dediğimiz için 4 elementli bir array(dizi) oluşturdu

let countries = "Denmark, Germany, Holland, Turkey, Egypt, Finland, Japan"

console.log(countries.split(",")) // Sadece , ile ayırdığımız için sonraki elemanın sol tarafında boşluk oluşuyor.

console.log(countries.split(", ")) // Burada virgül ardından boşluk koyduğumuz için sadece virgül ile ayırıyor. Boşluk eklemiyor.



//! TRIM()

let sigara = "     Monte Carlo Slender Dark Blue      "

console.log(sigara.trim()) // Bu şekilde tırnak içerisindeki, baştaki ve sondaki boşluklardan kurtulmuş olduk.



//! INCLUDES()

console.log(sigara.includes("Carlo")) // True - String içerisinde varlık kontrolü yaptık.
console.log(sigara.includes("carlo")) // False - Bu metot büyük/küçük harfe duyarlıdır
console.log(sigara.includes("Slen")) // True
console.log(sigara.includes("dark")) // False



//! REPLACE()

console.log(sigara.replace("Monte","Camel")) // Bu metot ile önce değiştirmek istediğimizi, sonra da ne olmasını istediğimiz kelimeyi yazıyoruz.
console.log(sigara.replace("Dark","Light")) // Aynı şekilde değişmesini istediğimiz ve ne yazmasını istediğimiz değerleri yazdık.



//! CHARAT()

let sample = "30 Days Of Javascript"

console.log(sample.charAt(0)) // 0. İndeksin değerini döndürdük. Çıktı: 3

let lastIndex = sample.length - 1 // Toplamda 21 karakter olan bu string'de -1 yaparak 20 sayısına ulaşacağız.
console.log(sample.charAt(lastIndex)) // 0'dan başlayarak saydığımızda t harfine ulaşacağız. Yani 20. karaktere.



//! CHARCODEAT()

console.log(sample.charCodeAt(3)) // İndex değerinin ASCII tablosuna göre değerini bastık. Çıktı: 68

console.log(sample.charCodeAt(lastIndex)) // Aynı şekilde tablo üzerinde değerini bastık. Çıktı: 116



//! INDEXOF()

// Belirtilen değerin index'ini bulmamızı sağlar, bulamazsa -1 döndürür. Bu metot büyük/küçük harfe duyarlıdır.

console.log(sample.indexOf("D"))           // 3
console.log(sample.indexOf('Days'))       // 3
console.log(sample.indexOf('days'))       // -1
console.log(sample.indexOf('a'))          // 4
console.log(sample.indexOf('JavaScript')) // 11
console.log(sample.indexOf('Script'))     //15
console.log(sample.indexOf('script'))     // -1



//! LASTINDEXOF()

console.log(sample.lastIndexOf("Days")) // 3 - Bu metot ile belirtilen değerin son indeksini bulduk
console.log(sample.lastIndexOf("java")) // -1 - Büyük küçük harfa duyarlı olmasından dolayı burada -1 döndürür.



//! CONCAT()

let sampleConcat = "30"
// concat() metodu ile değişkenimizin devamında ne yazmasını istediğimizi belirttik.
console.log(sampleConcat.concat(" Days ","of ", "Javascript")) // Çıktı: 30 Days of Javascript
console.log(sampleConcat.concat(" ways ","to ","die")) // Çıktı: 30 ways to die



//! STARTSWITH()

let sampleStartsWith = "Love is the best to in this world"

console.log(sampleStartsWith.startsWith("Love")) // True - Bu metot ile string ögesinin ne ile başladığını döndürdük.
console.log(sampleStartsWith.startsWith("love")) // false - Büyük/küçük harfe duyarlı bir metotdur.



//! ENDSWITH()

/* Bu metot ise startsWith() metodunun tam tersi olarak çalışır. Ne ile bittiğini döndürmemizi sağlar
Yine aynı şekilde büyük/küçük harfe duyarlıdır. */



//! SEARCH

let sampleSearch = "I love Javascript. If you do not love Javascript what else can you love."
// Argüman olarak bir alt dize alır ve ilk eşleşmenin dizinini döndürür. Arama değeri bir dize veya normal ifade kalıbı olabilir.
console.log(sampleSearch.search("love")) // Çıktı: 2
console.log(sampleSearch.search("you")) // Çıktı: 22



//! MATCH()

let sampleMatch = "Love is love"
/*Argüman olarak bir alt dize veya normal ifade kalıbı alır ve eşleşme varsa bir dizi döndürür, değilse null döndürür. Normal bir ifade kalıbının nasıl göründüğünü görelim. / işareti ile başlar ve / işareti ile biter.*/

let patternOne = /love/ // Koşulsuz
let patternTwo = /love/gi // Burada g - tümünde ara, i - ise büyük küçük harfi duyarsız kıl anlamında kullanılır.

let sampleMatchString = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(sampleMatchString.match('love'))

let pattern = /love/gi // Büyük küçük harfe duyarsız bir şekilde tamamında aramasını istedik.
console.log(sampleMatchString.match(pattern))



//! REPEAT()

let carName = "Mercedes "
console.log(carName.repeat(5)) // Bu metot ile string değerini belirtilen sayı kadar tekrarlattık.



//! STRING TO INT

/*
- parseInt()
- Number()
- Plus sign (+)
*/

let num = "10" // Tırnak içine aldığımız için sayımız şu an string niteliğinde.
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



//! FLOAT TO INT

// parseInt() ile oluşturacağımız bu yapıda, ondalık sayıları yuvarlayarak tam sayı haline getireceğiz.

let floatNum = 9.81
let floatInt = parseInt(floatNum) // Bu kısımda sayımızı otomatik olarak yakın olan tam sayıya yuvarlıyoruz.

console.log(floatInt) // Ekrana tam sayı olarak çıktı verecektir. Çıktı: 9



//! ATAMA OPERATÖRLERİ

/*
 Eşittir =
 Toplama + 
 Çıkarma -
 Çarpma *
 Bölme /
 Mod %
 Üslü sayı **
*/

/*
let x = y
let x + y
let x * y
let x / y
let x % y
let x ** y
*/



//! KARŞILAŞTIRMA OPERATÖRLERİ

console.log(3 > 2)              // true, çünkü 3 2 den büyüktür
console.log(3 >= 2)             // true, çünkü 3 2 den büyüktür
console.log(3 < 2)              // false,  çünkü 3 2 den büyüktür
console.log(2 < 3)              // true, çünkü 2 3 den küçüktür
console.log(2 <= 3)             // true, çünkü 2 3 den küçüktür
console.log(3 == 2)             // false, çünkü 3 2 ye eşit değildir
console.log(3 != 2)             // true, çünkü 3 2 ye eşit değildir
console.log(3 == '3')           // true, sadece değeri karşılaştırıyor
console.log(3 === '3')          // false, hem değeri hemde veri türünü karşılaştırıyor o yüzden yanlış. Birisi int değeri birisi string değerinden ( Bu denklik operatörü )
console.log(3 !== '3')          // true, hem değeri hemde veri türünü karşılaştırıyor o yüzden doğru. (Bu denk değil operatörü)
console.log(3 != 3)             // false, değeri karşılaştırıyor
console.log(3 !== 3)            // false, hem değeri hem de veri türünü karşılaştırıyor
console.log(0 == false)         // true, eşdeğer
console.log(0 === false)        // false, tam olarak aynı değil
console.log(0 == '')            // true, eşdeğer
console.log(0 == ' ')           // true, eşdeğer
console.log(0 === '')           // false, tam olarak aynı değil
console.log(1 == true)          // true, eşdeğer
console.log(1 === true)         // false, tam olarak aynı değil
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, eşit değil
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false



//! MANTIKSAL OPERATÖRLER

// && ve işareti
const andSymbol = 4 > 3 && 5 > 1 // İki şart doğrulanırsa true çıktı alırız.

// || veya işareti
const orSymbol = 4 > 3 || 5 > 1 // İki şarttan birisi doğrulanırsa true çıktı alırız.

// "!" olumsuzlama işareti
const nagetiveSymbol = !false // false olarak atamamıza rağmen, olumsuzlama yapacağı için true çıktısı alacağız.

console.log(andSymbol, orSymbol, nagetiveSymbol)



//! ARTTIRMA OPERATÖRÜ

let increase = 0

// Öncesi arttırma
console.log(++increase) // 1 çıktısını alırız

// Sonrası arttırma
console.log(increase++) // 1 çıktısını alırız



//! AZALTMA OPERATÖRÜ

let decrease = 0

// Öncesi azaltma
console.log(--decrease) // -1 çıktısını alırız

// Sonrası azaltma
console.log(decrease--) // -1 çıktısını alırız



//! KOŞUL OPERATÖRÜ (Ternary)

// Bu operatörü kısa if olarak tanımlayabiliriz.

let myAge = 23
let myAgeResult = myAge < 20 ? "20 Yaşından küçüksün" : "20 Yaşından büyüksün"
console.log(myAgeResult)

// Örnekte ? işaretini if olarak, : işaretini de else olarak kullandık ve sonucu konsola bastırdık

let myCar = 2014
let carModel = myCar < 2013 ? "Arabam 2013 model aşağısında" : "Arabam 2013 model yukarısında"
console.log(carModel)



//! WINDOW METODLARI


//! Alert()

    // alert("Hoşgeldin") // Bu metod sayesinde, site açıldığında pencere olarak bilgi ekranı vermiş olduk.

//! Prompt()

 /* let promptNumber = prompt("Enter Number","Number Goes Here")
    console.log(promptNumber) */

// Bu metod sayesinde ise açılan pencereye değer girme ve değişkenimize o değeri atama yetkisi vermiş olduk. Ardında da konsola bastırdık.

//! Confirm()

 /* const agree = confirm("Emin misin?")
    console.log(agree) */

// Bu metod ile de kabul et veya etme şeklinde butonlar olan bir pencere açmış olduk.



//! DATE OBJESİ

const now = new Date()

/*
console.log(now.getFullYear()) (Yılı belirtir)
console.log(now.getMonth()) (Ayı belirtir fakat 0'dan saymaya başladığı için ocak = 0 olacaktır)
console.log(now.getDate()) (Günü belirtir)
console.log(now.getHours()) (Saati belirtir)
console.log(now.getMinutes()) (Dakikayı belirtir)
console.log(now.getSeconds()) (Saniyeyi belirtir)
console.log(now.getMiniseconds()) (Milisaniyeyi belirtir)
console.log(now.getTime()) (Tam tarihi belirtir)
console.log(now.getDay()) (Haftalık olarak gün belirtir "1-7")
*/

//! GETTIME()

const timeSample = new Date()
console.log(timeSample.getTime()) // 1 ocak 1970'den itibaren anlık zamana kadar geçen süreyi milisaniye olarak gösterir.

//! DATENOW()

const allSeconds = Date.now() //
console.log(allSeconds) // 1 Ocak 1970 den kullandığınız zaman arasındaki süreyi milisaniye cinsinden verecektir.

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

// Daha anlaşılır bir şekilde anlık olarak tam tarih verelim.

const time = new Date() // Değ"işkeni tarih olarak atadık
const year = time.getFullYear() // Yılı istedik
const month = time.getMonth() + 1 // Ayı istedik fakat sıfırdan saymaya başladığı için +1 dedik
const day = time.getDate() // Günü istedik 
const hour = time.getHours() // Saati istedik
const minute = time.getMinutes() // Dakikayı istedik
const second = time.getSeconds() // Saniyeyi istedik

console.log(`Şu an tarih: ${year}/${month}/${day} - ${hour}:${minute}:${second}`) // Sırayla hepsini belirttik.



//! KOŞULLAR

// IF 

let numIf = 3
if (num > 1) { // Koşulumuzu parantez içinde belirtip, şartı sağlıyorsa ne olmasını gerektiğini yazdık.
    console.log(`${numIf} 1'den büyük bir sayıdır`)
}

let isRaining = true

if(isRaining){
    console.log("Remember to take your rain coat") // Aynı şekilde şartı sağlayınca konsola çıktı verdik.
}



// IF - ELSE 

//numIf=3
if (numIf > 4) {
    console.log(`${numIf} 4'den büyük bir sayıdır.`)
}
else {
    console.log(`${numIf} 4'den küçük bir sayıdır.`)
} // else yapısı ile koşulumuza ikinci bir seçenek belirledik. Eğer ilk şart doğrulanmazsa ikinci şartı gerçekleştirecek.



// IF - ELSE - ELSE IF

//numIf=3
if (numIf > 4) {
    console.log(`${numIf} 4'den büyük bir sayıdır.`)
}
else if (numIf = 3) {
    console.log(`${numIf} 3'e eşittir.`)
}
else {
    console.log(`${numIf} 3'den küçük bir sayıdır.`)
}
// Else if yapısı ile sayısız kere koşul oluşturabilir ve çıktı alabiliriz.



//! SWITCH

let weather = 'cloudy'
switch (weather) { // swtich'e değişkenimizi belirttik.
  case 'rainy': // Şartı sunduk
    console.log('You need a rain coat.') // Doğruysa çıktı olarak bu metni aldık.
    break // Şartı bitirdik.
  case 'cloudy': // Şartı sunduk
    console.log('It might be cold, you need a jacket.') // Doğruysa çıktı olarak bu metni aldık.
    break // Şartı bitirdik.
  case 'sunny': // Şartı sunduk
    console.log('Go out freely.')
    break // Şartı bitirdik.
  default: // else yapısı olarak düşünebiliriz
    console.log(' No need for rain coat.') // Doğruysa çıktı olarak bu metni aldık.
}

let whatDay = prompt("What day is today?") // Kişiden bi gün girmesini istedik.
let dayInput = whatDay.toLowerCase() // küçük harfleri zorunlu kıldık.

switch(dayInput) {
    case 'monday':
        console.log("Today is Monday")
        break
    case 'tuesday':
        console.log("Today is Tuesday")
        break
    case 'wednesday':
        console.log("Today is Wednesday")
        break
    case 'thursday':
        console.log("Today is Thursday")
        break
    case 'friday':
        console.log("Today is Friday")
        break
    case 'saturday':
        console.log("Today is Saturday")
        break
    case 'sunday':
        console.log("Today is Sunday")
        break
    default: // Eğer yazılan değer yanlışsa bu çıktıyı vermesini istedik.
        console.log("It is not a week day!")
}



// TERNARY OPERATÖRÜ

//let isRaining = true

isRaining
    ? console.log("You need a rain coat")
    : console.log("No need for a rain coat")



//! ARRAY (DİZİLER)

const arr = [] // Boş bir array oluşturduk.

let personArray = [
    personName = "Batuhan", 
    personSurname = "KARAHAN",
    personAge = 23,
    personJob = "Developer"
] // Birçok değerden oluşan bi array oluşturup konsola bastırdık. Aralarında virgül kullanılmalı

console.log(personArray)

console.log("Person: ", personArray)
console.log("Numbers of Person: ", personArray.length) // Bu metod ile de diziyi ve dizi uzunluğunu yazdırdık.

const arrTwo = [
    "Şahbaz",
    25,
    "Developer",
    true,
    {country: "Finland", city: "Helsinki"},
    {skills: ["HTML", "CSS", "JAVASCRIPT"]}
] // Arr farklı değerler içerebilir.

console.log(arrTwo)



//! SPLIT İLE DİZİ OLUŞTURMAK

let jsArr = "JavaScript"
let jsArrSplit = jsArr.split("")

console.log(jsArrSplit)


let compainesString = "Facebook, Google, Amazon, IBM, Oracle"
const compaines = compainesString.split(",")

console.log(compaines)


let txt = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
const words = txt.split(" ")

console.log(words)



//! INDEX KULLANARAK ELEMANA ULAŞMAK

const  fruits = ['banana', 'orange', 'mango', 'lemon']

let  firstFruit = fruits[0] // 1. eleman'a o elemanın indexini kullanarak erişiyoruz.  
console.log(firstFruit) // banana
  

secondFruit = fruits[1]
console.log(secondFruit) // orange
  

let  lastFruit = fruits[3]
console.log(lastFruit) // lemon

// Son eleman devam eden örnekteki gibi hesaplanabilir  

let  lastIndexFruit = fruits.length - 1
lastFruit = fruits[lastIndexFruit]  

console.log(lastFruit) // lemon


const  webTechs = [

    'HTML',
    
    'CSS',
    
    'JavaScript',
    
    'React',
    
    'Redux',
    
    'Node',
    
    'MongoDB'
    
    ] // Web teknolojilerinin Listesi
    
    console.log(webTechs) // Dizi elemanlarının hepsi
    
    console.log(webTechs.length) // => dizinin uzunluğunu bilebiliriz. O da 7'dir
    
    console.log(webTechs[0]) // -> HTML
    
    console.log(webTechs[6]) // -> MongoDB
    
      
    
    let  lastIndexWeb = webTechs.length - 1
    
    console.log(webTechs[lastIndexWeb]) // -> MongoDB



    //! DİZİ ELEMANLARINI DÜZENLEMEK

    let basicArr = ["Batuhan","KARAHAN","Starbucks","Barista"]

    basicArr[0] = 'Sena' // İlk elemanı Sena olarak değiştirdik.
    
    console.log(basicArr) // Düzenlenmiş diziyi konsola bastık.



    //! DİZİYİ MANİPÜLE ETMEK

    /*Diziyi manüple edebilmek için farklı metotlar vardır. Bunlar dizilerle uğraşmak için kullanışlı yöntemlerden bazılarıdır. Bu yöntemler: Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift*/

    //* Array 

    const arr = Array() // İçerisi boş olan bir dizi yarattık.
    console.log(arr)

    const sevenEmptyValues = Array(7) // 7 adet boş değer atadık.
    console.log(sevenEmptyValues) // [empty x 7]

    //* Fill

    const  arr = Array() // Boş bir dizi yaratır
    console.log(arr)

    const  eightXvalues = Array(8).fill('X') // 'X'değerine sahip 8 tane eleman oluşuturur.
    console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X'] 

    const  eight0values = Array(8).fill(0) // '0' değerine sahip 8 tane eleman oluşturur.
    console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

    const  four4values = Array(4).fill(4) //'4' değerine sahip 8 tane eleman oluşturur.
    console.log(four4values) // [4, 4, 4, 4]

    //* Concat

    const firstlist = [1, 2, 3]
    const secondList = [4, 5, 6]
    const thirdList = firstlist.concat(secondList)

    console.log(thirdList) // [1, 2, 3, 4, 5, 6]

    //* Length

    const numbers = [1, 2, 3, 4, 5]

    console.log(numbers.lenght) // Dizi uzunluğunu gösterir.