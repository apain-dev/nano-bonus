import {Injectable} from '@angular/core';
import {FileSystemDirectoryEntry, FileSystemFileEntry} from "ngx-file-drop";

@Injectable()
export class FileService {
  private _file: File[] = [];

  constructor() {
  }

  get file(): File {
    return this._file[0];
  }

  set file(value: File) {
    this._file[0] = value;
  }


}
