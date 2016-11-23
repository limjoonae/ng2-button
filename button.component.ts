import { Component, OnInit, Input } from '@angular/core';
import { BootstrapClassService } from '../service/bootstrap-class.service';

@Component({
  selector: 'gos-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers: [BootstrapClassService]
})
export class ButtonComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() disable: string;
  @Input() colorTheme: string;
  @Input() isOutlineColor: string;
  @Input() size: string;
  private colorClass = '';
  private _themeClassPrefix = 'btn-';
  private sizeClass = '';

  constructor(private _bootstrapClassService: BootstrapClassService) { }

  ngOnInit() {
    this.colorTheme = this.getThemeName(this.colorTheme);
    this.colorClass = this._bootstrapClassService.setColorTheme(this._themeClassPrefix, this.colorTheme, this.isOutlineColor);
    this.sizeClass = this._bootstrapClassService.setSize(this.size);
  }

  getThemeName(theme: string): string {
    let colorTheme = 'secondary';
    if (theme != null && theme != '')
      colorTheme = theme;
    return colorTheme;
  }

}
