# kbu-not-hesaplay-c--EnsarEfe-2505903018
KBU not hesaplama projesi
# KBÜ Not Hesaplayıcı

Bu proje, Karabük Üniversitesi öğrencileri için JavaScript ile hazırlanmış bir not hesaplama aracıdır. Öğrencinin vize, final/bütünleme ve yıl içi notlarına göre başarı notunu ve harf notunu otomatik hesaplar.

## Hesaplama Mantığı

KBÜ yönetmeliğine göre:
- Yıl içi katkısı: %40 (vize + çalışmalar)
- Final veya bütünleme katkısı: %60
- Geçme koşulu: Genel sınav ≥ 50 ve başarı notu ≥ 60

Harf notları:
- 90–100 → A1
- 80–89 → A2
- 70–79 → B1
- 65–69 → B2
- 60–64 → C
- Altı → F1/F2/F3 (kaldı)

## Kullanım Talimatı

1. `index.html` dosyasını tarayıcıda aç
2. Vize, final, bütünleme gibi notları gir
3. “Hesapla” butonuna bas
4. Sonuç kartında başarı notu, harf notu ve durum gösterilir

## Test Senaryoları

| Yıl İçi | Final | Bütünleme | Beklenen Sonuç |
|--------|-------|-----------|----------------|
| 70     | 60    | -         | C, Geçti       |
| 95     | 48    | -         | F3, Kaldı      |
| 58     | -     | 55        | F3, Kaldı      |
| -      | -     | -         | F1, Kaldı (devamsız) |
| -      | -     | -         | F2, Kaldı (sınava girmedi) |
