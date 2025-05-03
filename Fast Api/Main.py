from Interfaces import Item
from fastapi import FastAPI
from pydantic import BaseModel




app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/theItems/{name}/{job}")
async def read_item(name, job):
    return {"message": "My name is "+name+" and I am a "+job} #Required Parameter, If one of the parameter is not defined, trigger not found 

@app.get("/ViewAllProducts")
async def ViewAllProducts():
    products = ['First', "Second", "Third"]
    return {"message": products}

@app.get("/ViewAllStudents")
async def ViewAllStudents( skip:int, limit:int = 10):
    student = [
    {
        "firstName":"Solomon",
        "lastName":"Danso",
        "age":"24 years",
        "gender":"M"
    }, 
    {
        "firstName":"Vivian",
        "lastName":"Obeng",
        "age":"45 years",
        "gender":"F"
    }, 
        ]
    return student


@app.get("/items/{item_id}")
async def read_item(item_id: str, q: str | None = None, short: bool = False):
    item = {"item_id": item_id} #By default set the item_id in the json
    if q:
        item.update({"q": q}) #if the url contains q, trigger the q value 
    if not short:
        item.update(
            {"description": "This is an amazing item that has a long description"}
        ) #If the short is set to true, don't show the description
    return item

# Request Body 

@app.post("/items/")
async def create_item(item: Item):
    return item
"""
Sample JSON Request Body
{
"name":"solo",
"description":"testing",
"price":45,
"tax":30


}
    """
    
@app.post("/advItems/")
async def create_item(item: Item):
    item_dict = item.dict()
    if item.tax is not None:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax": price_with_tax})
    return item_dict
