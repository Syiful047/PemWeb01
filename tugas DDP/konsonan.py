# konsonan
def konsonan(kon):
    x='aiueo '
    y=''
    for data in kon :
        if data in x :
            continue
        else:y+=data
    return y

print (konsonan("Nurul Fikri"))