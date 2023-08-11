﻿// IEFE
(() => {
    // state variables
    let toDoListArray = [];
    // ui variables
    const form = document.querySelector(".form");
    const input = form.querySelector(".form__input");
    const ul = document.querySelector(".toDoList");

    // event listeners
    form.addEventListener('submit', e => {
        // prevent default behaviour - Page reload
        e.preventDefault();

        let add = {
            ToDoListItem: input.value

        }
        $.ajax({
            type: "post",
            url: "/ToDoList/Create",
            data: add,
            success: function (result) {


                let itemId = result.id;
                let toDoItem = result.toDoListItem
                addItemToDOM(itemId, toDoItem);
                addItemToArray(itemId, toDoItem);
                // clear the input box. (this is default behaviour but we got rid of that)
                input.value = '';

            }
        });



    });

    ul.addEventListener('click', e => {
        let id = e.target.getAttribute('data-id');
        if (!id) return // user clicked in something else
        //pass id through to functions
        removeItemFromDOM(id);
        removeItemFromArray(id);
        deleteItemWithAjax(id);
    });

    // functions 
    function addItemToDOM(itemId, toDoItem) {
        // create an li
        const li = document.createElement('li');
        li.setAttribute("data-id", itemId);
        // add toDoItem text to li
        li.innerText = toDoItem;
        // add li to the DOM
        ul.appendChild(li);


        li.addEventListener("click", e => {
            let id = e.target.getAttribute("data-id");
            if (id) {
                deleteItemWithAjax(id);
            }
        });
        ul.appendChild(li);
    }
    function deleteItemWithAjax(itemId) {
        $.ajax({
            type: "post",
            url: "/ToDoList/Delete", // Change this to the appropriate server endpoint for deleting items
            data: { id: itemId }, // Pass the itemId as data to the server
            success: function (result) {
                if (result.success) {
                    // If the server indicates that the deletion was successful, remove the item from the DOM and the array
                    removeItemFromDOM(itemId);
                    removeItemFromArray(itemId);

                } else {
                    // If the server indicates an error, handle it appropriately (e.g., show an error message)
                    alert("Silme iþlemi baþarýsýz oldu.");
                }
            },

        });
    }

    function addItemToArray(itemId, toDoItem) {
        // add item to array as an object with an ID so we can find and delete it later
        toDoListArray.push({ itemId, toDoItem });
        console.log(toDoListArray)
    }

    function removeItemFromDOM(id) {
        // get the list item by data ID
        var li = document.querySelector('[data-id="' + id + '"]');
        //remove list item
        ul.removeChild(li);
    }

    function removeItemFromArray(id) {
        // create a new toDoListArray with all li's that don't match the ID
        toDoListArray = toDoListArray.filter(item => item.itemId !== id);
        console.log(toDoListArray);
    }

})();