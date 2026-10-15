function applyDiscount(cart, percent) {
  if (percent > 100) throw new Error("percent too large");
  if (percent < 0) throw new Error("percent must be non-negative");
  const factor = 1 - percent / 100;
  let total = 0;
  for (const item of cart.items) {
    total += item.price * factor;
  }
  return total;
}
module.exports = { applyDiscount };
