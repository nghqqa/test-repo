// 合成检测样本（自然样本验证专用——非功能代码，PR 保持 open 不合并）。
// 故意包含规则引擎可检出的形状：SQL 字符串拼接。
const userId = "1";
const q = "SELECT * FROM users WHERE id=" + userId;
console.log(q);
