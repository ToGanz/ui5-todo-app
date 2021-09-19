sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel'
  ],
  function (Controller, MessageToast, JSONModel) {
    'use strict';
    return Controller.extend(
      'sap.ui.demo.walkthrough.controller.HelloPanel',
      {
        onInit: function () {
          // set data model on view
          var oData = {
            newTodo: {
              title: ''
            }
          };
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel, 'newTodo');
        },
        onSubmit: function (oEvent) {
          var newTodo = this.getView()
            .getModel('newTodo')
            .getData().newTodo;

          if (!newTodo.title) {
            MessageToast.show('Enter a title');
            return;
          }

          var jsonModel = this.getOwnerComponent().getModel();

          var todos = jsonModel.getData().todos;
          todos.push(newTodo);
          jsonModel.setData({
            todos: todos
          });
          MessageToast.show('Todo added!');
        }
      }
    );
  }
);
