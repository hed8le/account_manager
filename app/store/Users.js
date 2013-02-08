//Store

Ext.define('AM.store.Users', {
	extend: 'Ext.data.Store',
	
	//Anstelle der Definition der Felder "inline", referenziert man hier einfach das Model
	model: 'AM.model.User',
	autoLoad: true,

	//fields: ['name', 'email'],  //Felder werden "inline" definiert

	//Store wird hart kodiert
	/*data: [						//Store
		{name: 'Eddie', email: 'ed@sencha.com'},
		{name: 'Tommy', email: 'tommy@sencha.com'}
	]*/

	proxy: {
		type: 'ajax',
		api: {
			read: 'data/users.json',
			update: 'data/updateUsers.json'
		},

		//Die berühmte URL. Lade von hier die Daten.
		//url: 'data/users.json',
		
		//Die Antwort des Servers (liefert Daten) wird dekodiert, d.h. in ein Format gebracht, damit die Daten ins Store geschrieben werden können.
		reader: {
			type: 'json',
			root: 'users',
			successProperty: 'success'
		}
	}
});