#!/usr/bin/python3
#6-print_matrix_integer.py


def print_matrix_integer(matrix=[[]]):
    """Print a matrix of integers."""
    for line in matrix:
        for col in range(len(line)):
            print(
                "{:d}".format(line[col]),
                end="" if col == len(line) - 1 else " ")
        print("")
