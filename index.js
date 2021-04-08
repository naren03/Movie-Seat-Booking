const seats = document.querySelector('.seat-layout');
const movies = document.getElementById('selectMovie');
const count = document.querySelector('.seats');
const amount = document.querySelector('.amount');

//update amount
function updateAmount() {
	let totalSeats = document.querySelectorAll('.row .seat.selected');

	let movieAmount = +movies.value;

	count.innerHTML = totalSeats.length;
	amount.innerHTML = `&#8377;${movieAmount * totalSeats.length}`;
}

//whenever seat is added or removed update amount
seats.addEventListener('click', (e) => {
	if (!e.target.classList.contains('occupied')) {
		e.target.classList.toggle('selected');

		updateAmount();
	}
});

//whenever movie changes update amount
movies.addEventListener('change', () => {
	updateAmount();
});
