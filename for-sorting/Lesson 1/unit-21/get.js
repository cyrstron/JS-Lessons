const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://async-demo.herokuapp.com/objects');

xhr.send();

xhr.addEventListener('load', () => {    
    if (xhr.status !== 200) {
        console.error(xhr.response);
    } else {
        console.log(xhr.response);
    }
});
