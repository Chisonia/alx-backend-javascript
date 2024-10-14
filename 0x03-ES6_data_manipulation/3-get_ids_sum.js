export default function getStudentIdsSum(list) {
  return list.reduce((prevValue, student) => prevValue + student.id, 0);
}
