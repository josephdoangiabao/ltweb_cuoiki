// Gallery: Đổi ảnh lớn khi click thumbnail
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainImage');
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
        mainImage.src = this.dataset.img;
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Scroll Effect: Đổi header glass sang màu đặc khi cuộn
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if(window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Features: Hiệu ứng fade-in khi xuất hiện trên màn hình
const features = document.querySelectorAll('.feature');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });
features.forEach(f => observer.observe(f));
