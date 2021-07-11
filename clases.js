class Pakiman {
    constructor (nomb, vid, ataq){
        this.nombre = nomb;
        this.vida = vid;
        this.ataque = ataq;
        this.foto = new Image();
        this.foto.src = imagenes[this.nombre];
    }
    hablar(){
        var resultado = getElementById("resultadoHtml");
        resultado.innerHTML = 'Soy un ' + this.nombre;
    }
    mostrar(){
        document.body.appendChild(this.foto);
        document.write('<p>');
        document.write('<strong>' + this.nombre + '</strong><br/>');
        document.write('Vida: ' + this.vida + '<br/>');
        document.write('Ataque: ' + this.ataque);
        document.write('</p>');
    }
}
