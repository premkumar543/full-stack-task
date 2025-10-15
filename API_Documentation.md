# 🎯 API Documentation - Livestream Overlay App

Base URL: http://127.0.0.1:5000

## GET /overlay
Fetch all overlays.
Example response:
[
  { "name": "Demo", "text": "Hello", "x": 100, "y": 50 }
]

## POST /overlay
Create new overlay.
Request:
{
  "name": "Logo",
  "text": "Welcome Stream",
  "x": 50,
  "y": 100
}

## PUT /overlay/<name>
Update overlay.
Request:
{
  "text": "Updated text",
  "x": 120,
  "y": 60
}

## DELETE /overlay/<name>
Delete overlay.

