

function checkEmailForm() {
    let regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i
    if (param.match(regExp)) {
        return true;
    }
    return false;
} 




function buttonActivation() {
    let pwd = document.querySelector('input[name=pwd]').value;
    let email = document.querySelector('input[name=email]').value;

    if (email.includes('@') && pwd.length > 7) {
        document.querySelector('input[type=submit]').style.backgroundColor = '#1BBC96'
        document.querySelector('input[type=submit]').setAttribute('disabled', 'false');
    } else {
        document.querySelector('input[type=submit]').style.backgroundColor = '#aaa'
        document.querySelector('input[type=submit]').setAttribute('disabled', 'true');
    }
}





document.querySelector('input[name=pwd]').addEventListener('input', buttonActivation);
document.querySelector('input[name=email]').addEventListener('input', buttonActivation);





