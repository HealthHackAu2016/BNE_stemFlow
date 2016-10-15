#!/usr/bin/python
import sys
import cgi
import boto3
import mysql.connector

form = cgi.FieldStorage()

print(form["filter"])

sys.exit()

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
    
   


curcol.close()
curdata.close()

conn.close()

client = boto3.client('s3')

response = client.put_object(
    Body = f,
    Bucket = "stemflows3-s3bucket-xong7o21f9ih",
    Key = "data/"
)
    

f.close()
