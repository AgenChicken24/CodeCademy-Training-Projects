let reqeust = require(requests)

r = reqeust.post(
    "https://api.peekalink.io/",
    headers={"X-API-Key": "YourSecretKey"},
    data={"link": "https://bit.ly/3frD2OP"},
)

print(r.json())