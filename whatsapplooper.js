//Use the console with web.whatsapp.com opened
//select the person's chat screen
//Run the code. 
//Shout out to this http://stackoverflow.com/a/39165137/1249001
var intervalID = setInterval(function () {
function findReactComponent(dom) {
    for (var key in dom)
        if (key.startsWith("__reactInternalInstance$")) {
            var compInternals = dom[key]._currentElement;
            var compWrapper = compInternals._owner;
            var comp = compWrapper._instance;
            return comp;
        }
    return null;
};
var inputComponent = findReactComponent(document.getElementsByClassName('block-compose')[0]); // get the react component for the chat input
var chat = inputComponent.props.chat;


chat.sendMessage('I love you every second baby!!....by grandfather')// LOL! Bet She will be impressed af!
}, 1000); //Just remove the time interval to remove the loop process.
