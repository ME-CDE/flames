const body = document.querySelector('body');
const submit = document.querySelector("button");
const h1 = document.querySelectorAll('h1');
const he1 = document.querySelector(".he1");
const he2 = document.querySelector(".he2");
const he3 = document.querySelector(".he3");
const he4 = document.querySelector(".he4");
const he5 = document.querySelector(".he5");
const he6 = document.querySelector(".he6");
const ui = document.querySelector(".ui")
const message = document.querySelector(".message");
const emptyDiv = document.querySelector('.answer');
const img = document.querySelector(".pic")
const close = document.querySelector(".pic1")
const removal =()=>{
    h1.forEach((h1) => {
        h1.classList.remove("head1")
    });
}

submit.addEventListener("click", () => {
    removal()
    const input1 = document.getElementById("input1").value.trim();

    const input2 = document.getElementById("input2").value.trim();

    const result = []

    
        for (let index = 0; index < input2.length; index++) {
            const element = input1.includes(`${input2[index]}`);
            result.push(element)
        }
        for (let index = 0; index < input1.length; index++) {
            const element1 = input2.includes(`${input1[index]}`);
            result.push(element1)
        }
    const number = result.filter((result) => {
        return result === false
    })
    const cal = Math.trunc(number.length % 6)
    if(!input1 == "" && !input2 == "" ) {
        if (cal == 1 || number.length == 0) {
            emptyDiv.classList.add('empty');
            emptyDiv.classList.remove('remove');
            img.setAttribute('src', './friends.png');
            message.textContent = 'FRIENDS';
            he1.classList.add('head1');
            ui.classList.add('remove');
        } else if (cal == 2) {
            emptyDiv.classList.add('empty');
            emptyDiv.classList.remove('remove');
            img.setAttribute('src', './lover.png');
            message.textContent = 'LOVERS';
            he2.classList.add('head1')
            ui.classList.add('remove');
        } else if (cal == 3) {
            emptyDiv.classList.add('empty');
            emptyDiv.classList.remove('remove');
            img.setAttribute('src', './affection.png');
            message.textContent = 'AFFECTIONATE';
            he3.classList.add('head1')
            ui.classList.add('remove');
        } else if (cal == 4) {
            emptyDiv.classList.add('empty');
            emptyDiv.classList.remove('remove');
            img.setAttribute('src', './wedding.png');
            message.textContent = 'MARRIAGE';
            he4.classList.add('head1')
            ui.classList.add('remove');
        } else if (cal == 5) {
            emptyDiv.classList.add('empty');
            emptyDiv.classList.remove('remove');
            img.setAttribute('src', './enemies.png');
            message.textContent = 'ENEMIES';
            he5.classList.add('head1')
            ui.classList.add('remove');
        } else if (cal == 0) {
            emptyDiv.classList.add('empty');
            emptyDiv.classList.remove('remove');
            img.setAttribute('src', './siblings.jpg');
            message.textContent = 'SIBLINGS';
            he6.classList.add('head1')
            ui.classList.add('remove');
        }
    }else {
        emptyDiv.classList.add('empty');
        img.setAttribute('src', './happy.gif');
            emptyDiv.classList.remove('remove');
            message.textContent = 'NOT AN INPUT';
            ui.classList.add('remove');
    }
});
close.addEventListener("click", ()=>{
    removal()
    emptyDiv.classList.remove('empty');
    emptyDiv.classList.add('remove');
    ui.classList.remove('remove');
    document.querySelector('#input1').value = ""
    document.querySelector('#input2').value = ""
})







