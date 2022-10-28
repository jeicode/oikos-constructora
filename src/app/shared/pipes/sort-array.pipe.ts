import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortArray',
    standalone: true
})
export class SortArrayPipe implements PipeTransform {

    transform(listItems: any[] | undefined, delimitToOrder:string = ""): any[] {
        const arrDelimit = delimitToOrder.split(',')
        
        if (delimitToOrder && listItems && listItems?.length > 0){ // 1 is last, -1 es first  
            listItems.sort( (p1:any, p2:any):any => {

                arrDelimit.forEach( del => {
                    
                })
                if(arrDelimit.includes(p1?.nombre)){


                }
            })
        }
    
        return []
    }

}
