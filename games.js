class barnsleyFern {
    static rules = {"basic" : [[0, 0, 0, 0.16, 0, 0, 0.01],
                               [0.85, 0.04, -0.04, 0.85, 0, 1.6, 0.85],
                               [0.2, -0.26, 0.23, 0.22, 0, 1.6, 0.07],
                               [-0.15, 0.28, 0.26, 0.24, 0, 0.44, 0.07]]};
    
    static xScale = 1.0;
    static yScale = 1.0;

    static x0 = 0;
    static y0 = 0;
    
    static origin() {
        return {"X": (this.x0 + 2.2) * this.xScale, "Y": (10 - this.y0) * this.yScale};
    }

    static next(a0, prms) {
        this.a0 = a0;
        this.a0.X = (this.a0.X / this.xScale) - 2.2;
        this.a0.Y = 10 - this.a0.Y / this.yScale;

        let p = Math.random();
        let fn = 0;
        while(p >= this.rules[prms.rule][fn][6]) {
            p -= this.rules[prms.rule][fn++][6];
        }

        return {"X": (this.a0.X * this.rules[prms.rule][fn][0] + this.a0.Y * this.rules[prms.rule][fn][1] + this.rules[prms.rule][fn][4] + 2.2) * this.xScale,
                "Y": (10 - (this.a0.X * this.rules[prms.rule][fn][2] + this.a0.Y * this.rules[prms.rule][fn][3] + this.rules[prms.rule][fn][5])) * this.yScale};
    }

    static setSize(width, height) {
        this.xScale = width / 4.9;
        this.yScale = height / 10;
    }
}