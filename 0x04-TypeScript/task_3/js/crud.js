// js/crud.js

export default function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}
  
export default function deleteRow(rowId) {
  console.log('Delete row id', rowId);
}
  
export default function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}
