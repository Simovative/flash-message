/**
 * @author SE, MG
 */
class SimoFlashMessage {
	
	/**
	 * @author SE, MG
	 */
	constructor() {
		this.handleAjaxErrorResponse = this.handleAjaxErrorResponse.bind(this);
		
		$(document).on('click', '.simo-flash-message-close', function() {
			$(this).closest('.simo-flash-message').remove();
		});
		
		if ($('#simo-flash-message-container').length === 0) {
			$('body').prepend('<div id="simo-flash-message-container"></div>');
		}
	}
	
	/**
	 * @author SE, MG
	 * @param {string} title
	 * @param {string} message
	 * @return {void}
	 */
	showError(title, message) {
		this._show(title, message, 'simo-flash-message-error', 'far fa-times', true);
	}
	
	/**
	 * @author SE, MG
	 * @param {string} title
	 * @param {string} message
	 * @return {void}
	 */
	showWarning(title, message) {
		this._show(title, message, 'simo-flash-message-warning', 'far fa-exclamation-triangle', false);
	}
	
	/**
	 * @author SE, MG
	 * @param {string} title
	 * @param {string} message
	 * @return {void}
	 */
	showSuccess(title, message) {
		this._show(title, message, 'simo-flash-message-success', 'far fa-check', false);
	}
	
	/**
	 * @author SE, MG
	 * @param {string} title
	 * @param {string} message
	 * @return {void}
	 */
	showInfo(title, message) {
		this._show(title, message, 'simo-flash-message-error-info', 'far fa-info-circle', false)
	}
	
	/**
	 * @author SE, MG
	 * @param {string} title
	 * @param {string} message
	 * @param {string} alertClass
	 * @param {string} iconClass
	 * @param {boolean} showPermanent
	 * @return {void}
	 */
	_show(title, message, alertClass, iconClass, showPermanent) {
		let date = new Date();
		let currentTime = date.toLocaleTimeString('de-DE');
		let template = `
			<div class="simo-flash-message" style="display: none;min-width: 200px;">
				<div class="simo-flash-message-content ${alertClass}">
					<button type="button" class="simo-flash-message-close" aria-hidden="true">x</button>
					<div style="text-transform: uppercase;">
						<span class="simo-flash-message-icon ${iconClass}"></span>&nbsp;<strong class="simo-flash-message-head">${title}</strong>
					</div>
					<div style="margin-top:5px;" class="simo-flash-message-body">
						${message}
					</div>
					<div class="simo-flash-message-time">${currentTime}</div>
				</div>
			</div>`;
		
		let addedMessage = $(template).appendTo('#simo-flash-message-container');
		this._fade(addedMessage, showPermanent);
	}
	
	/**
	 * @author SE, MG
	 * @param {string} addedMessage
	 * @param {boolean} showPermanent
	 * @return {void}
	 */
	_fade(addedMessage, showPermanent) {
		$(addedMessage).fadeIn(500);
		if (true === showPermanent) {
			return;
		}
		$(addedMessage).delay(2000).fadeOut(1500, function() {
			$(this).remove();
		});
		$(addedMessage).on('mouseover', function() {
			$(this).stop(true).fadeIn(0);
		});
		
		$(addedMessage).on('mouseout', function() {
			$(this).delay(2000).fadeOut(1500, function() {
				$(this).remove();
			});
		});
	}
}