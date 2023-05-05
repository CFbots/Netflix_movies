import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-choose-plan',
  templateUrl: './register-choose-plan.component.html',
  styleUrls: ['./register-choose-plan.component.scss']
})
export class RegisterChoosePlanComponent implements OnInit{
  plans:string[] = ["Standard with ads", "Standard", "Premium"];
  plans_quality:string[] = ["Great", "Great", "Better"];
  plans_prices:string[] = ["$6.99", "$15.49", "$19.99"];
  plans_resolut:string[] = ["1080p", "1080p", "4K+HDR"];
  selectedIndex = 0;
  slectedTextColor = "rgb(94, 89, 89)"; 
  unslectedTextColor = "rgb(152, 143, 143)";

  ngOnInit(): void {
  }

  selectedPlan(index:number){
    this.selectedIndex = index;
  }
onSumbit(){

}
}
