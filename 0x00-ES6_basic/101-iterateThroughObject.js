export default function iterateThroughObject(reportWithIterator) {
  return [...reportWithIterator]
    .reduce(
      (previousEmployee, currentEmployee) => previousEmployee
        ? `${previousEmployee} | ${currentEmployee}`
        : currentEmployee, '',
    );
}
