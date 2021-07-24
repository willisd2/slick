import { data } from 'jquery';
import { SlickBase } from '../slick/slick-base';
import { ISlickSettings } from '../slick/slick-settings.interface';

export class SlickJquery extends SlickBase {
  public $dots: JQuery<HTMLElement> = null;
  public $list: JQuery<HTMLElement> = null;
  public $nextArrow: JQuery<HTMLElement> = null;
  public $prevArrow: JQuery<HTMLElement> = null;
  public $slides: JQuery<HTMLElement> = null;
  public $slideTrack: JQuery<HTMLElement> = null;

  protected $slider: JQuery<HTMLElement> = null;
  protected $slidesCache: JQuery<HTMLElement> = null;

  // A simple way to check for HTML strings
  // Strict HTML recognition (must start with <)
  // Extracted from jQuery v1.11 source
  private htmlExpr: RegExp = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

  constructor(element: HTMLElement, settings: ISlickSettings) {
    super();
    this.$slider = $(element);
    const dataSettings: ISlickSettings = this.$slider.data('slick') || {};
    this.options.extend(settings).extend(dataSettings);

    // pretty sure this block isn't needed because typescript should handle giving these functions the correct 'this' context
    // _.autoPlay = $.proxy(_.autoPlay, _);
    // _.autoPlayClear = $.proxy(_.autoPlayClear, _);
    // _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
    // _.changeSlide = $.proxy(_.changeSlide, _);
    // _.clickHandler = $.proxy(_.clickHandler, _);
    // _.selectHandler = $.proxy(_.selectHandler, _);
    // _.setPosition = $.proxy(_.setPosition, _);
    // _.swipeHandler = $.proxy(_.swipeHandler, _);
    // _.dragHandler = $.proxy(_.dragHandler, _);
    // _.keyHandler = $.proxy(_.keyHandler, _);

    this.init(true);
  }

  public init(creation: boolean) {
    if (!this.isInitialized) {
      {
        this.$slider.addClass('slick-initialized');
      }

      super.init(creation);
    }
  }

  protected initADA(): void {
    const numDotGroups: number = Math.ceil(this.slideCount / this.options.slidesToShow);
    const tabControlIndexes: Array<number> = this.getNavigableIndexes().filter((val) => {
      return val >= 0 && val < this.slideCount;
    });

    this.$slides
      .add(this.$slideTrack.find('.slick-cloned'))
      .attr({
        'aria-hidden': 'true',
        tabindex: '-1',
      })
      .find('a, input, button, select')
      .attr({
        tabindex: '-1',
      });

    if (this.$dots !== null) {
      this.$slides
        .not(this.$slideTrack.find('.slick-cloned'))
        .each((i: number, element: HTMLElement)=> {
          const slideControlIndex: number = tabControlIndexes.indexOf(i);

          $(element).attr({
            role: 'tabpanel',
            id: 'slick-slide' + this.instanceUid + i,
            tabindex: -1,
          });

          if (slideControlIndex !== -1) {
            const ariaButtonControl =
              'slick-slide-control' + this.instanceUid + slideControlIndex;
            if ($('#' + ariaButtonControl).length) {
              $(element).attr({
                'aria-describedby': ariaButtonControl,
              });
            }
          }
        });

      this.$dots
        .attr('role', 'tablist')
        .find('li')
        .each((i: number, element: HTMLElement): void => {
          var mappedSlideIndex = tabControlIndexes[i];

          $(element).attr({
            role: 'presentation',
          });

          $(element)
            .find('button')
            .first()
            .attr({
              role: 'tab',
              id: 'slick-slide-control' + this.instanceUid + i,
              'aria-controls': 'slick-slide' + this.instanceUid + mappedSlideIndex,
              'aria-label': i + 1 + ' of ' + numDotGroups,
              'aria-selected': null,
              tabindex: '-1',
            });
        })
        .eq(this.currentSlide)
        .find('button')
        .attr({
          'aria-selected': 'true',
          tabindex: '0',
        })
        .end();
    }

    for (
      var i = this.currentSlide, max = i + this.options.slidesToShow;
      i < max;
      i++
    ) {
      if (this.options.focusOnChange) {
        this.$slides.eq(i).attr({ tabindex: '0' });
      } else {
        this.$slides.eq(i).removeAttr('tabindex');
      }
    }

    this.$slideTrack.find('.slick-active').attr({
        'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
        'tabindex': '0'
    });
  }
}
