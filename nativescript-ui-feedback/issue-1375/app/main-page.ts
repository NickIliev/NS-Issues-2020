import * as viewModel from "./main-view-model";
import * as calendarModule from "nativescript-ui-calendar";

let viewModelContext: viewModel.HelloWorldModel;

export function onPageLoaded(args) {
    const page = args.object;
    if (viewModelContext === undefined) {
        viewModelContext = new viewModel.HelloWorldModel();
    }

    page.bindingContext = viewModelContext;
    viewModelContext.updateViewMode();
}

export function onNavigatedFrom(args) {
    if (args.isBackNavigation === true) {
        viewModelContext = undefined;
    }
}

export function onWeekSetViewModeTap(args: any) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Week);
}

export function onMonthSetViewModeTap(args: any) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Month);
}

export function onMonthNamesSetViewModeTap(args: any) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.MonthNames);
}

export function onYearSetViewModeTap(args: any) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Year);
}

export function onDaySetViewModeTap(args: any) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Day);
}