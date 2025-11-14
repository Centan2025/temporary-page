// Logo yükleme kontrolü
window.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    const logoPlaceholder = document.getElementById('logoPlaceholder');
    
    // Logo dosyasının yüklenip yüklenmediğini kontrol et
    logo.onload = function() {
        logo.classList.add('show');
        logoPlaceholder.classList.add('hidden');
    };
    
    logo.onerror = function() {
        // Logo yüklenemezse placeholder göster
        logoPlaceholder.classList.remove('hidden');
    };
    
    // Sayfa yüklendiğinde logo kontrolü yap
    if (logo.complete && logo.naturalWidth > 0) {
        logo.classList.add('show');
        logoPlaceholder.classList.add('hidden');
    }
});

