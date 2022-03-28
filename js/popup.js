$(() => {

    $("#lucky").click(() => {
        sendMessageToBot({actionType: 'pickRandomRestaurant'});
    });
});
