import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { ListPicker } from "tns-core-modules/ui/list-picker/list-picker";

const years = [1980, 1990, 2000, 2010, 2020];

export function onNavigatingTo(args: EventData) {

    const page = <Page>args.object;
    const vm = fromObject({
        years: years
    });
    page.bindingContext = vm;

}

export function onListPickerLoaded(fargs) {
    const listPickerComponent = fargs.object;
    listPickerComponent.on("selectedIndexChange", (args: EventData) => {
        const picker = <ListPicker>args.object;
        console.log(`index: ${picker.selectedIndex}; item" ${years[picker.selectedIndex]}`);
    });
}