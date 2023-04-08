<h1>Introduction Restfull API</h1>
RESTful API (Representational State Transfer) adalah sebuah gaya arsitektur yang digunakan dalam pembuatan API (Application Programming Interface) untuk sistem web. Dalam arsitektur RESTful, setiap objek dalam sistem web memiliki sebuah URL yang unik, dan klien dapat berinteraksi dengan objek tersebut dengan menggunakan metode HTTP seperti GET, POST, PUT, dan DELETE.
<h2>How API Worked</h2>
API berjalan dengan client mengirimkan request ke server, kemudian server mengirimkan respon ke client
<h2>Metode HTTP</h2>

1. GET: Digunakan untuk meminta data dari server. Permintaan GET mengirimkan data melalui URL dan tidak memiliki body.
2. POST: Digunakan untuk mengirimkan data ke server untuk ditambahkan ke dalam database atau diolah lebih lanjut. Permintaan POST memiliki body yang berisi data yang akan dikirimkan.
3. PUT: Digunakan untuk mengirimkan data ke server untuk mengubah data yang sudah ada. Permintaan PUT memiliki body yang berisi data yang akan diubah.
4. DELETE: Digunakan untuk menghapus data dari server. Permintaan DELETE tidak memiliki body.
<h2>HTTP Response Code</h2>

1. 200 : OK
2. 201 : Created
3. 400 : Bad Request
4. 404 : Not Found
5. 401 : Unauthorized
6. 405 : Method Not Allowed
7. 500 : Internal Server Error
