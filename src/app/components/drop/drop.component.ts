import {Component, OnInit} from '@angular/core';
import {FileSystemDirectoryEntry, FileSystemFileEntry, UploadEvent, UploadFile} from "ngx-file-drop";
import {FileService} from "../../services/file.service";

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.scss']
})
export class DropComponent implements OnInit {


  public files: UploadFile[] = [];
  _isFile: boolean = false;
  _file: File = null;
  constructor(public fileService: FileService) {

  }

  public dropped(event: UploadEvent) {
    const sself = this;
    this.files = event.files;
    const droppedFile = event.files[0];

    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;

      fileEntry.file((file: File) => {
        sself._file = file;
        sself._isFile = true;
        console.log(sself._isFile);
        /**
         // You could upload it like this:
         const formData = new FormData()
         formData.append('logo', file, relativePath)

         // Headers
         const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

         this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
         .subscribe(data => {
            // Sanitized logo returned from backend
          })
         **/
        console.log(sself._file);
      });
    } else {
      const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      console.log(droppedFile.relativePath, fileEntry);
    }

  }

  public fileOver(event) {
  }

  public fileLeave(event) {
  }

  ngOnInit() {

  }

}
