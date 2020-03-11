import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-scroll-to-top-button',
    templateUrl: './scroll-to-top-button.component.html',
    styleUrls: ['./scroll-to-top-button.component.scss']
})
export class ScrollToTopButtonComponent implements OnInit {

    isShown: boolean;
    topPosToStartShowing = 100;

    constructor() { }

    ngOnInit() {

    }

    @HostListener('window:scroll')
    checkScroll() {
        const scrollPosition = window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop || 0;

        if (scrollPosition >= this.topPosToStartShowing) {
            this.isShown = true;
        } else {
            this.isShown = false;
        }
    }

    scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
