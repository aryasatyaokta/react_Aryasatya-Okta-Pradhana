<h1>GraphQL Query and Mutation</h1>
<h2>Query</h2>
<p>Query adalah salah satu operasi dasar yang dapat digunakan untuk mengambil data dari server menggunakan bahasa query GraphQL. Query dalam GraphQL digunakan untuk menggambarkan data yang diinginkan dan struktur data yang diharapkan sebagai respons dari server.</p>
<h3>Query with Apollo Client</h3>
<p>1. Import gql dan useQuery lalu tulis query atau dapat menyalin dari konsol hasura sebagai gantinya</p>
<p>2. Dapatkan data awal dengan melakukan kueri di server, panggil userQuery di atas kode Anda</p>
<p>3. konsumsi data dalam kode jsx Anda, perhatikan bahwa pada permintaan pertama data adalah nol sehingga perlu menggunakan rangkaian opsional untuk menghindari kesalahan</p>
<h3>Lazy Query</h3>
<p> Teknik atau strategi pengambilan data yang memungkinkan untuk mengambil data secara dinamis atau hanya ketika data tersebut diperlukan, untuk menghindari pengambilan data yang tidak diperlukan pada saat pertama kali pengambilan data.
Dalam GraphQL, query biasanya dieksekusi secara eager, yang berarti semua field dalam query akan diambil sekaligus, termasuk field yang mungkin tidak digunakan atau diperlukan pada saat itu. Namun, dengan penggunaan fitur lazy query, pengambilan data hanya dilakukan pada saat field tersebut benar-benar diperlukan.</p>
<h3>Refetching</h3>
<p>Pengambilan ulang atau pembaruan data dari server setelah data awal telah diterima melalui query atau mutation sebelumnya. Dalam GraphQL, refetching dapat digunakan untuk memperbarui data yang sudah ada atau untuk mengambil data baru yang mungkin telah berubah di server.</p>
<h2>Mutation</h2>
<p>Mutation adalah operasi yang digunakan untuk melakukan perubahan atau modifikasi data di server menggunakan bahasa query GraphQL. Mutation dalam GraphQL digunakan untuk mengirimkan permintaan untuk membuat, mengubah, atau menghapus data pada server.</p>
<h3>Mutation with Apollo Client</h3>
<p>Import useMutation hooks from Apollo client dan mendefine mutation</p>
<p>1. Mutation Insert Data with Apollo Client</p>
<p>2. Mutation Update Data with Apollo Client</p>
<p>3. Mutation Delete Data with Apollo Client</p>
