﻿module TcHmi {
    // If you want to unregister an event outside the event code you need to use the return value of the method register()
    var destroyOnInitialized = TcHmi.EventProvider.register('onInitialized', function (e, data) {
        // This event will be raised only once, so we can free resources. 
        // It's best practice to use destroy function of the event object within the callback function to avoid conflicts.
        e.destroy();
        // ----------------------
        // Place your code here!
        // ----------------------
        CefSharp.BindObjectAsync("openFileHandler", "openFileHandler");
        CefSharp.BindObjectAsync("openFolderHandler", "openFolderHandler");
    });
}