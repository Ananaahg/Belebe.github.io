const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;

signUpBtn.addEventListener('click', function () {
    formBox.classList.add('active');
    body.classList.add('active');
});

signInBtn.addEventListener('click', function () {
    formBox.classList.remove('active');
    body.classList.remove('active');
});


/* document.querySelector('#elastic').oniput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.elastic li');
    if (val != '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            }
            else {
                    elem.classList.remove('hide');
                
            }
        });
    }
} */


