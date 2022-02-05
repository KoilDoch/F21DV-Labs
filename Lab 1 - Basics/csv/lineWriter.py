import csv
import math

# write to the line.csv file
with open('line.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["id", "x", "y"])

    """ generate 3 different lines """
    # sine wave
    for i in range(100):
        writer.writerow([0,i/100,math.sin(6.2 * i/100)])
    # cosine wave
    for i in range(100):
        writer.writerow([1,i/100,math.cos(6.2 * i/100)])