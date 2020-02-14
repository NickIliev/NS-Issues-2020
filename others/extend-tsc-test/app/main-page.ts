/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
declare let android: any;
declare let java: any;

export class Cat extends android.widget.Button {
    constructor() {
      super();
      return global.__native(this);
    }
  
    public eat():void {
      console.log("cat is eating");

     
    }
  }



import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { android as androidApp, AndroidActivityBackPressedEventData } from "tns-core-modules/application";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {

    const page = <Page>args.object;


    let cat = new Cat();
    cat.eat();
}
