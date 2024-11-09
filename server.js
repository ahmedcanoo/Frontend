// Import necessary libraries and initialize Express
const express = require('express');
const app = express();
const Order = require('./models/Order'); // Assuming a Mongoose model for orders
const Courier = require('./models/Courier'); // Assuming a Mongoose model for couriers

app.use(express.json());
const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);

// Fetch all assigned orders (Route 1)
app.get('/api/admin/assigned-orders', async (req, res) => {
  try {
    const assignedOrders = await Order.find({ courierEmail: { $ne: "" } });
    res.status(200).json(assignedOrders);
  } catch (error) {
    console.error("Error fetching assigned orders:", error);
    res.status(500).json({ message: "Failed to fetch assigned orders" });
  }
});
app.get('/api/couriers', async (req, res) => {
    try {
      const couriers = await Courier.find({}, 'name email');
      res.status(200).json(couriers);
    } catch (error) {
      console.error('Error fetching couriers:', error);
      res.status(500).json({ message: 'Failed to fetch couriers' });
    }
  });
  
// Reassign an order to a new courier (Route 2)
app.put('/api/admin/orders/:orderId/reassign-courier', async (req, res) => {
  const { orderId } = req.params;
  const { email } = req.body;

  try {
    const courier = await Courier.findOne({ email });
    if (!courier) {
      return res.status(404).json({ message: "Courier not found" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { courierEmail: courier.email, status: "Pending Acceptance" },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order reassigned successfully, pending courier acceptance" });
  } catch (error) {
    console.error("Error reassigning order:", error);
    res.status(500).json({ message: "Failed to reassign courier to order" });
  }
});
app.put('/api/orders/:orderId/update-status', async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status, email } = req.body;

    // Check if the status transition is valid
    const validStatuses = ['Pending Acceptance', 'In Transit', 'Picked Up', 'Delivered'];
    if (!validStatuses.includes(status)) {
      return res.status(400).send('Invalid status');
    }

    // Fetch the order
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).send('Order not found');
    }

    // Additional validation or rules can be added here based on business logic
    if (order.status === 'Delivered' && status !== 'Delivered') {
      return res.status(400).send('Cannot revert status after delivery');
    }

    // Update order status
    order.status = status;
    await order.save();

    res.status(200).json({ message: 'Order status updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to update status');
  }
});

// Start the server
app.listen(8001, () => {
  console.log("Server is running on port 8001");
});