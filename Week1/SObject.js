

var groceryList ={
    importantItems: [ "yogurt", "babyCereal", "milk"],
    price: 15,
    wereThereAlotOfPeople: false,
    storeName: "@Aldi's",

    displayInfo: function () {
        console.log ("$"+ groceryList.price + " " + groceryList.storeName)
    }}
console.log (groceryList)
groceryList.displayInfo()
