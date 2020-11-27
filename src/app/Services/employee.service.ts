import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class EmployeeService {
    public apiUrl = "https://5faffada7edddb0016468082.mockapi.io/api/employees/";
    constructor(private _http: HttpClient ) { }
    GetListUrl():Observable<any[]>{
        return this._http.get(this.apiUrl).pipe(
            map((res : any) => res)
        );
    }
    GetIdUrl(id:number):Observable<any[]>{
        return this._http.get(this.apiUrl + id).pipe(
            map((res : any) => res)
        );
    }
    Getlist(): any[] {
        let employees:any[] = [
            {Id: 1, Name: "Đỗ Trần Điền"},
            {Id: 2, Name: "Nguyễn Uy Viễn"},
            {Id: 3, Name: "Trần Phi Tấn"},
            {Id: 4, Name: "Phạm Quang Huy"},
        ];
        return employees;
    }    
}