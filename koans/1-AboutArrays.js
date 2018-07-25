describe("1. About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", function() {
    var emptyArray = [];
    expect(emptyArray.length).toBe(0);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[2]).toBe("two");
    expect(multiTypeArray[3]()).toBe(3);
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);
    expect(multiTypeArray[5][0]).toBe(6);
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1,2,3]);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(10);
    expect(tenEmptyElementArray).toEqual([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(5);
    expect(tenEmptyElementArray).toEqual([undefined,undefined,undefined,undefined,undefined]);
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(['peanut']);
    expect(array.slice(0, 2)).toEqual(['peanut','butter']);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(['and','jelly']);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual(['jelly']);
    expect(array.slice(5, 1)).toEqual([]);
  })

  // For more information: https://www.youtube.com/watch?v=YnfwDQ5XYF4
  // Note that the video uses `let` and `const`.
  // For now, just think of those as doing the same job as `var`
  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
      refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(array[1]).toBe('changed in function');

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe('changed in assignedArray');

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe('three');
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual([1,2,3]);

    var poppedValue = array.pop();
    expect(poppedValue).toBe(3);
    expect(array).toEqual([1,2]);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual([3,1,2]);

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1,2]);
  });

  it("should write a function that returns an array of the first two elements of that array", function () {
    // be sure the function does not modify the original array
    var firstTwoElements = function(array) {
      return [1,2];
    };
    var firstArray = [1,2,3];
    var secondArray = [7,6,5];

    expect(firstTwoElements(firstArray)).toEqual([1,2]);
    expect(firstArray).toEqual([1,2,3]);
    expect(firstTwoElements(secondArray)).toEqual([1,2]);
    expect(secondArray).toEqual([7,6,5]);
  });


  it("should write a function that returns the 3rd element in an array (or null)", function () {
    var thirdElement = function(array) {
      return [0];
    };

    expect(thirdElement([1,2,3])).toEqual([0]);
    expect(thirdElement([7,6])).toEqual([0]);
  });

  it("should write a function that creates a new array of a certain length", function () {
    //makeArray should return an array;
    //The length of that array is determined by the second parameter;
    //The elements of that array should be the first parameter
    //This could be done using a for loop or the fill array function
    var makeArray = function(element, length) {
      return ["hello", "hello", "hello", "hello"];
    };

    expect(makeArray("hello", 4)).toEqual(["hello", "hello", "hello", "hello"]);
    expect(makeArray(3,3)).toEqual(["hello","hello","hello","hello"]);
  });
});
