const sum = (a: number, b: number) => a + b;

it("testing sum", () => {
  expect(sum(2, 3)).toBe(5);
});
