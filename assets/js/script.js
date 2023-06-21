const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnLogin_Sinups = $$('.header__navbar-item--strong')
const modalLogin_Sinups = $$('.auth-form')
const modal = $('.modal')

btnLogin_Sinups.forEach((btnLogin_Sinup, index) => {
    const modalLogin_Sinup = modalLogin_Sinups[index];
    btnLogin_Sinup.onclick = function() {
        event.preventDefault();
        modal.classList.toggle('open');
        $('.header__navbar-item--strong.header__navbar-item--separate').classList.remove('header__navbar-item--separate');
        $('.auth-form.auth-form-hidden').classList.remove('auth-form-hidden');
        this.classList.add('header__navbar-item--separate');
        modalLogin_Sinup.classList.add('auth-form-hidden');
    }

})
const returnBtns = $$('.js-return');

for (let i = 0; i < returnBtns.length; i++) {
    returnBtns[i].addEventListener('click', function() {
        modal.classList.remove('open');
    });
}

//home-filter__btn

const categoryItems = $$('.category-item');
const products = $$('.home-product-brand');

categoryItems.forEach((categoryItem, index) => {
    const product = products[index];

    categoryItem.onclick = function() {
        event.preventDefault();
        $('.category-item.category-item--active').classList.remove('category-item--active');
        $('.home-product-brand.active').classList.remove('active');

        this.classList.add('category-item--active');
        product.classList.add('active');
    }
});




// document.addEventListener("DOMContentLoaded", function () {
//     const btns = document.querySelectorAll('.header__search-select .header__search-option-item');
//     for (let i = 0; i < btns.length; i++) {
//         btns[i].addEventListener('click', function () {
//             for (let j = 0; j < btns.length; j++) {
//                 btns[j].classList.remove('header__search-option-item--active');
//             }
//             this.classList.add('header__search-option-item--active');
//         });
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const btns = document.querySelectorAll('.pagination-item .pagination-item__icon');
//     console.log(btns);

//     const totalPages = 14; // Tổng số trang

//     for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener('click', function (event) {
//             event.preventDefault();
//             for (var j = 0; j < btns.length; j++) {
//                 btns[j].parentElement.classList.remove('pagination-item--active');
//             }
//             this.parentElement.classList.add('pagination-item--active');

//             // Lấy số trang hiện tại từ nội dung của phần tử <span class="home-filter__page-current">

//             // Kiểm tra xem nếu nhấp vào nút phải, tăng số trang hiện tại lên 1
//             if (this.classList.contains('fa-angle-right')) {
//                 console.log(this);
//             }
//         })
//     }
// });







// document.addEventListener("DOMContentLoaded", function () {
//     const btns = document.querySelectorAll('.category-item__link');
//     for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener('click', function (event) {
//             for (var j = 0; j < btns.length; j++) {
//                 btns[j].parentElement.classList.remove('category-item--active');
//             }
//             this.parentElement.classList.add('category-item--active');
//         })
//     }
// });



// document.addEventListener("DOMContentLoaded", function () {
//     const btns = document.querySelectorAll('.home-filter__page-icon');
//     console.log(btns);
//     const currentPage = document.querySelector('.home-filter__page-current');

//     const totalPages = 14; // Tổng số trang

//     for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener('click', function (event) {
//             for (var j = 0; j < btns.length; j++) {
//                 btns[j].parentElement.classList.remove('home-filter__page-btn--disable');
//             }
//             this.parentElement.classList.add('home-filter__page-btn--disable');

//             // Lấy số trang hiện tại từ nội dung của phần tử <span class="home-filter__page-current">
//             var current = parseInt(currentPage.textContent);

//             // Kiểm tra xem nếu nhấp vào nút phải, tăng số trang hiện tại lên 1
//             if (this.classList.contains('fa-angle-right')) {
//                 console.log(this);
//             }

//             // Kiểm tra xem nếu nhấp vào nút trái, giảm số trang hiện tại xuống 1
//             if (this.classList.contains('fa-angle-left')) {
//                 if (current > 1) {
//                     current--;
//                 }
//             }

//             // Cập nhật nội dung của phần tử <span class="home-filter__page-current">
//             currentPage.textContent = current;
//         })
//     }
// });