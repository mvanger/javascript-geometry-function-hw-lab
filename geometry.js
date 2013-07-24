// Rectangle

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  if (this.length == this.width) {
    console.log("Is a square");
  } else {
    console.log("Is not a square");
  }
};

Rectangle.prototype.area = function(){
  console.log(this.length * this.width);
};

Rectangle.prototype.perimeter = function (){
  console.log(2*this.length + 2*this.width);
};


// Triangle

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function(){
  if (this.sideA == this.sideB && this.sideA == this.sideC) {
    console.log("It is equilateral");
  } else {
    console.log("It is not equilateral");
  }
};

Triangle.prototype.isIsosceles = function(){
  if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC) {
    console.log("It is isosceles");
  } else {
    console.log("It is not isosceles");
  }
};

Triangle.prototype.area = function(){
  var s = (this.sideA + this.sideB + this.sideC)/2;
  var a = Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
  console.log(a);
};

Triangle.prototype.isObtuse = function(){
  var a = Math.pow( this.sideA, 2 );
  var b = Math.pow( this.sideB, 2 );
  var c = Math.pow( this.sideC, 2 );
  if ( a+b < c || a+c < b || b+c < a){
    console.log("It is obtuse");
  } else {
    console.log("It is not obtuse");
  }
};