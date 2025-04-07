from flask import request, jsonify
import requests
from app import app

@app.route('/send', methods=['GET'])
def send():
    token = request.args.get("token")
    cokchanel = request.args.get("cokchanel")
    lines = request.args.get("lines")

    url = f"http://serverarthur.space/api_1/proxychanel.php?token={token}&cokchanel={cokchanel}&lines={lines}"
    
    try:
        r = requests.get(url)
        return r.text, r.status_code, {'Access-Control-Allow-Origin': '*'}
    except Exception as e:
        return jsonify({"error": str(e)}), 500
