<h1>Authentication</h1>
Authentication atau autentikasi adalah proses untuk memverifikasi identitas dari seorang user. autentikasi sering digunakan untuk melindungi data atau sumber daya yang sensitif dan hanya diperuntukkan bagi user yang telah terverifikasi. Autentikasi biasanya dilakukan dengan meminta user untuk memasukkan informasi yang dapat memverifikasi identitas mereka, seperti username dan password atau token khusus yang diberikan oleh sistem. Contoh implementasi autentikasi pada aplikasi web atau mobile adalah dengan menggunakan protokol OAuth atau JSON Web Tokens (JWT).
<h2>Simple Login</h2>

1. Buka Aplikasi untuk login
2. Jika token auth tersedia maka bisa melakukan login dan jika sukses maka akan show userview jika salah maka akan show login screen
3. Jika token auth tidak tersedia maka akan mengarah ke show login screen dan enter credential, kemudian ke attempt login
<h2>Local Storage</h2>
Local storage adalah fitur pada browser yang digunakan untuk menyimpan data pada sisi klien (client-side) secara persistent (tetap tersimpan meskipun browser ditutup atau halaman web di-refresh). Data yang disimpan pada local storage tersedia hanya pada domain atau aplikasi yang sama dan tidak dapat diakses oleh domain atau aplikasi lain.

```
const username = localStorage.getItem('username');
```
<h2>JSON Web Token</h2>
JSON Web Token (JWT) adalah standar terbuka (RFC 7519) untuk mengirimkan informasi secara aman antara dua pihak dalam bentuk objek JSON. JWT umumnya digunakan untuk proses autentikasi dan otorisasi pada aplikasi web atau mobile. Saat seorang user berhasil melakukan proses autentikasi, server akan mengirimkan sebuah token JWT yang berisi informasi terkait user tersebut, seperti id user, role, dan lain sebagainya. Token ini kemudian akan disimpan oleh client (biasanya di local storage atau session storage) dan akan dikirimkan ke server pada setiap request yang memerlukan autentikasi.
