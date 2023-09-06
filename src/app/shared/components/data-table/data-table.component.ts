import { Component,OnInit } from '@angular/core';
import { IUserModel } from 'src/app/core/models/userModel';
import { ApiService } from 'src/app/core/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  users:IUserModel[]=[];
  private sub!:Subscription;
  name:string='';
  companyName:string ='';
  designation:string='';

  constructor(private service : ApiService){};

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers():void{
    this.sub = this.service.getUser().subscribe((res)=>{
      this.users = res;
    })
  }

}
