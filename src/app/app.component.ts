import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:`
        <div class="header">
            <h1>
                {{title | uppercase}}
            </h1>
        </div>
        <random-izer></random-izer>
        <nav>
            <!-- alphabet links to graphics -->
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'philographics';
}
