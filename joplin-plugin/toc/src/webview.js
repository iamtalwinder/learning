document.addEventListener('click', event => {
	const element = event.target;
	if (element.className === 'toc-item-link') {
		// Post the message and slug info back to the plugin:
		webviewApi.postMessage({
			name: 'scrollToHash',
			hash: element.dataset.slug,
		});
	}
});