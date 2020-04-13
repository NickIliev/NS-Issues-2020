

import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Image } from "tns-core-modules/ui/image";
import { HelloWorldModel } from "./main-view-model";

export function navigatingTo(args: EventData) {

    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    let image = new Image();
    image.src = "res://icon";

    page.content = image;
}
