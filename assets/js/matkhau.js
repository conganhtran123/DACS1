const input = document.getElementById('password');
const input2 = document.getElementById('password1');
const eyeOpen1 = document.getElementById('eyeOpen1');
const eyeClose1 = document.getElementById('eyeClose1');
const eyeOpen2 = document.getElementById('eyeOpen2');
const eyeClose2 = document.getElementById('eyeClose2');


eyeClose1.addEventListener('click', function () {
    input.type = 'text';
    eyeClose1.style.visibility = 'hidden';
    eyeOpen1.style.visibility = 'visible';
}); 
eyeOpen1.addEventListener('click', function () {
    input.type = 'password';
    eyeOpen1.style.visibility = 'hidden';
    eyeClose1.style.visibility = 'visible';
}); 

eyeClose2.addEventListener('click', function () {
    input2.type = 'text';
    eyeClose2.style.visibility = 'hidden';
    eyeOpen2.style.visibility = 'visible';
}); 
eyeOpen2.addEventListener('click', function () {
    input2.type = 'password';
    eyeOpen2.style.visibility = 'hidden';
    eyeClose2.style.visibility = 'visible';
}); 

