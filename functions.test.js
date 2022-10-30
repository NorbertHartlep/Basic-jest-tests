
const add = require('./add');
const gap = require('./gap');
const power = require('./power');

//tests for add

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 0 + 0 to equal 0', () => { 
    expect(add(0, 0)).toBe(0); 
});

test("add letters", () => { 
    expect(add("a", "b")).toBe("ab"); 
});

test("add letters to null", () => { 
    expect(add("a", null)).toBe("anull"); 
});

test("adding negative numbers", () => { 
    expect(add(3, -8)).toBe(-5); 
});

//tests for gap

test("difference between negative numbers", () => { 
    expect(gap(3, -8)).toBe(11); 
});

test("with null", () => { 
    expect(gap(3, null)).toBe(3); 
});

test("two positives", () => { 
    expect(gap(5,5)).toBe(0); 
});

test("two negatives", () => { 
    expect(gap(-10,-3)).toBe(-7); 
});

test("diff letters", () => { 
    expect(gap("a", "b")).toBe(NaN); 
});

//tests for power

test('normal power', () => { expect(power(5,2)).toBe(25); });

test('negative power', () => { expect(power(5,-2)).toBe(0.04); });

test('by 0/null', () => { expect(power(5,null)).toBe(1); });

test('letter power', () => { expect(power(5,"abcs")).toBe(NaN); });

//tests for custom function

