



class Heks {

    constructor(x) {
        this.x = x
        this.y = 800
        this.straal = 50;
        this.img = document.getElementById("elon")
        this.img.addEventListener("load", () => {
            console.log(this.x)
            display.drawImage(this.img, this.x, this.y, 50, 50);
        })
    }
    update() {


    }

    draw() {
        display.save()
            display.translate(this.x, this.y)
            display.drawImage(this.img, 0, 0, 100, 100);
            display.restore()

    }
}

class Ster {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.img = document.getElementById("coin")
        this.img.addEventListener("load", () => {
            console.log(this.x)
            display.drawImage(this.img, this.x, this.y, 50, 50);
        })
        this.vy = Math.round(Math.random() * 5) + 1
        this.graden = 0;
        this.straal = 25
        this.hasCollide = false;
    }
    update() {
        this.y += this.vy
        this.graden++ //laat ster continu roteren
    }

    draw() {
        if (!this.hasCollide) {
            display.save()
            display.translate(this.x, this.y)
            display.rotate(this.graden * Math.PI / 180)
            display.drawImage(this.img, 0, 0, 50, 50);
            display.restore()
        }
    }
}

function spawnStars(aantal) {

    for (let i = 0; i < aantal; i++) {
        const x = Math.floor(Math.random() * 2000) + 2;
        const y = 3;
        let s = new Ster(x, y)
        stars.push(s);
    }
}



function Animate() {
    //clear
    display.clearRect(0, 0, 2000, 1000)


    for (let i = 0; i < stars.length; i++) {
        //update
        stars[i].update()
        Collide(heks, stars[i])
        //draw
        stars[i].draw()
    }

    heks.draw()


    setTimeout(Animate, 33)


}

function Collide(deHeks, ster) {
    let dx = deHeks.x - ster.x
    let dy = deHeks.y - ster.y
    let afstand = Math.sqrt(dx * dx + dy * dy)
    if (afstand < deHeks.straal + ster.straal) {
        console.log("collide")
        ster.hasCollide = true
    }
}

const canvas = document.getElementById("display");
const display = canvas.getContext("2d");
const stars = [];

let heks = new Heks(50)
canvas.addEventListener("mousemove", function (event) {
    heks.x = event.clientX;
});
spawnStars(50)
Animate()
