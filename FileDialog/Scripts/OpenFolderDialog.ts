module TcHmi {
    export module Functions {
        export module FileDialog {
            export function OpenFolderDialog() {
                (<any>window).openFolderHandler.handleJsCall(1);
            }
        }
        registerFunctionEx('OpenFolderDialog','TcHmi.Functions.FileDialog',FileDialog.OpenFolderDialog);
    }
}