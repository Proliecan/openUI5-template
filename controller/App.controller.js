sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
], function (Controller, JSONModel, MessageBox) {
    "use strict";
    return Controller.extend("proliecan.PROJECT-NAME.controller.App", {
        onInit: function () {
        // REPLACE ME!

            let oReadme = this.loadHTMLfromMarkdown("../README.md");
            let oSetup = this.loadHTMLfromMarkdown("../setup.md");
            let oUsage = this.loadHTMLfromMarkdown("../how-to-use.md");
            let oLicense = this.loadHTMLfromMarkdown("../LICENSE");
            
            let oModel = new JSONModel({
                text:{
                    readme: oReadme,
                    setup: oSetup,
                    usage: oUsage,
                    license: oLicense
                }
            });
            this.getView().setModel(oModel);
        },

        loadHTMLfromMarkdown: function (sPath) {
            // read html from readme.md file
            let oReadmeText = $.ajax({
                url: sPath,
                async: false
            }).responseText;
            //convert markdown to html
            let oConverter = new showdown.Converter();
            let oHtml = oConverter.makeHtml(oReadmeText);
            return oHtml;
        },

        onOpenUI5Press: function () {
            MessageBox.information("This template uses the OpenUI5 library.\nFor more information, see the OpenUI5 on Github:\nhttps://github.com/SAP/openui5");
        }

    });
});