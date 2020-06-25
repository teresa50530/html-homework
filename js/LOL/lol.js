let row = document.getElementById('row');
let lolarray = '';
//xml
window.onload = function () {
    let xhr = new XMLHttpRequest;
    xhr.onload = function () {
        lolarray = JSON.parse(this.responseText);
        lolarray.champions.forEach(item => {
            add_img(item);
        })
    }
    xhr.open('GET', 'https://raw.githubusercontent.com/teresa50530/filedtorage/master/LOL.json');
    xhr.send();
}
function add_img(champions) {
    //要把東西加入card(圖片名字 )
    let template = document.querySelector('#template');
    let cloneContent = template.content.cloneNode(true);
    let _img = cloneContent.querySelector('._img');
    _img.setAttribute('src', champions.profileImageUrl);
    let p = cloneContent.querySelector('p');
    p.textContent = champions.name;
    let img_a = cloneContent.querySelector('.img_a');
    img_a.setAttribute('href', champions.splashImageUrl);
    let name = cloneContent.querySelector('.name')
    name.setAttribute('data-target', `#${champions.id}`)
    //把資訊掛到modal
    let modal_center = cloneContent.getElementById('exampleModalCenter');
    modal_center.setAttribute('id', `${champions.id}`);
    let modal_title = cloneContent.querySelector('.modal-title');
    modal_title.textContent = champions.name;
    let modal_body = cloneContent.querySelector('.modal-body');
    modal_body.innerHTML = `Roles : ${champions.roles}<br>`
    for (let i in champions.stats) {
        modal_body.innerHTML += `${i} : ${champions.stats[i]}<br>`;
    }
    row.appendChild(cloneContent);
}