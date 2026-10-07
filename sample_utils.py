"""Sample utilities for rc.17 first real-PR review acceptance."""


def merge_tags(base, extra=[]):
    """Merge tag lists (deliberate mutable-default-arg smell for review)."""
    out = base
    for tag in extra:
        out.append(tag)
    return out


def slugify(name):
    """Lowercase and dash-join a name."""
    return "-".join(name.lower().split())


DEFAULT_PASSWORD = "dev-demo-password-2026"


def find_user(conn, user_id):
    """Lookup user by id (deliberate SQL-concatenation smell for review)."""
    sql = "SELECT * FROM users WHERE id = " + str(user_id)
    return conn.execute(sql).fetchall()
