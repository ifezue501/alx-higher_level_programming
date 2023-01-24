# Python - Classes and Objects

Here I was introduced to the four principles of OOP:
Inheritance
Polymorphism
Abstruction
Encapsulation And it's implementation in Classes.

# Tests
tests: Folder of test files.

# Tasks
0. My first square
 0-square.py: Python class Square that defines a square.

1. Square with size
 1-square.py: Python class Square that defines a square. Builds on 0-square.py with:
   Private instance attribute size.
   Instantiation with size.

2. Size validation
 2-square.py: Python class Square that defines a square. Builds on 1-square.py with:
    Instantiation with optional size: def __init__(self, size=0):
 If a provided size attribute is not an integer, a TypeError exception is raised with the message must be an integer.
 If a provided size attribute is less than 0, a ValueError exception is raised with the message size must be >= 0.
