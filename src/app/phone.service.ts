import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class PhoneService {

    constructor(private http: HttpClient) {

    }

    getAllItems(): any {
        const items = this.http.get('assets/phones/phones.json');
        return items;
    }

    getOneItem(id: string): any {
        const item = this.http.get('assets/phones/' + id + '.json');
        return item;
    }
}
