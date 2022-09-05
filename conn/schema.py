from ninja import Schema

class ReceivedData(Schema):
    name: str
    psswd: str

# class FileUpload(Schema):
#     file: dict