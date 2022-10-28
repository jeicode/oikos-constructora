import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortArraySplitStr',
    standalone: true
})
export class SortArrayStringSplitPipe implements PipeTransform {

    transform(listItems: any[] = [], stringsToSplit:string = "", separator:string = ','): any[] {

        if (stringsToSplit){
            const arrDelimit = stringsToSplit.split(separator)
            const orderList:any = []
            if (stringsToSplit && listItems && listItems?.length > 0) {
                arrDelimit.forEach( (name:string) => {
                    const item = listItems.find( i => i?.nombre.toLowerCase() == name.trim().toLowerCase())
                    if (item) orderList.push(item)
                })
            }
            return orderList.slice(0,4)
        }


        return listItems.slice(0,4)
    }

}
