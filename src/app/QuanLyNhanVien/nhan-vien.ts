import { from } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class NhanVienClass {
    constructor(
        public id: number,
        public name: string,
        public dateOfBirth: Date,
        public alias?: string,   // dau ? la optional(co the co , co the khong)
        public jobCategory?: string
    ){ }
}
