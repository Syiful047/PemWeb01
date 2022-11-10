menu = ["nasi goreng", "mie goreng", "ayam geprek", "jus", "soft drink", "sweet ice tea"]
mak = "Makan", "makan"
mim = "Minum", "minum"
print("Selamat Datang di Restoran")
nama = input("Masukan nama anda = ")
no = int(input("Masukan nomor telepon anda = "))
pilihan = str(input("Mau makan atau minum = "))
if pilihan in mak:
    print("Daftar menu makan")
    print("Nasi goreng      = Rp.15.000")
    print("Mie goreng       = Rp.12.000")
    print("Ayam geprek      = Rp.18.000")

elif pilihan in mim:
    print("Daftar menu minum")
    print("Aneka Jus        = Rp.15.000")
    print("soft drink       = Rp.10.000")
    print("Sweet Ice Tea    = Rp.5.000")
else:
    print("Pilihlah keinginan anda dengan benar, Silahkan restart program kembali")
pesanan = input("masukan pesanan  = ")
jumlah = int(input("masukan jumlah pesanan  = "))
if pesanan in menu:
    if pesanan in menu[0]:
        hitung1 = jumlah * 15000
        print ("anda membeli nasi goreng seharga", hitung1)
    elif pesanan in menu[1]:
        hitung2 = jumlah * 12000
        print ("anda membeli mie goreng seharga", hitung2)
    elif pesanan in menu[2]:
        hitung3 = jumlah * 18000
        print ("anda membeli ayam geprek seharga", hitung3)
    elif pesanan in menu[3]:
        hitung4 = jumlah * 15000
        print ("anda membeli aneka jus seharga", hitung4)
    elif pesanan in menu[4]:
        hitung5 = jumlah * 10000
        print ("anda membeli soft drink seharga", hitung5)
    elif pesanan in menu[5]:
        hitung6 = jumlah * 5000
        print ("anda membeli sweet ice tea seharga", hitung6)
    else :
        print("ulang")
else:
    print("ulang")