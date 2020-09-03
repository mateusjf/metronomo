class Marcador{
    constructor(){
        this.itens = document.getElementsByClassName('item');
        this.index = 0;
    }

    changeItem(){
        this.itens[this.index].classList.toggle('preenchido');
        this.index++;

        if (this.index > 3)
            this.index = 0;

        this.itens[this.index].classList.toggle('preenchido');
    }
}
