import { Breakpoint } from './breakpoint';
import { ISlickSettings } from './slick-settings.interface';

export class DefaultSlickSettings implements ISlickSettings {
    public accessibility: boolean = true;    
    public adaptiveHeight: boolean = false;
    public appendArrows: JQuery<HTMLElement>= null;
    public appendDots: JQuery<HTMLElement> = null;
    public arrows: boolean = true;
    public asNavFor: JQuery<HTMLElement> = null;
    public prevArrow: string | HTMLElement | JQuery<HTMLElement> = '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>';
    public nextArrow: string | HTMLElement | JQuery<HTMLElement> = '<button class="slick-next" aria-label="Next" type="button">Next</button>';
    public autoplay: boolean = false;
    public autoplaySpeed: number = 3000;
    public centerMode: boolean = false;
    public centerPadding: string = '50px';
    public cssEase: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' = 'ease';
    public dots: boolean = false;
    public dotsClass: string = 'slick-dots';
    public draggable: boolean = true;
    public easing: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' = 'linear';
    public edgeFriction: number = 0.35;
    public fade: boolean = false;
    public focusOnSelect: boolean = false;
    public focusOnChange: boolean = false;
    public infinite: boolean = true;
    public initialSlide: number = 0;
    public lazyLoad: 'ondemand' | 'progressive' = 'ondemand';
    public mobileFirst: boolean = false;
    public pauseOnHover: boolean = true;
    public pauseOnFocus: boolean = true;
    public pauseOnDotsHover: boolean = false;
    public respondTo: 'min' | 'slider' | 'window' = 'window';
    public responsive: Array<Breakpoint> = null;
    public rows: number = 1;
    public rtl: boolean = false;
    public slide: string | HTMLElement = '';
    public slidesPerRow: number = 1;
    public slidesToShow: number = 1;
    public slidesToScroll: number = 1;
    public speed: number = 500;
    public swipe: boolean = true;
    public swipeToSlide: boolean = false;
    public touchMove: boolean = true;
    public touchThreshold: number = 5;
    public useCSS: boolean = true;
    public useTransform: boolean = true;
    public variableWidth: boolean = false;
    public vertical: boolean = false;
    public verticalSwiping: boolean = false;
    public waitForAnimate: boolean = true;
    public zIndex: number = 1000;

    public customPaging(slider: any, i: number): JQuery<HTMLElement> {
        return null;
    }
}