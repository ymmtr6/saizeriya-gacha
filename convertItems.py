# coding: utf-8

import csv
import json

with open('items.csv', 'r') as f:
    reader = csv.DictReader(f)
    l = [row for row in reader]

for i in l:
    i["price"] = int(i["price"])
    for key in ['alcoholic', 'setOnly', 'counterSales']:
        i[key] = i[key] == 'true'

with open('src/items.json', 'w') as f:
    json.dump(l, f, indent=4, ensure_ascii=False)
