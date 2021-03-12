module TcHmi {
    export module Functions {
        export module FileDialog {
            export function OpenFileDialog(extensions:any) {
                extensions.forEach((element:any) => console.log(element));

                (<any>window).openFileHandler.handleJsCall(extensions);
            }
        }
        registerFunctionEx('OpenFileDialog','TcHmi.Functions.FileDialog',FileDialog.OpenFileDialog);
    }
}