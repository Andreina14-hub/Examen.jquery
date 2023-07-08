var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var parent = this.parentNode;
        if (parent.style.textShadow) {
            parent.style.color = '';
            parent.style.fontSize = '';
            parent.style.textShadow = '';
            this.style.color = 'black';
            this.style.backgroundColor = ' white';
            this.style.padding = '8px';
            this.innerHTML = 'Modo lectura';

        } else {
            parent.style.color = 'white';
            parent.style.fontSize = '20px';
            parent.style.textShadow = '1px 1px 2px black, 0 0 1em black, 0 0 1.5em black';
            this.style.color = 'white';
            this.style.padding = '8px';
            this.style.fontSize = '16px';
            this.style.backgroundColor = ' black';
            this.innerHTML = "Desactivar";
        }
    });
}



