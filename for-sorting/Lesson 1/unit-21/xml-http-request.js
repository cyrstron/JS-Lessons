const xhr = new XMLHttpRequest();
  
xhr.open(method, url, isSync);

xhr.send(body);

xhr.addEventListener('load', () => {
    if (xhr.status != 200) {
        console.error(xhr.response);
    } else {
        console.log(xhr.response);
    }
});

