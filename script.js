document.getElementById("gradeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const vize = parseFloat(document.getElementById("vize").value);
  const yiliciInput = document.getElementById("yilici").value;
  const yilici = yiliciInput ? parseFloat(yiliciInput) : vize;
  const final = parseFloat(document.getElementById("final").value);
  const butunlemeInput = document.getElementById("butunleme").value;
  const butunleme = butunlemeInput ? parseFloat(butunlemeInput) : null;
  const devamsizlik = document.getElementById("devamsizlik").checked;
  const sinavaGirdi = document.getElementById("sinavaGirdi").value;

  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";

  // Doğrulama
  if (
    isNaN(vize) || isNaN(yilici) || isNaN(final) ||
    vize < 0 || vize > 100 ||
    yilici < 0 || yilici > 100 ||
    final < 0 || final > 100 ||
    (butunleme !== null && (butunleme < 0 || butunleme > 100))
  ) {
    resultDiv.innerHTML = `<p class="error">Lütfen tüm notları 0–100 arasında girin.</p>`;
    return;
  }

  // Devamsızlık kontrolü
  if (devamsizlik) {
    resultDiv.innerHTML = `Başarı Notu: -<br>Harf Notu: F1<br>Durum: Kaldı<br>Açıklama: Devamsızlık nedeniyle F1.`;
    return;
  }

  // Sınava girmeme kontrolü
  if (sinavaGirdi === "hayir") {
    resultDiv.innerHTML = `Başarı Notu: -<br>Harf Notu: F2<br>Durum: Kaldı<br>Açıklama: Sınava girmediği için F2.`;
    return;
  }

  const sinav = butunleme !== null ? butunleme : final;
  const basari = +(0.4 * yilici + 0.6 * sinav).toFixed(2);

  let harf = "";
  let durum = "";
  let aciklama = "";

  if (sinav < 50) {
    harf = "F3";
    durum = "Kaldı";
    aciklama = "Genel sınav < 50 olduğu için F3.";
  } else if (basari < 60) {
    harf = "F3";
    durum = "Kaldı";
    aciklama = "Başarı notu < 60 olduğu için F3.";
  } else {
    if (basari >= 90) harf = "A1";
    else if (basari >= 80) harf = "A2";
    else if (basari >= 70) harf = "B1";
    else if (basari >= 65) harf = "B2";
    else harf = "C";
    durum = "Geçti";
    aciklama = "Koşullar sağlandığı için geçti.";
  }

  resultDiv.innerHTML = `
    Başarı Notu: ${basari}<br>
    Harf Notu: ${harf}<br>
    Durum: ${durum}<br>
    Açıklama: ${aciklama}
  `;
});

function resetForm() {
  document.getElementById("gradeForm").reset();
  document.getElementById("result").style.display = "none";
}

