// trial-e2e.js — rc.10 审批链端到端触发样例（刻意包含高危模式，仅供审查管线验证）
const hardcodedToken = "ghp_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij"; // R-SECRET: hardcoded credential
function getUser(userId) {
  const q = "SELECT * FROM users WHERE id = '" + userId + "'"; // R-SQL-CONCAT: string concatenation
  return db.query(q);
}
module.exports = { getUser };
