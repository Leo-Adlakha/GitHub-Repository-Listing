import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Github Repository Listing Page';
  username: string = "" ;
  page_size: number = 10 ;
  page_num: number = 1 ;
  userFound:boolean = false ;

  userDetails: any = {} ;
  userRepositories:any[] = [] ;
  userRepoTags:any[] = [] ;

  constructor( private userData: UserDataService ) {}

  async getResults() {

    this.userFound = true ;

    await this.userData.getUserInfo(this.username).then((data: any)=>{
      this.userDetails = data ;
    }) ;

    await this.userData.getUserRepositories(this.username, this.page_size, this.page_num).then(async (data: any)=>{

      for ( const repo of data ) {
        let repository_name: string = repo["name"] ;
        let tagData = await this.userData.getUserRepositoryTags(this.username, repository_name) ;
        this.userRepositories.push(repo) ;
        this.userRepoTags.push(tagData) ;
      };

    }) ;

    console.log(this.username, this.userDetails, this.userRepositories, this.userRepoTags) ;

    
  }

  reset() {
    this.username = "" ;
    this.page_size = 10 ;
    this.page_num = 1 ;
    this.userFound = false ;
    this.userDetails = {} ;
    this.userRepositories = [] ;
    this.userRepoTags = [] ;
  }

}
