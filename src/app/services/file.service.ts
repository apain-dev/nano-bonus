import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestService} from "./request.service";
import {RequestAnswer} from "../models/RequestAnswer";

@Injectable()
export class FileService {
  private _file: string = '';
  private _files: RequestAnswer;
  public _readFile;
  public _inputs;

  constructor(private request: RequestService) {
    let self = this;
    this.request.getFiles().then(function (answer) {
      self._files = answer;
    });
  }

  get file(): string {
    return this._file;
  }

  set file(value: string) {
    this._file = value;
  }

  get files(): RequestAnswer {
    return this._files;
  }

  set files(value: RequestAnswer) {
    this._files = value;
  }
  readFile(fileName: string) {
    return this.request.getReadFile(fileName);
  }
  run() {
    return this.request.run(this._file, this._inputs);
  }
}
