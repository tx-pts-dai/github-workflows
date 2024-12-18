import requests

h = 'https://www.example.com'
r = requests.get(h)
s = r.status_code
print(f"{h} returns {s} status code")
