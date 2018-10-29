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

## Function Documentation by Type
[Field Visibility Functions](https://github.com/gole1296/Common-CRM-Functions/wiki/Change-Field-Visibility-Functions) <br>
[Page / Browser Context Functions](https://github.com/gole1296/Common-CRM-Functions/wiki/Page---Browser-Context-Functions)<br>
[Miscellaneous Functions](https://github.com/gole1296/Common-CRM-Functions/wiki/Miscellaneous-Functions)<br>
