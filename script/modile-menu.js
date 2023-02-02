const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')
const closeMenuBtn = document.querySelector('.mobile-menu__close')

burger.addEventListener('click', e => {
	e.stopPropagation()
	openMobileMenu()
})
closeMenuBtn.addEventListener('click', closeMobileMenu)

function openMobileMenu() {
	mobileMenu.style.display = 'block'
}

function closeMobileMenu() {
	mobileMenu.style.display = 'none'
}

document.addEventListener('click', e => {
	const withinBoundaries = e.composedPath().includes(mobileMenu)

	if (!withinBoundaries) {
		closeMobileMenu()
	}
})
