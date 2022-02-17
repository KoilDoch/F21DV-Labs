import csv
import random

# write to the years.csv file
with open('years.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["year", "value"])

    """ generate data """
    for i in range(100):
        writer.writerow([1922+i,random.random()*25])
