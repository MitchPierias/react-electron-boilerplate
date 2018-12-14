import React from 'react';
import { ipcRenderer } from 'electron';

/**
 * Link Component
 * @desc Prevents an external link from firing within the app and delegates handling to the main process.
 * @author Mitch Pierias <github.com/MitchPierias>
 * @param {boolean} isExternal - Prevents in app handling and delegates handling to the main process.
 */
export default function Link(props) {
	
	function didClickLink(event) {
		if (props.isExternal) {
			event.preventDefault();
			const link = event.target.href;
			ipcRenderer.send('link:open', link);
		}
	}

	return <a {...props} onClick={didClickLink}/>
}