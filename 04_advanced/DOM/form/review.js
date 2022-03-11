

function test() {
    let email = document.querySelector('input[type=text]').value;
    let pwd = document.querySelector('input[type=password]').value;

    if (email.includes('@') && pwd.length > 7) {
        document.querySelector('input[type=submit]').setAttribute('disabled', 'false');
        document.querySelector('input[type=submit]').style.backgroundColor = '#1BBC96';
    } else {
        document.querySelector('input[type=submit]').setAttribute('disabled', 'true');
        document.querySelector('input[type=submit]').style.backgroundColor = '#aaa';
    }
}

document.querySelector('input[type=text]').addEventListener('input', test)
document.querySelector('input[type=password]').addEventListener('input', test)
