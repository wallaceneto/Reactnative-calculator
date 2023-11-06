export default function CalcOperation(
  value1: number,
  value2: number,
  operator: string | null,
) {
  switch (operator) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return value1;
  }
}
