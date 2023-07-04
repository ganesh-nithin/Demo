// Assignment 1
//===============================================================================================================================1

// function findDistanceBetweenTwoPoints(
//   p1: { x: number; y: number },
//   p2: { x: number; y: number }
// ): number {
//   return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
// }

// let p1 = { x: 5, y: 9 };
// let p2 = { x: 1, y: 9 };
// console.log(findDistanceBetweenTwoPoints(p1, p2));

// Assignment 2
//=================================================================================================================================2

// interface Point {
//   x: number;
//   y: number;
// }

// function findDistanceBetweenTwoPoints(p1: Point, p2: Point): number {
//   return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
// }

// let p1: Point = { x: 5, y: 9 };
// let p2: Point = { x: 1, y: 9 };

// console.log(findDistanceBetweenTwoPoints(p1, p2));

//Assignment 3
//=================================================================================================================================3

// interface Point {
//   x: number;
//   y: number;
// }

// interface TriangePoints {
//   [index: number]: Point;
// }

// function findDistanceBetweenTwoPoints(p1: Point, p2: Point): number {
//   return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
// }

// function findTriange(sides: number[]): string {
//   if (sides[0] === sides[1] && sides[1] === sides[2]) {
//     return "Equitorial";
//   } else if (
//     sides[0] == sides[1] ||
//     sides[1] == sides[2] ||
//     sides[2] == sides[0]
//   ) {
//     return "Isosceles";
//   }
//   return "Scalene";
// }

// function isValidTriangle(sides: number[]): boolean {
//   if (sides[0] <= 0 || sides[1] <= 0 || sides[2] <= 0) {
//     return false;
//   } else if (
//     sides[0] + sides[1] <= sides[2] &&
//     sides[0] + sides[2] <= sides[1] &&
//     sides[2] + sides[1] <= sides[0]
//   ) {
//     return false;
//   }
//   return true;
// }

// let p1: Point = { x: 0, y: 9 };
// let p2: Point = { x: 0, y: 7 };
// let p3: Point = { x: 0, y: 7 };
// let points: TriangePoints = [p1, p2, p3];
// let sides: number[] = [];

// for (let index in points) {
//   sides.push(
//     findDistanceBetweenTwoPoints(
//       points[index],
//       points[(parseInt(index) + 1) % 3]
//     )
//   );
// }

// if (isValidTriangle(sides)) {
//   console.log(findTriange(sides), sides);
// } else {
//   console.log("This is not a valid triangle", sides);
// }

//Assignment 4
//=============================================================================================================================4

// interface Point {
//   x: number;
//   y: number;
// }

// function findDistanceBetweenTwoPoints(p1: Point, p2: Point): number {
//   return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
// }

// function findTriange(sides: number[]): string {
//   if (sides[0] === sides[1] && sides[1] === sides[2]) {
//     return "Equitorial";
//   } else if (
//     sides[0] == sides[1] ||
//     sides[1] == sides[2] ||
//     sides[2] == sides[0]
//   ) {
//     return "Isosceles";
//   }
//   return "Scalene";
// }

// function isValidTriangle(sides: number[]): boolean {
//   if (sides[0] <= 0 || sides[1] <= 0 || sides[2] <= 0) {
//     return false;
//   } else if (
//     sides[0] + sides[1] <= sides[2] &&
//     sides[0] + sides[2] <= sides[1] &&
//     sides[2] + sides[1] <= sides[0]
//   ) {
//     return false;
//   }
//   return true;
// }

// function convertPointsToArrayOfXY(x: string, y: string): number[] {
//   return [parseInt(x), parseInt(y)];
// }

// function ConvertArrayToPoint(arr: number[]): Point {
//   return { x: arr[0], y: arr[1] };
// }

// function getPoints(fn: (x: string, y: string) => number[]): Point[] {
//   let points: Point[] = [];
//   points.push(ConvertArrayToPoint(fn("5", "2")));
//   points.push(ConvertArrayToPoint(fn("9", "6")));
//   points.push(ConvertArrayToPoint(fn("1", "3")));

//   return points;
// }

// let points = getPoints(convertPointsToArrayOfXY);
// let sides: number[] = [];

// for (let index in points) {
//   sides.push(
//     findDistanceBetweenTwoPoints(
//       points[index],
//       points[(parseInt(index) + 1) % 3]
//     )
//   );
// }

// if (isValidTriangle(sides)) {
//   console.log(findTriange(sides), sides);
// } else {
//   console.log("This is not a valid triangle", sides);
// }

// Assignment 5
//=========================================================================================================================5

// class GenericClass<Type> {
//   item!: Type;
//   getItem!: () => Type;
//   setItem!: (newItem: Type) => void;
//   displayItem!: () => void;
//   deleteItem!: () => Type;
// }

// let myGenericStringClass = new GenericClass<string>();
// myGenericStringClass.setItem = function (newItem) {
//   this.item = newItem;
// };
// myGenericStringClass.getItem = function () {
//   return this.item;
// };
// myGenericStringClass.displayItem = function () {
//   console.log("Item in the Object is " + this.item);
// };
// myGenericStringClass.deleteItem = function () {
//   let deletedItem = this.item;
//   this.item = "";
//   return deletedItem;
// };

// myGenericStringClass.setItem("Hello");
// myGenericStringClass.displayItem();
// console.log("Get Item is " + myGenericStringClass.getItem());
// console.log("Deleted Item is " + myGenericStringClass.deleteItem());

// let myGenericNumberClass = new GenericClass<number>();

// myGenericNumberClass.setItem = function (newItem) {
//   this.item = newItem;
// };
// myGenericNumberClass.getItem = function () {
//   return this.item;
// };
// myGenericNumberClass.displayItem = function () {
//   console.log("Item in the Object is " + this.item);
// };
// myGenericNumberClass.deleteItem = function () {
//   let deletedItem = this.item;
//   this.item = NaN;
//   return deletedItem;
// };

// myGenericNumberClass.setItem(10);
// myGenericNumberClass.displayItem();
// console.log("Deleted Item is " + myGenericNumberClass.deleteItem());
// console.log("Get Item is " + myGenericNumberClass.getItem());

// Assignment 6
//====================================================================================================================6

// interface Point {
//   x: number;
//   y: number;
// }

// abstract class Shape {
//   noOfSides: number;
//   points: Point[];
//   polygonName: String;

//   constructor(noOfSides: number, points: Point[], polygonName: string) {
//     this.noOfSides = noOfSides;
//     this.points = points;
//     this.polygonName = polygonName;
//   }

//   abstract findShape(): string;
//   abstract getArea(): number | undefined;
//   abstract setArea(area: number): void;
// }

// class Line extends Shape {
//   private area?: number;

//   constructor(noOfSides: number, points: Point[], polygonName: string) {
//     super(noOfSides, points, polygonName);
//   }

//   getArea(): number | undefined {
//     return this.area;
//   }

//   setArea(area: number): void {
//     this.area = area;
//   }

//   findShape(): string {
//     return "Line";
//   }
// }

// class Triangle extends Shape {
//   private area?: number;

//   constructor(noOfSides: number, points: Point[], polygonName: string) {
//     super(noOfSides, points, polygonName);
//   }

//   getArea(): number | undefined {
//     return this.area;
//   }

//   setArea(area: number): void {
//     this.area = area;
//   }

//   findShape(): string {
//     return "Triangle";
//   }
// }

// class Quadrilateral extends Shape {
//   private area?: number;

//   constructor(noOfSides: number, points: Point[], polygonName: string) {
//     super(noOfSides, points, polygonName);
//   }

//   getArea(): number | undefined {
//     return this.area;
//   }

//   setArea(area: number): void {
//     this.area = area;
//   }

//   findShape(): string {
//     return "Quadrilateral";
//   }
// }

// let shape: Shape = new Quadrilateral(
//   2,
//   [
//     { x: 9, y: 1 },
//     { x: 8, y: 7 },
//   ],
//   "Shape"
// );

// console.log(shape.findShape());
