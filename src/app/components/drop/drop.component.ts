import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FileSystemDirectoryEntry, FileSystemFileEntry, UploadEvent, UploadFile} from "ngx-file-drop";
import {FileService} from "../../services/file.service";
import {RequestService} from "../../services/request.service";
import {RequestAnswer} from "../../models/RequestAnswer";

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.scss']
})
export class DropComponent implements OnInit {


  public files: UploadFile[] = [];
  _step = {
    isFile: false,
    step: 0
  };
  code = `// Some code...`;


  constructor(private requestService: RequestService, private ref: ChangeDetectorRef, private fileService: FileService) {
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    const droppedFile = event.files[0];

    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      this.getFile(fileEntry);
    }
    else {
      const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
    }
  }

  public getFile(fileEntry) {
    let self = this;
    return new Promise(((resolve, reject) => {
        fileEntry.file((file: File) => {
          const formData = new FormData();
          formData.append('logo', file, fileEntry.relativePath);

        });
      }
    ));
  }

  public fileOver(event) {
  }

  public fileLeave(event) {
  }

  ngOnInit() {
  }

}
