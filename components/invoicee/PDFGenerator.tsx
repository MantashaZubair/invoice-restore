// "use client";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { Button } from "../ui/button";
// import { Download } from "lucide-react";

// interface PDFGeneratorProps {
//   invoiceElementId: string;
//   fileName: string;
// }

// export default function PDFGenerator({ invoiceElementId, fileName }: PDFGeneratorProps) {
//   const generatePDF = async () => {
//     const invoiceElement = document.querySelector(`#${invoiceElementId}`);
//     if (!invoiceElement) {
//       console.error("Invoice element not found.");
//       return;
//     }

//     try {
//       const canvas = await html2canvas(invoiceElement as HTMLElement,{
//         useCORS: true, // Enable cross-origin for images
//       allowTaint: false, // Prevent cross-origin issues
//       logging: true, // Enable console logs for debugging
//       });
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save(`${fileName}.pdf`);
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     }
//   };
//   return (
//                   <Button
//                     variant="outline"
//                     className="text-gray-600"
//                     onClick={generatePDF}
//                   >
//                     <Download className="w-4 h-4 mr-2" />
//                     Download
//                   </Button>
//   );
// }



// "use client";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { Button } from "../ui/button";
// import { Download } from "lucide-react";

// interface PDFGeneratorProps {
//   invoiceElementId: string;
//   fileName: string;
// }

// export default function PDFGenerator({ invoiceElementId, fileName }: PDFGeneratorProps) {
//   const generatePDF = async () => {
//     const invoiceElement = document.querySelector(`#${invoiceElementId}`);
//     if (!invoiceElement) {
//       console.error("Invoice element not found.");
//       return;
//     }

//     try {
//       const canvas = await html2canvas(invoiceElement as HTMLElement, {
//         useCORS: true, // Enable cross-origin for images
//         allowTaint: false, // Prevent cross-origin issues
//         logging: true, // Enable console logs for debugging
//         scale: 2, // Higher resolution canvas
//       });

//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = pdf.internal.pageSize.getHeight();
//       const marginBottom = 13; // Margin at the bottom of each page in mm
//       // const marginTop=10;
//       const canvasWidth = canvas.width;
//       const canvasHeight = canvas.height;

//       const imgHeightRatio = pdfWidth / canvasWidth;
//       const availablePdfHeight = pdfHeight - marginBottom; // Adjust available height for the margin

//       let currentHeight = 0;

//       while (currentHeight < canvasHeight) {
//         const sourceY = currentHeight;
//         const sectionHeight = Math.min(availablePdfHeight / imgHeightRatio, canvasHeight - currentHeight);

//         const sectionCanvas = document.createElement("canvas");
//         sectionCanvas.width = canvasWidth;
//         sectionCanvas.height = sectionHeight;
//         const sectionContext = sectionCanvas.getContext("2d");

//         if (sectionContext) {
//           sectionContext.drawImage(
//             canvas,
//             0,
//             sourceY,
//             canvasWidth,
//             sectionHeight,
//             0,
//             0,
//             canvasWidth,
//             sectionHeight
//           );
//         }

//         const sectionImgData = sectionCanvas.toDataURL("image/png");

//         if (currentHeight > 0) pdf.addPage();
//         pdf.addImage(sectionImgData, "PNG", 0, 0, pdfWidth, sectionHeight * imgHeightRatio);

//         currentHeight += sectionHeight;
//       }

//       pdf.save(`${fileName}.pdf`);
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     }
//   };

//   return (
//     <Button
//       variant="outline"
//       className="text-gray-600"
//       onClick={generatePDF}
//     >
//       <Download className="w-4 h-4 mr-2" />
//       Download
//     </Button>
//   );
// }

// export default function PDFGenerator({ invoiceElementId, fileName }: PDFGeneratorProps) {
//   const generatePDF = async () => {
//     const invoiceElement = document.querySelector(`#${invoiceElementId}`);
//     if (!invoiceElement) {
//       console.error("Invoice element not found.");
//       return;
//     }

//     try {
//       const canvas = await html2canvas(invoiceElement as HTMLElement, {
//         useCORS: true, // Enable cross-origin for images
//         allowTaint: false, // Prevent cross-origin issues
//         logging: true, // Enable console logs for debugging
//         scale: 2, // Higher resolution canvas
//       });

//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = pdf.internal.pageSize.getHeight();
//       const marginBottom = 10; // Margin at the bottom of each page in mm
//       const marginTop = 10; // Margin at the top of each page in mm

//       const canvasWidth = canvas.width;
//       const canvasHeight = canvas.height;

//       const imgHeightRatio = pdfWidth / canvasWidth;
//       const availablePdfHeight = pdfHeight - marginBottom - marginTop; // Adjust available height for margins

//       let currentHeight = 0;

//       while (currentHeight < canvasHeight) {
//         const sourceY = currentHeight;
//         const sectionHeight = Math.min(availablePdfHeight / imgHeightRatio, canvasHeight - currentHeight);

//         const sectionCanvas = document.createElement("canvas");
//         sectionCanvas.width = canvasWidth;
//         sectionCanvas.height = sectionHeight;
//         const sectionContext = sectionCanvas.getContext("2d");

//         if (sectionContext) {
//           sectionContext.drawImage(
//             canvas,
//             0,
//             sourceY,
//             canvasWidth,
//             sectionHeight,
//             0,
//             0,
//             canvasWidth,
//             sectionHeight
//           );
//         }

//         const sectionImgData = sectionCanvas.toDataURL("image/png");

//         if (currentHeight > 0) {
//           pdf.addPage();
//         }

//         const yOffset = currentHeight > 0 ? marginTop : 0; // Add top margin for all pages
//         pdf.addImage(sectionImgData, "PNG", 0, yOffset, pdfWidth, sectionHeight * imgHeightRatio);

//         currentHeight += sectionHeight;
//       }

//       pdf.save(`${fileName}.pdf`);
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     }
//   };

//   return (
//     <Button
//       variant="outline"
//       className="text-gray-600"
//       onClick={generatePDF}
//     >
//       <Download className="w-4 h-4 mr-2" />
//       Download
//     </Button>
//   );

// }


"use client";
import jsPDF from "jspdf";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { formatCurrency } from "@/lib/utils/format-currency";
import "jspdf-autotable";

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

interface InvoiceData {
  invoiceDetails: {
    number: string;
    date: string;
    dueDate: string;
    paymentTerms: string;
    poNumber: string;
    currency: string;
  };
  senderDetails: {
    name: string;
    logo?: string;
    address: string;
  };
  recipientDetails: {
    billTo: {
      name: string;
      address: string;
    };
    shipTo:{
      name:string;
      address: string;
    }
  };
  items: InvoiceItem[];
  totals: {
    subtotal: number;
    tax: number;
    taxRate: number;
    discount: number;
    shipping: number;
    discountType: "percentage" | "fixed";
    shippingType: "percentage" | "fixed";
    amountPaid: number,
    total: number;
    balanceDue: number,
  };
  status?:string;
  notes?: string;
  terms?: string;
}

interface PDFGeneratorProps {
  invoiceData: InvoiceData;
  fileName: string;
}

export default function PDFGenerator({ invoiceData, fileName }: PDFGeneratorProps) {
  const generatePDF = async () => {
    try {
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 18;
      let contentY = margin; // Track vertical position
      
      // Header Section with Logo and Invoice Number
      if (invoiceData.senderDetails.logo) {
        const maxWidth = 50;
        const maxHeight = 25;
      
        const logoBase64 = invoiceData.senderDetails.logo;
        const img = new Image();
        img.src = logoBase64;
      
        // Calculate aspect ratio and dimensions
        const aspectRatio = img.width / img.height;
        let width = maxWidth;
        let height = width / aspectRatio;
      
        if (height > maxHeight) {
          height = maxHeight;
          width = height * aspectRatio;
        }
      
        // Add the image
        pdf.addImage(logoBase64, "JPEG", margin, margin, width, height,);
        contentY += height + 4; // Adjust Y position below the image
      }
      
      // Add "From" section (below the logo)
      pdf.setFontSize(10);
      pdf.setTextColor(128, 128, 128);
      pdf.text("From:", margin, contentY);
      pdf.setTextColor(0, 0, 0);
      pdf.text(invoiceData.senderDetails.name, margin, contentY + 5);
      
      // Address label
      pdf.setFontSize(10);
      pdf.setTextColor(128, 128, 128);
      pdf.text("Address:", margin, contentY + 12);
      pdf.setTextColor(0, 0, 0);
      pdf.text(invoiceData.senderDetails.address, margin, contentY + 17);
      contentY += 13; // Move further down
      
      // Invoice Number (right-aligned)
      if (invoiceData.senderDetails.logo) {
      pdf.setFontSize(24);
      pdf.text(invoiceData.invoiceDetails.number, pageWidth - margin, margin + 20, { align: "right" });
      }else{
        pdf.setFontSize(24);
        pdf.text(invoiceData.invoiceDetails.number, pageWidth - margin, margin + 10, { align: "right" });
      }
      // Recipient and Invoice Details Grid (3 columns)
      const gridY = contentY + 18; // Adjust position
      
      // Bill To Column
      if (invoiceData.recipientDetails.billTo.name) {
        pdf.setFontSize(10);
        pdf.setTextColor(128, 128, 128);
        pdf.text("Bill To:", margin, gridY);
        pdf.setTextColor(0, 0, 0);
        pdf.text(invoiceData.recipientDetails.billTo.name, margin, gridY + 5);
      
        // Address label
        pdf.setFontSize(10);
        pdf.setTextColor(128, 128, 128);
        pdf.text("Address:", margin, gridY + 12);
        pdf.setTextColor(0, 0, 0);
        pdf.text(invoiceData.recipientDetails.billTo.address, margin, gridY + 17);
      }
      

      // Ship To Column
      if (invoiceData.recipientDetails.shipTo.name) {
        const middleX = pageWidth / 2 - 20;
        pdf.setFontSize(10);
        pdf.setTextColor(128, 128, 128);
        pdf.text("Ship To", middleX, gridY);
        pdf.setTextColor(0, 0, 0);
        pdf.text(invoiceData.recipientDetails.shipTo.name, middleX, gridY + 5);


        
        // Address label
        
        pdf.setFontSize(10);
        pdf.setTextColor(128, 128, 128);
        pdf.text("Address:", middleX, gridY + 12);
        pdf.setTextColor(0, 0, 0);
        pdf.text(invoiceData.recipientDetails.shipTo.address,middleX, gridY + 17);
      }

      // Invoice Details Box (right column)
      const detailsX = pageWidth - 80;
      const rightMargin = 15;
      // Only include details that have values
      const detailsData = [
        invoiceData.invoiceDetails.date && {
          label: "Date",
          value: new Date(invoiceData.invoiceDetails.date).toLocaleDateString()
        },
        invoiceData.invoiceDetails.paymentTerms && {
          label: "Payment Terms",
          value: invoiceData.invoiceDetails.paymentTerms
        },
        invoiceData.invoiceDetails.dueDate && {
          label: "Due Date",
          value: new Date(invoiceData.invoiceDetails.dueDate).toLocaleDateString()
        },
        invoiceData.invoiceDetails.poNumber && {
          label: "PO Number",
          value: invoiceData.invoiceDetails.poNumber
        },
        invoiceData.totals.balanceDue || invoiceData.totals.balanceDue==0 && {
          label: "Balance",
          value: formatCurrency(invoiceData.totals.balanceDue, invoiceData.invoiceDetails.currency),
          color: "#DC2626"
        }
      ].filter(Boolean) as { label: string; value: string }[];

      if (detailsData.length > 0) {
        // Add gray background for details box
        pdf.setFillColor(250, 250, 250);
        pdf.rect(detailsX - 5, gridY - 5, 85-rightMargin, detailsData.length * 10 + 1, "F");

        detailsData.forEach((detail, index) => {
          pdf.setFontSize(8);
          pdf.setTextColor(128, 128, 128);
          pdf.text(detail.label, detailsX, gridY + (index * 10));
          pdf.setTextColor(0, 0, 0);
          pdf.text(detail.value, pageWidth - margin, gridY + (index * 10), { align: "right" });
        });
      }

      // Items Table
      const tableStartY = Math.max(
        gridY + (detailsData.length > 0 ? detailsData.length * 10 + 10 : 10),
        gridY + 30 // Minimum spacing from grid
      );
      const tableData = invoiceData.items.map((item, index) => [
        (index + 1).toString(),
        item.description,
        item.quantity.toString(),
        formatCurrency(item.rate, invoiceData.invoiceDetails.currency),
        formatCurrency(item.amount, invoiceData.invoiceDetails.currency)
      ]);

      (pdf as any).autoTable({
        startY: tableStartY,
        head: [["Sr.No", "Item", "Quantity", "Rate", "Amount"]],
        body: tableData,
        theme: "grid",
        headStyles: { fillColor: [51, 51, 51] },
        columnStyles: {
          0: { cellWidth: 20 },
          1: { cellWidth: "auto" },
          2: { cellWidth: 40, halign: "left" },
          3: { cellWidth: 40, halign: "left" },
          4: { cellWidth: 40, halign: "left" }
        },
        styles: {
          fontSize: 9,
          cellPadding: 2
        },
        alternateRowStyles: {
          fillColor: [250, 250, 250]
        }
      });

    // Previous code remains the same until the Totals and Notes Section

      // Totals and Notes Section
      const finalY = (pdf as any).lastAutoTable.finalY + 20;
      
      // Fixed heights for sections
      const totalsHeight = 70; // Height for totals box
      // const notesHeight = invoiceData.notes ? 100 : 0; // Fixed height for notes
      const notesHeight = invoiceData.notes ? pdf.getTextDimensions(invoiceData.notes).h : 0
      const termsHeight = invoiceData.terms ? pdf.getTextDimensions(invoiceData.terms).h : 0
      // const termsHeight = invoiceData.terms ? 100 : 0; // Fixed height for terms
      const totalContentHeight = Math.max(totalsHeight, notesHeight + termsHeight);
      
      const pageHeight = pdf.internal.pageSize.getHeight();
      const remainingSpace = pageHeight - finalY - 20; // 20px margin
      const totalsX = pageWidth - 80;

      // Check if we need a new page
      if (totalContentHeight > remainingSpace) {
        // Add new page for all sections
        pdf.addPage();
        const newPageY = 20;
        
        // Draw totals on new page
        pdf.setFillColor(250, 250, 250);
        pdf.rect(totalsX - 5, newPageY - 5, 85-rightMargin, totalsHeight, "F");

        const totalsData = [
          { label: "Subtotal", value: formatCurrency(invoiceData.totals.subtotal, invoiceData.invoiceDetails.currency) },
          { label: "Discount", value: formatCurrency(invoiceData.totals.discount, invoiceData.invoiceDetails.currency) },
          { label: "Tax", value: formatCurrency(invoiceData.totals.tax, invoiceData.invoiceDetails.currency) },
          { label: "Total", value: formatCurrency(invoiceData.totals.total, invoiceData.invoiceDetails.currency), bold: true },
             { 
          label: "Amount Paid", 
          value: formatCurrency(invoiceData.totals.amountPaid, invoiceData.invoiceDetails.currency),
          color: invoiceData.status === "Paid" ? [0, 150, 0] : undefined // Green if paid
        },
        { 
          label: "Balance Due", 
          value: formatCurrency(invoiceData.totals.balanceDue, invoiceData.invoiceDetails.currency), 
          color: invoiceData.status === "Paid" ? [0, 150, 0] : [220, 38, 38] // Green if paid, red if pending
        }
          // { label: "Amount Paid", value: formatCurrency(invoiceData.totals.amountPaid, invoiceData.invoiceDetails.currency) },
          // { label: "Balance Due", value: formatCurrency(invoiceData.totals.balanceDue, invoiceData.invoiceDetails.currency), color: "#DC2626" }
        ];

           totalsData.forEach((total, index) => {
        pdf.setFontSize(9);
        if (total.bold) {
          pdf.setFont("helvetica", "bold");
        } else {
          pdf.setFont("helvetica", "normal");
        }
        
        if (total.color) {
          pdf.setTextColor(...total.color);
        } else {
          pdf.setTextColor(total.bold ? 0 : 128, total.bold ? 0 : 128, total.bold ? 0 : 128);
        }
        
        pdf.text(total.label, totalsX, finalY + (index * 10));
        pdf.text(total.value, pageWidth - margin, finalY + (index * 10), { align: "right" });
      });

        // totalsData.forEach((total, index) => {
        //   pdf.setFontSize(9);
        //   if (total.bold) {
        //     pdf.setFont("helvetica", "bold");
        //   } else {
        //     pdf.setFont("helvetica", "normal");
        //   }
          
        //   if (total.color) {
        //     pdf.setTextColor(220, 38, 38);
        //   } else {
        //     pdf.setTextColor(total.bold ? 0 : 128, total.bold ? 0 : 128, total.bold ? 0 : 128);
        //   }
          
        //   pdf.text(total.label, totalsX, newPageY + (index * 10));
        //   pdf.text(total.value, pageWidth - margin, newPageY + (index * 10), { align: "right" });
        // });

        // Draw notes and terms
        if (invoiceData.notes || invoiceData.terms) {
          let contentY = newPageY;
          const maxWidth = totalsX - margin - 10;
          
          if (invoiceData.notes) {
            pdf.setFontSize(10);
            pdf.setTextColor(128, 128, 128);
            pdf.text("Notes", margin, contentY);
            pdf.setTextColor(0, 0, 0);
            
            const noteLines = pdf.splitTextToSize(invoiceData.notes, maxWidth);
            pdf.text(noteLines, margin, contentY + 7);
            contentY += 10 + (noteLines.length * 5);
            // contentY += notesHeight;
          }
          
          if (invoiceData.terms) {
            pdf.setFontSize(10);
            pdf.setTextColor(128, 128, 128);
            pdf.text("Terms", margin, contentY + 5);
            pdf.setTextColor(0, 0, 0);
            
            const termLines = pdf.splitTextToSize(invoiceData.terms, maxWidth);
            pdf.text(termLines, margin, contentY + 12);
          }
        }
      } else {
        // Draw everything on current page
        // Draw totals
        pdf.setFillColor(250, 250, 250);
        pdf.rect(totalsX - 5, finalY - 5, 85-rightMargin, totalsHeight, "F");

        const totalsData = [
          { label: "Subtotal", value: formatCurrency(invoiceData.totals.subtotal, invoiceData.invoiceDetails.currency) },
          { label: "Discount", value: formatCurrency(invoiceData.totals.discount, invoiceData.invoiceDetails.currency) },
          { label: "Tax", value: formatCurrency(invoiceData.totals.tax, invoiceData.invoiceDetails.currency) },
          { label: "Total", value: formatCurrency(invoiceData.totals.total, invoiceData.invoiceDetails.currency), bold: true },
          { 
            label: "Amount Paid", 
            value: formatCurrency(invoiceData.totals.amountPaid, invoiceData.invoiceDetails.currency),
            color: invoiceData.status === "Paid" ? [0, 150, 0] : undefined // Green if paid
          },
          { 
            label: "Balance Due", 
            value: formatCurrency(invoiceData.totals.balanceDue, invoiceData.invoiceDetails.currency), 
            color: invoiceData.status === "Paid" ? [0, 150, 0] : [220, 38, 38] // Green if paid, red if pending
          }
          // { label: "Amount Paid", value: formatCurrency(invoiceData.totals.amountPaid, invoiceData.invoiceDetails.currency) },
          // { label: "Balance Due", value: formatCurrency(invoiceData.totals.balanceDue, invoiceData.invoiceDetails.currency), color: "#DC2626" }
        ];
        totalsData.forEach((total, index) => {
          pdf.setFontSize(9);
          if (total.bold) {
            pdf.setFont("helvetica", "bold");
          } else {
            pdf.setFont("helvetica", "normal");
          }
          
          if (total.color) {
            pdf.setTextColor(...total.color);
          } else {
            pdf.setTextColor(total.bold ? 0 : 128, total.bold ? 0 : 128, total.bold ? 0 : 128);
          }
          
          pdf.text(total.label, totalsX, finalY + (index * 10));
          pdf.text(total.value, pageWidth - margin, finalY + (index * 10), { align: "right" });
        });
        // totalsData.forEach((total, index) => {
        //   pdf.setFontSize(9);
        //   if (total.bold) {
        //     pdf.setFont("helvetica", "bold");
        //   } else {
        //     pdf.setFont("helvetica", "normal");
        //   }
          
        //   if (total.color) {
        //     pdf.setTextColor(220, 38, 38);
        //   } else {
        //     pdf.setTextColor(total.bold ? 0 : 128, total.bold ? 0 : 128, total.bold ? 0 : 128);
        //   }
          
        //   pdf.text(total.label, totalsX, finalY + (index * 10));
        //   pdf.text(total.value, pageWidth - margin, finalY + (index * 10), { align: "right" });
        // });

        // Draw notes and terms
        if (invoiceData.notes || invoiceData.terms) {
          let contentY = finalY;
          const maxWidth = totalsX - margin - 10;
          
          if (invoiceData.notes) {
            pdf.setFontSize(10);
            pdf.setTextColor(128, 128, 128);
            pdf.text("Notes", margin, contentY);
            pdf.setTextColor(0, 0, 0);
            
            const noteLines = pdf.splitTextToSize(invoiceData.notes, maxWidth);
            pdf.text(noteLines, margin, contentY + 7);
            // contentY += notesHeight;
            contentY += 10 + (noteLines.length * 5);
          }
          
          if (invoiceData.terms) {
            pdf.setFontSize(10);
            pdf.setTextColor(128, 128, 128);
            pdf.text("Terms", margin, contentY + 5);
            pdf.setTextColor(0, 0, 0);
            
            const termLines = pdf.splitTextToSize(invoiceData.terms, maxWidth);
            pdf.text(termLines, margin, contentY + 12);
          }
        }
      }

      pdf.save(`${fileName}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }


  // Rest of the component remains the same
  };

  return (
    <Button
      variant="outline"
      className="text-gray-600"
      onClick={generatePDF}
    >
      <Download className="w-4 h-4 mr-2" />
      Download
    </Button>
  );
}