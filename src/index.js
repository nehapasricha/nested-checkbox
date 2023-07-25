import "./styles.css";

// Get all parent checkboxes
const parentCheckboxes = document.querySelectorAll(".parent-checkbox");

// Attach event listeners to parent checkboxes
parentCheckboxes.forEach((parentCheckbox) => {
  parentCheckbox.addEventListener("change", function () {
    // Get the associated child checkboxes
    const childCheckboxes = this.parentNode.nextElementSibling.querySelectorAll(
      ".child-checkbox"
    );

    // Set the checked state of child checkboxes to match the parent checkbox
    childCheckboxes.forEach((childCheckbox) => {
      childCheckbox.checked = this.checked;
    });
  });
});

// Attach event listeners to child checkboxes
const childCheckboxes = document.querySelectorAll(".child-checkbox");
childCheckboxes.forEach((childCheckbox) => {
  childCheckbox.addEventListener("change", function () {
    // Get the parent checkbox element
    const parentCheckbox = this.closest(
      "li"
    ).parentNode.previousElementSibling.querySelector(".parent-checkbox");

    // Check the parent checkbox if any child checkbox is checked,
    // otherwise uncheck the parent checkbox
    parentCheckbox.checked =
      this.closest("ul").querySelector(".child-checkbox:checked") !== null;
  });
});
