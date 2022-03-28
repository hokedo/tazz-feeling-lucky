const extensionActions = {
    pickRandomRestaurant() {
        restaurants = document.querySelectorAll(".store-card:not(.store-card-closed)");
        chosen_restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
        chosen_restaurant.style.backgroundColor = 'red';
        chosen_restaurant.scrollIntoView(false);
    }
};

listenForMessage(
    async (request, sender, sendResponse) => {
        if (extensionActions.hasOwnProperty(request.actionType)) {
            extensionActions[request.actionType](request, sender, sendResponse)
        } else {
            console.error(`No action found: ${request.actionType}`)
        }
        sendResponse({});
    }
);