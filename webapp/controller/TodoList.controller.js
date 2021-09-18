sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
  function (Controller, MessageToast) {
    'use strict';
    return Controller.extend(
      'sap.ui.demo.walkthrough.controller.TodoList',
      {
        handleDelete: function (oEvent) {
          var oList = oEvent.getSource();
          var oItem = oEvent.getParameter('listItem');
          var sPath = oItem.getBindingContext().getPath();

          // after deletion put the focus back to the list
          oList.attachEventOnce('updateFinished', oList.focus, oList);

          var jsonModel = this.getOwnerComponent().getModel();

          var todos = jsonModel.getData().todos;
          var todoIndex = sPath.substring(sPath.lastIndexOf('/') + 1);

          todos.splice(todoIndex, 1);

          jsonModel.setData({
            todos: todos
          });

          MessageToast.show('Task finished');
        }
      }
    );
  }
);
