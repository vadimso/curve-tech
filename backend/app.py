from pymongo import MongoClient

# Connect to the MongoDB container
client = MongoClient("mongodb://mongo:27017/")
db = client["mydatabase"]

# Example: Insert a document into a collection
collection = db["mycollection"]
document = {"name": "John", "age": 30}
collection.insert_one(document)

print("Document inserted!")

# Your additional backend logic here

