Dynamic Form Builder and Form Handling
This project contains two components that allow users to build dynamic forms and handle form submissions.

Features:
Dynamic Form Builder:

Users can create forms by adding fields dynamically.
Supports various field types: text, textarea, dropdown, checkbox, and radio button.
Users can define the label, placeholder, and make a field required.
Dropdown and radio button fields support options.
Dynamic Form Handling:

The dynamic form is generated based on the fields defined in the builder.
Validates form inputs before submission.
Form data is logged upon successful submission.
Components:
1. FormBuilderComponent (Form Builder)
Allows the creation of fields (text, textarea, dropdown, checkbox, radio).
Users can input field types, labels, placeholders, and define required fields.
Optionally add options for dropdown and radio fields.
Fields are added dynamically to the form.
Form fields are saved via a service (FormFieldService).
2. DynamicFormComponent (Dynamic Form Display)
Displays the form based on the fields created in the Form Builder.
Supports form validation (required fields).
On form submission, valid data is logged and an alert is shown.
Technologies Used:
Angular: For building the dynamic form and form builder.
Angular Material: For form styling and UI components like input fields, checkboxes, dropdowns, and radio buttons.
Installation:
Clone the repository:

bash
Copy
git clone <repository-url>
cd <project-directory>
Install the dependencies:

bash
Copy
npm install
Run the application:

bash
Copy
ng serve
The application should now be available at http://localhost:4200.

How to Use:
Form Builder:

Select the type of field you want to add (text, textarea, dropdown, checkbox, or radio).
Provide the label and placeholder for the field.
Mark the field as required if necessary.
For dropdown and radio fields, provide options separated by commas.
Click Add Field to add the field to the form.
Dynamic Form:

The form will dynamically update to include the fields added in the builder.
Fill out the form and submit it.
The form data will be logged in the console if it is valid.
