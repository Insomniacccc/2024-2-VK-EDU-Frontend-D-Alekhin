import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
  expect(correctSentence("")).toBe('');
  expect(correctSentence("a")).toBe("A.");
  expect(correctSentence("A")).toBe("A.");
  expect(correctSentence("a.")).toBe("A.");
  expect(correctSentence(" ")).toBe(" .");
  expect(correctSentence("...")).toBe("...");
})
