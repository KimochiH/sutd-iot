// var label_0, serverResponse_0;	// UI elements

function setup() {
    label_0 = createSpan("Pulse:");	// the label
    label_0.position(20,80);			// position it
    serverResponse_0 = createSpan();	// create a div for server responses
    serverResponse_0.position(label_0.width + 40, 80);	// position it
    label_1 = createSpan("Oxygen:");	// the label
    label_1.position(20,110);			// position it
    serverResponse_1 = createSpan();	// create a div for server responses
    serverResponse_1.position(label_1.width + 40, 110);	// position it
    label_2 = createSpan("Patient position:");	// the label
    label_2.position(20,140);			// position it
    serverResponse_2 = createSpan();	// create a div for server responses
    serverResponse_2.position(label_2.width + 40, 140);	// position it
    getData(3);			// make a request back to the server
}

// this function makes a call to the server:
function getData(channel) {
    httpGet('/device/' + channel, update);
}

// update the page when the server responds:
function update(data) {
    var arr = data.split(" ");
    serverResponse_0.html(arr[0]);		// put the response in the span
    serverResponse_1.html(arr[1]);
    serverResponse_2.html(arr[2]);
    // serverResponse_0.html(data);		// put the response in the span
    getData(3);						// make another call to the server
}
  		