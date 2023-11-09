window.addEventListener('load', () => {
	const toggleDialogButton = document.getElementById('toggleDialog');
	const dialogContainer = document.getElementById('dialogContainer');
	const toggleDialogIcon = document.getElementById('toggleDialogIcon');
	const toggleRightDialogButton = document.getElementById('toggleRightDialog');
	const rightDialogContainer = document.getElementById('rightDialogContainer');
	const btnPrestamo = document.getElementById('basic-addon2');
	const mdPrestamo = document.getElementById('alert-dialog');
	const closePrestamo = document.getElementById('closeModal');
	const closeRightDialog = document.getElementById('closeRightDialog');
	const body = document.querySelector('body');
	dialogContainer.style.display = 'none';
	toggleDialogButton.addEventListener('click', () => {
		if (dialogContainer.style.display === 'block') {
			dialogContainer.style.display = 'none';
			toggleDialogIcon.src = '/images/menu.svg';
			body.style.overflowY = 'scroll';
		} else {
			body.style.overflow = 'hidden';

			dialogContainer.style.display = 'block';
			toggleDialogIcon.src = '/images/close.svg';
		}
		return;
	});
	rightDialogContainer.style.display = 'none';
	toggleRightDialogButton.addEventListener('click', () => {
		if (rightDialogContainer.style.display === 'block') {
			rightDialogContainer.style.display = 'none';
		} else {
			body.style.overflow = 'hidden';
			rightDialogContainer.style.boxShadow = ' 18px 3px 0px 900px rgba(0,0,0,0.75) ';
			rightDialogContainer.style.display = 'block';
		}
	});
	closeRightDialog.addEventListener('click', () => {
		if (rightDialogContainer.style.display === 'block') {
			rightDialogContainer.style.display = 'none';
			body.style.overflowY = 'scroll';
		} else {
			rightDialogContainer.style.display = 'block';
		}
	});
	mdPrestamo.style.display = 'none';
	btnPrestamo.addEventListener('click', () => {
		if (mdPrestamo.style.display === 'block') {
			mdPrestamo.style.display = 'none';
		} else {
			body.style.overflow = 'hidden';

			mdPrestamo.style.boxShadow = ' 18px 3px 0px 900px rgba(0,0,0,0.75) ';

			mdPrestamo.style.display = 'block';
		}
	});
	closePrestamo.addEventListener('click', () => {
		if (mdPrestamo.style.display === 'block') {
			mdPrestamo.style.display = 'none';
			body.style.overflowY = 'scroll';
		} else {
			mdPrestamo.style.display = 'block';
		}
	});
});