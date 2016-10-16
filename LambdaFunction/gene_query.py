#!/usr/bin/env python
import sys
import cgi
import boto3
import mysql.connector

def gene_query(event, context):

    try: 

        print(event)
        #form = cgi.FieldStorage()

        # Create space between headers (HTML)
        print("")
        
        # Retrieve GeneSearch input
        # Example search = "GATA3,PDGFD"
        #search = form.getvalue('filter')
        search = event['stageVariables']['filter']

        # Split out genes for independant search
        genes = search.split(',')

        # Establish connection with backend MySQL instance
        # Local connection snippet:
        # conn = mysql.connector.connect(
        #     user='root', 
        #     password='Black1007!',
        #     host='localhost',
        #     database='stemflow'
        # )
        # Remote connection:
        conn = mysql.connector.connect(
            user='root', 
            password='ChangeMe123!',
            host='sdlbyc7m1na28v.cajayil9qa1h.ap-southeast-2.rds.amazonaws.com',
            database='stemflow'
        )

        # Loop through genes and render tsv files to S3 storage
        for gene in genes:

            curcol = conn.cursor(buffered=True)
            curdata = conn.cursor(buffered=True)

            columnquery = ("SHOW COLUMNS FROM stemflow.{0}").format(gene)
            dataquery = ("SELECT * FROM {0}").format(gene)

            curcol.execute(columnquery)
            curdata.execute(dataquery)

            columns = "\t".join(str(item[0]) for item in curcol)

            f = open("/tmp/" + gene + ".tsv", "w")

            f.write(columns + "\n")

            for row in curdata:

                fields = "\t".join(str(item) for item in row) + "\n"
                f.write(str(fields))

            curcol.close()
            curdata.close()
            f.close()

            f = open("/tmp/" + gene + ".tsv", "r")
            client = boto3.client('s3')

            response = client.put_object(
                ACL="public-read",
                Body = f,
                Bucket = "stemflow.net",
                Key = "data/" + gene + ".tsv"
            )
              

            f.close()
            
        conn.close()
        
    except Exception as e:
        print(e)
        return("Oops something went wrong")
