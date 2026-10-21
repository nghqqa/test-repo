// 合成检测样本（自然样本验证专用——非功能代码，PR 保持 open 不合并）。
// 故意包含规则引擎可检出的形状：SQL 字符串拼接。
const userId = "1";
const q = "SELECT * FROM users WHERE id=" + userId;
console.log(q);

// 追加检测样本：路径穿越形状（触发 R-PATH-TRAVERSAL 规则——给修复流程更多素材）
const path = require('path');
const userInput = "../../etc/passwd";
const target = path.join("/var/data", userInput);
console.log(target);
