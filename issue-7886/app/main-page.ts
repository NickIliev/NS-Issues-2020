

import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { Frame, topmost } from "tns-core-modules/ui/frame";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function goToSubPage() {
    let frame = Frame.topmost();
    frame.navigate("sub-page");
}