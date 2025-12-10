export function sum(a: number, b: number): number {
  return a + b;
}

export function sub(a: number, b: number): number {
  return a - b;
}

export function mult(a: number, b: number): number {
  return a * b;
}

export function toCentimeter(feet: number, inches: number = 0): number {
  const combinedInches = feet * 12 + inches;
  return combinedInches * 2.54;
}

export function myFunction(input: number): void {
  if (input !== 3) {
    throw new Error("Invalid input");
  }
}
