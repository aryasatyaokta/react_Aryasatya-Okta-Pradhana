<h1>GraphQL - Subscription</h1>
<p>Subscription adalah perasi yang digunakan untuk mengaktifkan langganan atau pemantauan terhadap data di server, sehingga klien dapat menerima pembaruan secara real-time ketika data di server berubah. Subscription memungkinkan klien untuk berlangganan atau "mendengarkan" perubahan data yang relevan, dan menerima pembaruan secara otomatis ketika perubahan terjadi, tanpa harus melakukan permintaan berkala ke server.</p>
<h3>Setting Subscription</h3>
<p>1. Menginstall subscriptions-transport-ws untuk mengaktifkan koneksi ke websocket</p>
<p>2. Import semua modul yang diperlukan dan pisahkan antara http dan websocket.</p>
<p>3. Buat httpLink untuk Query dan mutation, wsLink untuk subscription serta tambahkan header untuk authentication</p>
<p>4. Tambahkan split function </p>
<h3>useSubscription</h3>
<p>1. Import Subscription dari apollo client </p>
<p>2. Aktifkan Subscription dan lakukanlah koding </p>
<h3>subscribeToMore</h3>
<p>subscribeToMore merupakan fungsi yang digunakan unuk  menjalankan Subscription, subscribeToMore biasanya digunakan untuk Subscription pada bidang tertentu yang disertai dengan Query. </p>
