document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    var orderForm = document.getElementById("order-form");
    var orderID = orderForm.elements["order_id"].value;
    var email = orderForm.elements["email"].value;
  
    // Perform any necessary processing with the order ID and email
    // For example, you can validate the inputs or query a database to retrieve order details
  
    // Prepare the email message
    var subject = "New Order Tracking Request";
    var message = "Order ID: " + orderID + "\n";
    message += "Customer Email: " + email + "\n";
    // Add additional message details here
  
    // Send the email
    var mailToLink = "mailto:ma7elorders@gmail.com"
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(message);
  
    window.location.href = mailToLink; // Open the mail client
  
    // Redirect to the thank you page (optional)
    // window.location.href = "thank-you.html";
  });