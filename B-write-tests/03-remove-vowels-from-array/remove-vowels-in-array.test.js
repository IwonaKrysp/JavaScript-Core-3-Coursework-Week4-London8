let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  // Act
  // Assert

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
  let input = ["Irina", "Etza", "Daniel"];
  let result = removeVowelsFromWords(input);
  expect(result).toEqual(["rn", "tz", "Dnl"]);
});