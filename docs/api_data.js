define({ "api": [
  {
    "type": "get",
    "url": "/payloads/",
    "title": "Request listing of available payloads",
    "name": "GetAllPayloads",
    "group": "Payloads",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "payloads",
            "description": "<p>available payloads</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/payload.js",
    "groupTitle": "Payloads",
    "sampleRequest": [
      {
        "url": "http://example.com/payloads/"
      }
    ]
  }
] });
