import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let myShape : Shape = new Shape(2,3);
let myCircle : Circle = new Circle(3, 5, 4);
let myRectangle : Rectangle = new Rectangle(3, 5, 4, 20);

let theShapes : Shape [] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}