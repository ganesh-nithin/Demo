describe('First Test', () => {
  let testVar: any;

  beforeEach(() => {
    testVar = {};
  });

  it('should return true if a is true', () => {
    //arrange
    testVar.a = false;

    //act
    testVar.a = true;

    //assert
    expect(testVar.a).toBe(true);
  });
});
