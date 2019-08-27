import * as fs from "file-system";
import { Mediafilepicker, FilePickerOptions } from 'nativescript-mediafilepicker';

attachFile() {
 let extensions = [];

        if (!isAndroid) {
            extensions = [kUTTypePDF, kUTTypeText]; // you can get more types from here: https://developer.apple.com/documentation/mobilecoreservices/uttype
        } else {
            extensions = ['jpg', 'jpeg', 'png'];
        }

        let options: FilePickerOptions = {
            android: {
                extensions: extensions,
                maxNumberFiles: 1
            },
            ios: {
                extensions: extensions,
                multipleSelection: true
            }
        };

        let mediafilepicker = new Mediafilepicker();
        mediafilepicker.openFilePicker(options);

        mediafilepicker.on("getFiles", function (res) {
            this.attachedFile = res.object.get('results');
            console.dir(this.attachedFile);

                const filePath = "/storage/emulated/0/Download/test.pdf"; //, this.attachedFile[0].file;
                const fileExist = File.exists(filePath);
                const file = File.fromPath(filePath);
                const fileReaded = file.readSync((err) => {
                    console.log(err);
                });
                const file64base = android.util.Base64.encodeToString(fileReaded, android.util.Base64.DEFAULT);
            });

        mediafilepicker.on("error", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });
    }
 }
