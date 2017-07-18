import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';

import { Hero } from './hero';

@Component ({
    selector: 'random-izer',
    templateUrl: './randomizer.component.html',
    styleUrls: ['./randomizer.component.css']
})


export class RandomizerComponent implements OnInit {

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {}

    //go back to the previous view in the browser history (location service)
    goBack(): void {
        this.location.back();
    }
}
