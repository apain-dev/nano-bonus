import {Component, Input, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.scss']
})
export class FileInfoComponent implements OnInit {
  @Input() _file: File;
  constructor() { }

  ngOnInit() {
  }

}
