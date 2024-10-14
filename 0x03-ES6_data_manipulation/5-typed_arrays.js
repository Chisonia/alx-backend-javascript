export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);
  // Create an Int8Array view on the buffer
  const int8Array = new Int8Array(buffer);
  // Check if the position is out of bounds
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // Set the value at the specified position
  int8Array[position] = value;
  // Return the ArrayBuffer inside a DataView for further inspection if needed
  return new DataView(buffer);
}
