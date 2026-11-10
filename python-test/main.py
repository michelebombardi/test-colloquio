def trova_duplicati(lista, visti=[]):
    duplicati = []
    for x in lista:
        if x in visti:
            if x not in duplicati:
                duplicati.append(x)
        else:
            visti.append(x)
    return duplicati

print(trova_duplicati([1, 2, 2, 3]))
print(trova_duplicati([3, 4]))
