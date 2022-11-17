import math

def calc():
  num1 = int(input("Masukan angka 1 : "))
  num2 = int(input("Masukan angka 2 : "))
  operator = input("Pilih operator : ")

  if operator == "Tambah":
    sym = "+"
    res = num1 + num2
  if operator == "Kurang":
    sym = "-"
    res = num1 - num2
  if operator == "Bagi":
    sym = "/"
    res = num1 / num2
  if operator == "Kali" :
    sym = "*"
    res = num1 * num2
  if operator == "Pangkat" :
    sym = "^"
    res = math.pow(num1, num2)

  print("Angka Pertama : ", num1)
  print("Angka Pertama : ", num2)
  print("Pilihan Operator : ", operator)
  print("Hasil Operator", num1, sym, num2, res)

calc()