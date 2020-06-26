// IMPORT MODULES under test here:
// import example from '../example.js';
import { doMath } from '../utils.js';
const test = QUnit.test;




test("doMath('add', 'something else', 7) should return NaN", (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = NaN;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doMath('add', 'something else', 7);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected, actual);
});

test("doMath('add', 3, -7) should return -4", (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doMath('add', 3, -7);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test("doMath('+', 3, 4) should return 'Please pass add, subtract, multiply, or divide as the first argument' ", (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Please pass add, subtract, multiply, or divide as the first argument';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doMath('+', 3, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



test("doMath('subtract', 3, 4) should return -1", (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doMath('subtract', 3, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test("doMath('subtract', 'words', 4) should return NaN", (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = NaN;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doMath('subtract', 'words', 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test("doMath('multiply', 3, 4) should return 12", (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doMath('multiply', 3, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test("doMath('multiply', 3, 0) should return 0", (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doMath('multiply', 3, 0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test("doMath('divide', 3, 0) should return 'Infinity'", (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Infinity';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doMath('divide', 3, 0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

