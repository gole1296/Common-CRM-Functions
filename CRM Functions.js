/*
Dynamics CRM Common JavaScript functions: by Tom Gioielli
Project Available on Github at https://github.com/gole1296/Common-CRM-Functions
Version 2018.11.08
*/

function controlNotPresent(process, control) {
	console.warn(process + " was not processed for the control " + control + " because it does not exist on the form.");
}

var CRM = {
	fieldExists: function (field) {
		//Returns a value of true or false indicating whether the field exists on the current form
		var fieldControl = Xrm.Page.getAttribute(field);
		return fieldControl != null;
	},

	tabExists: function (tab) {
		var tab = Xrm.Page.ui.tabs.get(tab);
		return tab != null;
	},

	sectionExists: function (tab, section) {
	    var section = Xrm.Page.ui.tabs.get(tab).sections.get(section);
    	return section != null;	
	},

	returnValue: function (field) {
		// Returns the value of a standard CRM Field after checking that it exists
	    if (CRM.fieldExists(field)) {
	        var fieldValue = Xrm.Page.getAttribute(field).getValue();
	        return fieldValue;
		}
		controlNotPresent("CRM.returnValue", field);
	},

	getLookupValue: function (field) {
		if (CRM.fieldExists(field)) {
			var value = {
				id: Xrm.Page.getAttribute(field).getValue()[0].id,
				name: Xrm.Page.getAttribute(field).getValue()[0].name,
				entity: Xrm.Page.getAttribute(field).getValue()[0].entityType
			};
			return value;
		}
		controlNotPresent("CRM.returnValue", field);
	},

	notificationBar: function (message, type, ID) {
		// Sets a form notification banner with the passed message
		if (type.toUpperCase() != "INFORMATION" && type.toUpperCase() != "WARNING" && type.toUpperCase() != "ERROR") {
			console.warn("CRM Notification Bar function was passed an invalid message type: " + type.toUpperCase());
			return;
		}
		Xrm.Page.ui.setFormNotification(message, type.toUpperCase(), ID);
	},

	clearNotification: function (ID) {
		// Clears the notification bar on a form based on the string ID
		Xrm.Page.ui.clearFormNotification(ID);
	},

	showField: function (field, visible) {
	    //Sets visibility of a field (true/false)
	    if (Xrm.Page.getControl(field) != null) {
			Xrm.Page.getControl(field).setVisible(visible);
			return;
		}
		controlNotPresent("CRM.showField", field);
	},

	showFieldArray: function (fieldArray, visible) {
		//Takes all values in a passed in array and changes the visibility property
		for (i=0, len = fieldArray.length; i < len; i++) {
			if (Xrm.Page.getControl(fieldArray[i]) != null) {
				Xrm.Page.getControl(fieldArray[i]).setVisible(visible);
			}
			else {
				controlNotPresent("CRM.showFieldArray", fieldArray[i]);
			}
		}
	},

	showSection: function (tab, section, visible) {
	    //Sets visibility of a section (true/false)
	    if (CRM.sectionExists(tab, section)) {
			Xrm.Page.ui.tabs.get(tab).sections.get(section).setVisible(visible);
			return;
		}
		console.warn("CRM.showSection was not processed because the tab or section passed to the function were not valid or were not on the form");
	},

	showTab: function (tab, visible) {
	    //Sets visibility of a tab (true/false)
	    if (CRM.tabExists(tab)) {
			Xrm.Page.ui.tabs.get(tab).setVisible(visible);
			return;
		}
		controlNotPresent("CRM.showTab", tab);
	},

	setField: function (field, value, forceSave) {
	    //Sets the value of a field to the parameter input
	    if (CRM.fieldExists(field)) {
	        Xrm.Page.getAttribute(field).setValue(value);
	        if (forceSave) {
	            CRM.saveRecord();
			}
			return;
		}
		controlNotPresent("CRM.setField", field);
	},

	setLookupValue: function (lookupField, name, id, entityType) {
	    if (CRM.fieldExists(lookupField)) {
	       // var lookupid = null;
	        var lookupObject = Xrm.Page.getAttribute(lookupField);
	        var value = new Array();
	        value[0] = new Object();
	        value[0].id = id;
	        value[0].name = name;
	        value[0].entityType = entityType;

			lookupObject.setValue(value);
			return;
		}
		controlNotPresent("CRM.setLookupValue", lookupField);
	},

	saveRecord: function () {
		//Save the current record
		Xrm.Page.data.entity.save();
	},

	fieldWarning: function (field, message, id) {
	    //Sets a warning message on a specific field, which will prevent saving of the record. 
	    if (CRM.fieldExists(field)) {
	        Xrm.Page.getControl(field).setNotification(message, id);
	    }
	},

	openQuickCreate: function (quickCreateEntity) {
        //Must pass in the entity name of the quick create form you want to open. Quick create must be enabled on target entity in your solution settings
	    var thisRecord =
            {
			entityType: Xrm.Page.data.entity.getEntityName(),
			id: Xrm.Page.data.entity.getId()
		    };
		Xrm.Utility.openQuickCreate(quickCreateEntity, thisRecord);
	},

	showBPF: function (visible) {
        //Hides the business process flow from the form. Will check to ensure there is an active process before hiding
		var activeProcess = Xrm.Page.data.process.getActiveProcess();
		if (activeProcess != null)
		{
			Xrm.Page.ui.process.setVisible(visible);
			return;
		}
		console.warn("CRM.showBPF was not processed because there is no active process flow on this record");
	},

	refreshWebResource: function (name) {
        //Refreshes just the specified web resource on a form. Can be very helpful for resources that pull data and display it directly from the form to update without refreshing page
	    var webResourceControl = Xrm.Page.getControl(name);
	    if (webResourceControl != null) {
	        var src = webResourceControl.getSrc();
	        webResourceControl.setSrc(null);
			webResourceControl.setSrc(src);
			return;
		}
		controlNotPresent("CRM.refreshWebResource", name);
	},

	setReadOnly: function (field, locked) {
	    if (CRM.fieldExists(field)) {
			Xrm.Page.ui.controls.get(field).setDisabled(locked);
			return;
		}
		controlNotPresent("CRM.setReadOnly", field);
	},

	setReadOnlyArray: function (fieldArray, locked) {
		// Takes all values in a passed in array for changed the visibility property
			for (i=0, len = fieldArray.length; i < len; i++) {
				if (CRM.fieldExists(fieldArray[i])) {
					Xrm.Page.ui.controls.get(fieldArray[i]).setDisabled(locked);
				}
				else {
					controlNotPresent("CRM.setReadOnlyArray", fieldArray[i]);
				}
			}
	},

	setReadOnlySection: function (tabName, sectionName, locked) {
		// Cycles through all controls on the form and checks the section they are in. If it matches the parameter section, the field is marked as disabled or enabled
		Xrm.Page.ui.tabs.get(tabName).sections.get(sectionName).controls.forEach(
			// Delegate to set the status of all controls within the section.
			function (control, index) {
				control.setDisabled(locked);
			});
	
	},

	setReadOnlyTab: function(tabName, locked) {
		// Looks for the tab and finds all sections placed within it. Then marks each field in those sections as locked
		var tab = Xrm.Page.ui.tabs.get(tabName);
		if (CRM.tabExists(tabName)) {
			var tabsections = tab.sections.get();
			for (var i in tabsections) {
				var sectionName = tabsections[i].getName();
				CRM.setReadOnlySection(tabName, sectionName, locked);
			}
		}
		console.warn("CRM.setReadOnlyTab was not processed because there is no tab named " + tabName + " on the form." );
	},

	setReadOnlyAllFields: function (locked) {
		Xrm.Page.ui.controls.forEach(function (control, index) {
			var controlType = control.getControlType();
			if (controlType != "iframe" && controlType != "webresource" && controlType != "subgrid") {
				control.setDisabled(locked);
			}
		});
	 },

	setRequired: function (field, requirementLevel) {
		// Checks that the field exists on the form, and that the proper type of requirement variable is inputted. Will mark the field with the noted level if true
		// Automatically takes the requirement level and converts to lowercase to bypass issues if capital letters are entered in parameter
		var requirement = requirementLevel.toLowerCase();
		if (CRM.fieldExists(field)) {
	        if (requirement != "none" && requirement != "recommended" && requirement != "required") {
				console.warn("Improper requirement level input on CRM.setRequired function. You used " + requirementLevel + " in your code. Operation aborted.");
				return;
	        }
	        else {
				Xrm.Page.getAttribute(field).setRequiredLevel(requirement);
				return;
	        }
		}
		controlNotPresent("CRM.setRequired", field);
	},

	setRequiredArray: function (fieldArray, requirementLevel) {
		// Checks that the field exists on the form, and that the proper type of requirement variable is inputted. Will mark the field with the noted level if true
		// Automatically takes the requirement level and converts to lowercase to bypass issues if capital letters are entered in parameter
		var requirement = requirementLevel.toLowerCase();		
		if (requirement != "none" && requirement != "recommended" && requirement != "required") {
			console.warn("Improper requirement level input on CRM.setRequiredArray function. You used " + requirementLevel + " in your code. Operation aborted.");
			return;
		}
		for (i=0, len = fieldArray.length; i < len; i++) {
			if (CRM.fieldExists(fieldArray[i])) {
				Xrm.Page.getAttribute(fieldArray[i]).setRequiredLevel(requirement);
			}
			else {
				controlNotPresent("CRM.setRequiredArray", fieldArray[i]);
			}
		}
	},

	formReload: function (type) {
		if (type == 1) {
			// Refreshes the main body of the form only
			Xrm.Page.data.refresh();
		}
		else if (type == 2) {
			// Reloads the entire form, including the header and footer
			var id = Xrm.Page.data.entity.getId();
			var entity = Xrm.Page.data.entity.getEntityName();
			Xrm.Utility.openEntityForm(entity, id);
		}
		else {
			console.warn("Invalid form refresh type entered for crm.formReload function.");
		}
	},

	optionSetText: function (field) {
		// Returns the text value of an option set field, as opposed to crm.returnValue which would bring back the ID
		if (CRM.fieldExists(field)) {
			var text = '';
			if (CRM.returnValue(field) != null) {
				text = Xrm.Page.getAttribute(field).getSelectedOption().text;
			}
			return text;
		}
		controlNotPresent("CRM.optionSetText", field);
	},

	formatPhone: function (field) {
		// Takes all symbols out of a phone number and formats it. US Phone numbers only (10 digits)
		if (CRM.fieldExists(field)) {
			 var originalPhone = CRM.returnValue(field);
			 var phone2 = originalPhone.replace(/\D/g, '');
			 if (phone2.length == 10) {
			 	var formattedPhone = "(" + phone2.substr(0, 3) + ") " + phone2.substr(3, 3) + "-" + phone2.substr(6, 4);			 
				if (formattedPhone != originalPhone) {
					CRM.setField(field, formattedPhone, true);
				}
			}
			return;
		}
		controlNotPresent("CRM.formatPhone", field);
	},

	openLookupRecord: function (field, newWindow){
		if (CRM.fieldExists(field)) {
			if (newWindow == true || newWindow == false) {
				var recordType = Xrm.Page.getAttribute(field).getValue()[0].entityType;
				var recordGUID = Xrm.Page.getAttribute(field).getValue()[0].id;
				var windowOptions = {
					openInNewWindow: newWindow
				};
				Xrm.Utility.openEntityForm(recordType, recordGUID, null, windowOptions);
				return;
				}
				console.warn("CRM.openLookupRecord expected a boolean as the second argument, but you did not give it a boolean.");
				return;
			}
			controlNotPresent("CRM.openLookupRecord", field);
			
	},

	filterLookup: function(filterField, referenceField, criteriaField) {	
		if (Xrm.Page.getControl(filterField) != null) {
			// add the event handler for PreSearch Event
			Xrm.Page.getControl(filterField).addPreSearch(addFilter);
			console.log("A filter was applied to the field " + filterField + " by a JavaScript function. The filter references the field " + referenceField + ".");
			return;
		}
		else {
			console.warn("Either the control to be filtered (" + filterField + ") or the reference field (" + referenceField + ") does not exist on the form.");
			return;
		}
		
		function addFilter() {
			var recordID = null;
			var recordLookup;
			var fetchQuery;
			try {
				//Check if control exist on form
				if (Xrm.Page.getControl(referenceField) != null && Xrm.Page.getControl(referenceField).getAttribute().getValue() != null) {
					//Get Account lookup value
					recordLookup = Xrm.Page.getControl(referenceField).getAttribute().getValue();
					//Get the account id
					recordID = recordLookup[0].id;
				}
				//Build fetch query
				if (recordID != null || recordID != undefined) {
					fetchQuery = "<filter type='and'>"+
								 "<condition attribute='"+criteriaField+"' operator='eq' value='" + recordID + "' />"+
								 "</filter>";
					//add custom filter
					Xrm.Page.getControl(filterField).addCustomFilter(fetchQuery);
				}
			} catch (e) {
				Xrm.Utility.alertDialog("addFilter Error: " + (e.description || e.message))
			}
		}
	},
	
randomString: function (stringArray) {
	//Takes an array of strings and returns a randomized value. Useful for displaying interesting and unique error or loading messages
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
	if (stringArray == null) {
		stringArray = [
			"I'm working as hard as I can...",
			"The robot uprising will not be televised",
			"Beep Boop! I'm just a computer doing my thing",
			"Help, I'm stuck inside a computer!",
			"Do Androids dream of electric sheep?",
		];
	}
	return stringArray[getRandomInt(stringArray.length)];
},

pageContext: function () {
	var pageContext = {
		entity: Xrm.Page.data.entity.getEntityName(),							//String value of entity name
		recordID: Xrm.Page.data.entity.getId(),
		recordName:  Xrm.Page.data.entity.getPrimaryAttributeValue(),			//String value of record name
		orgName: Xrm.Page.context.getOrgUniqueName(),
		clientURL: Xrm.Page.context.getClientUrl(),
		userGUID: Xrm.Page.context.getUserId(),									//GUID of user
		userRoles: Xrm.Page.context.getUserRoles(),								//Returns an array with all user roles GUID
		userName: Xrm.Page.context.getUserName(),								//String of user name
		isDirty: Xrm.Page.data.entity.getIsDirty(),								//Returns a boolean if any field on the form has been modified
		clientType: Xrm.Page.context.client.getClient(),						//values can be 'Web' / 'Outlook' / 'Mobile'
		formName: Xrm.Page.ui.formSelector.getCurrentItem().getLabel()			//String value of form name
	};
	return pageContext;
},

openForm: function(formName) {
	var currentForm = Xrm.Page.ui.formSelector.getCurrentItem();
	if (currentForm != null) {
		if (currentForm.getLabel().toLowerCase() != formName.toLowerCase()) {
			var availableForms = Xrm.Page.ui.formSelector.items.get();
			for (var i in availableForms) {
				var form = availableForms[i];
				if (form.getLabel().toLowerCase() == formName.toLowerCase()) {
					form.navigate();
					return;
				}
				console.warn(formName + " is not a valid form name, so it was unable to be opened by CRM.openForm function");
			}
		}
	}
},

roleCheck: function(roleGUID) {
	// Takes a security role GUID and checks all roles assigned to current user to see if they have been assigned the role
	//NOT YET TESTED SUCCESSFULLY
	var context = CRM.pageContext();
	var userRoles = context.userRoles;
	for (var i in userRoles) {
		if (userRoles[i] == roleGUID) {
			return true;
		}
	}
	return false;
},

openFullscreen: function() {
    top.window.moveTo(0, 0);
    if (document.all) {
        top.window.resizeTo(screen.availWidth, screen.availHeight);
	} 
	else if (document.layers || document.getElementById) {
        if (top.window.outerHeight < screen.availHeight ||
           top.window.outerWidth < screen.availWidth) {
            top.window.outerHeight = screen.availHeight;
            top.window.outerWidth = screen.availWidth;
        }
    }
}
	//Mark all fields in section read only
	//Mark all fields in section required
	//Pick List Item Exists
	//Add or remove pick list items by name or ID
	//Set Focus on form
}
