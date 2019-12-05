import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let myCircle : Circle = new Circle(3, 5, 4);
let myRectangle : Rectangle = new Rectangle(3, 5, 4, 20);

console.log(myCircle.getInfo());
console.log(myRectangle.getInfo());