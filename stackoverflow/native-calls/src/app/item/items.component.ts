import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { ad as androidUtilities } from 'tns-core-modules/utils/utils';

declare let com: any;

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.checkForUpdate();
    }

    public checkForUpdate() {


        try {
            const context = androidUtilities.getApplicationContext();
            const appUpdateManager = com.google.android.play.core.appupdate.AppUpdateManagerFactory.create(context);
            appUpdateManager.getAppUpdateInfo().addOnSuccessListener(new com.google.android.play.core.appupdate.AppUpdateManagerFactory.OnSuccessListener({
                onSuccess: function(result) {
                    console.log(`onSuccess ${result}`);
                }
            }));
        } catch (err) {
            console.log('Err in checkForUpdate() : ', err);
        }
    }


}


