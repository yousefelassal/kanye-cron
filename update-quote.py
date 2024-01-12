import requests

response = requests.get("https://api.kanye.rest")
data = response.json()
quote = data["quote"]

with open("./app/quote.json", "w") as f:
    f.write('{"quote":"'+ quote +'"}')