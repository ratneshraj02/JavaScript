const input = document.getElementById('input-review');
const button = document.getElementById('add-review');
const reviewContainer = document.querySelector('.show-review');

button.addEventListener('click', () => {
	const reviewText = input.value.trim();

	if (reviewText === '') {
		alert('Please enter a review');
		return;
	}

	const review = document.createElement('p');
	review.textContent = reviewText;

	reviewContainer.appendChild(review);

	input.value = '';
});
