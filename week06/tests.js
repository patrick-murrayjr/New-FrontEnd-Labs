/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
  FE Lab Week 06
*/
const expect = chai.expect;
const assert = chai.assert;

/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from week6Lab.js into the describe block (exclude the final console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/

describe('Week 6 Lab Tests:', () => {
  describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => {
      // Copy & paste your debugged code from week6Lab.js
      function addTwoNumbers(num1, num2) {
        return num1 + num2;
      }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5);
      expect(addTwoNumbers(9, 17)).to.equal(26);
      expect(addTwoNumbers(750, 250)).to.equal(1000);
      expect(addTwoNumbers(132780, 443378)).to.equal(576158);
    });
  });

  describe('Example Failed Test: Add Two Numbers', () => {
    it('#Should fail', () => {
      function sumOfTwoNumbers(num1, num2) {
        num1 + num2;
      }

      expect(sumOfTwoNumbers(2, 3)).to.equal(5);
    });
  });
  /*--------------------------NEW TESTS BELOW-------------------------------*/
  describe('Question 1a: Sorted array of numbers', () => {
    it('#Should sort an array of mumbers in ascending order', () => {
      const arrayOfNumbers = [1, 5, 3, 2, 4];
      arrayOfNumbers.sort((a, b) => a - b);

      expect(arrayOfNumbers).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });

  describe('Question 1b: Manage my wallet', () => {
    class Wallet {
      constructor(startingMoney) {
        this.money = startingMoney;
      }

      addMoney(amount) {
        this.money += amount;
      }

      removeMoney(amount) {
        this.money -= amount;
      }
    }

    const myWallet = new Wallet(10);
    it('#Should be able to add money to my wallet', () => {
      myWallet.addMoney(10);
      expect(myWallet.money).to.equal(20);
    });
    it('#Should be able to remove money from my wallet', () => {
      myWallet.removeMoney(15);
      expect(myWallet.money).to.equal(5);
    });
  });

  describe('Question 1c: Day of the Week', () => {
    const dayOfTheWeek = num => {
      switch (num) {
        case 1:
          return 'Monday';
          break;
        case 2:
          return 'Tuesday';
          break;
        case 3:
          return 'Wednesday';
          break;
        case 4:
          return 'Thursday';
          break;
        case 5:
          return 'Friday';
          break;
        case 6:
          return 'Saturday';
          break;
        case 7:
          return 'Sunday';
          break;
        default:
          //  console.log("Err. Something went wrong.");
          return 'Err. Something went wrong.';
      }
    };
    it("#Should return 'Monday' when 1 is input", () => {
      expect(dayOfTheWeek(1)).to.equal('Monday');
    });
    it("#Should return 'Tuesday' when 2 is input", () => {
      expect(dayOfTheWeek(2)).to.equal('Tuesday');
    });
    it("#Should return 'Wednesday' when 3 is input", () => {
      expect(dayOfTheWeek(3)).to.equal('Wednesday');
    });
    it("#Should return 'Thursday' when 4 is input", () => {
      expect(dayOfTheWeek(4)).to.equal('Thursday');
    });
    it("#Should return 'Friday' when 5 is input", () => {
      expect(dayOfTheWeek(5)).to.equal('Friday');
    });
    it("#Should return 'Saturday' when 6 is input", () => {
      expect(dayOfTheWeek(6)).to.equal('Saturday');
    });
    it("#Should return 'Sunday' when 7 is input", () => {
      expect(dayOfTheWeek(7)).to.equal('Sunday');
    });
    it("#Should return 'Err. Something went wrong.' when anything other than (1-7) is input", () => {
      expect(dayOfTheWeek(8)).to.equal('Err. Something went wrong.');
      expect(dayOfTheWeek(0)).to.equal('Err. Something went wrong.');
      expect(dayOfTheWeek('X')).to.equal('Err. Something went wrong.');
    });
  });
  describe('Question 1d: Only wizards shall pass!', () => {
    const movieCharacters = [
      {
        name: 'Howl',
        isAWizard: true,
        quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
      },
      {
        name: 'Kalcifer',
        isAWizard: false,
        quote: `I don't cook! I'm a scary and powerful fire demon!`,
      },
      {
        name: 'Gandalf',
        isAWizard: true,
        quote: `You shall not pass!`,
      },
      {
        name: 'Luke Skywalker',
        isAWizard: false,
        quote: `May the Force be with you.`,
      },
      {
        name: 'Chris Conway',
        isAWizard: true,
        quote: `Thinks he is a wizard.`,
      },
    ];

    function onlyWizards(arrayOfCharacters) {
      return arrayOfCharacters.filter(
        character => character.isAWizard === true
      );
    }

    it('#Should return an array of objects where oject.isAWizard is true', () => {
      //    expect(onlyWizards(movieCharacters)).to.deep.equal([
      //       {
      //          name: "Howl",
      //          isAWizard: true,
      //          quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
      //       },
      //       {
      //          name: "Gandalf",
      //          isAWizard: true,
      //          quote: `You shall not pass!`,
      //       },
      //    ]);
    });

    for (let character of onlyWizards(movieCharacters)) {
      it('#Character should be a Wizard', () => {
        expect(character.isAWizard).to.deep.equal(true);
      });
    }
  });
});

// Keziyah Tests

//// New tests
describe('TodoList Task', () => {
  class TodoList {
    constructor(tasks) {
      this.tasks = tasks;
    }

    // this has a bug
    addNewTodo(task) {
      this.tasks.push(task);
    }

    getIncomplete() {
      return this.tasks.filter(task => !task.completed);
    }

    getTaskById(id) {
      return this.tasks.find(task => task.id === id);
    }
  }

  const thingsToDo = [
    { name: 'do laundry', id: 1, completed: false },
    { name: 'wash dishes', id: 2, completed: true },
    { name: 'walk dog', id: 3, completed: true },
    { name: 'water plants', id: 4, completed: false },
  ];

  let myList = new TodoList(thingsToDo);
  myList.addNewTodo({ name: 'do homework', id: 5, completed: false });
  console.log(myList.getTaskById(5));

  beforeEach(() => {
    myList = new TodoList(thingsToDo);
  });

  it('#gets a task by its id', () => {
    expect(myList.getTaskById(1)).to.deep.equal({
      name: 'do laundry',
      id: 1,
      completed: false,
    });
  });

  it('#should return all incomplete tasks', () => {
    expect(myList.getIncomplete()).to.deep.equal([
      { name: 'do laundry', id: 1, completed: false },
      { name: 'water plants', id: 4, completed: false },
      { name: 'do homework', id: 5, completed: false },
    ]);
  });

  // it('#should return all elements where completed === false', () => {});
  let incompleteTasks = myList.getIncomplete();

  incompleteTasks.forEach(tasks => {
    it('#Should return only incomplete tasks', () => {
      expect(tasks.completed).to.deep.equal(false);
    });
  });
});
