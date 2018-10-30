# Common-CRM-Functions (WORK IN PROGRESS)
This is a single web resource file, so it can be added to your deployment manually or added via the solution provided. Nothing other than the web resource is added to your deployment.

To add to your CRM:

1) click the download as zip button above
2) Open the zip folder and extract the contents
3) Import the zipped managed solution folder to your CRM, or add the single .js file to your own solution as a web resource
4) Be sure to add the script to your form before attempting to call any of the functions

The Common CRM Functions JavaScript library is designed for Microsoft Dynamics CRM Administrators or Developers who would like an easy way to complete customizations in CRM without having to worry about all of the syntax of the XRM structure. It gives easy to use functions to complete a wide variety of actions, the combination of which can solve most issues facing a CRM deployment. 

This wiki will give an explanation of each function, and the input parameters needed to for it to run successfully. There are some important notes on this library.

***

1) In order for you to access the functions in your CRM Org, the web resource must be added to the entity form.
2) Many of the functions have built in fail-safes, preventing them from running and throwing an error if a field is not present or incorrect information was passed in. Most, if not all, of these fail-safes will create an entry in your console log indicating what function was bypassed and why. While not perfect, it should help avoid common mistakes.
3) All functions calls are formatted as 'CRM.<functionName>' for easier understanding of which calls in your code point to this library

## Function Documentation by Type
[Field Visibility Functions](https://github.com/gole1296/Common-CRM-Functions/wiki/Change-Field-Visibility-Functions) <br>
[Page / Browser Context Functions](https://github.com/gole1296/Common-CRM-Functions/wiki/Page---Browser-Context-Functions)<br>
[Miscellaneous Functions](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions)<br>
[Locking Fields as Read Only](https://github.com/gole1296/Common-CRM-Functions/wiki/Read-Only-and-Editable-Fields)<br>
[Getting and Setting Field Values](https://github.com/gole1296/Common-CRM-Functions/wiki/Getting-and-Setting-Field-Values)<br>

## All Functions
<br>[CRM.fieldExists](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#field--tab--section-exists)
<br>[CRM.tabExists](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#field--tab--section-exists)
<br>[CRM.sectionExists](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#field--tab--section-exists)
<br>[CRM.returnValue](https://github.com/gole1296/Common-CRM-Functions/wiki/Getting-and-Setting-Field-Values#get-field-value)
<br>[CRM.notificationBar](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#set-or-clear-notification-bar-on-form)
<br>[CRM.clearNotification](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#set-or-clear-notification-bar-on-form)
<br>[CRM.showField](https://github.com/gole1296/Common-CRM-Functions/wiki/Change-Field-Visibility-Functions)
<br>[CRM.showFieldArray](https://github.com/gole1296/Common-CRM-Functions/wiki/Change-Field-Visibility-Functions)
<br>[CRM.showSection](https://github.com/gole1296/Common-CRM-Functions/wiki/Change-Field-Visibility-Functions)
<br>[CRM.showTab](https://github.com/gole1296/Common-CRM-Functions/wiki/Change-Field-Visibility-Functions)
<br>[CRM.getLookupValue](https://github.com/gole1296/Common-CRM-Functions/wiki/Getting-and-Setting-Field-Values#get-lookup-field-values)
<br>[CRM.setLookupValue](https://github.com/gole1296/Common-CRM-Functions/wiki/Getting-and-Setting-Field-Values#set-lookup-field-value)
<br>[CRM.saveRecord](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#save-record)
<br>[CRM.fieldWarning](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#field-warning)
<br>[CRM.openQuickCreate](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#open-quick-create-form)
<br>[CRM.showBPF](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#show-or-hide-business-process-flow)
<br>[CRM.refreshWebResource](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#refresh-web-resource)
<br>[CRM.setReadOnly](https://github.com/gole1296/Common-CRM-Functions/wiki/Read-Only-and-Editable-Fields#set-a-field-to-be-read-only-non-editable)
<br>[CRM.setReadOnlyArray](https://github.com/gole1296/Common-CRM-Functions/wiki/Read-Only-and-Editable-Fields#set-an-array-of-fields-to-be-read-only)
<br>[CRM.setReadOnlySection](https://github.com/gole1296/Common-CRM-Functions/wiki/Read-Only-and-Editable-Fields#set-all-fields-in-a-section-to-be-read-only)
<br>[CRM.setReadOnlyTab](https://github.com/gole1296/Common-CRM-Functions/wiki/Read-Only-and-Editable-Fields#set-all-fields-in-a-tab-to-be-read-only)
<br>[CRM.setReadOnlyAllFields](https://github.com/gole1296/Common-CRM-Functions/wiki/Read-Only-and-Editable-Fields#set-all-fields-on-the-form-to-be-read-only)
<br>[CRM.setRequired](https://github.com/gole1296/Common-CRM-Functions/wiki/Field-Requirement-Level#mark-a-field-required--recommended--not-required)
<br>[CRM.setRequiredArray](https://github.com/gole1296/Common-CRM-Functions/wiki/Field-Requirement-Level#mark-an-array-of-fields-required--recommended--not-required)
<br>[CRM.formReload](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#form-reload-and-refresh)
<br>[CRM.optionSetText](https://github.com/gole1296/Common-CRM-Functions/wiki/Getting-and-Setting-Field-Values#get-option-set-text-value)
<br>[CRM.formatPhone](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#format-phone-number-10-digit-us-format)
<br>[CRM.openLookupRecord](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#open-the-contents-of-a-lookup-field)
<br>[CRM.filterLookup](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#filter-a-lookup-field-based-on-another-field-value)
<br>[CRM.pageContext](https://github.com/gole1296/Common-CRM-Functions/wiki/Page---Browser-Context-Functions#page-context-function)
<br>[CRM.openForm](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#open-form)
<br>[CRM.roleCheck](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#security-role-check)
