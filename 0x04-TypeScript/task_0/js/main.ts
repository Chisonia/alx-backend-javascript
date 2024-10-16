//Write an interface named Student that accepts the following elements:
//firstName(string), lastName(string), age(number), and location(string)
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
//Create two students,
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};
//and create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

//Using Vanilla Javascript, render a table and for each elements in the array,
// append a new row to the table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
    const row = document.createElement('tr');
//Each row should contain the first name of the student and the location
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
