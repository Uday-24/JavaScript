# import mysqli.connector as c
import tkinter as tk

def create_database():
    print("Database created")
    # con = c.connect(
    #     host="localhost",
    #     user="root",
    #     password=""
    # )
    # cur = con.cursor()
    # cur.execute("CREATE DATABASE IF NOT EXIST mydb")

root = tk.Tk()

btn = tk.Button(root, text="Create database", command=create_database)
btn.pack()

root.mainloop()