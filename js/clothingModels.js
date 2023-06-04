// each clothing set will have their own set of clothing items
// head,leg,and body will be clothingItem objects
class clothingSet{
     constructor(set, head,legs,body){
        this.setName = set;
        this.head = head;
        this.leg = legs;
        this.body = body;
    }
}

// each clothingItem has an upgrade list of items, the aquired bool, 
// and an upgradeLevel. Each method is a distinct action you can take 
class ClothingItem {
    Name = "";
    UpgradeLevel = 0;
    Aquired = false;
    UpgradeItemsList = [];
    ClothingType = clothingType.unassigned;

    constructor(upgradeItemsList, name, clothingType){
        this.UpgradeItemsList = upgradeItemsList;
        this.Name = name;
        this.ClothingType = clothingType;
    }

    UpgradeItem(){
        this.UpgradeLevel += 1;
    }

    AquireItem(){
        this.aquired = true;
    }

    GetItemsForNextLevelUp(){
        return this.UpgradeItemsList[upgradeLevel];
    }

    PrintUpgradeList(){
        for (var i = this.UpgradeItemsList.length - 1; i >= 0; i--) {
            var currentItem = this.UpgradeItemsList[i];
            console.log('itemName:' + currentItem.ItemName + ' #Obtained:' + currentItem.quantityObtained + " #Required" + currentItem.quantityRequired )
        }
    }

    PrintItem(){
        console.log('Name:' + this.Name + 
            ' aquired:' + this.Aquired + 
            ' ClothingType:' + this.ClothingType);
    }
}


// change the upgrade array to an array of item objects
class Item{
    ItemName = "";
    quantityRequired = 1;
    quantityObtained = 0;
    Aquired = false;

    constructor(quantityRequired,itemName){
        this.quantityRequired = quantityRequired; // number of items required
        this.ItemName = itemName;
    }
}


class ShoppingList{
    shoppingList = [];

    ChangeQuantityOfItem(inputItem,quantityChangeNumber){
        // loop through shopping list and change the quantity of that item
        // would do something like this pseudo code
        /*
            for each item in shoppingList{
                if (item matches inputItem){
                    shoppingList[item].quantityObtained += quantityChangeNumber
                }
            }
        */
    }

}

const clothingType = Object.freeze({
  unassigned: 0,
  head: 1,
  chest: 2,
  legs: 3,
  accessory: 4,
});

function Tests(){
    const upgradeItem1 = new Item(5,"upgradeItem1");
    const upgradeItem2 = new Item(5,"upgradeItem2");
    const upgradeItem3 = new Item(5,"upgradeItem3");
    const upgradeList = [upgradeItem1,upgradeItem2,upgradeItem3];
    const testHelm = new ClothingItem(upgradeList,"TestHelmet", clothingType.head);
   
    testHelm.PrintItem();
    testHelm.PrintUpgradeList();
}