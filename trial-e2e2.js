// trial-e2e2.js — webhook 新链路端到端验证样例（试用后清理）
const apiKey = "sk-live-ABCDEFGHIJ1234567890abcdefghij"; // R-SECRET: hardcoded api key
function query(conn, input) {
  return conn.query("SELECT * FROM logs WHERE q = '" + input + "'"); // R-SQL-CONCAT
}
module.exports = { query };
