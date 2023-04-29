#!/usr/bin/python3
"""Python script that takes in a URL, sends a request to the URL and
displays the value of the X-Request-Id variable found
in the header of the response.
"""
import sys
import urllib.request


if __name__ == "__main__":
    # Check that a URL was provided as an argument
    if len(sys.argv) != 2:
        print("Usage: {} URL".format(sys.argv[0]))
        sys.exit(1)

    url = sys.argv[1]

    request = urllib.request.Request(url)
    with urllib.request.urlopen(request) as response:
        print(dict(response.headers).get("X-Request-Id"))
