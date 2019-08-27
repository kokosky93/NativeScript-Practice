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

                const filePath = this.attachedFile[0].file; // "/storage/emulated/0/Download/test.pdf"; 
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

// ACCESS TO EMULATOR FILE EXPLORER:
// https://stackoverflow.com/questions/13006315/how-to-access-data-data-folder-in-android-device
