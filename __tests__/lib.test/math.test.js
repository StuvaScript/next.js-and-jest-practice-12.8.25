import { sum, sub, mult, toCentimeter, myFunction } from "@/lib/math";

describe("math", () => {
  test("adds 1 + 2 to equal 3", () => {
    //* ``** Arrange **``
    //? ``** Preparing the data
    const value1 = 1;
    const value2 = 2;

    //* ``** Act **``
    //? ``** Execute the method you want to test
    const actualValue = sum(value1, value2);

    //* ``** Assert **``
    //? ``** Checking the outcome is what you expected
    expect(actualValue).toBe(3);
  });

  test("6 minus 2 equals 4", () => {
    //* ``** Arrange and Act in one line**``
    //? ``** Preparing the data
    //? ``** Execute the method you want to test
    const actualValue = sub(6, 2);

    //* ``** Assert **``
    //? ``** Checking the outcome is what you expected
    expect(actualValue).toBe(4);
  });

  test("multiplies 4 by 5 to equal 20", () => {
    //* ``** Arrange, Act, and Assert in one line**``
    //? ``** Preparing the data
    //? ``** Execute the method you want to test
    //? ``** Checking the outcome is what you expected
    expect(mult(4, 5)).toBe(20);
  });

  //* ``** Arrange **``
  //? ``** Preparing the data
  const testCases = [
    {
      input: {
        feet: 6,
        inches: 3,
      },
      expected: 190.5,
    },
    {
      input: {
        feet: 3,
        inches: 5,
      },
      expected: 104.14,
    },
    {
      input: {
        feet: 0,
        inches: 0,
      },
      expected: 0,
    },
  ];

  for (const testCase of testCases) {
    const { feet, inches } = testCase.input;
    const { expected } = testCase;

    test(`case: ${feet} feet ${inches} inches`, () => {
      //* ``** Act **``
      //? ``** Execute the method you want to test
      const actual = toCentimeter(feet, inches);

      //* ``** Assert **``
      //? ``** Checking the outcome is what you expected
      expect(actual).toBe(expected);
    });
  }

  test("object assignment", () => {
    //* ``** Arrange **``
    //? ``** Preparing the data
    const data = { one: 1 };
    data["two"] = 2;

    //* ``** No Assert needed here **``

    //* ``** Assert **``
    //? ``** Checking the outcome is what you expected
    expect(data).toEqual({ one: 1, two: 2 });
  });

  test("null is falsy", () => {
    const n = null;
    expect(n).toBeFalsy();
  });

  test("one is truthy", () => {
    const n = 1;
    expect(n).toBeTruthy();
  });

  test.todo(
    "Using the 'todo' keyword and only having a string argument allows you to save writing this test for later"
  );

  test("throws on invalid input", () => {
    expect(() => {
      myFunction(5);
    }).toThrow();
  });
});

//todo ``** Follow the "red-green-refactor" cycle of TDD
//! ``** Red: Write a failing test first
//* ``** Green: Write the simplest code to make it pass
//? ``** Refactor: Clean up the code

//* ``** Matchers **``
//? toBe is used with primitive values
//? toEqual is used when comparing the values of objects or arrays
//? toBeFalsy is used to check if value is null, undefined, false, zero, or blank
//? toBeTruthy checks for true values
//? toThrow is used to make sure errors are being thrown under certain conditions
