
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Label } from "tns-core-modules/ui/label";
import { 
    Tabs, 
    TabContentItem, 
    TabStrip, 
    TabStripItem
} from "tns-core-modules/ui/tabs";

export function onLoaded(args: EventData) {

    const page = <Page>args.object;

    const tabs = createTabs();
    page.content = tabs;
}

function createTabs(): Tabs {
    let tabs = new Tabs();
    let myTabStrip = new TabStrip();

    let tabStripItem1 = new TabStripItem();
    tabStripItem1.title = "Tab 1";
    tabStripItem1.iconSource = `font://${String.fromCharCode(0xf053)}`;
    tabStripItem1.iconClass = "fas"; // e.g., Font Awesome
    let tabStripItem2 = new TabStripItem();
    tabStripItem2.title = "Tab 2";
    tabStripItem2.iconSource = `font://${String.fromCharCode(0xf070)}`;
    tabStripItem2.iconClass = "fas"; // e.g., Font Awesome

    myTabStrip.items = [tabStripItem1, tabStripItem2];

    let tabContentItem1 = new TabContentItem();
    tabContentItem1.content = createContent("Content 1");
    let tabContentItem2 = new TabContentItem();
    tabContentItem2.content = createContent("Content 2");

    let contentItems = [tabContentItem1, tabContentItem2];   

    tabs.tabStrip = myTabStrip;
    tabs.items = contentItems; // The number of content items must be equal to the number of strip items

    return tabs;
}

function  createContent(value: string) {
    let root = new StackLayout();
    let lbl = new Label();
    lbl.text = value;
    root.addChild(lbl);

    return root;
}