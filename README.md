# Common-CRM-Functions (WORK IN PROGRESS)
This is a single web resource file, so it can be added to your deployment manually or added via the solution provided. Nothing other than the web resource is added to your deployment.

To add to your CRM:

1) click the download as zip button above
2) Open the zip folder and extract the contents
3) Import the zipped solution file, or add the .js file to your own solution
4) Be sure to add the script to your form before attempting to call any of the functions

The Common CRM Functions JavaScript library is designed for Microsoft Dynamics CRM Administrators or Developers who would like an easy way to complete customizations in CRM without having to worry about all of the syntax of the XRM structure. It gives easy to use functions to complete a wide array of actions, the combination of which can solve most issues facing a CRM deployment. 

This wiki will give an explanation of each function, and the input parameters needed to for it to run successfully. There are some important notes on this library.

***

1) In order for you to access the functions in your CRM Org, the web resource must be added to the entity form.
2) Many of the functions have built in fail-safes, preventing them from running and throwing an error if a field is not present or incorrect information was passed in. Most, if not all, of these fail-safes will create an entry in your console log indicating what function was bypassed and why. While not perfect, it should help avoid common mistakes.
3) I am not a developer. I did not write a line of code in my life until the past few years when I began work as a functional CRM Administrator. Many of these functions have been created with the help of other websites and tutorials, then tweaked by me. The code may be ugly, but it works. And really, who cares how the sausage is made as long as it tastes good.
4) All functions calls are formatted as 'CRM.<functionName>' for easier understanding of which calls in your code point to this library

## Function Documentation by Type
[Field Visibility Functions](https://github.com/gole1296/Common-CRM-Functions/wiki/Change-Field-Visibility-Functions) <br>
[Page / Browser Context Functions](https://github.com/gole1296/Common-CRM-Functions/wiki/Page---Browser-Context-Functions)<br>
[Miscellaneous Functions](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions)<br>
[Locking Fields as Read Only](https://github.com/gole1296/Common-CRM-Functions/wiki/Read-Only-and-Editable-Fields)<br>

## All Functions
<br>[CRM.fieldExists]
<br>[CRM.tabExists]
<br>[CRM.sectionExists]
<br>[CRM.returnValue]
<br>[CRM.notificationBar]
<br>[CRM.clearNotification]
<br>[CRM.showField](https://github.com/gole1296/Common-CRM-Functions/wiki/Change-Field-Visibility-Functions)
<br>[CRM.showFieldArray](https://github.com/gole1296/Common-CRM-Functions/wiki/Change-Field-Visibility-Functions)
<br>[CRM.showSection](https://github.com/gole1296/Common-CRM-Functions/wiki/Change-Field-Visibility-Functions)
<br>[CRM.showTab](https://github.com/gole1296/Common-CRM-Functions/wiki/Change-Field-Visibility-Functions)
<br>[CRM.setLookupValue]
<br>[CRM.saveRecord](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#save-record)
<br>[CRM.fieldWarning]
<br>[CRM.openQuickCreate](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#open-quick-create-form)
<br>[CRM.showBPF](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#show-or-hide-business-process-flow)
<br>[CRM.refreshWebResource](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#refresh-web-resource)
<br>[CRM.setReadOnly](
<br>[CRM.setReadOnlyArray]
<br>[CRM.setReadOnlySection]
<br>[CRM.setReadOnlyTab]
<br>[CRM.setReadOnlyAllFields]
<br>[CRM.setRequired] (https://github.com/gole1296/Common-CRM-Functions/wiki/Field-Requirement-Level#mark-a-field-required--recommended--not-required)
<br>[CRM.setRequiredArray](https://github.com/gole1296/Common-CRM-Functions/wiki/Field-Requirement-Level#mark-an-array-of-fields-required--recommended--not-required)
<br>[CRM.formReload](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#form-reload-and-refresh)
<br>[CRM.optionSetText]
<br>[CRM.formatPhone](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#format-phone-number-10-digit-us-format)
<br>[CRM.openLookupRecord](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#open-the-contents-of-a-lookup-field)
<br>[CRM.filterLookup](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions#filter-a-lookup-field-based-on-another-field-value)
<br>[CRM.randomString]
<br>[CRM.pageContext](https://github.com/gole1296/Common-CRM-Functions/wiki/Page---Browser-Context-Functions#page-context-function)
<br>[CRM.openForm]
<br>[CRM.roleCheck]
