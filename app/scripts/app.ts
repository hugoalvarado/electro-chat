// ES6

import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})

@View({
    templateUrl: 'app.html',
    directives: [CORE_DIRECTIVES]
})

class AppComponent {
    name:string = "Angular2";
    chatLog:string = "test";

    messageInputPress(text) {

        if(text.value){
            this.chatLog = `${this.chatLog}
${text.value}`;

            text.value = null;
        }

    }
}


//load component once page is loaded (DOMContentLoaded)
bootstrap(AppComponent);
