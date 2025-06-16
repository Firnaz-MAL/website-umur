const form = document.getElementById('umurform');
const hasil = document.getElementById('hasil');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const input             = form.tahunlahir.value.trim();
    const tahunlahir        = number(input);
    const tahunsekarang     = new Date().getFullYear();

    if (tahunlahir === "" || tahunlahir < 1900 || tahunlahir > tahunsekarang) {
        hasil.textContent = "Masukkan tahun lahir yang benar (1900 - ' + tahunsekarang + ')";
        hasil.style.color = "red";
        form.tahunlahir.focus();
        return;
    }

    const umur = tahunsekarang - tahunlahir;
    hasil.textContent = "Umurmu sekarang adalah " + umur + " tahun 🥳";
    hasil.style.color = "green";

});