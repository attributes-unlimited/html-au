export const css =  /*css*/`
.timer-container{
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-family:Arial
}

.header{
  display:table-header-group
}
.row-group {
  display:table-row-group;
}
.row {
  display:table-row;
}
.cell{
  display:table-cell;
  padding:.75rem;
  border-bottom: 1px solid lightgray;
}
.link-like {
  color: blue; /* Set the text color to a link-like color (e.g., blue) */
  text-decoration: underline; /* Add an underline to mimic a typical link */
  cursor: pointer; /* Change the cursor to a pointer to indicate interactivity */
}

.link-like:hover {
  color: purple; /* Change the color when hovering over the element */
}

.range {
  color:gray;
}
.form-group {
          padding-bottom: 20px;
          display:table-row;
          height: 50px;
      }

label {
    display: table-cell;
    font-size:smaller;
    text-align:right;
    padding-right:10px;
}

textarea,
input[type="text"],
select {
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding-bottom:10px;
}

.btn-submit {
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 3px;
    cursor: pointer;
}

.btn-submit:hover {
    background-color: #0056b3;
}

.red{
  color:red;
}
.green{
  color:green;
}

`