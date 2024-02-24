document.getElementById('loginButton').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Kullanıcı adı ve şifre kontrolü (örneğin sadece "admin" ve "password" kabul ediliyor)
    if (username === "masrah" && password === "Kelebek0810.") {
        // Başarılı giriş
        window.location.href = "main.html"; // Yönlendirme yapılacak sayfa
    } else {
        // Hatalı giriş
        document.getElementById('errorMessage').innerHTML = "Hatalı kullanıcı adı veya şifre!";
    }
});
