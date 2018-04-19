import {Component} from '@angular/core';
import {FileService} from "./services/file.service";
import {NotificationService} from "./services/notification.service";
import {notification} from "./models/notification";
import {ToastData, ToastyService} from "ng2-toasty";
import {RequestAnswer} from "./models/RequestAnswer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _step: number;
  selectedOption;

  constructor(public fileService: FileService, private notif: NotificationService, private toasty: ToastyService) {
    this._step = 0;
  }

  nextStep(fileName: string) {
    let self = this;
    if (this._step === 0) {
      this.fileService.readFile(fileName).then((answer) => {
        self.fileService.file = fileName;
        self.fileService._readFile = answer;
        self._step = 1;
      });
    }
    else {
      let notifId = 0;
      this.notif.waiting(new notification('Running', 'Nanotekspice is running ...'), null, (toasty: ToastData) => {
        notifId = toasty.id;
      });
      this.fileService.run().then(function (answer: RequestAnswer) {
        self.toasty.clear(notifId);
        if (answer._status)
         self.notif.error(new notification('Error', answer._data[0]));
        else
          self.notif.success(new notification('Success', answer._data[0]));
      });
    }
  }

  title = 'app';
}
