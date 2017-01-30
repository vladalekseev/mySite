

var button_contact = document.querySelector('.for_us');
var close = document.querySelector('.close');




button_contact.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.popup_wrap').classList.add('block');
    document.querySelector('.popup').classList.add('block');
});


close.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.popup_wrap').classList.remove('block');
    document.querySelector('.popup').classList.remove('block');
});

document.querySelector('.popup_wrap').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.popup_wrap').classList.remove('block');
    document.querySelector('.popup').classList.remove('block');
});

