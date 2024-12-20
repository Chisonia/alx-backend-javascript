// js/interface.ts

// Define RowID type as a number
export type RowID = number;

// Define RowElement interface
export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;  // age is optional
}
