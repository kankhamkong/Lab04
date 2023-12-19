const loginForm = document.querySelector('.login-form');
const inp_username = document.querySelector('#username');
const inp_password = document.querySelector('#password');

const validateInputs = () => {
    let valid = true;

    // Validate username
    if (inp_username.value.length < 3 || inp_username.value.trim() === '') {
        inp_username.style.borderColor = 'red';
        valid = false;
    } else {
        inp_username.style.borderColor = '';
    }

    // Validate password
    if (inp_password.value.length < 4 || inp_password.value.trim() === '') {
        inp_password.style.borderColor = 'red';
        valid = false;
    } else {
        inp_password.style.borderColor = '';
    }

    return valid;
};

const hdlLoing = e => {
    e.preventDefault();
    
    if (validateInputs()) {
        window.location.href = 'https://example.com'; // ถ้า validate ผ่านให้ไปที่ https://example.com
    }
    
    let inputObj = {};
    for (let el of loginForm.elements) {
        if (el.id) {
            inputObj[el.id] = el.value;
        }
    }
    console.log(inputObj);
};

loginForm.addEventListener('submit', hdlLoing);