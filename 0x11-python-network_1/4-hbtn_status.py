#!/usr/bin/python3
"""
Write a Python script that fetches https://alx-intranet.hbtn.io/status
"""
import requests


if __name__ == "__main__":
    r = requests.get("https://alx-intranet.hbtn.io/status")
    if r.status_code == 200:
        print("Body response:")
        print("\t- type: {}".format(type(r.content)))
        print("\t- content: {}".format(r.content))
    else:
        print("Request failed with status code:", r.status_code)
