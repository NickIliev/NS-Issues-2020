import * as application from "tns-core-modules/application";
import { NavigationEntry, Frame, getViewById } from 'tns-core-modules/ui/frame';

import { Tabs, SelectedIndexChangedEventData } from 'tns-core-modules/ui/tabs';
import { TabStrip } from 'tns-core-modules/ui/tab-navigation-base/tab-strip';
import { TabStripItem } from 'tns-core-modules/ui/tab-navigation-base/tab-strip-item';
import { TabContentItem } from 'tns-core-modules/ui/tab-navigation-base/tab-content-item';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Label } from 'tns-core-modules/ui/label';
import { Button } from 'tns-core-modules/ui/button';
import { Page, Color } from 'tns-core-modules/ui/page';
import { EventData } from 'tns-core-modules/data/observable';
import { Image } from "tns-core-modules/ui/image/image";


let rootEntry: NavigationEntry;
rootEntry = {
  create: (() => {
    const outerPage: Page = new Page();

    const tabs = new Tabs();
    tabs.tabsPosition = "top";
    tabs.swipeEnabled = true;
    tabs.selectedIndex = 0;
    tabs.visibility = "visible";
    tabs.id = "tabs"
    


    let pages = [];
    let stack1 = new StackLayout();

    const button = new Button();
    button.text = "TAP to change iconSource";
    button.on("tap", (dataArgs: EventData): void => {
        console.log("TAP!!!!");

        let rootFrame = Frame.getFrameById("rootFrame");

        
        let tabs: Tabs = rootFrame.getViewById("tabs");
        let tabStripItem1: TabStripItem = tabs.tabStrip.items[0];
        console.log("TtabStripItem1: ", tabStripItem1);
        tabStripItem1.iconSource = "font://" + String.fromCharCode(0xe070); // NOT Working
        // tabStripItem1.iconSource = "res://icon"; // WORKIBNG
    });
    stack1.addChild(button);

    stack1.backgroundColor = 'red';
    let page1 = new Page();
    page1.content = stack1;
    pages.push(page1);
    // page1.content = stack1;
    let frame1 = new Frame();
    frame1.navigate({
      create: () => {
        return page1;
      },
    });

    let stack2 = new StackLayout();

    let page2 = new Page();
    page2.content = stack2;
    pages.push(page2);
    // page2.content = stack2;
    let frame2 = new Frame();
    frame2.navigate({
      create: () => {
        return page2;
      },
    });

    let stack3 = new StackLayout();
    let page3 = new Page();
    page3.content = stack3;
    pages.push(page3);
    // page3.content = stack3;
    let frame3 = new Frame();
    frame3.navigate({
      create: () => {
        return page3;
      },
    });

    let stack4 = new StackLayout();
    let page4 = new Page();
    page4.content = stack4;
    let frame4 = new Frame();
    frame4.navigate({
      create: () => {
        return page4;
      },
    });

    tabs.on('selectedIndexChanged', (dataArgs: SelectedIndexChangedEventData): void => {

    });

    let tabStrip = new TabStrip();

    let items = [];
    let tabStripItem = new TabStripItem();
    tabStripItem.iconSource = "font://" + String.fromCharCode(0xe070); // not Workinmg
    // tabStripItem.iconSource = "res://icon"; // WORKING
    // tabStripItem.label = new Label();
    tabStripItem.title = 'Tab 1';
    tabStripItem.id = "TestDynamicChangeTab";
    items.push(tabStripItem);

    let tabStripItem2 = new TabStripItem();
    tabStripItem2.id = 'ControlTabStyle';
    tabStripItem2.image = new Image();
    tabStripItem2.image.src = 'res://icon';
    // tabStripItem2.image.className = 'fasap';
    // tabStripItem2.image.src = 'font://' + String.fromCharCode(0xe070);
    tabStripItem2.label = new Label();
    tabStripItem2.label.text = 'Tab 2';
    items.push(tabStripItem2);

    let tabStripItem3 = new TabStripItem();
    tabStripItem3.image = new Image();
    tabStripItem3.image.src = 'res://icon';
    // tabStripItem3.image = new Image();
    // tabStripItem3.image.className = 'fasap';
    // tabStripItem3.image.src = 'font://' + String.fromCharCode(0xe070);
    tabStripItem3.label = new Label();
    tabStripItem3.label.text = 'Tab 3';
    tabStripItem3.className = 'TabItemStyle';
    items.push(tabStripItem3);

    let tabStripItem4 = new TabStripItem();
    // tabStripItem4.image = new Image();
    // tabStripItem4.image.src = 'res://icon';
    tabStripItem4.image = new Image();
    tabStripItem4.image.className = 'fasap'; 
    tabStripItem4.image.src = 'font://' + String.fromCharCode(0xe070); // Working
    tabStripItem4.label = new Label();
    tabStripItem4.label.text = 'Tab 3';
    tabStripItem4.className = 'TabItemStyle';
    items.push(tabStripItem4);

    tabStrip.items = items;
    tabs.tabStrip = tabStrip;

    let contentItems = [];
    let tabContentItem = new TabContentItem();
    tabContentItem.content = frame1;
    contentItems.push(tabContentItem);
    tabContentItem = new TabContentItem();
    tabContentItem.content = frame2;
    contentItems.push(tabContentItem);
    tabContentItem = new TabContentItem();
    tabContentItem.content = frame3;
    contentItems.push(tabContentItem);
    tabContentItem = new TabContentItem();
    tabContentItem.content = frame4;
    contentItems.push(tabContentItem);
    tabs.items = contentItems;

    outerPage.actionBar.title = 'Outer Page';
    let outerStackLayout = new StackLayout();
    outerStackLayout.marginTop = 100;
    outerStackLayout.addChild(tabs);
    outerPage.content = outerStackLayout;


    let navEntry: NavigationEntry;
    navEntry = {
      create: (() => { return outerPage; })
    };

    const frame = new Frame();
    frame.id = "rootFrame";
    frame.navigate(navEntry);
    return frame;
  })
};

application.run(rootEntry);


/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
