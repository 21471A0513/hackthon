document.addEventListener('DOMContentLoaded', function() {
const exform=document.getElementById("form1");
const extable=document.getElementById("exbody");
let expense=[];
exform.addEventListener('submit',function(event){
    event.preventDefault();
    const a = parseFloat(document.getElementById('amount').value);
    const c = document.getElementById('category').value;
    const d = document.getElementById('date').value;
    const exp = { a, c, d };
    expense.push(exp);
    renderExpenses();
    renderSummary();
    exform.reset();
});
function renderSummary() {
    const summary = expense.reduce((acc, exp) => {
        if (!acc[exp.c]) {
            acc[exp.c] = 0;
        }
        acc[exp.c] += exp.a;
        return acc;
    }, {});
}
function renderExpenses() {
    extable.innerHTML = '';
    expense.forEach((exp, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${exp.a.toFixed(2)}</td>
            <td>${exp.c}</td>
            <td>${exp.d}</td>
            <td class="actions">
                <button onclick="editExpense(${index})">Edit</button>
                <button onclick="deleteExpense(${index})">Delete</button>
            </td>
        `;
        extable.appendChild(tr);
    });
}
window.deleteExpense = function(index) {
    expense.splice(index, 1);
    renderExpenses();
    renderSummary();
}
window.editExpense = function(index) {
    const exp = expense[index];
    document.getElementById('amount').value = exp.a;
    document.getElementById('category').value = exp.c;
    document.getElementById('date').value = exp.d;
    expense.splice(index, 1);
    renderExpenses();
    renderSummary();
}
});