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

const clothing = [
    {
        set: "Hylian Suit",
        head: "Hylian Hood",
        legs: "Hylian Trousers",
        body: "Hylian Tunic",
        upgrade: [
            [
                { num: 5, item: "Bokoblin Horn" }
            ],
            [
                { num: 5, item: "Blue Bokoblin Horn" },
                { num: 3, item: "Bokoblin Fang" }
            ],
            [
                { num: 20, item: "Amber" },
                { num: 3, item: "Bokoblin Guts" },
                { num: 5, item: "Black Bokoblin Horn" }
            ],
            [
                { num: 30, item: "Amber" },
                { num: 5, item: "Bokoblin Guts" },
                { num: 5, item: "Silver Bokoblin Horn" }
            ]
        ]
    },
    {
        set: "Armor of the Wild",
        head: "Cap of the Wild",
        legs: "Trousers of the Wild",
        body: "Tunic of the Wild",
        upgrade: [
            [
                { num: 10, item: "Acorn" },
                { num: 2, item: "Farosh's Scale" }
            ],
            [
                { num: 5, item: "Courser Bee Honey" },
                { num: 2, item: "Farosh's Claw" }
            ],
            [
                { num: 3, item: "Energetic Rhino Beetle" },
                { num: 2, item: "Shard of Farosh's Fang" },
                { num: 5, item: "Shard of Farosh's Spike" }
            ],
            [
                { num: 3, item: "Star Fragment" },
                { num: 2, item: "Farosh's Horn" },
                { num: 10, item: "Shard of Farosh's Spike" }
            ]
        ]
    },
    {
        set: "Zora Armor",
        head: "Zora Helm",
        legs: "Zora Greaves",
        body: "Zora Armor",
        upgrade: [
            [
                { num: 3, item: "Lizalfos Horn" }
            ],
            [
                { num: 5, item: "Hyrule Bass" },
                { num: 5, item: "Lizalfos Talon" }
            ],
            [
                { num: 3, item: "Hearty Bass" },
                { num: 3, item: "Lizalfos Tail" },
                { num: 5, item: "Blue Lizalfos Horn" }
            ],
            [
                { num: 5, item: "Black Lizalfos Horn" },
                { num: 5, item: "Blue Lizalfos Tail" },
                { num: 20, item: "Opal" }
            ]
        ]
    },
    {
        set: "Desert Voe Suit",
        head: "Desert Voe Headband",
        legs: "Desert Voe Trousers",
        body: "Desert Voe Spaulder",
        upgrade: [
            [
                { num: 3, item: "White Chuchu Jelly" }
            ],
            [
                { num: 5, item: "White Chuchu Jelly" },
                { num: 3, item: "Cool Safflina" }
            ],
            [
                { num: 5, item: "Chillshroom" },
                { num: 5, item: "Ice Keese Wing" },
                { num: 3, item: "Ice Breath Lizalfos Tail" }
            ],
            [
                { num: 5, item: "Ice Breath Lizalfos Horn" },
                { num: 10, item: "Ice Breath Lizalfos Tail" },
                { num: 5, item: "Sapphire" }
            ]
        ]
    },
    {
        set: "Snowquill Suit",
        head: "Snowquill Headdress",
        legs: "Snowquill Trousers",
        body: "Snowquill Tunic",
        upgrade: [
            [
                { num: 3, item: "Red Chuchu Jelly" }
            ],
            [
                { num: 5, item: "Red Chuchu Jelly" },
                { num: 3, item: "Warm Safflina" }
            ],
            [
                { num: 5, item: "Sunshroom" },
                { num: 5, item: "Fire Keese Wing" },
                { num: 3, item: "Fire Breath Lizalfos Tail" }
            ],
            [
                { num: 5, item: "Ruby" },
                { num: 5, item: "Fire Breath Lizalfos Horn" },
                { num: 10, item: "Fire Breath Lizalfos Tail" }
            ]
        ]
    },
    {
        set: "Flamebreaker Suit",
        head: "Flamebreaker Helm",
        legs: "Flamebreaker Boots",
        body: "Flamebreaker Armor",
        upgrade: [
            [
                { num: 3, item: "Moblin Horn" }
            ],
            [
                { num: 5, item: "Moblin Fang" },
                { num: 5, item: "Fireproof Lizard" }
            ],
            [
                { num: 5, item: "Blue Moblin Horn" },
                { num: 15, item: "Flint" },
                { num: 3, item: "Smotherwing Butterfly" }
            ],
            [
                { num: 5, item: "Fire Breath Lizalfos Horn" },
                { num: 10, item: "Fire Breath Lizalfos Tail" },
                { num: 5, item: "Ruby" }
            ]
        ]
    },
    {
        set: "Stealth Armor",
        head: "Stealth Mask",
        legs: "Stealth Tights",
        body: "Stealth Chest Guard",
        upgrade: [
            [
                { num: 3, item: "Blue Nightshade" }
            ],
            [
                { num: 5, item: "Sunset Firefly" },
                { num: 5, item: "Blue Nightshade" }
            ],
            [
                { num: 8, item: "Silent Shroom" },
                { num: 5, item: "Sneaky River Snail" }
            ],
            [
                { num: 10, item: "Sundelion" },
                { num: 10, item: "Stealthfin Trout" },
                { num: 5, item: "Silent Princess" }
            ]
        ]
    },
    {
        set: "Climber's Outfit",
        head: "Climber's Bandanna",
        legs: "Climbing Boots",
        body: "Climbing Gear",
        upgrade: [
            [
                { num: 3, item: "Keese Wing" },
                { num: 3, item: "Rushroom" }
            ],
            [
                { num: 5, item: "Electric Keese Wing" },
                { num: 5, item: "Hightail Lizard" }
            ],
            [
                { num: 10, item: "Hot-Footed Frog" },
                { num: 8, item: "Ice Keese Wing" }
            ],
            [
                { num: 20, item: "Swift Violet" },
                { num: 10, item: "Fire Keese Wing" }
            ]
        ]
    },
    {
        set: "Radiant Armor",
        head: "Radiant Mask",
        legs: "Radiant Tights",
        body: "Radiant Shirt",
        upgrade: [
            [
                { num: 10, item: "Luminous Stone" },
                { num: 1, item: "Bokoblin Guts" }
            ],
            [
                { num: 15, item: "Luminous Stone" },
                { num: 2, item: "Moblin Guts" }
            ],
            [
                { num: 20, item: "Luminous Stone" },
                { num: 3, item: "Horriblin Guts" },
                { num: 10, item: "Gibdo Bone" }
            ],
            [
                { num: 30, item: "Luminous Stone" },
                { num: 3, item: "Lynel Guts" },
                { num: 3, item: "Molduga Jaw" }
            ]
        ]
    },
    {
        set: "Soldier's Armor",
        head: "Soldier's Helm",
        legs: "Soldier's Greaves",
        body: "Soldier's Armor",
        upgrade: [
            [
                { num: 5, item: "Chuchu Jelly" },
                { num: 3, item: "Bokoblin Guts" }
            ],
            [
                { num: 5, item: "Keese Eyeball" },
                { num: 3, item: "Moblin Guts" }
            ],
            [
                { num: 30, item: "Flint" },
                { num: 3, item: "Lizalfos Tail" },
                { num: 3, item: "Hinox Guts" }
            ],
            [
                { num: 5, item: "Lynel Hoof" },
                { num: 5, item: "Lynel Guts" },
                { num: 30, item: "Amber" }
            ]
        ]
    },
    {
        set: "Rubber Suit",
        head: "Rubber Helm",
        legs: "Rubber Tights",
        body: "Rubber Armor",
        upgrade: [
            [
                { num: 3, item: "Yellow Chuchu Jelly" },
                { num: 1, item: "Electric Lizalfos Horn" }
            ],
            [
                { num: 8, item: "Yellow Chuchu Jelly" },
                { num: 5, item: "Voltfruit" }
            ],
            [
                { num: 5, item: "Zapshroom" },
                { num: 5, item: "Electric Lizalfos Tail" },
                { num: 8, item: "Electric Safflina" }
            ],
            [
                { num: 5, item: "Topaz" },
                { num: 5, item: "Electric Lizalfos Horn" },
                { num: 8, item: "Electric Lizalfos Tail" }
            ]
        ]
    },
    {
        set: "Barbarian Suit",
        head: "Barbarian Helm",
        legs: "Barbarian Leg Wraps",
        body: "Barbarian Armor",
        upgrade: [
            [
                { num: 3, item: "Mighty Thistle" }
            ],
            [
                { num: 5, item: "Razorshroom" },
                { num: 2, item: "Lynel Saber Horn" },
                { num: 2, item: "Lynel Mace Horn" }
            ],
            [
                { num: 3, item: "Blue Maned Lynel Saber Horn" },
                { num: 3, item: "Blue Maned Lynel Mace Horn" },
                { num: 3, item: "Razorclaw Crab" }
            ],
            [
                { num: 3, item: "White Maned Lynel Saber Horn" },
                { num: 3, item: "White Maned Lynel Mace Horn" },
                { num: 3, item: "Bladed Rhino Beetle" }
            ]
        ]
    },
    {
        set: "Glide Suit",
        head: "Glide Mask",
        legs: "Glide Tights",
        body: "Glide Shirt",
        upgrade: [
            [
                { num: 3, item: "Keese Wing" }
            ],
            [
                { num: 5, item: "Aerocuda Wing" },
                { num: 6, item: "Aerocuda Eyeball" }
            ],
            [
                { num: 6, item: "Aerocuda Wing" },
                { num: 8, item: "Aerocuda Eyeball" }
            ],
            [
                { num: 10, item: "Aerocuda Wing" },
            {    num: 8, item: "Gibdo Wing" },
                { num: 12, item: "Gleeok Wing" }
            ]
        ]
    },
    {
        set: "Frog Suit",
        head: "Froggy Hood",
        legs: "Froggy Leggings",
        body: "Froggy Sleeve",
        upgrade: [
            [
                { num: 3, item: "Sticky Lizard" }
            ],
            [
                { num: 5, item: "Sticky Lizard" },
                { num: 5, item: "Horriblin Horn" }
            ],
            [
                { num: 5, item: "Blue Horriblin Horn" },
                { num: 5, item: "Sticky Frog" }
            ],
            [
                { num: 5, item: "Black Horriblin Horn" },
                { num: 10, item: "Horriblin Guts" },
                { num: 10, item: "Opal" }
            ]
        ]
    },
    {
        set: "Miner's Gear",
        head: "Miner's Mask",
        legs: "Miner's Trousers",
        body: "Miner's Top",
        upgrade: [
            [
                { num: 10, item: "Brightbloom Seed" }
            ],
            [
                { num: 20, item: "Brightbloom Seed" },
                { num: 5, item: "Brightcap" }
            ],
            [
                { num: 15, item: "Giant Brightbloom Seed" },
                { num: 10, item: "Deep Firefly" },
                { num: 5, item: "Glowing Cave Fish" }
            ],
            [
                { num: 20, item: "Giant Brightbloom Seed" },
                { num: 10, item: "Large Zonaite" },
                { num: 3, item: "Diamond" }
            ]
        ]
    },
    {
        set: "Ember Armor",
        head: "Ember Headdress",
        legs: "Ember Trousers",
        body: "Ember Shirt",
        upgrade: [
            [
                { num: 3, item: "Fire Fruit" }
            ],
            [
                { num: 5, item: "Fire Breath Lizalfos Horn" },
                { num: 5, item: "Summerwing Butterfly" }
            ],
            [
                { num: 5, item: "Fire Like Stone" },
                { num: 5, item: "Warm Darner" },
                { num: 5, item: "Large Zonai Charge" }
            ],
            [
                { num: 5, item: "Gleeok Flame Horn" },
                { num: 10, item: "Sizzlefin Trout" },
                { num: 10, item: "Large Zonai Charge" }
            ]
        ]
    },
    {
        set: "Charged Armor",
        head: "Charged Headdress",
        legs: "Charged Trousers",
        body: "Charged Shirt",
        upgrade: [
            [
                { num: 3, item: "Shock Fruit" }
            ],
            [
                { num: 3, item: "Thunderwing Butterfly" },
                { num: 5, item: "Electric Lizalfos Horn" }
            ],
            [
                { num: 5, item: "Shock Like Stone" },
                { num: 5, item: "Electric Darner" },
                { num: 3, item: "Large Zonai Charge" }
            ],
            [
                { num: 5, item: "Gleeok Thunder Horn" },
                { num: 10, item: "Voltfin Trout" },
                { num: 5, item: "Large Zonai Charge" }
            ]
        ]
    },
    {
        set: "Frostbite Armor",
        head: "Frostbite Headdress",
        legs: "Frostbite Trousers",
        body: "Frostbite Shirt",
        upgrade: [
            [
                { num: 3, item: "Ice Fruit" }
            ],
            [
                { num: 5, item: "Ice Breath Lizalfos Horn" },
                { num: 5, item: "Winterwing Butterfly" }
            ],
            [
                { num: 5, item: "Ice Like Stone" },
                { num: 5, item: "Cold Darner" },
                { num: 5, item: "Large Zonai Charge" }
            ],
            [
                { num: 5, item: "Gleeok Frost Horn" },
                { num: 10, item: "Chillfin Trout" },
                { num: 10, item: "Large Zonai Charge" }
            ]
        ]
    },
    {
        set: "Zonaite Armor",
        head: "Zonaite Helm",
        legs: "Zonaite Shin Guards",
        body: "Zonaite Waistguard",
        upgrade: [
            [
                { num: 5, item: "Soldier Construct Horn" }
            ],
            [
                { num: 5, item: "Soldier Construct II Horn" },
                { num: 5, item: "Zonaite" },
                { num: 5, item: "Captain Construct I Horn" }
            ],
            [
                { num: 5, item: "Large Zonaite" },
                { num: 5, item: "Captain Construct II Horn" },
                { num: 5, item: "Soldier Construct III Horn" }
            ],
            [
                { num: 10, item: "Large Zonaite" },
                { num: 5, item: "Captain Construct III Horn" },
                { num: 5, item: "Soldier Construct IV Horn" }
            ]
        ]
    },
    {
        set: "Armor of Awakening",
        head: "Mask of Awakening",
        legs: "Trousers of Awakening",
        body: "Tunic of Awakening",
        upgrade: [
            [
                { num: 10, item: "Luminous Stone" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 15, item: "Luminous Stone" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 20, item: "Luminous Stone" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 30, item: "Luminous Stone" },
                { num: 1, item: "Star Fragment" }
            ]
        ]
    },
    {
        set: "Armor of the Depths",
        head: "Hood of the Depths",
        legs: "Gaiters of the Depths",
        body: "Tunic of the Depths",
        upgrade: [
            [
                { num: 3, item: "Deep Firefly" }
            ],
            [
                { num: 5, item: "Dark Clump" },
                { num: 3, item: "Frox Fang" }
            ],
            [
                { num: 20, item: "Zonaite" },
                { num: 3, item: "Frox Fingernail" },
                { num: 3, item: "Obsidian Frox Fang" }
            ],
            [
                { num: 5, item: "Blue White Frox Fang" },
                { num: 10, item: "Large Zonaite" },
                { num: 3, item: "Frox Guts" }
            ]
        ]
    },
    {
        set: "Yiga Outfit",
        head: "Yiga Mask",
        legs: "Yiga Tights",
        body: "Yiga Armor",
        upgrade: [
          [
            { num: 2, item: "Octorok Eyeball" }
          ],
          [
            { num: 3, item: "Puffshroom" },
            { num: 3, item: "Fire Breath Lizalfos Tail" }
          ],
          [
            { num: 5, item: "Ice Breath Lizalfos Tail" },
            { num: 5, item: "Keese Eyeball" }
          ],
          [
            { num: 5, item: "Electric Lizalfos Tail" },
            { num: 3, item: "Black Hinox Horn" },
            { num: 10, item: "Mighty Bananas" }
          ]
        ]
    },
    {
        set: "Royal Guard Armor",
        head: "Royal Guard Cap",
        legs: "Royal Guard Boots",
        body: "Royal Guard Uniform",
        upgrade: [
            [
                { num: 3, item: "Bokoblin Guts" },
                { num: 3, item: "Boss Bokoblin Horn" }
            ],
            [
                { num: 3, item: "Blue Boss Bokoblin Horn" },
                { num: 3, item: "Boss Bokoblin Fang" }
            ],
            [
                { num: 3, item: "Black Boss Bokoblin Horn" },
                { num: 3, item: "Hinox Guts" }
            ],
            [
                { num: 3, item: "Silver Boss Bokoblin Horn" },
                { num: 3, item: "Molduga Guts" },
                { num: 3, item: "Gleeok Guts" }
            ]
        ]
    },
    {
        set: "Armor of Time",
        head: "Cap of Time",
        legs: "Trousers of Time",
        body: "Tunic of Time",
        upgrade: [
            [
                { num: 10, item: "Amber" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 20, item: "Amber" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 30, item: "Amber" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 40, item: "Amber" },
                { num: 1, item: "Star Fragment" }
            ]
        ]
    },
    {
        set: "Armor of the Wind",
        head: "Cap of the Wind",
        legs: "Trousers of the Wind",
        body: "Tunic of the Wind",
        upgrade: [
            [
                { num: 5, item: "Opal" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 10, item: "Opal" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 15, item: "Opal" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 25, item: "Opal" },
                { num: 1, item: "Star Fragment" }
            ]
        ]
    },
    {
        set: "Twilight Armor",
        head: "Cap of Twilight",
        legs: "Trousers of Twilight",
        body: "Tunic of Twilight",
        upgrade: [
            [
                { num: 1, item: "Topaz" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 4, item: "Topaz" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 6, item: "Topaz" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 10, item: "Topaz" },
                { num: 1, item: "Star Fragment" }
            ]
        ]
    },
    {
        set: "Armor of the Sky",
        head: "Cap of the Sky",
        legs: "Trousers of the Sky",
        body: "Tunic of the Sky",
        upgrade: [
            [
                { num: 1, item: "Sapphire" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 4, item: "Sapphire" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 6, item: "Sapphire" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 10, item: "Sapphire" },
                { num: 1, item: "Star Fragment" }
            ]
        ]
    },
    {
        set: "Fierce Deity Suit",
        head: "Fierce Deity Mask",
        legs: "Fierce Deity Boots",
        body: "Fierce Deity Armor",
        upgrade: [
            [
                { num: 5, item: "Hinox Toenail" },
                { num: 1, item: "Dinraal's Scale" }
            ],
            [
                { num: 5, item: "Hinox Tooth" },
                { num: 1, item: "Dinraal's Claw" }
            ],
            [
                { num: 2, item: "Hinox Guts" },
                { num: 1, item: "Shard of Dinraal's Fang" }
            ],
            [
                { num: 2, item: "Lynel Guts" },
                { num: 1, item: "Dinraal's Horn" }
            ]
        ]
    },
    {
        set: "Hero's Outfit",
        head: "Cap of the Hero",
        legs: "Trousers of the Hero",
        body: "Tunic of the Hero",
        upgrade: [
            [
                { num: 1, item: "Ruby" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 4, item: "Ruby" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 6, item: "Ruby" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 10, item: "Ruby" },
                { num: 1, item: "Star Fragment" }
            ]
        ]
    },
    {
        set: null,
        garment: "Diamond Circlet",
        upgrade: [
            [
                { num: 2, item: "Diamond" },
                { num: 3, item: "Flint" }
            ],
            [
                { num: 3, item: "Diamond" },
                { num: 5, item: "Flint" }
            ],
            [
                { num: 5, item: "Diamond" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 8, item: "Diamond" },
                { num: 2, item: "Star Fragment" }
            ]
          ]
    },
    {
        set: null,
        garment: "Ruby Circlet",
        upgrade: [
            [
                { num: 2, item: "Ruby" },
                { num: 3, item: "Flint" }
            ],
            [
                { num: 4, item: "Ruby" },
                { num: 5, item: "Flint" }
            ],
            [
                { num: 6, item: "Ruby" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 10, item: "Ruby" },
                { num: 2, item: "Star Fragment" }
            ]
        ]
    },
    {
        set: null,
        garment: "Sapphire Circlet",
        upgrade: [
            [
                { num: 2, item: "Sapphire" },
                { num: 3, item: "Flint" }
            ],
            [
                { num: 4, item: "Sapphire" },
                { num: 5, item: "Flint" }
            ],
            [
                { num: 6, item: "Sapphire" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 10, item: "Sapphire" },
                { num: 2, item: "Star Fragment" }
            ]
        ]
    },
    {
        set: null,
        garment: "Topaz Earrings",
        upgrade: [
            [
                { num: 2, item: "Topaz" },
                { num: 3, item: "Flint" }
            ],
            [
                { num: 4, item: "Topaz" },
                { num: 5, item: "Flint" }
            ],
            [
                { num: 6, item: "Topaz" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 10, item: "Topaz" },
                { num: 2, item: "Star Fragment" }
            ]
        ]
    },
    {
        set: null,
        garment: "Opal Earrings",
        upgrade: [
            [
                { num: 6, item: "Opal" },
                { num: 5, item: "Flint" }
            ],
            [
                { num: 4, item: "Opal" },
                { num: 5, item: "Flint" }
            ],
            [
                { num: 6, item: "Opal" },
                { num: 10, item: "Flint" }
            ],
            [
                { num: 10, item: "Opal" },
                { num: 15, item: "Flint" }
            ]
        ]
    },
    {
        set: null,
        garment: "Amber Earrings",
        upgrade: [
            [
                { num: 10, item: "Amber" },
                { num: 5, item: "Flint" }
            ],
            [
                { num: 20, item: "Amber" },
                { num: 5, item: "Flint" }
            ],
            [
                { num: 35, item: "Amber" },
                { num: 10, item: "Flint" }
            ],
            [
                { num: 60, item: "Amber" },
                { num: 15, item: "Flint" }
            ]
        ]
    },
    {
        set: null,
        garment: "Sand Boots",
        upgrade: [
            [
                { num: 3, item: "Hightail Lizard" }
            ],
            [
                { num: 20, item: "Gibdo Bone" },
                { num: 5, item: "Swift Carrot" }
            ],
            [
                { num: 5, item: "Gibdo Guts" },
                { num: 10, item: "Rushroom" },
                { num: 5, item: "Molduga Fin" }
            ],
            [
                { num: 5, item: "Molduga Guts" },
                { num: 10, item: "Swift Violet" },
                { num: 5, item: "Hearty Lizard" }
            ]
        ]
    },
    {
        set: null,
        garment: "Snow Boots",
        upgrade: [
            [
                { num: 3, item: "Hightail Lizard" }
            ],
            [
                { num: 5, item: "Octorok Tentacle" },
                { num: 5, item: "Swift Carrot" }
            ],
            [
                { num: 5, item: "Octo Balloon" },
                { num: 20, item: "Rushroom" }
            ],
            [
                { num: 2, item: "Naydra's Scale" },
                { num: 20, item: "Swift Violet" }
            ]
        ]
    },
    {
        set: null,
        garment: "Vah Medoh Divine Helm",
        upgrade: [
            [
                { num: 5, item: "Zonaite" },
                { num: 5, item: "Sapphire" }
            ],
            [
                { num: 10, item: "Zonaite" },
                { num: 10, item: "Sapphire" }
            ],
            [
                { num: 15, item: "Sapphire" },
                { num: 5, item: "Large Zonaite" },
                { num: 5, item: "Dazzlefruit" }
            ],
            [
                { num: 25, item: "Sapphire" },
                { num: 10, item: "Large Zonaite" },
                { num: 10, item: "Dazzlefruit" }
            ]
        ]
    },
    {
        set: null,
        garment: "Vah Rudania Divine Helm",
        upgrade: [
            [
                { num: 5, item: "Zonaite" },
                { num: 5, item: "Ruby" }
            ],
            [
                { num: 10, item: "Zonaite" },
                { num: 10, item: "Ruby" }
            ],
            [
                { num: 15, item: "Ruby" },
                { num: 5, item: "Large Zonaite" },
                { num: 5, item: "Dazzlefruit" }
            ],
            [
                { num: 25, item: "Ruby" },
                { num: 10, item: "Large Zonaite" },
                { num: 10, item: "Dazzlefruit" }
            ]
        ]
    },
    {
        set: null,
        garment: "Vah Naboris Divine Helm",
        upgrade: [
            [
                { num: 5, item: "Zonaite" },
                { num: 5, item: "Topaz" }
            ],
            [
                { num: 10, item: "Zonaite" },
                { num: 10, item: "Topaz" }
            ],
            [
                { num: 15, item: "Topaz" },
                { num: 5, item: "Large Zonaite" },
                { num: 5, item: "Dazzlefruit" }
            ],
            [
                { num: 25, item: "Topaz" },
                { num: 10, item: "Large Zonaite" },
                { num: 10, item: "Dazzlefruit" }
            ]
        ]
    },
    {
        set: null,
        garment: "Vah Ruta Divine Helm",
        upgrade: [
            [
                { num: 5, item: "Zonaite" },
                { num: 5, item: "Opal" }
            ],
            [
                { num: 10, item: "Zonaite" },
                { num: 10, item: "Opal" }
            ],
            [
                { num: 15, item: "Opal" },
                { num: 5, item: "Large Zonaite" },
                { num: 5, item: "Dazzlefruit" }
            ],
            [
                { num: 25, item: "Opal" },
                { num: 10, item: "Large Zonaite" },
                { num: 10, item: "Dazzlefruit" }
            ]
        ]
    },
    {
        set: null,
        garment: "Sheik's Mask",
        upgrade: [
            [
                { num: 1, item: "Silent Princess" },
                { num: 1, item: "Star Fragment" }
            ],
            [
                { num: 2, item: "Silent Princess" },
                { num: 2, item: "Star Fragment" }
            ],
            [
                { num: 4, item: "Silent Princess" },
                { num: 3, item: "Star Fragment" }
            ],
            [
                { num: 8, item: "Silent Princess" },
                { num: 4, item: "Star Fragment" }
            ]
        ]
    },
    {
        set: null,
        garment: "Ancient Hero's Aspect",
        upgrade: [
            [
                { num: 9, item: "Silver Bokoblin Horn" },
                { num: 9, item: "Hinox Guts" },
                { num: 15, item: "Zonaite" }
            ],
            [
                { num: 9, item: "Silver Moblin Horn" },
                { num: 9, item: "Frox Guts" },
                { num: 10, item: "Large Zonaite" }
            ],
            [
                { num: 9, item: "Silver Lizalfos Horn" },
                { num: 9, item: "Molduga Guts" },
                { num: 15, item: "Large Zonaite" }
            ],
            [
                { num: 9, item: "Silver Lynel Saber Horn" },
                { num: 9, item: "Silver Lynel Mace Horn" },
                { num: 9, item: "Gleeok Guts" }
            ]
        ]
    },
    {
        set: null,
        garment: "Champion's Tunic",
        upgrade: [
          [
            { num: 3, item: "Silent Princess" },
            { num: 2, item: "Light Dragon's Scale" }
          ],
          [
            { num: 3, item: "Silent Princess" },
            { num: 2, item: "Light Dragon's Talon" },
            { num: 10, item: "Sundelion" }
          ],
          [
            { num: 5, item: "Silent Princess" },
            { num: 2, item: "Shard of Light Dragon's Fang" },
            { num: 15, item: "Sundelion" }
          ],
          [
            { num: 10, item: "Silent Princess" },
            { num: 2, item: "Light Dragon's Horn" },
            { num: 20, item: "Sundelion" }
          ]
        ]
    },
    {
        set: null,
        garment: "Tunic of Memories",
        upgrade: [
            [
                { num: 3, item: "Silent Princess" },
                { num: 1, item: "Light Dragon's Scale" }
            ],
            [
                { num: 3, item: "Silent Princess" },
                { num: 1, item: "Light Dragon's Talon" },
                { num: 2, item: "Farosh's Horn" }
            ],
            [
                { num: 5, item: "Silent Princess" },
                { num: 1, item: "Shard of Light Dragon's Fang" },
                { num: 2, item: "Naydra's Horn" }
            ],
            [
                { num: 10, item: "Silent Princess" },
                { num: 1, item: "Light Dragon's Horn" },
                { num: 2, item: "Dinraal's Horn" }
            ]
        ]
    }
]