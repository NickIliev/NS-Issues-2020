

import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {

    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    let uiView = new UIView(null); // passing null for testing purposses only

    let targetSize = null; //should be of type CGSize
    let horizontalFittingPriority = 0; // number
    let verticalFittingPriority = 0; // number
    uiView.systemLayoutSizeFittingSizeWithHorizontalFittingPriorityVerticalFittingPriority(targetSize, horizontalFittingPriority, verticalFittingPriority)

}
