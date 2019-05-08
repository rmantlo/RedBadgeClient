// dont Touch, amw still working on it


// import { HostBinding, OnDestroy, OnInit } from '@angular/core';
// import { MediaObserver } from '@angular/flex-layout';
// import { Subscription } from 'rxjs';

// export class MediaQueryClassBaseComponent implements OnInit, OnDestroy {
//     @HostBinding('class.xl') private xl: boolean;
//     @HostBinding('class.lg') private lg: boolean;
//     @HostBinding('class.md') private md: boolean;
//     @HostBinding('class.sm') private sm: boolean;
//     @HostBinding('class.xs') private xs: boolean;

//     private mediaObserverSubscription: Subscription | undefined = undefined;

//     constructor(protected mediaObserver: MediaObserver) {}

//     ngOnInit(): void {
//         if (this.mediaObserverSubscription)
//             return;
//         this.mediaObserverSubscription = this.mediaObserver.media$.subscribe(x => {
//             this.xl = x.mqAlias == 'xl';
//             this.lg = x.mqAlias == 'lg';
//             this.md = x.mqAlias == 'md';
//             this.sm = x.mqAlias == 'sm';
//             this.xs = x.mqAlias == 'xs';
//         });
//     }

//     ngOnDestroy(): void {
//         if (!this.mediaObserverSubscription)
//             return;
//         this.mediaObserverSubscription.unsubscribe();
//         this.mediaObserverSubscription = undefined;
//     }
// }