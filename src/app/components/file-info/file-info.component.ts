import {Component, Input, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.scss']
})
export class FileInfoComponent implements OnInit {

  constructor(public fileService: FileService) {

  }

  ngOnInit() {
    this.fileService._inputs = [];
    for (var i in this.fileService._readFile._inputs) {
      this.fileService._inputs.push({input: this.fileService._readFile._inputs[i],value: 0});
    }
  }

}
