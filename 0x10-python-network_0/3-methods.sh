#!/bin/bash

# Send a HEAD request to the URL and display the allowed HTTP methods
curl -sI "$1" | grep "Allow" | cut -d " " -f 2-
