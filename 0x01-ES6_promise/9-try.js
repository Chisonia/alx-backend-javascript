export default function guardrail(mathFunction) {
  const quene = [];
  try {
    const result = mathFunction();
    quene.push(result);
  } catch (error) {
    quene.push(`Error: ${error.message}`);
  } finally { quene.push('Guardrail was processed'); }
  return quene;
}
