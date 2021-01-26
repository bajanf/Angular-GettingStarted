import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
    selector:'pm-star',
    templateUrl: './star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges
{
    ngOnChanges(): void {
        this.starWidth=this.rating*75/5;
    }

    onClick():void{
        this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
    }    

    @Input() rating: number=4;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string>=new EventEmitter<string>();
}