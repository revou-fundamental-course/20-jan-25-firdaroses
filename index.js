const bmiText = document.getElementById("bmi"); // Elemen untuk menampilkan hasil BMI
const descText = document.getElementById("desc"); // Elemen untuk menampilkan deskripsi BMI
const form = document.querySelector("form"); // Formulir input pengguna

// Menambahkan event listener untuk tombol submit dan reset
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

// Fungsi untuk mereset hasil BMI
function handleReset() {
  bmiText.textContent = 0; // Mengatur ulang BMI ke 0
  bmiText.className = ""; // Menghapus kelas CSS yang mungkin ada
  descText.textContent = "N/A"; // Mengatur ulang deskripsi ke "N/A"
}

// Fungsi untuk menangani perhitungan BMI saat form dikirim
function handleSubmit(e) {
  e.preventDefault(); // Mencegah reload halaman saat submit

  // Mengambil nilai berat dan tinggi dari input form
  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);

  // Validasi input: pastikan berat dan tinggi adalah angka positif
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter a valid weight and height"); // Menampilkan peringatan jika input tidak valid
    return;
  }

  // Mengonversi tinggi dari cm ke meter dan menghitung BMI
  const heightInMeters = height / 100;
  const bmi = weight / Math.pow(heightInMeters, 2);
  const desc = interpretBMI(bmi); // Menentukan kategori BMI berdasarkan hasil perhitungan

  // Menampilkan hasil BMI di halaman
  bmiText.textContent = bmi.toFixed(2); // Menampilkan BMI dengan 2 angka di belakang koma
  bmiText.className = desc; // Menyesuaikan kelas CSS berdasarkan kategori BMI
  descText.innerHTML = `You are <strong>${desc}</strong>`; // Menampilkan deskripsi kategori BMI
}

// Fungsi untuk menginterpretasi nilai BMI ke dalam kategori
function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "underweight"; // Jika BMI < 18.5, maka kategori "Underweight"
  } else if (bmi < 25) {
    return "healthy"; // Jika BMI antara 18.5 - 24.9, maka kategori "Healthy"
  } else if (bmi < 30) {
    return "overweight"; // Jika BMI antara 25 - 29.9, maka kategori "Overweight"
  } else {
    return "obese"; // Jika BMI ≥ 30, maka kategori "Obese"
  }
}
