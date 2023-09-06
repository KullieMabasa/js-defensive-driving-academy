
document.addEventListener("DOMContentLoaded", function () {


  // Function to fetch and populate staff data
  async function populateStaffData() {
    try {
      let response = await fetch('staff-data.json'); // Replace with your JSON file path
      let staffData = await response.json();
      let tbody = document.getElementById('staff-table-body');

      staffData.forEach((staff) => {
        let row = document.createElement('tr');

        // Create table cells and populate with data
        let imageCell = document.createElement('td');
        let image = document.createElement('img');
        image.src = staff.imagePath;
        image.alt = 'Staff Image';
        image.width = 100;
        imageCell.appendChild(image);

        let staffNumberCell = document.createElement('td');
        staffNumberCell.textContent = staff.staffNumber;

        let firstNameCell = document.createElement('td');
        firstNameCell.textContent = staff.firstName;

        let lastNameCell = document.createElement('td');
        lastNameCell.textContent = staff.lastName;

        let workNumberCell = document.createElement('td');
        workNumberCell.textContent = staff.workNumber;

        let jobDescriptionCell = document.createElement('td');
        jobDescriptionCell.textContent = staff.jobDescription;

        let emailAddressCell = document.createElement('td');
        emailAddressCell.textContent = staff.emailAddress;

        // Append cells to the row
        row.appendChild(imageCell);
        row.appendChild(staffNumberCell);
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(workNumberCell);
        row.appendChild(jobDescriptionCell);
        row.appendChild(emailAddressCell);

        // Append the row to the table body
        tbody.appendChild(row);
      });
    } catch (error) {
      console.error('Error fetching or parsing data:', error);
    }
  }

  // Call the function to populate staff data
  populateStaffData();
  });