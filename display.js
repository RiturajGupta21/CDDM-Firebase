// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC1l1H6fs2E8cnx7g8-I_L1jzT24ya_Ths",
    authDomain: "cddmfirebase.firebaseapp.com",
    projectId: "cddmfirebase",
    storageBucket: "cddmfirebase.appspot.com",
    messagingSenderId: "269980113761",
    appId: "1:269980113761:web:0bdf926d5f6d3a93b70320"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get All Data
function getAllData() {
    firebase.database().ref('cddm').once('value', function (records) {
        records.forEach(
            function (currecord) {
                var businessunit = currecord.val().businessunit;
                var plant = currecord.val().plant;
                var duedate = currecord.val().duedate;
                var range = currecord.val().range;
                var desiredaccuracy = currecord.val().desiredaccuracy;
                var equipmentnumber = currecord.val().equipmentnumber;
                var calibrationfrequency = currecord.val().calibrationfrequency;
                var intimationdate = currecord.val().intimationdate;
                var section = currecord.val().section;
                var placeofuse = currecord.val().placeofuse;
                var equipmentdescription = currecord.val().equipmentdescription;
                var lastcalibrationdate = currecord.val().lastcalibrationdate;
                var status = currecord.val().status;
                var remarks = currecord.val().remarks;
                ItemsTable(businessunit, plant, duedate, range, desiredaccuracy, equipmentnumber, calibrationfrequency, intimationdate,
                    section, placeofuse, equipmentdescription, lastcalibrationdate, status, remarks)
            }
        );
    });
}

window.onload = getAllData;

// Add Items to Table
var slno = 0;
function ItemsTable(businessunit, plant, duedate, range, desiredaccuracy, equipmentnumber, calibrationfrequency,
    intimationdate, section, placeofuse, equipmentdescription, lastcalibrationdate, status, remarks) {
    var tbody = document.getElementById('tbody');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');
    var td10 = document.createElement('td');
    var td11 = document.createElement('td');
    var td12 = document.createElement('td');
    var td13 = document.createElement('td');
    var td14 = document.createElement('td');
    var td15 = document.createElement('td');
    td1.innerHTML = ++slno;
    td2.innerHTML = businessunit;
    td3.innerHTML = plant;
    td4.innerHTML = duedate;
    td5.innerHTML = range;
    td6.innerHTML = desiredaccuracy;
    td7.innerHTML = equipmentnumber;
    td8.innerHTML = calibrationfrequency;
    td9.innerHTML = intimationdate;
    td10.innerHTML = section;
    td11.innerHTML = placeofuse;
    td12.innerHTML = equipmentdescription;
    td13.innerHTML = lastcalibrationdate;
    td14.innerHTML = status;
    td15.innerHTML = remarks;
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    trow.appendChild(td10);
    trow.appendChild(td11);
    trow.appendChild(td12);
    trow.appendChild(td13);
    trow.appendChild(td14);
    trow.appendChild(td15);
    tbody.append(trow);
    console.log("Executed")
}