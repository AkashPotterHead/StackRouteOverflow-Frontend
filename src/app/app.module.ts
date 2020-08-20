import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
/*
@author : Manik Mudholkar
@desc : module declaration
@lastModified : 15-8-2020
*/

//@desc: bringing in the user service and add to providers array
import { UserService } from './Services/UserService/user.service';

//@desc: bringing in the post service and add to providers array
import { PostService } from './Services/PostService/post.service';

//@desc: bringing in the http module service and add to imports array
import { HttpClientModule } from '@angular/common/http';

//@desc: bringing in the QuestionThreadTakerComponent andQuestionThreadViewerComponent
import { QuestionThreadTakerComponent } from './Pages/QuestionThread-Page/question-thread-taker/question-thread-taker.component';
import { QuestionThreadViewerComponent } from './Pages/QuestionThread-Page/question-thread-viewer/question-thread-viewer.component';
import { LoginComponent } from './Pages/Login-page/login/login.component';
import { SignupComponent } from './Pages/SignUp-Page/signup/signup.component';
import { UserprofileComponent } from './Pages/UserProfile-page/userprofile/userprofile.component';

//--------------------------------------------------------------------------------//

/*
@author : Akash 
@desc : module declaration
@lastModified : 15-8-2020
*/

//--------------------------------------------------------------------------------//

/*
@author : Hrshil 
@desc : module declaration
@lastModified : 15-8-2020
*/

//--------------------------------------------------------------------------------//

/*
@author : Obaid
@desc : module declaration
@lastModified : 15-8-2020
*/

//--------------------------------------------------------------------------------//

/*
@author : Rahul
@desc : module declaration
@lastModified : 15-8-2020
*/

//--------------------------------------------------------------------------------//
@NgModule({
	declarations: [ AppComponent, QuestionThreadTakerComponent, QuestionThreadViewerComponent, LoginComponent, SignupComponent, UserprofileComponent ],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule,ReactiveFormsModule ],
	providers: [ UserService, PostService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
