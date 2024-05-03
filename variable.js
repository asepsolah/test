let angka = 1 ;
if (true) {
    let angka =2
}

const namaPelanggan = 'jordan'
const umur = 32
const sudahMenikah = true
const barangOrderan = ['baju', 'celana', 'sepatu']
const alamatPelanggan = {
    namaJalan: 'jl. setiabudi',
    nomorJalan: 5
}

console.log(`nama: ${namaPelanggan}`);
console.log(`Umur: ${umur}`)
console.log(`sudah Menikah: ${sudahMenikah}`);
console.log(`barang Orderan: ${barangOrderan}`);
console.log(`Alamat pelanggan: ${JSON.stringify(alamatPelanggan, null, 2)}`);