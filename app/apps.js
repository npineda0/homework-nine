import * as MODEL from "../model/model.js";
//^ * means all

function route() {
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#","");
    //^removes # and replaces with nothing
    let pageContent = pageName + "Content";
    
    if(pageName == "") {
        //^ == is an equality operator
        pageContent = "menuContent";
    }

    MODEL.modelPageName(pageContent);
}

function dynamicListener(){
    console.log("dynamic");
}

function initListeners() {
    $(window).on("hashchange", route);
    route();
    //^ .on is a function bc () , ^ route makes a reference to a function
}

$(document).ready(function () {
    initListeners();
});