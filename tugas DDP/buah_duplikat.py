# list buah duplikat
def duplikasi(buah):
    data=[]
    for x in buah:
        data.append(x)
        data.append(x)
    return data 

print(duplikasi(['pepaya','mangga','pisang','durian','jambu']))