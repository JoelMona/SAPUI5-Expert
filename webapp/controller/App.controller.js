sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    
], 
/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 * @param {typeof sap.m.MessageToast} MessageToast
 * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
 * 
 * 
 */

function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";
        
        return Controller.extend("logaligroup.sapui5.controller.App", {
            
            onInit: function (){
               
            },
            
            onShowHello: function () {
                // Read text from i18n model
                var obundle = this.getView().getModel("i18n").getResourceBundle();
                // Read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = obundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg); 
            }
        });
        
    });