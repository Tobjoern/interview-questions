

// the Type event is called when the user types something in the input field
// Create a debounce function that will call the onTypeEvent function only once every 200ms.
const onTypeEvent = (event: {
    content: string
}) => {

}


setInterval(() => {
    onTypeEvent({
        content: Math.random().toString()
    })
}, 200)
