import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, zip } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';

const itemIndex = (item: any, data: any[]): number => {
    for (let idx = 0; idx < data.length; idx++) {
        if (data[idx].ProductID === item.ProductID) {
            return idx;
        }
    }

    return -1;
};

const cloneData = (data: any[]) => data.map(item => Object.assign({}, item));

@Injectable()
export class EditService extends BehaviorSubject<any[]> {
    private data: any[] = [];
    private originalData: any[] = [];
    private createdItems: any[] = [];
    private updatedItems: any[] = [];
    private deletedItems: any[] = [];

    constructor(private http: HttpClient) {
        super([]);
    }

    public read() {
        if (this.data.length) {
            return super.next(this.data);
        }

        this.fetch()
            .subscribe(data => {
                this.data = data;
                this.originalData = cloneData(data);
                super.next(data);
            });
    }

    public create(item: any): void {
        this.createdItems.push(item);
        this.data.unshift(item);

        super.next(this.data);
    }

    public update(item: any): void {
        if (!this.isNew(item)) {
            const index = itemIndex(item, this.updatedItems);
            if (index !== -1) {
                this.updatedItems.splice(index, 1, item);
            } else {
                this.updatedItems.push(item);
            }
        } else {
            const index = this.createdItems.indexOf(item);
            this.createdItems.splice(index, 1, item);
        }
    }

    public remove(item: any): void {
        let index = itemIndex(item, this.data);
        this.data.splice(index, 1);

        index = itemIndex(item, this.createdItems);
        if (index >= 0) {
            this.createdItems.splice(index, 1);
        } else {
            this.deletedItems.push(item);
        }

        index = itemIndex(item, this.updatedItems);
        if (index >= 0) {
            this.updatedItems.splice(index, 1);
        }

        super.next(this.data);
    }

    public isNew(item: any): boolean {
        return !item.ProductID;
    }

    public hasChanges(): boolean {
        return Boolean(this.deletedItems.length || this.updatedItems.length || this.createdItems.length);
    }

    public saveChanges(): void {
        if (!this.hasChanges()) {
            return;
        }

        const completed = [];
        if (this.deletedItems.length) {
            completed.push(this.fetch(REMOVE_ACTION, this.deletedItems));
        }

        if (this.updatedItems.length) {
            completed.push(this.fetch(UPDATE_ACTION, this.updatedItems));
        }

        if (this.createdItems.length) {
            completed.push(this.fetch(CREATE_ACTION, this.createdItems));
        }

        this.reset();

        zip(...completed).subscribe(() => this.read());
    }

    public cancelChanges(): void {
        this.reset();

        this.data = this.originalData;
        this.originalData = cloneData(this.originalData);
        super.next(this.data);
    }

    public assignValues(target: any, source: any): void {
        Object.assign(target, source);
    }

    private reset() {
        this.data = [];
        this.deletedItems = [];
        this.updatedItems = [];
        this.createdItems = [];
    }

    private fetch(action: string = '', data?: any): Observable<any[]> {
        // const httpOptions  ={
        //         headers:  new HttpHeaders({
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type':'application/json'
        //     })
        // };
        let headers = new HttpHeaders({ 
            'Access-Control-Allow-Origin': '*',
            'content-type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,DELETE,PUT',
            'Access-Control-Allow-Credentials': 'true'
        })
 
        if(action ==='view' || action ==='')
        {
            return this.http.get(`https://localhost:44338/api/TodoItems?${this.serializeModels(data)}`, { 'headers': headers})
            .pipe(map(res => <any[]>res));
      
        // return this.http.jsonp(`https://localhost:44338/api/TodoItems?${this.serializeModels(data)}`, 'callback')
        //     .pipe(map(res => <any[]>res));
        }
        else if (action ==='create'){
            const params = JSON.stringify(data); //this.serializeModels(data);
            this.http
            .post(`https://localhost:44338/api/TodoItems`, params, { 'headers': headers})
            //.post(`https://localhost:44338/api/TodoItems`,params)//, { 'headers': headers})
            //.pipe(map(res => <any[]>res));  
            .pipe(map(res => {
                <any[]>res
            }), catchError(this.OnError));  

            //return this.http.get(`https://localhost:44338/api/TodoItems?`)
            //.pipe(map(res => <any[]>res));
        }
        else if (action ==='update'){
            const httpOptions  ={
                headers:  new HttpHeaders({
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type':'application/json'
                })
            };
            const params = this.serializeModels(data);
            return this.http
            .put(`https://localhost:44338/api/TodoItems?`,params, httpOptions)
            .pipe(map(res => <any[]>res));  
        }

            // return this.http
            // .jsonp(`https://demos.telerik.com/kendo-ui/service/Products/${action}?${this.serializeModels(data)}`, 'callback')
            // .pipe(map(res => <any[]>res));        
    }

    private serializeModels(data?: any): string {
        return data ? `&models=${JSON.stringify(data)}` : '';
    }

    private OnError(err:HttpErrorResponse){
        return throwError(err);
    }
}
