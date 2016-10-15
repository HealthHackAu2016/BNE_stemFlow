#!/bin/bash

cd ~/git/BNE_stemFlow
git pull -q

aws s3 sync public_html/ s3://stemflows3-s3bucket-xong7o21f9ih/
