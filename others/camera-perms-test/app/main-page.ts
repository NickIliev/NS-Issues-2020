
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { requestPermissions, takePicture, isAvailable } from "nativescript-camera";

let vm = new Observable();

export function navigatingTo(args: EventData) {

    const page = <Page>args.object;

    console.log(`is camera available: ${isAvailable}`);

    requestPermissions().then(res => {
        console.log(`Permission granted! ${res}`);
    })

    page.bindingContext = vm
}


export function takePhoto() {
    takePicture().then(imgAsset => {
        console.dir(imgAsset);
        vm.set("asset", imgAsset)
    })
}