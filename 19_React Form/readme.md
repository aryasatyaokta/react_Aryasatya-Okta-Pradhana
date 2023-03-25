1.	Penerapan Form
    Form dapat digunakan untuk menghandle inputan dari user. Form banyak digunakan untuk mengisi data seperti login, register, dll
    Macam Form
    -	Elemen <input>
    -	Elemen <textarea>
    -	Elemen <select>
    
2.	Controlled Component
    Controlled Component adalah menggabungkan cara menyimpan dan memperbarui state 
    di HTML dan React dengan menggunakan state pada React. Kemudian Komponen react yang merender 
    sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan selanjutnya

3.	Uncontrolled Component
    Uncontrolled Component adalah alternatif lain dari controlled component, 
    dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, 
    kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.

4.	Perbedaan Controlled dan Uncontrolled Component
    Uncontrolled = harus menarik nilai dari field saat kita membutuhkannya. Ini saat formulir di submit
    Controlled = menerima nilai saat ini sebagai prop, serta callback untuk mengubah nilai tersebut.
