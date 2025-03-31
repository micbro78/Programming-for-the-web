import os
from flask import Flask, request, render_template

app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/", methods=["GET", "POST"])
def upload_files():
    if request.method == "POST":
        file = request.files["file"]
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        return f"<h3>File Content:</h3><pre>{content}</pre>"
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
