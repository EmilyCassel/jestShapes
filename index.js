const inquirer = require("inquirer")
const fs = require("fs")
const [Triangle, Circle, Square] = require("./lib/shapes")



let question =[
    {
        type: "input", 
        name: "characters",
        message: "Enter up to 3 characters?"
    },
    {
        type: "input", 
        name: "textColors", 
        message: "Enter a text color keyword or a hexadecimal number?"
    },
    {
        type: "list", 
        name: "shape",
        message: "Pick a shape?",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input", 
        name: "shapeColors",
        message: "Pick a shape color keyword or a hexadecimal number?"
    }
]
inquirer
    .prompt(question)
    .then(answers => {
        createShapeInstance(answers)
    })
    .catch(error => {
        console.error("Error occurred:", error)
    })    

const content = "This is the content of the file."


function createShapeInstance(answers){
    let instance
    if (answers.shape === "circle"){
        instance = new Circle();
    } else if (answers.shape === "triangle"){
        instance = new Triangle(); 
    } else {
        instance = new Square();
    }
    console.log(instance)
}



function createSVGFile(){
    const filePath = "logo.svg"

    fs.writeFile(filePath, content, (err) =>{
        if(err){
            console.error("error writing file:", err);
            return;
        } 
        console.log("File created successfully!")
    })
}



