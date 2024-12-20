from ultralytics import YOLO
import os

# Inisialisasi model YOLOv8
model = YOLO(r"C:\Users\radit\Documents\kuliah\ta\app\sibi-sign-language-detection\backend\model\best.pt")  # Ganti dengan path model YOLOv8 Anda

# Daftar path gambar (gunakan raw string)
image_paths = [
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\A\IMG_3610_frame_0162.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\B\IMG_3610_frame_0444.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\C\IMG_3610_frame_0542.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\D\IMG_3610_frame_0761.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\E\IMG_3610_frame_0798.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\F\IMG_3610_frame_0916.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\G\IMG_3611_frame_0906.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\H\IMG_3611_frame_1058.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\I\IMG_3647_frame_11918.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\J\IMG_3611_frame_1190.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\K\IMG_3611_frame_1264.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\L\IMG_3611_frame_1329.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\M\IMG_3611_frame_1435.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\N\IMG_3647_frame_15726.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\O\IMG_3647_frame_16147.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\P\IMG_3647_frame_17262.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\Q\IMG_3612_frame_0030.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\S\IMG_3612_frame_0269.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\R\IMG_3612_frame_0184.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\T\IMG_3612_frame_0361.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\U\IMG_3612_frame_0485.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\V\IMG_3612_frame_0563.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\W\IMG_3647_frame_21877.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\W\IMG_3647_frame_21877.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\Y\IMG_3647_frame_22465.png",
    r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\X\IMG_3647_frame_22167.png",
    # r"C:\Users\radit\Documents\kuliah\ta\dataset\anotation\Z\IMG_3647_frame_22969.png"
]

# Tentukan folder output yang sama untuk semua hasil deteksi
output_folder = 'output'  # Nama folder yang diinginkan untuk hasil deteksi

# Buat folder jika belum ada
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Lakukan deteksi untuk setiap gambar dalam daftar dan simpan di folder yang sama
for image_path in image_paths:
    results = model.predict(source=image_path, save=True, save_dir=output_folder)  # Simpan hasil di folder yang sama
    print(f'Hasil deteksi untuk {image_path}:')
    print(results)
