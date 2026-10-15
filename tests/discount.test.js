const test = require("node:test");
const assert = require("node:assert");
const { applyDiscount } = require("../discount.js");

test("applies percentage discount", () => {
  assert.equal(applyDiscount({ items: [{ price: 100 }, { price: 50 }] }, 10), 135);
});

test("null cart means no items to discount (returns 0, not crash)", () => {
  assert.equal(applyDiscount(null, 10), 0);
});
