function checkout() {

    let customer = document.getElementById("customer").value;
    let category = document.getElementById("category").value;
    let price = parseFloat(document.getElementById("price").value);
    let quantity = parseInt(document.getElementById("quantity").value);
    let coupon = document.getElementById("coupon").value.toUpperCase();
    let payment = document.getElementById("payment").value;

    // Subtotal
    let subtotal = price * quantity;

    // Category Discount
    let categoryDiscount = 0;

    if (category === "Electronics") {
        categoryDiscount = subtotal * 0.10;
    }
    else if (category === "Clothing") {
        categoryDiscount = subtotal * 0.15;
    }
    else if (category === "Food") {
        categoryDiscount = subtotal * 0.05;
    }

    let total = subtotal - categoryDiscount;

    // Coupon Discount
    let couponDiscount = 0;

    if (coupon === "SAVE10") {
        couponDiscount = total * 0.10;
    }

    total -= couponDiscount;

    // Payment Discount
    let paymentDiscount = 0;

    if (payment === "Visa") {
        paymentDiscount = total * 0.05;
    }
    else if (payment === "Wallet") {
        paymentDiscount = total * 0.08;
    }

    total -= paymentDiscount;

    // Bonus
    if (total < 0) {
        total = 0;
    }

    // VAT 14%
    let vat = total * 0.14;

    let finalPrice = total + vat;

    // Invoice
    document.getElementById("invoice").innerHTML = `
        <h3>Invoice</h3>

        <p><strong>Customer:</strong> ${customer}</p>

        <p><strong>Category:</strong> ${category}</p>

        <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>

        <p><strong>Category Discount:</strong> ${categoryDiscount.toFixed(2)}</p>

        <p><strong>Coupon Discount:</strong> ${couponDiscount.toFixed(2)}</p>

        <p><strong>Payment Discount:</strong> ${paymentDiscount.toFixed(2)}</p>

        <p><strong>VAT (14%):</strong> ${vat.toFixed(2)}</p>

        <h2>Final Price: ${finalPrice.toFixed(2)}</h2>
    `;
}