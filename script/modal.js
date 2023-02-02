const reserveBtn = document.querySelector('.header__content .button')
const modalWindow = document.querySelector('.modal-window')
const closeModalBtn = document.querySelector('.modal-window__close')

reserveBtn.addEventListener('click', e => {
	e.stopPropagation()
	openModal()
})
closeModalBtn.addEventListener('click', closeModal)

function openModal() {
	modalWindow.classList.remove('modal-window_hide')
}

function closeModal() {
	modalWindow.classList.add('modal-window_hide')
}

document.addEventListener('click', e => {
	const withinBoundaries = e.composedPath().includes(modalWindow)

	if (!withinBoundaries) {
		closeModal()
	}
})
