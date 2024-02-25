class Shape {
    setColor(color) {
        this.color = color
    }
}

class Triangle extends Shape {
    render() {
        return  `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    render() {
        return 
    }
}

class Square extends Shape {
    render() {
        return `<rect width="150" height="150" style="fill:${this.color}" />`
    }
}




module.exports = [Triangle, Circle, Square];