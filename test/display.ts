import { display } from 'display';
display.autoOff = false;
display.on = true;
display.addEventListener('change', () => {
	console.log('changed');
});
display.addEventListener('patata', e => {
	e.split('');
});
