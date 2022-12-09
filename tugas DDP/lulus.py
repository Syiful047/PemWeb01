# hasil nilai akhir
hasil_akhir = [
    {'nama':'Reza', 'nilai':70},
    {'nama':'Ciut', 'nilai':60},
    {'nama':'Dian', 'nilai':80},
    {'nama':'Badu', 'nilai':40},
]

l = []
def lulus(data):
    for i in data:
        nilai = i.get('nilai')
        nama = i.get('nama')
        if(nilai > 65):
            l.append(nama)
    print(l)

lulus(hasil_akhir)