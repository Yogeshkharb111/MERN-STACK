//1. Object Creation and Basic Operations
// Creating an object 'cse018' with student details
const cse018 = {
    name: "Yogesh",
    address: "Haryana",
    bloodGroup: "O+"
};

console.log("Initial cse018 object:", cse018);

// Creating another object 'cse019' with an arrow function method (not recommended for methods)
const cse019 = {
    name: "Raj",
    address: "Delhi",
    bloodGroup: "O-",
    
    // Arrow function won't have its own 'this'
    getInfo: () => {
        console.log("Arrow function used. 'this' will not refer to cse019.");
    }
};

console.log("Initial cse019 object:", cse019);

//2. Reading, Updating, Adding, and Deleting Object Properties
// Read a value
const studentName = cse019.name;
console.log("Student Name from cse019:", studentName);

// Update an existing property
cse018.bloodGroup = "A+";

// Add a new property
cse018.college = "LPU";

// Delete a property
delete cse018.address;

// Checking the result of deletion
console.log("Updated cse018 object:", cse018);
console.log("Deleted address from cse018:", cse018.address); // Should log 'undefined'

//✅ 3. Object Method with BMI Calculation and Classification
const person = {
    name: 'Yogesh',
    height: 1.82,       // in meters
    weight: 100,        // in kilograms
    college: 'LPU',
    rollNumber: '441',

    // Method to calculate and classify BMI
    getBMI: function () {
        const bmi = this.weight / (this.height ** 2);
        console.log(`BMI for ${this.name}:`, bmi.toFixed(2)); // Rounded to 2 decimal places

        if (bmi > 24) {
            console.log("Classification: Obese");
        } else if (bmi >= 18.5 && bmi <= 24) {
            console.log("Classification: Normal");
        } else {
            console.log("Classification: Underweight");
        }
    }
};

// Calling the method with initial weight
person.getBMI();

// Update weight and recalculate
person.weight = 64;
person.getBMI();

//✅ 4. Object Utility Methods: keys, values, entries
const person1 = {
    name: 'Yogesh',
    height: 1.82,
    weight: 64,
    college: 'LPU',
    rollNumber: '441'
};

// Get all keys
const allKeys = Object.keys(person1);
console.log("Keys:", allKeys);

// Get all values
const allValues = Object.values(person1);
console.log("Values:", allValues);

// Get all entries (key-value pairs)
const allEntries = Object.entries(person1);
console.log("Entries:", allEntries);

//✅ 5. Object References and Shallow Copy
// Reference assignment - both point to the same object
const person2 = person1;

person1.name = "Raj";
person2.name = "Vishal"; // Changes person1.name too, because both refer to the same object

console.log("Person1:", person1);
console.log("Person2:", person2);
//🧠 To create a shallow copy (to avoid this reference problem), use:

//const person2 = { ...person1 }; // Now it's a separate object

//✅ 6. Accessing Property Dynamically with Prompt (Browser Only)
// This will only work in browser (not Node.js)
// const whichKey = prompt("What property do you want to access from person1?");
// const result = person1[whichKey];
// console.log(`Value for '${whichKey}' is:`, result);

//✅ 7. Object Destructuring
// Destructuring specific properties from an object
const { weight, college } = person;
console.log("Destructured values -> Weight:", weight, ", College:", college);

