/**
 * A color object for the game
 * @param {number} r The RED value (0-255)
 * @param {number} g The GREEN value (0-255)
 * @param {number} b The BLUE value (0-255)
 */
const Color = class {
    /**
     * Create a color from a HEX code
     * @param {string} hex 
     * @returns A Color Instance
     */
    static fromHex(hex) {
        return new Color(parseInt(hex.slice(1,3), 16), parseInt(hex.slice(3,5), 16), parseInt(hex.slice(5,7), 16));
    }

    /**
     * create a color from RGB
     * @param {number} r The RED value (0-255)
     * @param {number} g The GREEN value (0-255)
     * @param {number} b The BLUE value (0-255)
     */
    static fromRGB(r,g,b) {
        return new Color(r,g,b);
    }

    /**
     * Generates a color based on a seed
     * @param {string} seed The inital seed 
     * @returns A color
     */
    static seedGenerateRandom(seed) {
        let gen_rand = Randomizer.randomSeedList(seed, 3);
        return new Color(Math.floor(gen_rand[0] * 256), Math.floor(gen_rand[1] * 256), Math.floor(gen_rand[2] * 256));
    }

    /**
     * Generate a random color
     * @returns A completely random color
     */
    static generateRandom() {
        return Color.seedGenerateRandom(Math.random());
    }

    /**
     * constructor for Color
     * @param {number} r The RED value (0-255)
     * @param {number} g The GREEN value (0-255)
     * @param {number} b The BLUE value (0-255)
     */
    constructor(r,g,b) {
        this.r = r;
        this.g = g;
        this.b = b;
        
        let calc_hex = [this.r.toString(16), this.g.toString(16), this.b.toString(16)];
        for (let i = 0; i < calc_hex.length; i++) {
            if (calc_hex[i].length < 2) calc_hex[i] = `0${calc_hex[i]}`;
        }
        this.hex = `#${calc_hex.join("")}`;
    }
}