// logic to get current year
const year_span = document.querySelector(".year")
year_span.innerHTML = new Date().getFullYear()


// logic to show nav
// target the menu button
const menu_btn = document.querySelector(".menu-btn")

// target nav
const nav_bar = document.querySelector("nav")

// add click event listener to your button
menu_btn.addEventListener("click", function(){
    nav_bar.classList.toggle("show-nav")
    menu_btn.classList.toggle("change-menu-bg")
})


// logic to calculate the loan
// target the loan form
const loan_form = document.querySelector(".loan-form")

// add submit event listener to it
loan_form.addEventListener("submit", function(event){
    event.preventDefault() // stops page from reloading automatically

    // grab the borrowed amount
    let borrowed_amount = Number(document.querySelector(".borrowed-amount").value)
    let payment_duration = Number(document.querySelector(".duration").value)
    let rate = 0.2

    let interest = (borrowed_amount * payment_duration * rate) / 12
    let amount = borrowed_amount + interest

    // insert result in  the modal
    document.querySelector(".borrowed-amount-display").innerHTML = borrowed_amount.toLocaleString()
    document.querySelector(".interest").innerHTML = interest.toLocaleString()
    document.querySelector(".amount").innerHTML = amount.toLocaleString()

    // display the modal
    const modal = document.querySelector(".modal")
    modal.style.display = "flex"

    // logic to close modal
    document.querySelector(".close-modal-btn").addEventListener("click", function(){
           modal.style.display = "none"
    })

         
})