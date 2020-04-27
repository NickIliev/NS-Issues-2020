
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { requestPermissions, takePicture, CameraOptions } from "nativescript-camera";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    requestPermissions().then(
        function success() {
            // permission request accepted or already granted 
            console.log('>>>>>> perm OK')
        },
        function failure() {
            // permission request rejected
            console.log('>>>>>> perm NOPE')
        }
    );
}

export function takePhoto() {

    const options: CameraOptions = {
        width: 200, // this is DIP - device independent pixels (Pixels X Screen Density Scale)
        height: 200, // this is DIP - device independent pixels  (Pixels X Screen Density Scale)
        keepAspectRatio: false,
        saveToGallery: false
    };

    takePicture(options)
        .then((imageAsset) => {
            // e.g., the output for Google Pixel 3XL will be 700 x 700 pixels (which is 200 x 200 DIP multiplied by the screen density)
            // e.g., the output for Google Nexus 5x will be 600 x 600 pixels (which is 200 x 200 DIP multiplied by the screen density)
            console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height); // this is Pixels (not scaled)
        }).catch((err) => {
            console.log(">>> Error -> " + err.message);
        });
}
