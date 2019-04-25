# Flash Message
## Requirements
* Jquery 1.11.0

## Install
Download the CSS and JS-File and include the following code to your page:

```
<link rel="stylesheet" href="/src/Framework/Resources/css/FlashMessage/simoFlashMessage.css" />
<script type="text/javascript" src="/src/Framework/Resources/js/FlashMessage/SimoFlashMessage.js"></script>
<script>
	let simoFlashMessage = new SimoFlashMessage();
</script>
```

## Functions
Name | Description
---- | -----------
showError(title, message) | Displays message with red background
showWarning(title, message) | Displays message with yellow background
showSuccess(title, message) | Displays message with green background
