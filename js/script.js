let btn = document.querySelector('button');
let nameCaseFile = document.querySelector('.name1');
let dateCaseFile = document.querySelector('.date');
let fileNumber = document.querySelector('.file-number1');
let agentsList = document.querySelector('#agents-list');
let agent1 = document.querySelector('#agent1');
let agent2 = document.querySelector('#agent2');
let agent3 = document.querySelector('#agent3');
let agent4 = document.querySelector('#agent4');
let agent5 = document.querySelector('#agent5');
let labelAgent1 = document.querySelector('.agent1');
let labelAgent2 = document.querySelector('.agent2');
let labelAgent3 = document.querySelector('.agent3');
let labelAgent4 = document.querySelector('.agent4');
let labelAgent5 = document.querySelector('.agent5');
let countRaport = document.querySelector('#count-raport');
let blankTitule = document.querySelector('.blank-titule');
let blankAgents = document.querySelector('.blank-agents');
let blankDescription = document.querySelector('.blank-description');
let blankClose = document.querySelector('.blank-close');
let status1= document.querySelector('.status-value');

// raports
let raportTittle1 = document.querySelector('.raport-tittle1');
let postText1 = document.querySelector('.post-text1');
let raportTittle2 = document.querySelector('.raport-tittle2');
let postText2 = document.querySelector('.post-text2');
let raportTittle3 = document.querySelector('.raport-tittle3');
let postText3 = document.querySelector('.post-text3');
let raportTittle4 = document.querySelector('.raport-tittle4');
let postText4 = document.querySelector('.post-text4');
let raportTittle5 = document.querySelector('.raport-tittle5');
let postText5 = document.querySelector('.post-text5');
//fieldsets
let report1 = document.querySelector('.report1');
let report2 = document.querySelector('.report2');
let report3 = document.querySelector('.report3');
let report4 = document.querySelector('.report4');
let report5 = document.querySelector('.report5');
// div blocks
let reportt1 = document.querySelector('.reportt1');
let reportt2 = document.querySelector('.reportt2');
let reportt3 = document.querySelector('.reportt3');
let reportt4 = document.querySelector('.reportt4');
let reportt5 = document.querySelector('.reportt5');
// agents list item values 
let itemValue1 = document.querySelector('.item-value1');
let itemValue2 = document.querySelector('.item-value2');
let itemValue3 = document.querySelector('.item-value3');
let itemValue4 = document.querySelector('.item-value4');
let itemValue5 = document.querySelector('.item-value5');
let itemValue6 = document.querySelector('.item-value6');
// description text
let postText = document.querySelector('.post-text');
// outcome text
let outcomeTime = document.querySelector('.time');
let outcomeDate = document.querySelector('.date1');
let postText6 = document.querySelector('.post-text6');
let blankOutcome = document.querySelector('.blank-outcome');
// Blank Close text
let postText7 = document.querySelector('.post-text7');
let curatorSign = document.querySelector('.curator-sign');
let headCid = document.querySelector('.head-cid');
let nameHeadCid = document.querySelector('.name-head-cid');
let headFib = document.querySelector('.head-fib');
let nameHeadFib = document.querySelector('.name-head-fib');
let dateClosedd1 = document.querySelector('.date-closed1');


 // submit generator
btn.addEventListener('click', function(){
    let name1 = document.querySelector('#name');
    let status = document.querySelector('#status');
    let dateOpen = document.querySelector('#date-open').value;
    let caseNumber = document.querySelector('#case-number').value;
    let agentCurator = document.querySelector('#agent-curator').value;
    let agent1 = document.querySelector('#agent1').value;
    let agent2 = document.querySelector('#agent2').value;
    let agent3 = document.querySelector('#agent3').value;
    let agent4 = document.querySelector('#agent4').value;
    let agent5 = document.querySelector('#agent5').value;
    let description = document.querySelector('#description').value;
    let raportTitle1 = document.querySelector('#raport-title1').value;
    let raport1 = document.querySelector('#raport1').value;
    let raportTitle2 = document.querySelector('#raport-title2').value;
    let raport2 = document.querySelector('#raport2').value;
    let raportTitle3 = document.querySelector('#raport-title3').value;
    let raport3 = document.querySelector('#raport3').value;
    let raportTitle4 = document.querySelector('#raport-title4').value;
    let raport4 = document.querySelector('#raport4').value;
    let raportTitle5 = document.querySelector('#raport-title5').value;
    let raport5 = document.querySelector('#raport5').value;
    let time = document.querySelector('#time').value;
    let dateClosed = document.querySelector('#date-closed').value;
    let outcome = document.querySelector('#outcome').value;
    let closedCase = document.querySelector('#closed-case').value;
    let signCurator = document.querySelector('#sign-curator').value;
    let approveList1 = document.querySelector('#approve-list1');
    let nameApprove1 = document.querySelector('#name-approve1').value;
    let approveList2 = document.querySelector('#approve-list2');
    let nameApprove2 = document.querySelector('#name-approve2').value;
    let dateClosed1 = document.querySelector('#date-closed1').value;
    if(name1.value == "" && status.value == "" ){
        alert('Заполните все поля.')
    } else {
    //Visible Blocks
    blankOutcome.style.display = "";
    blankTitule.style.display = "";
    blankAgents.style.display = "";
    blankDescription.style.display = "";
    blankClose.style.display = "";
     //report change text
     if (countRaport.value == 1){
        reportt1.style.display = "";
        raportTittle1.textContent = raportTitle1;
        postText1.textContent = raport1;
    } else if(countRaport.value == 2){
        reportt1.style.display = "";
        raportTittle1.textContent = raportTitle1;
        postText1.textContent = raport1;
        reportt2.style.display = "";
        raportTittle2.textContent = raportTitle2;
        postText2.textContent = raport2;
    } else if(countRaport.value == 3){
        reportt1.style.display = "";
        raportTittle1.textContent = raportTitle1;
        postText1.textContent = raport1;
        reportt2.style.display = "";
        raportTittle2.textContent = raportTitle2;
        postText2.textContent = raport2;
        reportt3.style.display = "";
        raportTittle3.textContent = raportTitle3;
        postText3.textContent = raport3;
    } else if(countRaport.value == 4){
        reportt1.style.display = "";
        raportTittle1.textContent = raportTitle1;
        postText1.textContent = raport1;
        reportt2.style.display = "";
        raportTittle2.textContent = raportTitle2;
        postText2.textContent = raport2;
        reportt3.style.display = "";
        raportTittle3.textContent = raportTitle3;
        postText3.textContent = raport3;
        reportt4.style.display = "";
        raportTittle4.textContent = raportTitle4;
        postText4.textContent = raport4;
    } else if(countRaport.value == 5){
        reportt1.style.display = "";
        raportTittle1.textContent = raportTitle1;
        postText1.textContent = raport1;
        reportt2.style.display = "";
        raportTittle2.textContent = raportTitle2;
        postText2.textContent = raport2;
        reportt3.style.display = "";
        raportTittle3.textContent = raportTitle3;
        postText3.textContent = raport3;
        reportt2.style.display = "";
        raportTittle2.textContent = raportTitle2;
        postText2.textContent = raport2;
        reportt5.style.display = "";
        raportTittle5.textContent = raportTitle5;
        postText5.textContent = raport5;
    }
    //titule change text
    // Priority change text
    if (name1.value == "GREEN") {
        nameCaseFile.textContent = "GREEN";
    } else if (name1.value ==  "ORANGE"){
        nameCaseFile.textContent = "ORANGE";
    } else if (name1.value == "RED"){
        nameCaseFile.textContent = "RED";
    }
    //Status Change text
    if (status.value == "OPENED"){
        status1.textContent = "OPENED";
    } else if (status.value == "CLOSED"){
        status1.textContent = "CLOSED";
    } else if (status.value == "FROZEN"){
        status1.textContent = "FROZEN";
    }
    dateCaseFile.textContent = dateOpen;
    fileNumber.textContent = "C-KK-"+caseNumber;
    //description change text
    postText.textContent = description;
    //outcome change text
    outcomeTime.textContent = time;
    outcomeDate.textContent = dateClosed;
    postText6.textContent = outcome;
    // Closed blank Page
    postText7.textContent = closedCase;
    curatorSign.textContent = signCurator;
    nameHeadCid.textContent = nameApprove1;
    nameHeadFib.textContent = nameApprove2;
    dateClosedd1.textContent = dateClosed1;
    if (approveList1.value == 1){
        headCid.textContent = "Глава криминального следственного отдела";
    } else if (approveList1.value == 2){
        headCid.textContent = "Заместитель главы криминального следственного отдела";
    }
    if (approveList2.value == 1 ){
        headFib.textContent = "Директор FIB";
    } else if (approveList2.value == 2){
        headFib.textContent = "Заместитель директора FIB";
    }
    //agents change text
    itemValue1.textContent = agentCurator;
    if (agentsList.value == 1){
        itemValue2.textContent = agent1;
        itemValue3.textContent = "None";
        itemValue4.textContent = "None";
        itemValue5.textContent = "None";
        itemValue6.textContent = "None";
    } else if (agentsList.value == 2){
        itemValue2.textContent = agent1;
        itemValue3.textContent = agent2;
        itemValue4.textContent = "None";
        itemValue5.textContent = "None";
        itemValue6.textContent = "None";
    } else if (agentsList.value == 3){
        itemValue2.textContent = agent1;
        itemValue3.textContent = agent2;
        itemValue4.textContent = agent3;
        itemValue5.textContent = "None";
        itemValue6.textContent = "None";
    } else if (agentsList.value == 4){
        itemValue2.textContent = agent1;
        itemValue3.textContent = agent2;
        itemValue4.textContent = agent3;
        itemValue5.textContent = agent4;
        itemValue6.textContent = "None";
    } else if (agentsList.value == 5){
        itemValue2.textContent = agent1;
        itemValue3.textContent = agent2;
        itemValue4.textContent = agent3;
        itemValue5.textContent = agent4;
        itemValue6.textContent = agent5;
    }
}
});

// Invisible agents list
    agent1.style.display = "none";
    agent2.style.display = "none";
    agent3.style.display = "none";
    agent4.style.display = "none";
    agent5.style.display = "none"
    labelAgent1.style.display = "none";
    labelAgent2.style.display = "none";
    labelAgent3.style.display = "none";
    labelAgent4.style.display = "none";
    labelAgent5.style.display = "none"
// Invisible Blocks
    blankOutcome.style.display = "none";
    blankTitule.style.display = "none";
    blankAgents.style.display = "none";
    blankDescription.style.display = "none";
    blankClose.style.display = "none";
 // change agents list
agentsList.addEventListener('change', function(){
    if(agentsList.value == 1){
        agent1.style.display = "";
        agent2.style.display = "none";
        agent3.style.display = "none";
        agent4.style.display = "none";
        agent5.style.display = "none";
        labelAgent1.style.display = "";
        labelAgent2.style.display = "none";
        labelAgent3.style.display = "none";
        labelAgent4.style.display = "none";
        labelAgent5.style.display = "none";

    } else if(agentsList.value == 2){
        agent1.style.display = "";
        agent2.style.display = "";
        agent3.style.display = "none";
        agent4.style.display = "none";
        agent5.style.display = "none";
        labelAgent1.style.display = "";
        labelAgent2.style.display = "";
        labelAgent3.style.display = "none";
        labelAgent4.style.display = "none";
        labelAgent5.style.display = "none";
    } else if(agentsList.value == 3){
        agent1.style.display = "";
        agent2.style.display = "";
        agent3.style.display = "";
        agent4.style.display = "none";
        agent5.style.display = "none";
        labelAgent1.style.display = "";
        labelAgent2.style.display = "";
        labelAgent3.style.display = "";
        labelAgent4.style.display = "none";
        labelAgent5.style.display = "none";
    } else if(agentsList.value == 4){
        agent1.style.display = "";
        agent2.style.display = "";
        agent3.style.display = "";
        agent4.style.display = "";
        agent5.style.display = "none";
        labelAgent1.style.display = "";
        labelAgent2.style.display = "";
        labelAgent3.style.display = "";
        labelAgent4.style.display = "";
        labelAgent5.style.display = "none";
    } else if(agentsList.value == 5){
        agent1.style.display = "";
        agent2.style.display = "";
        agent3.style.display = "";
        agent4.style.display = "";
        agent5.style.display = "";
        labelAgent1.style.display = "";
        labelAgent2.style.display = "";
        labelAgent3.style.display = "";
        labelAgent4.style.display = "";
        labelAgent5.style.display = "";
    }
    
});

// Invisible reports
report1.style.display = "none";
report2.style.display = "none";
report3.style.display = "none";
report4.style.display = "none";
report5.style.display = "none";
// Оставлю здесь, потом заберу в btn.addeventlistener
reportt1.style.display = "none";
reportt2.style.display = "none";
reportt3.style.display = "none";
reportt4.style.display = "none";
reportt5.style.display = "none";
// change reports list
countRaport.addEventListener('change', function(){
    if (countRaport.value == 1){
        report1.style.display = "";
        report2.style.display = "none";
        report3.style.display = "none";
        report4.style.display = "none";
        report5.style.display = "none";
    } else if (countRaport.value == 2){
        report1.style.display = "";
        report2.style.display = "";
        report3.style.display = "none";
        report4.style.display = "none";
        report5.style.display = "none";
    } else if (countRaport.value == 3){
        report1.style.display = "";
        report2.style.display = "";
        report3.style.display = "";
        report4.style.display = "none";
        report5.style.display = "none";
    } else if (countRaport.value == 4){
        report1.style.display = "";
        report2.style.display = "";
        report3.style.display = "";
        report4.style.display = "";
        report5.style.display = "none";
    } else if (countRaport.value == 5){
        report1.style.display = "";
        report2.style.display = "";
        report3.style.display = "";
        report4.style.display = "";
        report5.style.display = "";
    }
});