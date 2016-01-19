window.onload = function() { init() };
  var myData = [];
  var rowData = [];
//  var x = [];
  var q = [];
  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/19KOzMNajpUqEOwUiTSXU4Je6iW7A1pl3R2qykHqAg3w/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }
  
  function model() {
  	Tabletop.Model( { toArray() } )
  }

  function showInfo(data, tabletop) {
    alert("Successfully processed!")
    console.log(myData);

//	myData = Tabletop.Model.all();
//	myData = tt.all();
    myData = data;
    for (i = 0; i < myData.length; i++)
    {
		x = myData[i];
//		console.log(x);
		
//		for (q in x) {
//			console.log(x[q]);
//		    txt += person[x];
//		}
		/*
		for (j = 0; j < 3; j++)
		{
			q = x[j];
			console.log(q);
		}
*/
//		console.log(x);        
    }
  }