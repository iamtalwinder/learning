import joplin from 'api';
const uslug = require('uslug');

let slugs = {};

function headerSlug(headerText) {
	const s = uslug(headerText);
	let num = slugs[s] ? slugs[s] : 1;
	const output = [s];
	if (num > 1) output.push(num);
	slugs[s] = num + 1;
	return output.join('-');
}

function noteHeaders(noteBody:string) {
	const headers = [];
	const lines = noteBody.split('\n');
	for (const line of lines) {
		const match = line.match(/^(#+)\s(.*)*/);
		if (!match) continue;
		headers.push({
			level: match[1].length,
			text: match[2],
		});
	}
	return headers;
}

function escapeHtml(unsafe:string) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

joplin.plugins.register({
	onStart: async function() {
	

		const panel = await joplin.views.panels.create("panel_1"); //To change

		await joplin.views.panels.addScript(panel, './webview.css');
		await joplin.views.panels.addScript(panel, './webview.js');

		await joplin.views.panels.onMessage(panel, (message) => {
			if (message.name === 'scrollToHash') {
				joplin.commands.execute('scrollToHash', message.hash)
			}
		});

		await joplin.views.panels.setHtml(panel, 'Loading...');

		async function updateTocView() {
			const note = await joplin.workspace.selectedNote();
			slugs = {}; 

			if (note) {
				const headers = noteHeaders(note.body);

				const itemHtml = [];
				for (const header of headers) {
					const slug = headerSlug(header.text);

				
					itemHtml.push(`
						<p class="toc-item" style="padding-left:${(header.level - 1) * 15}px">
							<a class="toc-item-link" href="#" data-slug="${escapeHtml(slug)}">
								${escapeHtml(header.text)}
							</a>
						</p>
					`);
				}

			
				await joplin.views.panels.setHtml(panel, `
					<div class="container">
						${itemHtml.join('\n')}
					</div>
				`);
			} else {
				await joplin.views.panels.setHtml(panel, 'Please select a note to view the table of content');
			}
		}

		await joplin.workspace.onNoteSelectionChange(() => {
			updateTocView();
		});


		await joplin.workspace.onNoteChange(() => { //To change
			updateTocView();
		});

		updateTocView();

	},
});
