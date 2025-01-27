
function deleteRow(button) {
    if (confirm('Are you sure you want to delete this row')) {

        const row = button.closest('tr');

        row.remove();
    }
}
function printPage(){
    window.print();
}