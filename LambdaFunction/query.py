#!/usr/bin/python
import mysql.connector

conn = mysql.connector.connect(
    user='root', 
    password='Black1007!',
    host='127.0.0.1',
    database='stemflow'
)

curcol = conn.cursor(buffered=True)
curdata = conn.cursor(buffered=True)

columnquery = ("SHOW COLUMNS FROM stemflow.test")
dataquery = ("SELECT * FROM test")

curcol.execute(columnquery)
curdata.execute(dataquery)

columns = "\t".join(str(item[0]) for item in curcol)

f = open("gata.tsv", "w")

f.write(columns + "\n")

for row in curdata:

    fields = "\t".join(str(item) for item in row) + "\n"
    f.write(str(fields))
    
   
f.close()

curcol.close()
curdata.close()

conn.close()
