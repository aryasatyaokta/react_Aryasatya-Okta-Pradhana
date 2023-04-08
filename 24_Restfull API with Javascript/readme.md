<h1>Restfull API with Javascript</h1>
RESTful API with Javascript adalah penggunaan bahasa pemrograman Javascript untuk membuat sebuah API (Application Programming Interface) yang mengikuti prinsip-prinsip REST (Representational State Transfer)
<h2>Mock Api</h2>
Mock API adalah sebuah layanan atau alat yang memungkinkan pengembang untuk membuat API palsu atau simulasi API, yang digunakan untuk pengujian atau pengembangan tanpa mengakses atau merusak data asli dari API sebenarnya. 

1. Beeceptor
2. Mockoon
3. Mocki
4. Stoplight
5. Postman Mock Server
6. Mocky
7. Mock API
<h2>Async Await</h2>
Async/Await adalah sebuah konsep atau fitur pada JavaScript untuk mengelola kode asynchronous atau kode yang dijalankan secara asynchronous pada program. Async/Await adalah alternatif dari pendekatan Promise, yang biasanya digunakan untuk menangani kode asynchronous pada JavaScript.

```async function getData() {<br>
    const response = await fetch('https://jsonplaceholder.typicode.com/users');<br>
    const data = await response.json();<br>
    return data;<br>
  }
  ```
  <h2>Axios</h2>
  Axios adalah sebuah library HTTP client yang digunakan untuk melakukan request ke server pada aplikasi web atau mobile. Library ini dapat digunakan pada lingkungan pengembangan JavaScript seperti browser atau Node.js.
  
  ```import axios from 'axios';
       axios.get('https://api.example.com/data')
       .then(response => console.log(response.data))
       .catch(error => console.error(error));
  ```
