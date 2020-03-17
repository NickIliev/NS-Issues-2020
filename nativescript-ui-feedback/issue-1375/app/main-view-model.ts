import { Observable } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame";
import { CalendarViewMode } from "nativescript-ui-calendar";

export class HelloWorldModel extends Observable {
    private _selectionInfo;
    constructor() {
        super();
        this._selectionInfo = {
            options: ["Week", "Month", "Month names", "Year", "Day"],
            index: 1
        };
    }

    set viewMode(value: CalendarViewMode) {
        this.set("ViewMode", value);

    }

    get viewMode(): CalendarViewMode {
        return this.get("ViewMode");
    }

    public setViewMode(viewMode: CalendarViewMode) {
        this.viewMode = viewMode;
    }

    public updateViewMode() {
        let index: number = this._selectionInfo.index;
        if (index === 0) {
            this.viewMode = CalendarViewMode.Week;
        } else if (index === 1) {
            this.viewMode = CalendarViewMode.Month;
        } else if (index === 2) {
            this.viewMode = CalendarViewMode.MonthNames;
        } else if (index === 3) {
            this.viewMode = CalendarViewMode.Year;
        } else {
            this.viewMode = CalendarViewMode.Day;
        }
    }

    public onOptionsTapped() {
        const navigationEntry = {
            moduleName: "navigation/options-menu/options-page",
            context: this._selectionInfo,
            animated: true
        };

        Frame.topmost().navigate(navigationEntry);
    }
}
