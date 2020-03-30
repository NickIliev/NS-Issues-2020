import { EventData } from "tns-core-modules/data/observable";

import { Bluetooth } from "nativescript-bluetooth";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function onTap(args: EventData) {
    let bluetooth = new Bluetooth();

    bluetooth.enable().then(
        function (enabled) {
            // use Bluetooth features if enabled is true 
            bluetooth.isBluetoothEnabled().then(
                (enabled) => {
                    console.log("Enabled? " + enabled);

                    bluetooth.startScanning({
                        seconds: 4,
                        onDiscovered: (peripheral) => {
                            console.log("Periperhal found with UUID: " + peripheral.UUID);
                            console.log("Periperhal found with NAME: " + peripheral.name);
                        },
                        skipPermissionCheck: false,
                    }).then(() => {
                        console.log("scanning complete");
                    }, (err) => {
                        console.log("error while scanning: " + err);
                    })
                }
            );
        }
    );


}
