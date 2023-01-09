#!/usr/bin/python3
# 9-max_integer.py


def max_integer(my_list=[]):
    """Find the biggest integer of a list."""
    if my_list is None:
        return
    if len(my_list) == 0:
        return
    max = my_list[0]
    for i in my_list:
        if i > max:
            max = i
    return max
