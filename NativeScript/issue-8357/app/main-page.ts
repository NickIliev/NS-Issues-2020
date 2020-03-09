/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.addEventListener("readystatechange", reqReadyState); // <<--- this throws an error
    oReq.open("GET", "http://www.example.org/example.txt");
    oReq.send();
}


function reqListener() {
    console.log(this.responseText);
}

function reqReadyState() {
    /// DO STUFF
}

