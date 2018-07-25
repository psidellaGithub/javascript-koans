describe("3. About Objects", function () {

  describe("Properties", function () {
    var megalomaniac;

    beforeEach(function () {
      megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", function () {
      expect(megalomaniac.mastermind).toBe('Joker');
    });

    it("should confirm that properties are case sensitive", function () {
      expect(megalomaniac.henchwoman).toBe('Harley');
      expect(megalomaniac.henchWoman).toBe();
    });
  });


  it("should know properties that are functions act like methods", function () {
    var megalomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    var battleCry = megalomaniac.battleCry(4);
    expect('They are Pinky and the Brain Brain Brain Brain').toMatch(battleCry);
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear());
    var megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(2018);
    expect(megalomaniac.calculateAge()).toBe(48);
  });

  it("should know that properties can be added and deleted", function () {
    var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect(megalomaniac["secretary"]).toBe();

    megalomaniac.secretary = "Agent Smith";
    expect(megalomaniac["secretary"]).toBe('Agent Smith');

    delete megalomaniac.henchman;
    expect(megalomaniac["henchman"]).toBe();
  });


  it("should use prototype to add to all objects", function () {
    function Circle(radius)
    {
      this.radius = radius;
    }

    var simpleCircle = new Circle(10);
    var colouredCircle = new Circle(5);
    colouredCircle.colour = "red";

    expect(simpleCircle.colour).toBe();
    expect(colouredCircle.colour).toBe('red');

    Circle.prototype.describe = function () {
      return "This circle has a radius of: " + this.radius;
    };

    expect(simpleCircle.describe()).toBe('This circle has a radius of: 10');
    expect(colouredCircle.describe()).toBe('This circle has a radius of: 5');
  });

  it("should create your own simple object", function() {
    var myNewObject = ;

    expect(myNewObject.prop1).toEqual("a property!");
    expect(myNewObject.prop2).toEqual([4,3,2]);
    expect(myNewObject.prop3()).toEqual("a property that is a method!");
  });

  it("should create your own prototype", function() {
    function MyPrototype(argument) {
      return "Own Prototype";
    }
    var myNewObject = new MyPrototype("initial value");

    expect(myNewObject.prop1).toEqual({simple: "object"});
    expect(myNewObject.prop2).toEqual("initial value");
  });
});
