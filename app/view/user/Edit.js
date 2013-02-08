//View 2

//Jede View hat eine Function "initComponent"

Ext.define('AM.view.user.Edit', {
	extend: 'Ext.window.Window',//Diese View ist ein Window. AM.view.user.Edit ist eine Subklasse von Ext.window.Window
	alias: 'widget.useredit',//Der xtype "useredit" wird angelegt für die View
	title: 'Edit User',
	layout: 'fit',
	autoShow: true,

	initComponent: function() {
		this.items = [
			{
				xtype: 'form',
				items: [
					{
						xtype: 'textfield',
						name: 'name',
						fieldLabel: 'Name'
					},
					{
						xtype: 'textfield',
						name: 'email',
						fieldLabel: 'Email'
					}
				]
			}
		];

		this.buttons = [
			//2 buttons "Save" and "Cancel"
			{
				text: 'Save',
				action: 'save'
			},
			{
				text: 'Cancel',
				scope: this,
				handler: this.close
			}
		];

		this.callParent(arguments);
	}
});