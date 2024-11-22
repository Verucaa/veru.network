// Tab navigasi
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Hapus kelas 'active' dari semua link dan tab konten
        document.querySelectorAll('.tab-link').forEach(item => item.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Tambahkan kelas 'active' ke link dan konten yang dipilih
        this.classList.add('active');
        document.getElementById(this.getAttribute('data-tab')).classList.add('active');
    });
});

// Form Pemesanan
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const rank = document.getElementById('rank').value;

    const whatsappNumber = '62838346265078'; // Ganti dengan nomor WhatsApp kamu
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Halo%20Admin,%20saya%20ingin%20membeli%20rank%20${rank}%20untuk%20username%20${username}`;

    // Redirect ke WhatsApp
    window.open(whatsappLink, '_blank');
});
