import * as application from "tns-core-modules/application";
import { NavigationEntry, Frame } from 'tns-core-modules/ui/frame';
import { Tabs } from 'tns-core-modules/ui/tabs';
import { TabStrip } from 'tns-core-modules/ui/tab-navigation-base/tab-strip';
import { TabStripItem } from 'tns-core-modules/ui/tab-navigation-base/tab-strip-item';
import { TabContentItem } from 'tns-core-modules/ui/tab-navigation-base/tab-content-item';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Label } from 'tns-core-modules/ui/label';
import { Button } from 'tns-core-modules/ui/button';
import { Page } from 'tns-core-modules/ui/page';
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

    const button = new Button();
    button.text = "btn height=100";
    button.height = 100;
    button.backgroundColor = "yellow";
    const button2 = new Button();
    button2.text = "btn height=200";
    button2.height = 200;
    button2.backgroundColor = "yellow";
    const button3 = new Button();
    button3.text = "btn height = 300";
    button3.height = 300;
    button3.backgroundColor = "yellow";
    const button4 = new Button();
    button4.text = "btn height = 400";
    button4.height = 400;
    button4.backgroundColor = "yellow";
    
    let stack1 = new StackLayout();
    stack1.addChild(button);
    stack1.backgroundColor = 'red';
    let page1 = new Page();
    page1.content = stack1;
    let frame1 = new Frame();
    frame1.navigate({
      create: () => {
        return page1;
      },
    });

    let stack2 = new StackLayout();
    stack2.addChild(button2);
    stack2.backgroundColor = 'blue';
    let page2 = new Page();
    page2.content = stack2;
    let frame2 = new Frame();
    frame2.navigate({
      create: () => {
        return page2;
      },
    });

    let stack3 = new StackLayout();
    stack3.addChild(button3);
    stack3.backgroundColor = 'purple';
    let page3 = new Page();
    page3.content = stack3;
    let frame3 = new Frame();
    frame3.navigate({
      create: () => {
        return page3;
      },
    });

    let stack4 = new StackLayout();
    stack4.addChild(button4);
    let page4 = new Page();
    page4.content = stack4;
    let frame4 = new Frame();
    frame4.navigate({
      create: () => {
        return page4;
      },
    });

    let tabStrip = new TabStrip();
    tabStrip.iosIconRenderingMode = 'alwaysOriginal';

    let items = [];
    let tabStripItem = new TabStripItem();
    tabStripItem.label = new Label();
    tabStripItem.label.text = 'Tab 1';
    items.push(tabStripItem);

    let tabStripItem2 = new TabStripItem();
    tabStripItem2.label = new Label();
    tabStripItem2.label.text = 'Tab 2';
    items.push(tabStripItem2);

    let tabStripItem3 = new TabStripItem();
    tabStripItem3.label = new Label();
    tabStripItem3.label.text = 'Tab 3';
    items.push(tabStripItem3);

    let tabStripItem4 = new TabStripItem();
    tabStripItem4.label = new Label();
    tabStripItem4.label.text = 'Tab 3';
    items.push(tabStripItem4);

    tabStrip.items = items;
    tabs.tabStrip = tabStrip;

    let contentItems = [];
    let tabContentItem = new TabContentItem();
    tabContentItem.content = frame1;
    frame1.actionBarVisibility = "never";
    contentItems.push(tabContentItem);

    tabContentItem = new TabContentItem();
    tabContentItem.content = frame2;
    contentItems.push(tabContentItem);
    frame2.actionBarVisibility = "never";

    tabContentItem = new TabContentItem();
    tabContentItem.content = frame3;
    contentItems.push(tabContentItem);
    frame3.actionBarVisibility = "never";

    tabContentItem = new TabContentItem();
    tabContentItem.content = frame4;
    contentItems.push(tabContentItem);
    frame4.actionBarVisibility = "never";

    tabs.items = contentItems;

    outerPage.actionBar.title = 'Outer Page';
    let outerStackLayout = new StackLayout();
    outerStackLayout.addChild(tabs);
    outerPage.content = outerStackLayout;

    // Create navigation entry
    let navEntry: NavigationEntry;
    navEntry = {
      create: (() => { 
        return outerPage; 
      })
    };

    const frame = new Frame();
    // frame.actionBarVisibility = "never";
    frame.navigate(navEntry);
    
    return frame;
  })
};

application.run(rootEntry);
