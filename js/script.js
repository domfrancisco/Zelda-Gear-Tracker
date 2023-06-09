//declare Enhancements shoping list that gets updated throughout the code
var shoppingList = [];
//declare Acquired Garment list that gets updated throughout the code
var acquiredGarmentCollection = [];
//variable used to sort garment order
const orderReferenceList = [];
        //List is created from clothing constant
        for (const item of clothing) {
            const { set, head, legs, body, garment } = item;
            orderReferenceList.push({ set, head, legs, body, garment });
        }
//const orderReferenceList = clothing.map(item => ({ 
//    set: item.set, head: item.head, legs: item.legs, body: item.body, garment: item.garment 
//}));
//Declare the starting active tab
var activeTab = 'cotureCollection';

//Steps for switching tabs
    function switchTab(tabToActivate) {
        var elements = document.getElementsByClassName('tab');
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove('active-tab');
        }
        var activeElement = document.getElementById(tabToActivate);
        activeElement.classList.add('active-tab');
        var panels = document.getElementsByTagName('panel');
        for (var i = 0; i < panels.length; i++) {
            panels[i].style.display = 'none';
        }
        var newPanelId = tabToActivate.replace(/Tab$/, '')
        var newPanel = document.getElementById(newPanelId);
        newPanel.style.display = 'block';
        activeTab = newPanelId;
    }

//Page load steps
    function onPageLoad() {
        const savedData = localStorage.getItem("ZeldaTOTKGearTrackerByAdamFData");
        makeCoturePanel();
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            loadData(parsedData);
        }
        const activeTabElement = document.getElementById(activeTab);
        activeTabElement.style.display = 'block';
    }

//Create the Coture Collection from the clothes constant
    function makeCoturePanel() {
        const container = document.getElementById('cotureCollectionContainer');
        // Create a Set to store unique set names
        //make a list of each set
        const uniqueSets = new Set(clothingSets.filter(item => item.hasOwnProperty('setName') && item.setName !== null).map(item => item.setName));

        //make a header with link for each set that toggles the garment visibility
        uniqueSets.forEach((uniqueSetName) => {
            const div = document.createElement('div');
            const heading = document.createElement('h2');
            heading.textContent = uniqueSetName;
            const text = document.createElement('p');
            text.id = removeSpaces(uniqueSetName) + 'SetItems';
            text.style.display = 'none';
            div.classList.add('armor-panel');
            // Assign onclick property to the header
            heading.onclick = function() {
                const textElement = document.getElementById(removeSpaces(uniqueSetName) + 'SetPieces');
                textElement.style.display = (textElement.style.display === 'none') ? 'block' : 'none';
            };
            // Assign unique id to the text element so we can reference it for the garments
            text.id = removeSpaces(uniqueSetName) + 'SetPieces';
            div.appendChild(heading);
            div.appendChild(text);
            container.appendChild(div);
            //add the garment icons into the new container
            var setItems = makeSetItems(uniqueSetName);
            makeSetIcons(uniqueSetName, setItems);
        });
        //Now we need the garments without sets or headers
        const nullSetGarments = [];
        for (const entry of clothingSets) {
            if (entry.setName === null) {
                const { set, head, legs, body, garment, upgrade } = entry;
                // Create an instance of clothingSet and add it to the clothingSets array
                const clothingSetInstance = new clothingSet(set, head, legs, body, garment, upgrade);
                nullSetGarments.push(clothingSetInstance);
            }
        }
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const heading2 = document.createElement('h2');
        const hr = document.createElement('hr');
        div2.classList.add('armor-panel');
        div2.id = 'OtherGarments';
        div3.id = 'OtherGarmentContainer';
        hr.classList.add('hr2');
        heading2.textContent = "Other Garments";
        div2.appendChild(heading2);
        div2.appendChild(hr);
        div2.appendChild(div3);
        container.appendChild(div2);
        var container2 = document.getElementById('OtherGarmentContainer')
        //Put the orphaned garments at the bottom of the list
        var i = 0;
        nullSetGarments.forEach((item, index) => {
            createParagraph(item, item.garment, 'garment', container2);
        });
    }

//create a data object of each set's individual garments
    function makeSetItems(setName) {
        for (let i = 0; i < clothingSets.length; i++) {
            if (clothingSets[i].setName === setName) {
                return {
                    head: clothingSets[i].head,
                    legs: clothingSets[i].legs,
                    body: clothingSets[i].body
                };
            }
        }
    }

//Construct the group of garments that make up a Gear Set
    function makeSetIcons(setName, setItems) {
        const resultContainer = document.getElementById(removeSpaces(setName) + 'SetPieces');
        const hr = document.createElement('hr');
        hr.classList.add("hr2");
        resultContainer.appendChild(hr);
        resultContainer.classList.add("set-icons");
        createParagraph(setItems, setItems.head, 'head', resultContainer);
        createParagraph(setItems, setItems.legs, 'legs', resultContainer);
        createParagraph(setItems, setItems.body, 'body', resultContainer);
    }

//Common function to create the Enhancement Tracker <p> tags
    function createParagraph(setItems, text, garment, resultContainer) {
        const image = document.createElement("img");
        var imageUrl = "./images/armoricons/" + makeArmorIconName(text);
        image.src = imageUrl;
        image.id = removeSpaces(text) + "Icon";
        image.classList.add("p-level-0");
        const paragraph = document.createElement("p");
        paragraph.id =  (setItems[garment] === null) ? "EnhancementTracker" : removeSpaces(setItems[garment]) + "EnhancementTracker";
        paragraph.setAttribute('enhancementlevel', '0');
        paragraph.textContent = text;
        const stars = document.createElement("div");
        stars.className = "star-container";
        const fullStar = [];
        for (var i = 1; i < 5; i++) {
            fullStar[i] = document.createElement("img");
            fullStar[i].src = "./images/star-solid.svg";
            fullStar[i].id = removeSpaces(setItems[garment]) + "Star" + i;
            fullStar[i].className = "star";
            stars.appendChild(fullStar[i]);
        }
        const blankStar = document.createElement("img");
        blankStar.src = "./images/star-outline.svg";
        blankStar.className = "star-outline";
        stars.appendChild(blankStar);
        const wrapper = document.createElement("div");
        wrapper.onclick = function() {
            cycleELevel(paragraph, setItems, garment);
        };
        wrapper.classList.add("icon-wrapper");
        wrapper.id = removeSpaces(setItems[garment]) + "IconWrapper"
        wrapper.appendChild(image);
        wrapper.appendChild(stars);
        wrapper.appendChild(paragraph);
        resultContainer.appendChild(wrapper)
    }

//Function to handle cycleing Enhancement Level on the Coture Collection
function cycleELevel(pVar, setItems, garment) {
        //cycle to the next enhancement level
        eLevel = nextIndexReference(pVar.id);
        var eLevel = pVar.getAttribute('enhancementLevel');
        const icon = document.getElementById(removeSpaces(setItems[garment]) + "Icon");
        const iconWrapper = document.getElementById(removeSpaces(setItems[garment]) + "IconWrapper");
        //update all the panels with the new data
        updateTrackedItems(setItems[garment], eLevel);
        //update the icon style too
        iconWrapper.classList.add("icon-wrapper-preview");
        if (eLevel == 5 || eLevel == 0) {
            iconWrapper.className = "icon-wrapper";
        }
        if (icon) {
            icon.className = (eLevel == 0) ? "p-level-0": "p-level-1";
        }
        storeNameAndNumber(setItems[garment], eLevel);
    }

//Advance the Enhancement Level Div Attribute and reset to 0 after 5
    function nextIndexReference(attributeId) {
        const garmentDiv = document.getElementById(attributeId);
        let enhancementLevel = parseInt(garmentDiv.getAttribute('enhancementlevel'));
        // Increment the enhancementLevel
        enhancementLevel = (enhancementLevel + 1) % 6;
        // Update the orderNumber attribute
        garmentDiv.setAttribute('enhancementlevel', enhancementLevel.toString());
        return enhancementLevel
    }

//Update the two panels that track upgrade item requirements
    function updateTrackedItems(name, level) {
        //gather the item data
        if (level > 0 && level < 6) {
            const star = document.getElementById(removeSpaces(name) + "Star" + (level - 1));
            if (star) {
                star.style = "display: inline;";
            }
        }
        if (level == 0) {
            for (var i = 1; i < 5; i++) {
                const star = document.getElementById(removeSpaces(name) + "Star" + i);
                star.style = "display: none;";
            }
        }
        const itemsToRemoveFromList = findUpgrades(name, level - 1)
        var garmentProperties = [];
        var itemsToAddToList = [];
        if (level < 5 && level > 0) {
            itemsToAddToList = findUpgrades(name, level)
            garmentProperties = {
                garment: name,
                requires: itemsToAddToList
            }
        }
        if (level == 5) {
            acquiredGarmentCollection = acquiredGarmentCollection.filter(item => item.garment !== name);
        }
        // Find the index of the member array with the same garment as the target
        const index = acquiredGarmentCollection.findIndex(arr => arr.garment === garmentProperties.garment);
        if (index !== -1) {
            // Remove the member array from the data object
            acquiredGarmentCollection.splice(index, 1);
        }
        // Add the new target array to the data object
        acquiredGarmentCollection.push(garmentProperties);
        makeEnhancementItemsPanel();
        if (itemsToRemoveFromList) {
            shoppingList = removeItems(shoppingList, itemsToRemoveFromList);
            itemsToRemoveFromList.splice(0, itemsToRemoveFromList.length);
        }
        if (itemsToAddToList) {
            shoppingList = combineDataSets(itemsToAddToList, shoppingList);
        }
        alphabetizeDataset(shoppingList);
        createItemList(shoppingList);
    }

//Find the needed upgrade items based on garment name and level
    function findUpgrades(inputString, inputNumber) { 
        inputNumber = inputNumber - 1;
        if (inputNumber > -1 && inputNumber < 4) {
            const item = 
                clothingSets.find(
                    item => 
                        item.set === inputString  ||
                        item.head === inputString ||
                        item.legs === inputString ||
                        item.body === inputString || 
                        item.garment === inputString
                );
            if (item && item.upgrade && inputNumber < item.upgrade.length) {
                return item.upgrade[inputNumber];
            }
            return [];
        }
    }

//Create the Enhancement Items panel from the Garment List
    function makeEnhancementItemsPanel() {
        //put the list in the right order
        while (enhancementItemsContainer.firstChild) {
            enhancementItemsContainer.removeChild(enhancementItemsContainer.firstChild);
        }
        var reorderedDataset = [...acquiredGarmentCollection];
        var errorElement = document.getElementById("enhancementItemsError");
        if (reorderedDataset.length > 0 && acquiredGarmentCollection[acquiredGarmentCollection.length - 1].length === 0) {
            reorderedDataset.pop(); // Remove the last empty item if no more garments
        }
        for (let i = reorderedDataset.length - 1; i >= 0; i--) {
            if (reorderedDataset[i].length === 0) {
                reorderedDataset.splice(i, 1); //Remove empty items
            }
        }
        if (reorderedDataset.length > 0) {
            acquiredGarmentCollection = reorderStrings(orderReferenceList, reorderedDataset);
            // Create a container element for the data
            const container = document.getElementById('enhancementItemsContainer');
            //remove all garments before re-generating the list
            const list = document.createElement("div");
            // Loop through each item in the data object
            for (const item of acquiredGarmentCollection) {
                // Create a div element for each item
                const div = document.createElement("div");
                // Create a heading element for the garment
                const heading = document.createElement("h2");
                heading.onclick = function() {
                    var identifier = removeSpaces(item.garment) + "EnhancementTracker";
                    var paragraph = document.getElementById(identifier);
                    nextIndexReference(identifier);
                    var eLevel = paragraph.getAttribute("enhancementlevel");
                    updateTrackedItems(heading.textContent, eLevel);
                };
                hedingIcon = document.createElement('img');
                var imageUrl = "./images/armoricons/" + makeArmorIconName(item.garment);
                hedingIcon.src = imageUrl;
                hedingIcon.id = removeSpaces(item.garment) + "EnhancementIcon";
                var garmentName = document.createElement('span');
                garmentName.textContent = item.garment;
                heading.appendChild(hedingIcon);
                heading.appendChild(garmentName);
                // Create a ul element for the requirements
                const ul = document.createElement("ul");
                // Loop through each requirement in the item
                if (item.requires) {
                    for (const requirement of item.requires) {
                        // Create a li element for each requirement
                        const li = document.createElement("li");
                        const span = document.createElement('p');
                        const image = document.createElement("img");
                        var imageUrl = "./images/materialicons/" + removeSpaces(requirement.item) + ".png";
                        image.src = imageUrl;
                        span.textContent = `${requirement.item} x${requirement.num}`;
                        // Append the li element to the ul
                        li.appendChild(image);
                        li.appendChild(span);
                        ul.appendChild(li);
                    }    
                }
                // Append the heading and ul elements to the div
                div.appendChild(heading);
                hr2 = document.createElement('hr');
                hr2.classList.add('hr2');
                div.appendChild(hr2);
                div.appendChild(ul);
                // Append the div to the container
                list.appendChild(div);
            }
            // Append the container to the body of the web page
            container.appendChild(list);
            errorElement.style.display = "none";
        } else {
            errorElement.style.display = "block";
        }
    }

//Create the list of total items needed
    function createItemList(items) {
        const container = document.getElementById("shoppingListContainer");
        var errorElement = document.getElementById("shoppingListError");
        errorElement.style.display = "none";
        while (shoppingListContainer.firstChild) {
            shoppingListContainer.removeChild(shoppingListContainer.firstChild);
        }
        const ul = document.createElement('ul');
        if (shoppingList.length == 0) {
            errorElement.style.display = "block";
        } else {
            items.forEach(item => {
                const li = document.createElement('li');
                const image = document.createElement("img");
                const p = document.createElement('p');
                var imageUrl = "./images/materialicons/" + removeSpaces(item.item) + ".png";
                image.src = imageUrl;
                p.textContent = `${item.item} x${item.num}`;
                li.appendChild(image);
                li.appendChild(p)
                ul.appendChild(li);
            });
            }
        container.appendChild(ul);
    }

//Combine the Items to Add into the Total Items list
    function combineDataSets(dataSet1, dataSet2) {
        const combinedDataSet = {};
        // Combine dataSet1
        for (const obj of dataSet1) {
            const { num, item } = obj;
            if (combinedDataSet.hasOwnProperty(item)) {
                combinedDataSet[item].num += num;
            } else {
                combinedDataSet[item] = { num };
            }
        }
        // Combine dataSet2
        for (const obj of dataSet2) {
            const { num, item } = obj;
            if (combinedDataSet.hasOwnProperty(item)) {
                combinedDataSet[item].num += num;
            } else {
                combinedDataSet[item] = { num };
            }
        }
        // Convert combinedDataSet into an array
        const result = [];
        for (const item in combinedDataSet) {
            result.push({ item, num: combinedDataSet[item].num });
        }
        return result;
    }

//Remove items from the shopping list after we've marked a garment as upgraded
    function removeItems(dataSet, itemsToRemove) {
        const filteredDataSet = dataSet.filter((item) => {
            const foundItem = itemsToRemove.find((removeItem) => removeItem.item === item.item);
            if (foundItem) {
                item.num -= foundItem.num;
                return item.num > 0;
            }
            return true;
        });
        return filteredDataSet;
    }

//Alphebetization function
    function alphabetizeDataset(dataset) {
        return dataset.sort((a, b) => {
            const itemA = a.item.toLowerCase();
            const itemB = b.item.toLowerCase();
            if (itemA < itemB) {
                return -1;
            }
            if (itemA > itemB) {
                return 1;
            }
            return 0;
        });
    }

//Strip spaces from a string to turn it into a variable name
    function removeSpaces(str) {
        if (str == '' || str==null || str==undefined) return '';
        return str.replace(/\s/g, '');
    }

//create the file name for armor icons
    function makeArmorIconName(inputText) {
        // Replace spaces with dashes
        //inputText = inputText;
        let formattedText = inputText.replace(/ /g, '-');
        // Convert all letters to lowercase
        formattedText = formattedText.toLowerCase();
        // Make the first letter uppercase
        formattedText = formattedText.charAt(0).toUpperCase() + formattedText.slice(1) + ".png";
        return formattedText;
      }

//trying to create saved data
var saveData = {
    saveGarments: []
};
  
function storeNameAndNumber(name, number) {
    const existingIndex = saveData.saveGarments.findIndex(item => item.name === name);

    if (existingIndex !== -1) {
        // Replace existing number
        saveData.saveGarments[existingIndex].number = number;
    } else {
        // Add new name and number
        saveData.saveGarments.push({ name, number });
    }
    localStorage.setItem("ZeldaTOTKGearTrackerByAdamFData", JSON.stringify(saveData));
}

//trying to load that saved data
function loadData(parsedData) {
    saveData = parsedData;
    if (saveData) {
        for (let i = 0; i < saveData.saveGarments.length; i++) {
            var number = saveData.saveGarments[i].number;
            var name = saveData.saveGarments[i].name;
            //update all the panels with the new data
            updateTrackedItems(name, number);
            const icon = document.getElementById(removeSpaces(name) + "Icon");
            const iconWrapper = document.getElementById(removeSpaces(name) + "IconWrapper");
            const eLevelTracker = document.getElementById(removeSpaces(name) + 'EnhancementTracker');
            eLevelTracker.setAttribute('enhancementlevel', number);
            //update the icon style too
            iconWrapper.classList.add("icon-wrapper-preview");
            if (number == 5 || number == 0) {
                iconWrapper.className = "icon-wrapper";
            }
            if (icon) {
                icon.className = (number == 0) ? "p-level-0": "p-level-1";
            }
            if (number < 5 || number > 1) {
                for (let j = 1; j <= number; j ++) {
                    const starElement = document.getElementById(removeSpaces(name) + 'Star' + j);
                    starElement.style.display = 'inline';
                }
            }
        }
    } else {
        return;
    }
}

//menu toggle
function toggleMenu() {
    const menuDiv = document.getElementById("menuPanel");
    if (menuDiv.style.display === "none") {
        menuDiv.style.display = "block";
    } else {
        menuDiv.style.display = "none";
    }
}

//reset to a fresh state
function resetData() {
    //all the web elements that need to be reset and their default value
    const elements = [
        { id: "enhancementItemsTab", className: "tab" },
        { id: "enhancementItems", style: { display: "none" } },
        { id: "enhancementItemsContainer", removeAllChildNodes: true },
        { id: "enhancementItemsError", style: { display: "block" } },
        { id: "shoppingListTab", className: "tab" },
        { id: "shoppingList", style: { display: "none" } },
        { id: "shoppingListContainer", removeAllChildNodes: true },
        { id: "shoppingListError", style: { display: "block" } },
        { id: "cotureCollectionTab", className: "tab active-tab" },
        { id: "cotureCollection", style: { display: "block" } },
        { id: "cotureCollectionContainer", removeAllChildNodes: true }
    ];
    //loop through and set the default values
    elements.forEach(element => {
        const { id, className, style, removeAllChildNodes } = element;
        const resetThis = document.getElementById(id);
        if (className) {
            resetThis.className = className;
        }
        if (style) {
            Object.assign(resetThis.style, style);
        }
        if (removeAllChildNodes) {
            while (resetThis.firstChild) {
                resetThis.removeChild(resetThis.firstChild);
            }
        }
    });
    //reset to starting variables
    shoppingList.length = 0;
    acquiredGarmentCollection.length = 0;
    //reset to starting page state
    toggleMenu();
    switchTab('cotureCollectionTab');
    localStorage.removeItem('ZeldaTOTKGearTrackerByAdamFData');
    onPageLoad();
}

//Fixing Reordering the collection panel - Needed to flatten the reference data to make it work
function reorderStrings(orderedReferenceList, reorderedDataSet) {
    // Create a copy of reorderedDataSet
    const reorderedCopy = [...reorderedDataSet];
    orderedReferenceList = flattenObjectData(orderedReferenceList)
    // Sort the reorderedCopy based on the index of each string in orderedReferenceList
    reorderedCopy.sort((a, b) => {
      const indexA = orderedReferenceList.indexOf(a.garment);
      const indexB = orderedReferenceList.indexOf(b.garment);
      return indexA - indexB;
    });
  
    return reorderedCopy;
}

  function flattenObjectData(obj) {
    return Object.values(obj)
      .flatMap((entry) => Object.values(entry))
      .filter((value) => typeof value === 'string');
}