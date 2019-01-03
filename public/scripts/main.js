function minimiseWindow(){
    var finWindow = fin.desktop.Window.getCurrent();
    finWindow.minimize();
}

function closeWindow(){
    var finWindow = fin.desktop.Window.getCurrent();
    finWindow.close();
}

function maximiseWindow(){
    var finWindow = fin.desktop.Window.getCurrent();
    finWindow.maximize();
}