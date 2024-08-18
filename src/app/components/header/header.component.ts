import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { CommonService } from 'src/app/common_service';
import { TranslateService } from '@ngx-translate/core';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
@ViewChild('searchtxt') someElement!: ElementRef;

  constructor(private dataService: DataService,private router: Router, private commonService: CommonService,private translate: TranslateService){
    //this.translate.setDefaultLang('en');
    //this.translate.setDefaultLang('en');
    
    // Optionally, set the language based on a stored value or a preference , private translate: TranslateService
    this.translate.use('en');
  }
  ngOnInit(): void {
   this.getAllMovieByfilter(); 
  }

  dataToggle(searchdata: any) {
    this.commonService.updateConfig({
       appConfig : { 
        mydata: searchdata
      }
    });
  }

  onLanguageChange(event: any) {
    const selectedLanguage = event.target.value;
    if (selectedLanguage) {
      this.translate.use(selectedLanguage);
    }
  }

  getAllMovieByfilter()
  {
     let searchtxt = this.someElement ? this.someElement.nativeElement.value: '';
     this.dataService.getFilter(searchtxt).subscribe(response =>{ 
      console.log("filterresponse",response);
      this.dataToggle(response);
      //this.router.navigate(["verify-email"]);
   });

  }




}
