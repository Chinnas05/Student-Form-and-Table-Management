function saveStudent() {
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;

    if (!name || !age || !gender || !course || !email) {
        alert('Please fill out all fields.');
        return;
    }

    // Add a new row to the table
    const table = document.getElementById('studentTable').querySelector('tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    `;

    table.appendChild(newRow);

    // Clear the form
    document.getElementById('studentForm').reset();
}

function deleteRow(button) {
    // Remove the row containing the delete button
    const row = button.parentElement.parentElement;
    row.remove();
}