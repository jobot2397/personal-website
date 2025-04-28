#!/bin/bash
cp -r ./dist/* /var/www/html/
systemctl restart nginx