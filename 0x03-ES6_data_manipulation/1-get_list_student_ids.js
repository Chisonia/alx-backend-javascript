export default function getListStudentIds(list) {
  if (!(list instanceof Array)) {
    return [];
  }
  return list.map((student) => student.id);
}
