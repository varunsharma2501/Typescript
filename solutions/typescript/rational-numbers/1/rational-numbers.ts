export class Rational {
  private numerator: number;
  private denominator: number;
  constructor(numerator:number,denominator:number) {
    if(denominator===0){
      throw new Error("Denominator 0 not allowed")
    }
    this.numerator=numerator;
    this.denominator=denominator;
    this.reduce();
  }
  add(other :Rational):Rational {
    const newNum=other.numerator*this.denominator+other.denominator*this.numerator;
    const newDen=other.denominator*this.denominator;
    return new Rational(newNum,newDen);
  }

  sub(other: Rational):Rational {
    const newNum=this.numerator*other.denominator - this.denominator*other.numerator;
    const newDen=this.denominator*other.denominator;

    return new Rational(newNum,newDen);
  }

  mul(other: Rational):Rational {
    const newNum=this.numerator*other.numerator;
    const newDen=this.denominator*other.denominator;
    return new Rational(newNum,newDen)
  }

  div(other: Rational):Rational {
    if(other.numerator===0){
      throw new Error("Cant divide with 0");
    }

    const newNum=this.numerator*other.denominator;
    const newDen=this.denominator*other.numerator;
    return new Rational(newNum,newDen);
  }

  abs() :Rational{
    return new Rational(Math.abs(this.numerator),Math.abs(this.denominator));
  }

  exprational(n: number):Rational {
    if(n===0){
      return new Rational(1,1)
    }
    if(this.numerator===0 && n<0){
      throw new Error("0 denominator not allowed")
    }
    const absN=Math.abs(n);
    const newNum=Math.pow(this.numerator,absN)
    const newDen=Math.pow(this.denominator,absN)

    if(n<0){
      return new Rational(newDen,newNum);
    }else{
      return new Rational(newNum,newDen);
    }
  }

  expreal(x:number):number {
  return Math.pow(x, this.numerator / this.denominator);
}


  reduce(): Rational {
  const gcd = (a: number, b: number): number =>
    b === 0 ? Math.abs(a) : gcd(b, a % b);

  const divisor = gcd(this.numerator, this.denominator);

  this.numerator /= divisor;
  this.denominator /= divisor;

  // ensure denominator is positive
  if (this.denominator < 0) {
    this.numerator *= -1;
    this.denominator *= -1;
  }

  return this;
}

}
