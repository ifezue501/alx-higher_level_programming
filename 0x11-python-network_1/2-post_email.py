#!/usr/bin/python3
"""Python script that takes in a URL and an email,
sends a POST request to the passed
URL with the email as a parameter, and
displays the body of the response (decoded in utf-8)
"""
import sys
import urllib.parse
import urllib.request


if __name__ == "__main__":
    # Check that a URL and email were provided as arguments
    if len(sys.argv) != 3:
        print("Usage: {} URL email".format(sys.argv[0]))
        sys.exit(1)

    url = sys.argv[1]
    value = {"email": sys.argv[2]}
    data = urllib.parse.urlencode(value).encode("ascii")

    request = urllib.request.Request(url, data)
    with urllib.request.urlopen(request) as response:
        print(response.read().decode("utf-8"))
