
 
  function onOpen(){
    let ui=SpreadsheetApp.getUi()
    ui.createMenu("Send Emails")
    .addItem("Send the emails","myFunction")
    .addToUi();
     

  }

function myFunction() {
  let workbook=SpreadsheetApp.getActiveSheet()
  let c=workbook.getActiveRange().getValues();
  let business_names=workbook.getRange("B:B").getValues();
  let contact_names=workbook.getRange("C:C").getValues();
  let sponsor=workbook.getRange("D:D").getValues();
  
  for (let i=0;i<c.length;i++){
    let yes_message="Hello "+contact_names[i]+" \nWe are pleased that you have accepted our sponsorship proposal on behalf of "+business_names[i]+". We would like to emphasize the impact that your contribution would have within the local community as a sponsor of our team. However, we respect your decision.\nThanks again for considering the offer!\nRegards,Team 2554"
    let no_message="Hello "+contact_names[i]+"\n We regret to hear that CVS Pharmacy has declined our offer for sponsorship. We would like to emphasize the impact that your contribution would have within the local community as a sponsor of our team. However, we respect your decision. Thanks again for considering the offer!\n Team 2554"
 
       
      


        if (sponsor[i].toString().toLowerCase()==="no"){
        GmailApp.sendEmail(
        c[i].toString(),
        "Sponsorship offer",
         no_message
         )
        }else if(sponsor[i].toString().toLowerCase()==="yes"){
          GmailApp.sendEmail(
          c[i].toString(),
          "Thank you for sponsorship",
           yes_message



          )
        }
         
         }
  }