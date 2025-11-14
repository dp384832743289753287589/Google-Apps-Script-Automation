function onOpen(){
    let ui=SpreadsheetApp.getUi()
    ui.createMenu("Send Emails")
    .addItem("Send the emails","myFunction")
    .addToUi();


  }

function myFunction() {
   let workbook=SpreadsheetApp.getActiveSheet()
  let c=workbook.getActiveRange().getValues();
  let business_names=workbook.getRange("B2:B").getValues();
  let contact_names=workbook.getRange("C2:C").getValues();
  let sponsor=workbook.getRange("D2:D").getValues();
  let yes_message=
"We are pleased that you have accepted our sponsorship proposal on behalf of CVS Pharmacy. As a result of your generous contribution, CVS Pharmacy will be entitled to the benefits of our Gold sponsorship tier. Please view our sponsorship packet online for additional details."


  for (let i=0;i<c.length;i++){
        if (sponsor[i].toString().toLowerCase()==="no"){
        GmailApp.sendEmail(
        c[i].toString(),
        "Sponsorship",
        "Hello, "+contact_names[i]+" \nWe regret to hear that " +business_names[i]+" has declined our offer for sponsorship, \nregardless,we would like to emphasize the impact that your contribution would have within the local community as a sponsor of our team. However, we respect your decision. \n Thank you, \n Team 2554"
         )
        }
         if (sponsor[i].toString().toLowerCase()==="yes"){
          GmailApp.sendEmail(
          c[i].toString(),
          "Sponsorship",
          "Hello, "+contact_names[i]+"\n We are pleased that you have accepted our sponsorship proposal on behalf of "+business_names[i]+". As a result of your generous contribution "+business_names[i]+ " \nwill be entitled to the benefits of our Gold sponsorship tier. Please view our sponsorship packet online for additional details.\n Thank You \n Team 2554"


          )
        }
         }
  }