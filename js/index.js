class Metronomo{
    constructor(){
        this.display = document.getElementsByTagName('h1')[0];
        this.range = document.getElementsByTagName('input')[0];
        this.button = document.getElementsByTagName('button')[0];
        this.audio = document.getElementsByTagName('audio')[0];
        
        this.marcador = new Marcador();
        this.playing = false;
        this.interval;
        this.currentBPM = this.range.value;

        this.button.addEventListener('click', () => this.buttonClick(), false);
        this.range.addEventListener('change', () => {
            this.display.innerText = `${this.range.value} BPM`;
            this.currentBPM = this.range.value;
            if (this.playing){
                this.stop()
                this.play();
            }
        }, false);

    }

    buttonClick(){
        this.playing = !this.playing;
        this.button.innerText = this.playing ? this.play() : this.stop();
        console.log('dsfdsfsd')
    }

    play(){
        let playAudio = () => {
            this.audio.currentTime = 0;
            this.audio.play();
            this.changeItem();
        };
        this.interval = setInterval(playAudio ,(60000) / this.currentBPM);
        return 'Stop';
    }

    stop(){
        clearInterval(this.interval);
        return 'Play';
    }

    changeItem(){
        this.marcador.changeItem();
    }
}