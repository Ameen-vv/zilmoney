import { Pipe, PipeTransform } from '@angular/core';
import { IUserModel } from 'src/app/core/models/userModel';

@Pipe({
  name: 'customSearch'
})
export class CustomSearchPipe implements PipeTransform {

  transform(users: IUserModel[], query:string,...fields:string[]): IUserModel[] {

    if(!query || fields.length < 0 || !users ) return users || []

    const filteredData:IUserModel[] = users.filter((item)=>
      fields.find((field)=>this.customSearch(item,field,query))
    );

    return filteredData;

  }

  private customSearch(item:IUserModel,field:string,query:string){
    const searchText = new RegExp(query,'i');

    const fieldsArr = field.split('.');

    if(fieldsArr.length <= 0) return false;

    let data:any = item;

    for(let key of fieldsArr){
      data = data[key]
    }


    return searchText.test(data);

  }

}
