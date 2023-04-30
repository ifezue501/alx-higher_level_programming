#!/bin/bash

# Take the URL as an argument
url="$1"

# Send a GET request to the URL and display the response body
curl -s "$url" -X GET -L
