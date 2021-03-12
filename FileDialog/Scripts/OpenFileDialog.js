var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let FileDialog;
        (function (FileDialog) {
            function OpenFileDialog(extensions) {
                extensions.forEach((element) => console.log(element));
                window.openFileHandler.handleJsCall(extensions);
            }
            FileDialog.OpenFileDialog = OpenFileDialog;
        })(FileDialog = Functions.FileDialog || (Functions.FileDialog = {}));
        Functions.registerFunctionEx('OpenFileDialog', 'TcHmi.Functions.FileDialog', FileDialog.OpenFileDialog);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
//# sourceMappingURL=OpenFileDialog.js.map