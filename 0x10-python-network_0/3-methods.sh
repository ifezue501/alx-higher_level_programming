#!/bin/bash
# Send an OPTIONS request to the URL and display the allowed HTTP methods
curl -sI -X OPTIONS "$l" | grep "Allow" | cut -d' ' -f 2-
