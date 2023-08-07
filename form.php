<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['name'];
    $email_pengunjung = $_POST['email'];
    $subjek = $_POST['subject'];
    $pesan = $_POST['message'];

    // Validasi data jika diperlukan
    // Misalnya, cek apakah $email_pengunjung adalah alamat email yang valid

    $email_from = 'noreply@yourdomain.com';
    $email_subject = 'Pengiriman Form Baru';
    $email_body = "User Name: $nama.\n".
                    "User Email: $email_pengunjung.\n".
                    "User Subject: $subjek.\n".
                    "User Message: $pesan.\n";

    $to = 'sammickey42@gmail.com';
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email_pengunjung \r\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        header("Location: kontak.html");
    } else {
        echo "Pengiriman email gagal.";
    }
}
?>
