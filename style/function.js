function readMore(){
    let dots =document.getElementById("dots");
    let more =document.getElementById("more");
    let btn =document.getElementById("btn");

    if(dots.style.display === "none"){
        dots.style.display="inline";
        btn.innerHTML="Показать";
        more.style.display="none"
    }
    else{
        dots.style.display="none";
        btn.innerHTML="Скрыть";
        more.style.display="inline"
    }
}
document.querySelector('#submit').onclick = function(){
    const name = document.getElementById('#name').value;
    const phone = document.getElementById('#phone').value;
    const email = document.getElementById('#email').value;

    if (name === null && phone === null && email === null){
        alert('Собшения успешно отправлено!');
    }
    else {
        alert('Ошибка!');
    }
}