import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 4;
  const b = 3;
  const expectedResult = 7;

  // Act
  const actual = Add(a, b);

  // Assert
  expect(actual).toBe(expectedResult)
})

test('Return substraction of a - b', () => {
  // Arrange
  const a = 4;
  const b = 3;
  const expectedResult = 1;

  // Act
  const result = Substract(a, b)

  // Assert
  expect(result).toBe(expectedResult)

})

test('Return multiplication of two arguments', () => {
  // Arrange
  const a = 4;
  const b = 3;
  const expectedResult = 12;

  // Act
  const result = Multiplication(a, b)

  // Assert
  expect(result).toBe(expectedResult)

})