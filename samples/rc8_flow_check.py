"""rc8 生产流程验证样本：一个小工具函数。"""


def slugify(title: str) -> str:
    """把 PR 标题转成简短 slug，便于日志检索。"""
    return "-".join(title.strip().lower().split())[:64]
