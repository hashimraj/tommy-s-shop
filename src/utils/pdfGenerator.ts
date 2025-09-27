import jsPDF from 'jspdf';

export interface OrderItem {
  id: string;
  name: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

export interface OrderData {
  orderNumber: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
  };
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  orderDate: string;
}

export const generateOrderPDF = async (orderData: OrderData): Promise<Blob> => {
  const doc = new jsPDF();
  
  // Header with Logo Space
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('TOMMY', 20, 20);
  
  // Add a decorative line
  doc.setLineWidth(0.5);
  doc.line(20, 25, 190, 25);
  
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Order Confirmation', 20, 40);
  
  // Personal greeting
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Hi ${orderData.customerInfo.firstName}! Thank you for your order.`, 20, 55);
  doc.text('Here are the details of your purchase:', 20, 65);
  
  // Order Info Box
  doc.setDrawColor(200, 200, 200);
  doc.setFillColor(245, 245, 245);
  doc.roundedRect(20, 75, 170, 25, 3, 3, 'FD');
  
  doc.setFont('helvetica', 'bold');
  doc.text(`Order #: ${orderData.orderNumber}`, 25, 85);
  doc.text(`Date: ${orderData.orderDate}`, 25, 95);
  
  // Customer Info
  doc.setFont('helvetica', 'bold');
  doc.text('Delivery Information:', 20, 115);
  doc.setFont('helvetica', 'normal');
  doc.text(`${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}`, 20, 130);
  doc.text(`${orderData.customerInfo.email}`, 20, 140);
  doc.text(`${orderData.customerInfo.phone}`, 20, 150);
  doc.text(`${orderData.customerInfo.address}`, 20, 160);
  doc.text(`${orderData.customerInfo.city}, ${orderData.customerInfo.postalCode}`, 20, 170);
  
  // Order Items with Images
  doc.setFont('helvetica', 'bold');
  doc.text('Your Order:', 20, 185);
  
  let yPosition = 195;
  
  // Add each item with image
  for (const item of orderData.items) {
    try {
      // Load and add product image
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        img.onload = () => {
          // Add product image (smaller size)
          doc.addImage(img, 'JPEG', 20, yPosition, 30, 30);
          resolve(true);
        };
        img.onerror = () => resolve(true); // Continue even if image fails
        img.src = item.image;
      });
      
      // Add item details next to image
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text(item.name, 55, yPosition + 8);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(`Size: ${item.size}`, 55, yPosition + 16);
      doc.text(`Quantity: ${item.quantity}`, 55, yPosition + 22);
      doc.text(`Price: $${(item.price * item.quantity).toFixed(2)}`, 55, yPosition + 28);
      
      yPosition += 40; // Space for next item
    } catch (error) {
      console.error('Error adding image to PDF:', error);
      // Fallback: add text only
      doc.setFont('helvetica', 'bold');
      doc.text(item.name, 25, yPosition);
      doc.setFont('helvetica', 'normal');
      doc.text(`${item.size} | Qty: ${item.quantity} | $${(item.price * item.quantity).toFixed(2)}`, 25, yPosition + 8);
      yPosition += 20;
    }
  }
  
  // Order Summary Box
  yPosition += 10;
  doc.setFillColor(245, 245, 245);
  doc.roundedRect(120, yPosition, 70, 40, 3, 3, 'FD');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Order Summary', 125, yPosition + 10);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`Subtotal: $${orderData.subtotal.toFixed(2)}`, 125, yPosition + 20);
  doc.text(`Shipping: ${orderData.shipping === 0 ? 'Free' : `$${orderData.shipping.toFixed(2)}`}`, 125, yPosition + 28);
  doc.setFont('helvetica', 'bold');
  doc.text(`Total: $${orderData.total.toFixed(2)}`, 125, yPosition + 36);
  
  // Footer
  yPosition += 60;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('Thank you for choosing TOMMY!', 20, yPosition);
  doc.text('For any questions, please contact us at bigfamilyseason@gmail.com', 20, yPosition + 8);
  doc.text('We appreciate your business and hope you love your new items.', 20, yPosition + 16);
  
  // Return as blob for sharing
  return doc.output('blob');
};

export const sendToWhatsApp = async (pdfBlob: Blob, customerPhone: string, orderNumber: string, orderData: OrderData) => {
  try {
    // Create file from blob
    const fileName = `Order-${orderNumber}-TOMMY.pdf`;
    const file = new File([pdfBlob], fileName, { type: 'application/pdf' });
    
    // Check if Web Share API is available and supports files
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: `Order #${orderNumber} - TOMMY`,
        text: `Order confirmation for ${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}`,
        files: [file]
      });
    } else {
      // Fallback: Download PDF and open WhatsApp with message
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(url);
      
      // Open WhatsApp with order details
      const storeWhatsApp = "254741464103";
      const message = `🛍️ NEW ORDER ALERT!
      
Order #: ${orderNumber}
Customer: ${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}
Phone: ${customerPhone}
Email: ${orderData.customerInfo.email}
Total: $${orderData.total.toFixed(2)}

Items:
${orderData.items.map(item => `• ${item.name} (${item.size}) x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}

Delivery Address:
${orderData.customerInfo.address}
${orderData.customerInfo.city}, ${orderData.customerInfo.postalCode}

📎 PDF downloaded to your device - please attach it to this chat.`;

      const whatsappUrl = `https://wa.me/${storeWhatsApp}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  } catch (error) {
    console.error('Error sharing PDF:', error);
    // Final fallback - download PDF
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Order-${orderNumber}-TOMMY.pdf`;
    link.click();
    URL.revokeObjectURL(url);
    
    alert('PDF downloaded. Please manually share it via WhatsApp.');
  }
};

export const sendToEmail = (pdfBlob: Blob, email: string, orderNumber: string, orderData: OrderData) => {
  const subject = `Order Confirmation - Order #${orderNumber}`;
  const body = `
Dear Team,

New order received:

Order #: ${orderNumber}
Customer: ${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}
Email: ${orderData.customerInfo.email}
Phone: ${orderData.customerInfo.phone}
Total: $${orderData.total.toFixed(2)}

Please find the order details in the attached PDF.

Best regards,
TOMMY Store System
  `;
  
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoUrl, '_blank');
};