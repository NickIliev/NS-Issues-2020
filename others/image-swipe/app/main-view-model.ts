import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { PageChangeEventData } from "nativescript-image-swipe";
import { request } from "tns-core-modules/http";

export class HelloWorldModel extends Observable {

    public items: ObservableArray<any>;
    public pageNumber: number;

    constructor() {
        super();
        this.items = new ObservableArray();
    
        request({
            method: "GET",
            url: "https://api.nasa.gov/planetary/apod?api_key=5DEMO_KEY&date=2017-07-25"
        }).then(res => {
            let content = res.content.toJSON();
            console.dir(content);
            let url = content["url"]; // the API returns "content" object with multiples properties including hdurl
            // console.log(res)
            this.items.push({ imageUrl: url });
        })

        request({
            method: "GET",
            url: "https://api.nasa.gov/planetary/apod?api_key=5DEMO_KEY&date=2017-07-26"
        }).then(res => {
            let content = res.content.toJSON();
            let url = content["url"]; // the API returns "content" object with multiples properties including hdurl
            this.items.push({ imageUrl: url });
        })

        request({
            method: "GET",
            url: "https://api.nasa.gov/planetary/apod?api_key=5DEMO_KEY&date=2017-07-22"
        }).then(res => {
            let content = res.content.toJSON();
            let url = content["url"]; // the API returns "content" object with multiples properties including hdurl
            this.items.push({ imageUrl: url });
        })

        request({
            method: "GET",
            url: "https://api.nasa.gov/planetary/apod?api_key=5DEMO_KEY&date=2017-07-10"
        }).then(res => {
            let content = res.content.toJSON();
            let url = content["url"]; // the API returns "content" object with multiples properties including hdurl
            this.items.push({ imageUrl: url });
        })

        request({
            method: "GET",
            url: "https://api.nasa.gov/planetary/apod?api_key=5DEMO_KEY&date=2017-07-15"
        }).then(res => {
            let content = res.content.toJSON();
            let url = content["url"]; // the API returns "content" object with multiples properties including hdurl
            this.items.push({ imageUrl: url });

            this.pageNumber = 3;
        })
    }

    public pageChanged(e: PageChangeEventData) {
        console.log(`Page changed to ${e.page}.`);
    }
}