import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent { 

    constructor() {
        console.log(`>>> constructor`);
    }
    
    ngOnInit(): void {
        console.log(`>>> ngOnInit`);
    }
}
