var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let FileDialog;
        (function (FileDialog) {
            function OpenFolderDialog() {
                window.openFolderHandler.handleJsCall(1);
            }
            FileDialog.OpenFolderDialog = OpenFolderDialog;
        })(FileDialog = Functions.FileDialog || (Functions.FileDialog = {}));
        Functions.registerFunctionEx('OpenFolderDialog', 'TcHmi.Functions.FileDialog', FileDialog.OpenFolderDialog);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
//# sourceMappingURL=OpenFolderDialog.js.map