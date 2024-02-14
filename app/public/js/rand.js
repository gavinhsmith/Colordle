const Randomizer = class {

    /**
     * Generate a pesudorandom number (0-1) based on a seed.
     * @param {string} seed The inital seed 
     * @returns A pesudorandom number
     */
    static randomSeed(seed) {
        let h1 = 1779033703, h2 = 3144134277,
            h3 = 1013904242, h4 = 2773480762;
        for (let i = 0, k; i < seed.length; i++) {
            k = seed.charCodeAt(i);
            h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
            h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
            h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
            h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
        }
        h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
        h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
        h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
        h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
        h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
        let gen_seed = [h1>>>0, h2>>>0, h3>>>0, h4>>>0];
        function sfc32(a, b, c, d) {
            return function() {
            a |= 0; b |= 0; c |= 0; d |= 0; 
            var t = (a + b | 0) + d | 0;
            d = d + 1 | 0;
            a = b ^ b >>> 9;
            b = c + (c << 3) | 0;
            c = (c << 21 | c >>> 11);
            c = c + t | 0;
            return (t >>> 0) / 4294967296;
            }
        }
        return sfc32(gen_seed[0], gen_seed[1], gen_seed[2], gen_seed[3])();
    }

    /**
     * Generate a list of random numbers
     * @param {string} seed The inital seed.
     * @param {number} count The amount of generations.
     * @returns {number[]} An array of randoms.
     */
    static randomSeedList(seed, count = 1) {
        let randoms = [];

        for (let i = 0; i < count; i++) {
            randoms.push(Randomizer.randomSeed(`${seed}+${i}`));
        }

        return randoms;
    }

}