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

// Global Variables
var businessunit, plant, duedate, range, desiredaccuracy, equipmentnumber, calibrationfrequency, intimationdate,
    section, placeofuse, equipmentdescription, lastcalibrationdate, status, remarks;

// Initialize the variables to get ready
function intial() {
    businessunit = document.getElementById('businessunit').value;
    plant = document.getElementById('plant').value;
    duedate = document.getElementById('duedate').value;
    range = document.getElementById('range').value;
    desiredaccuracy = document.getElementById('desiredaccuracy').value;
    equipmentnumber = document.getElementById('equipmentnumber').value;
    calibrationfrequency = document.getElementById('calibrationfrequency').value;
    intimationdate = document.getElementById('intimationdate').value;
    section = document.getElementById('section').value;
    placeofuse = document.getElementById('placeofuse').value;
    equipmentdescription = document.getElementById('equipmentdescription').value;
    lastcalibrationdate = document.getElementById('lastcalibrationdate').value;
    status = document.getElementById('status').value;
    remarks = document.getElementById('remarks').value;
}

// Insert Function
// Insert the value in firebase database as per given reference key
// Here reference key is equipmentnumber
document.getElementById('insert').onclick = function () {
    intial();
    firebase.database().ref('cddm/' + equipmentnumber).set({
        businessunit: businessunit,
        plant: plant,
        duedate: duedate,
        range: range,
        desiredaccuracy: desiredaccuracy,
        calibrationfrequency: calibrationfrequency,
        intimationdate: intimationdate,
        section: section,
        placeofuse: placeofuse,
        equipmentdescription: equipmentdescription,
        lastcalibrationdate: lastcalibrationdate,
        status: status,
        remarks: remarks
    });
    alert("Your data has been saved successfully");
    console.log("Print Insert");
}

// Select Function
// Select the value from firebase database specifed for given reference key
// Here reference key is equipmentnumber
document.getElementById('select').onclick = function () {
    intial();
    firebase.database().ref('cddm/' + equipmentnumber).on('value', function (snapshot) {
        document.getElementById('businessunit').value = snapshot.val().businessunit;
        document.getElementById('plant').value = snapshot.val().plant;
        document.getElementById('duedate').value = snapshot.val().duedate;
        document.getElementById('range').value = snapshot.val().range;
        document.getElementById('desiredaccuracy').value = snapshot.val().desiredaccuracy;
        document.getElementById('equipmentnumber').value = snapshot.val().equipmentnumber;
        document.getElementById('calibrationfrequency').value = snapshot.val().calibrationfrequency;
        document.getElementById('intimationdate').value = snapshot.val().intimationdate;
        document.getElementById('section').value = snapshot.val().section;
        document.getElementById('placeofuse').value = snapshot.val().placeofuse;
        document.getElementById('equipmentdescription').value = snapshot.val().equipmentdescription;
        document.getElementById('lastcalibrationdate').value = snapshot.val().lastcalibrationdate;
        document.getElementById('status').value = snapshot.val().status;
        document.getElementById('remarks').value = snapshot.val().remarks;
    });
    console.log("Print Select");
}

// Update Function
// Update the values in firebase database for the desired reference key
// Here reference key is equipmentnumber
document.getElementById('update').onclick = function () {
    intial();
    firebase.database().ref('cddm/' + equipmentnumber).update({
        businessunit: businessunit,
        plant: plant,
        duedate: duedate,
        range: range,
        desiredaccuracy: desiredaccuracy,
        calibrationfrequency: calibrationfrequency,
        intimationdate: intimationdate,
        section: section,
        placeofuse: placeofuse,
        equipmentdescription: equipmentdescription,
        lastcalibrationdate: lastcalibrationdate,
        status: status,
        remarks: remarks
    });
    alert("Your data has been updated successfully");
    console.log("Print Update");
}

// Delete Function
// Delete the data in firebase database for the given reference key
// Here reference key is equipmentnumber
document.getElementById('delete').onclick = function () {
    intial();
    firebase.database().ref('cddm/' + equipmentnumber).remove();
    alert("Data for given Equipment Number deleted");
    console.log("Print Delete");
}