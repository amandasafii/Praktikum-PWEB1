# Praktikum-PWEB1
## **HTML**

HTML merupakan kependekan dari Hyper Text Markup Language. HTMl biasanya
digunakan untuk membangun/merancang sebuah web. Dalam perumpamaan HTML adalah
sketsa dari suatu web.

Berkenalan dengan HTML,; untuk membuka sebuah file HTML menggunakan tag
<!DOCTYPE HTML> atau, kita dapat menggunakna cara cepat di VS Code 
dengan mengetik tanda "!" lalu menekan "enter". Maka secara langsung
VS Code akan membuka markah pembuka HTML hingga penutup HTML.

### **Basic HTML**

Setelah membuat markah dalam HTML kita dapat membuat judul
atau paragraf. Judul dan paragraf harus diletakkan setelah
tag <body>.

Dalam membuat judul pula kita dapat mengatur ukuran font
sesuai dengan kebutuhan kita. Mengatur ukuran font menggunakan tag "h",
dimulai dari h1 dari yang terbesar hingga h7 yang terkecil.

Menggunakan h1-h7

![html in](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/c1a39034-7b8c-4f9a-9451-b0dc831469c5)

Output h1-h7
    
![html out](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/2fbd0b6d-e70d-4f6a-a271-a488b69c9229)

### **Mewarnai Font**

Ketika membuat sebuah paragraf, kita dapat mewarnai font yang kita pakai dengan cara dibawah ini :

![color in](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/70d2c031-bab8-48c5-a23a-c155361b994a)

-Menggunakan "style" di samping p atau h lalu mengetikkan "color" untuk memberikan warna
setelah itu ketikkan warna yang kita perlukan.

Output :

![color out](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/2a64780e-ef78-4d97-93a8-805cc9d760eb)

### **Tabel HTML**

Input untuk membuat tabel pada html :

![table in](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/b9e1083a-4dc0-4e10-b2d7-314f6d0c0237)

-th pada input digunakan untuk membuat header tabel
pada input ini terdapat header nama, no hp, dan alamat.

-td pada input digunakan untuk membuat kolom tabel.

-tr pada input digunakan untuk membuat baris.

-pada pembuatan tabel, hal yang harus diperhatikan yaitu kebutuhan baris dan kolom.

Output tabel :

![table out](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/99f9cc0b-4326-4f7e-9828-84b91112f7ba)

### **List**

List memuat daftar dari suatu data atau tabel yang dituliskan
sebagai daftar menurun. List dapat dibuat dalam html menggunakan format sebagai berikut :

![list in](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/6aedff70-67d3-4add-996f-56cca7c93776)

-Pada input ol merupakan kepanjangan dari ordered list yaitu list yang memiliki urutan baik itu 123 atau abc atau bisa juga angka romawi.

-Pada iput ul merupakan kepanjangan dari unordered list yaitu list yang tidak memiliki urutan, biasanya urutan pada ul diawali dengan bentuk disc/lingkaran penuh, square/kotak dan circle/lingkaran donat.

-Pada input li merupakan isi dari list tersebut.

Output :

![list out](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/3cd2bfee-18bf-47c4-9d03-72ae6084a5b0)

### **Membuat List dengan HTML**

Berikut merupakan cara untuk membuat list jadwal piket menggunakan ordered list/ol dan unordered list/il :

![color ol ul in](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/aac667f2-c227-4f1d-a02e-8f56936c0e4d)

-Langkah pertama, buat judul dengan ukuran font h2/bebas di dalam body, masukkan style colour dan untuk penempatan tengah bisa menggunakan text align center.

-Buat ul dengan type square/bebas, lalu masukkan list hari.

-Didalam list hari masukkan ol dengan type 1/bebas lalu buat li untuk memasukkan data yang akan dibuatkan list.

Output :

![color ol ul out](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/4a01aca3-1288-4536-ab39-0c26af23459e)

## **CSS**

CSS merupakan kependekan dari Cascading Style Sheets. Tampilan dan format halaman pada website
bergantung pada CSS. Pada CSS juga kita dapat mengatur ukuran font, warna font, dan latar belakang
pada halaman web.Biasanya CSS digunakan berjalan bersama dengan HTML. CSS berguna dalam pembangunann web
menggunakan HTML sebab apabila menggunakan CSS kita cukup menulis satu kode untuk diterapkan pada elemen
HTML yang bisa diterapkan ke semua halaman. Ini bisa mempersingkat waktu karena kita tidak perlu menuliskan
satu satu elemen pada setiap halaman.

### **Background Image**
Background image digunakan untuk merubah tampilan background web sesuai kebutuhan kk=ita.Berikut merupakan cara untuk menggunakan CSS mengubah tampilan background dengan gambar :

![bg image in](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/2d83df9a-bd9c-40f1-a291-8dd47e4c496e)

-Mendeklarasikan HTML terlebih dahulu.

-Kemudian di dalam head buat style terlebih dahulu dengan mengetikkan "background-image" maka setelah menekan enter akan muncul kalimat "url" dan masukkan image addres yang telah di copy dari browser, atau bisa juga dari folder internal kita.

-Pada body kita bisa menambahkan judul atau pargraf yang akan diberikan background image.

Output :

![bg image in](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/335bc3ef-25f9-42f5-96de-cd14bd26f40d)

### **Text Box**

Text box pada CSS merupakan pemrosesan dari setiap elemen pada halaman web di dalam box. Berikut merupakan cara menggunakan text box :

![text box in](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/37400f96-1c02-45dc-b106-f5743147dc11)

-Deklarasikan terlebih dahulu file HTML.

-Buat style lalu masukkan div didalamnya, div berisi "background-color" untuk memberikan warna pada background. 

-Kita bisa mengatur besar box menggunakan "width", lalu untuk mengatur ketebalan sisi box, kita bisa menggunakan "border".

-Gunakan "margin auto" supaya besar box mengikuti paragraf, bukan mengikuti besar layar. style untuk text menggunakan "text align".

Output :

![text box out](https://github.com/amandasafii/Praktikum-PWEB1/assets/167949146/ea5f9e22-f6be-4145-a734-3a7f1ca6714e)

























     

    
    
