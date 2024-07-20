# prompt: buatkan kode flask dengan 1 api untuk mendapatkan hasil prediksi model dari gambar yang diinput

from flask import Flask, request, jsonify
from ultralytics import YOLO
import cv2
import numpy as np

app = Flask(__name__)

# Load a model
model = YOLO("./model/best.pt")  

@app.route('/predict', methods=['POST'])
def predict():
  if 'file' not in request.files:
    return jsonify({'error': 'No file part'}), 400

  file = request.files['file']
  if file.filename == '':
    return jsonify({'error': 'No selected file'}), 400

  # Read the image file
  nparr = np.frombuffer(file.read(), np.uint8)
  img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

  # Predict with the model
  results = model(img)

  # Extract results (customize as needed)
  detections = []
  for r in results:
    for box in r.boxes:
      x1, y1, x2, y2 = box.xyxy[0].tolist()
      conf = box.conf.item()
      cls = int(box.cls.item())
      detections.append({
        'bbox': [x1, y1, x2, y2],
        'confidence': conf,
        'class': cls
      })

  return jsonify(detections)

if __name__ == '__main__':
  app.run(debug=True) 
