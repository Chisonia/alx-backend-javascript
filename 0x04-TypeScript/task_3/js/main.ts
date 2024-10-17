/// <reference path="crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Import everything from crud.js as CRUD


// Create an object called row of type RowElement
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Insert the row into the database and get the new row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Create an updated row with an age of 23
const updatedRow: RowElement = { 
    firstName: 'Guillaume', 
    lastName: 'Salva', 
    age: 23 
};

// Update the row in the database
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row ID: ${newRowID}`);

// Delete the row from the database
CRUD.deleteRow(newRowID);
console.log(`Deleted row ID: ${newRowID}`);