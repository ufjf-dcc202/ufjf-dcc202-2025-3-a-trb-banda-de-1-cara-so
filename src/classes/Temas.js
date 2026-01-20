// setting custom theme options
class Temas {

    constructor() {
        this.btnDarkween = document.getElementById("darkween");
        this.btnMadruga = document.getElementById("madruga");
        this.btnLightween = document.getElementById("lightween");
        this.btnSwomp = document.getElementById("swomp");

        //console.log(getComputedStyle(document.querySelector('canvas')).getPropertyValue('--background'));

        this.mudarTema();
    }

    // themes
    mudarTema() {

        this.btnDarkween.addEventListener('click', () => {
            document.documentElement.setAttribute('data-theme', 'darkween');
        });
        this.btnMadruga.addEventListener('click', () => {
            document.documentElement.setAttribute('data-theme', 'madruga');
        });
        this.btnLightween.addEventListener('click', () => {
            document.documentElement.setAttribute('data-theme', 'lightween');
        });
        this.btnSwomp.addEventListener('click', () => {
            document.documentElement.setAttribute('data-theme', 'swomp');
        });
    }
}

export default Temas;
