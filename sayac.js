function hesapla() {
    var girilenTarih = new Date("2022-10-08");
    var bugun = new Date();
    
    var zamanFarki = bugun.getTime() - girilenTarih.getTime();
    var gunFarki = Math.ceil(zamanFarki / (1000 * 3600 * 24));
    
    var yilFarki = bugun.getFullYear() - girilenTarih.getFullYear();
    var ayFarki = bugun.getMonth() - girilenTarih.getMonth();
    var gunKalan = bugun.getDate() - girilenTarih.getDate();

    if (gunKalan < 0) {
        ayFarki--;
        var sonGun = new Date(bugun.getFullYear(), bugun.getMonth(), 0).getDate();
        gunKalan += sonGun;
    }

    if (ayFarki < 0) {
        yilFarki--;
        ayFarki += 12;
    }

    document.getElementById('sonuc').innerHTML = "Aşkımızın başlangıcından bu yana: " + yilFarki + " yıl, " + ayFarki + " ay, " + gunKalan + " gün yani toplamda " + gunFarki + " gün geçti.";

}