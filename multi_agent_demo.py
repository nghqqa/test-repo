"""Multi-Agent Demo: Contains issues for all 4 agents to work on."""
import os

# Issue 1: Hardcoded credential (P0 - Reviewer detects, Fixer sanitizes, Verifier approves)
API_TOKEN = "ghp_RamdomTokenForTesting12345678901234"

# Issue 2: SQL injection via string concat (P1 - complex fix)
def get_user_data(user_id):
    import sqlite3
    conn = sqlite3.connect("app.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE id = " + str(user_id))
    return cursor.fetchone()

# Issue 3: No input validation (P2 - Reviewer flags)
def process_payment(amount, card_number):
    if amount > 0:
        charge(card_number, amount)

def charge(card, amt):
    print(f"Charging {amt} to {card}")
