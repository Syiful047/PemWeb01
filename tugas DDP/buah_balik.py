# list buah balik
def balik(buah):
    data=[]
    for x in range(len(buah)):
        x+=1
        data.append(buah[-x])
    return data

print(balik(['pepaya','mangga','pisang','durian','jambu']))
