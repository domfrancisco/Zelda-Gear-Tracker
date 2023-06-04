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
class clothingItem {
    constructor(upgradeList,aquired){
        this.upgradeList = upgradeList;
        this.aquired = false;
        this.upgradeLevel = 0;
    }

    UpgradeItem(){
        this.upgradeLevel += 1;
    }

    AquireItem(){
        this.aquired = true;
    }

    GetItemsForNextLevelUp(){
        return this.upgradeList[upgradeLevel];
    }
}


// change the upgrade array to an array of item objects
class Item{
    constructor(quantityRequired,itemName){
        this.quantityRequired = quantity; // number of items required
        this.quantityObtained = 0; // number of items obtained
        this.itemName = itemName;
        this.aquired = false;
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