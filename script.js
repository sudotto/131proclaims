window.onload = function() {
	let total_entries = 0;
	let total_replies = 0;
	let total_chars = 0;
	let total_lines = 0;
	const entries = document.querySelectorAll('.entry');
	entries.forEach(entry => {
		total_chars += entry.textContent.length;
		total_lines++;
		total_entries++;
	});
	const replies = document.querySelectorAll('.reply');
	entries.forEach(reply => {
		total_chars += reply.textContent.length;
		total_lines++;
		total_replies++;
	});
	const entry_counter = document.getElementById('entries');
	const reply_counter = document.getElementById('replies');
	const lines = document.getElementById('lines');
	const chars = document.getElementById('chars');
	if(entry_counter){
		entry_counter.innerText = `${total_entries} messages from 131`;
	}
	if(reply_counter){
		reply_counter.innerText = `${total_replies} messages from others`;
	}
	if(lines){
		lines.innerText = `${total_lines} lines`;
	}
	if(chars){
		chars.innerText = `${total_chars} letters`;
	}
};
