#!/bin/bash

cd ~/git/BNE_stemFlow
git pull

aws s3 sync --acl public-read public_html/ s3://stemflow.net/
