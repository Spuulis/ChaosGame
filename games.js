class game {
    static origin() {}
    static next(a0) {}
    static setSize(width, height) {}
    static setPrms(prms) {}
}

class barnsleyFern extends game {
    static rules = {"basic" : [[0, 0, 0, 0.16, 0, 0, 0.01],
                               [0.85, 0.04, -0.04, 0.85, 0, 1.6, 0.85],
                               [0.2, -0.26, 0.23, 0.22, 0, 1.6, 0.07],
                               [-0.15, 0.28, 0.26, 0.24, 0, 0.44, 0.07]]};

    static x0 = 0;
    static y0 = 0;

    static xScale = 1.0;
    static yScale = 1.0;
    static prms;
    
    static origin() {
        return {"X": (this.x0 + 2.2) * this.xScale, "Y": (10 - this.y0) * this.yScale};
    }

    static next(a0) {
        this.a0 = a0;
        this.a0.X = (this.a0.X / this.xScale) - 2.2;
        this.a0.Y = 10 - this.a0.Y / this.yScale;

        let p = Math.random();
        let fn = 0;
        while(p >= this.rules[this.prms.rule][fn][6]) {
            p -= this.rules[this.prms.rule][fn++][6];
        }

        return {"X": (this.a0.X * this.rules[this.prms.rule][fn][0] + this.a0.Y * this.rules[this.prms.rule][fn][1] + this.rules[this.prms.rule][fn][4] + 2.2) * this.xScale,
                "Y": (10 - (this.a0.X * this.rules[this.prms.rule][fn][2] + this.a0.Y * this.rules[this.prms.rule][fn][3] + this.rules[this.prms.rule][fn][5])) * this.yScale};
    }

    static setSize(width, height) {
        this.xScale = width / 4.9;
        this.yScale = height / 10;
    }

    static setPrms(prms) {
        this.prms = prms;
    }
}

class polygon extends game {
    static xScale = 1.0;
    static yScale = 1.0;
    static prms;

    static n = 4;
    static vertices = [];

    static last = 0;

    static origin() {
        this.last = 0;
        return {"X": this.xScale, "Y": this.yScale};
    }
    static next(a0) {
        let v0 = Math.floor(Math.random() * (this.n - this.prms.rule[this.last].length));
        let v = v0;
        for(let i = 0; i < this.prms.rule[this.last].length; i++) {
            if(this.prms.rule[this.last][i] <= v0) {
                v++;
            }
        }
        this.last = v;
        return {"X": (a0.X + this.vertices[v].X) / 2, "Y": (a0.Y + this.vertices[v].Y) / 2};
    }
    static setSize(width, height) {
        this.xScale = width / 2;
        this.yScale = height / 2;
        this.setN(this.n);
    }
    static setPrms(prms) {
        this.prms = prms;
    }
    static setN(N) {
        this.n = N;
        this.vertices = new Array(this.n);
        this.th = Math.PI * 2 / this.n;
        this.g0 = 3 * Math.PI / 2;
        if(this.n % 2 == 0) {
            this.g0 -= this.th / 2;
            console.log(this.g0);
        }
        
        for(let i = 0; i < this.n; i++) {
            this.vertices[i] = {"X": Math.cos(this.g0 + i * this.th) * this.xScale + this.xScale, "Y": Math.sin(this.g0 + i * this.th) * this.yScale + this.yScale};
        }
    }
}