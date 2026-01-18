// setting custom theme options
class Temas {

    constructor() {
        this.themeDarkween = document.getElementById("darkween");
        this.themeMadruga = document.getElementById("madruga");
        this.themeLightween = document.getElementById("lightween");
        this.themeSwomp = document.getElementById("swomp");

        this.themes = {

            // ===== DARKWEEN THEME =====
            Darkween: {
                colorScheme: 'dark',
                text: { r: 219, g: 157, b: 71 },        // #DB9D47
                background: { r: 58, g: 48, b: 66 },    // #3A3042
                primary: { r: 237, g: 255, b: 217 },    // #EDFFD9
                secondary: { r: 255, g: 120, b: 79 },   // #FF784F
                accent: { r: 255, g: 225, b: 156 }      // #FFE19C
            },

            // ===== MADRUGA THEME =====
            Madruga: {
                colorScheme: 'dark',
                text: { r: 224, g: 228, b: 252 },       // #E0E4FC
                background: { r: 4, g: 7, b: 34 },      // #040722
                primary: { r: 121, g: 138, b: 241 },    // #798AF1
                secondary: { r: 68, g: 16, b: 159 },    // #44109F
                accent: { r: 170, g: 53, b: 234 }       // #AA35EA
            },

            // ===== LIGHTWEEN THEME =====
            Lightween: {
                colorScheme: 'light',
                text: { r: 31, g: 20, b: 2 },           // #1F1402
                background: { r: 254, g: 248, b: 240 }, // #FEF8F0
                primary: { r: 241, g: 168, b: 32 },     // #F1A820
                secondary: { r: 113, g: 245, b: 246 },  // #71F5F6
                accent: { r: 71, g: 107, b: 244 }       // #476BF4
            },

            // ===== SWOMP THEME =====
            Swomp: {
                colorScheme: 'light',
                text: { r: 4, g: 26, b: 27 },           // #041A1B
                background: { r: 224, g: 228, b: 252 }, // #E0E4FC
                primary: { r: 32, g: 219, b: 225 },     // #20DBE1
                secondary: { r: 174, g: 129, b: 238 },  // #AE81EE
                accent: { r: 212, g: 96, b: 233 }       // #D460E9
            }
        }
        this.mudarTema();
    }

    // themes
    mudarTema() {

        this.themeDarkween.addEventListener('click', () => {
            document.documentElement.setAttribute('data-theme', 'darkween');
        });
        this.themeMadruga.addEventListener('click', () => {
            document.documentElement.setAttribute('data-theme', 'madruga');
        });
        this.themeLightween.addEventListener('click', () => {
            document.documentElement.setAttribute('data-theme', 'lightween');
        });
        this.themeSwomp.addEventListener('click', () => {
            document.documentElement.setAttribute('data-theme', 'swomp');
        });
    }
}

export default Temas;
