
//creation of table element
table = document.createElement("table")
table.setAttribute('Id', 'new_table');
table.border = 1;
head = ["Date", "Description"];
row = document.createElement("TR");
row = table.insertRow(-1);

//creation of my header
for (let i = 0; i < head.length; i++) {
  header = document.createElement("TH");
  header.innerHTML = head[i];
  row.appendChild(header);
}

count = 0;

// function to delete my specific tasks
function deleteitem(Mytask) {
  Mytask.remove();

}
//initially there will no display after clicking "add button" you can add data 
function DISPLAY() {
  var elements = document.getElementsByClassName("MyContent")[0];
  if (elements.style.display == "none") {
    elements.style.display = "block";
  } else {
    elements.style.display = "block";
  }

}


//function to generate my table
function generate() {

  var arr = [];
  var date = document.getElementById("Mydate").value;
  var description = document.getElementById("Mydescription").value;

if (date == "" || description == "") {
    alert("Fields can not be blank");
  } else {
    arr.push([date, description]);
    for (let i_index = 0; i_index< arr.length; i_index++) {
      var row = document.createElement("tr");
      row = table.insertRow(-1);
      row.setAttribute("id", "row" + count);
      for (let j_index = 0; j_index < arr[i_index].length + 1; j_index++) {
        if (j_index == 2) {
          var newdata = document.createElement("td");
          newdata = row.insertCell(-1);
          var deletebtn = document.createElement("button");
          deletebtn.setAttribute("onclick", "deleteitem(row" + count + ")");
          var remove = document.createTextNode("Remove Task");
          deletebtn.appendChild(remove);
          newdata.appendChild(deletebtn);
        } else {
          var newdata = document.createElement("td");
          newdata = row.insertCell(-1);
          newdata.innerHTML = arr[i_index][j_index];
        }


      }
      count += 1;
    }
    table.appendChild(row);
    document.body.appendChild(table);

  }

}

