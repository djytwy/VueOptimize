# encoding:utf-8
# !/usr/bin/env python
from werkzeug.utils import secure_filename
from flask import Flask, render_template, jsonify, request, make_response, send_from_directory, abort
import os
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'upload'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
basedir = os.path.abspath(os.path.dirname(__file__))
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'JPG', 'PNG', 'gif', 'GIF'])


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

# 上传文件
@app.route('/up_photo', methods=['POST'], strict_slashes=False)
def api_upload():
    file_dir = os.path.join(basedir, app.config['UPLOAD_FOLDER'])
    if not os.path.exists(file_dir):
        os.makedirs(file_dir)
    f = request.files['photo']
    if f and allowed_file(f.filename):
        fname = secure_filename(f.filename)
        print(fname)
        ext = fname.rsplit('.', 1)[1]
        new_filename = f'test---{ext}'
        f.save(os.path.join(file_dir, new_filename))

        return jsonify({"success": 0, "msg": "上传成功"})
    else:
        return jsonify({"error": 1001, "msg": "上传失败"})


@app.route('/')
def test():
    import json
    if request.method == 'GET':
        return 'server run !!'
    else:
        print(request.method)
        return 'success!'


@app.route('/user/login', methods=['POST', 'GET'])
def login():
    return {"data": {"code": 200,"token":123123}}


@app.route('/user/info')
def info():
    if request.method == 'GET':
        print(request)
        print(request.values.get('tyetr'))
        return {"data": {"code": 200, "token": 123123, "data": "token"}}
    else:
        return 'info'


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='8090')
