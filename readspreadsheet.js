//window.onload = function() { init() };
  var names = [];
  var studentnum = [];
  var fruit = [];
  var ttsheet1;
  var ttsheet2;
  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/19KOzMNajpUqEOwUiTSXU4Je6iW7A1pl3R2qykHqAg3w/pubhtml';

  function init() {
    ttsheet1 = Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo1,
                     simpleSheet: true } )
	ttsheet2 = Tabletop.init( { key: public_spreadsheet_url,
				 callback: showInfo2,
				 simpleSheet: true } )
  }

  function showInfo1(data, tabletop1) {
//    alert("Successfully processed!")

	// process Sheet1 data
    ttsheet1.sheets("Sheet1")
	
    myData = data;
    for (i = 0; i < myData.length; i++)
    {
		x = myData[i];
		console.log(x);


/*
		names[i] = x[0];
		studentnum[i] = x[1];
		fruit[i] = x[2];

		console.log(names[i]);
		console.log(studentnum[i]);
		console.log(fruit[i]);
*/

		
		count = 0;
		for (q in x) {
			fill(255,0,0);
			if (count == 0)
			{
				usemap = x[q];
				names[count] = x[q];
			}
			if (count == 1)
			{
				studentnum[count] = x[q];
			}
			if (count == 2)
			{
				fruit[count] = x[q];
			}

			console.log(count);
			console.log(x[q]);
			count++;
		}      
		
    }
  }
  
  function showInfo2(data, tabletop2) {
//    alert("Successfully processed!")

	// process Sheet2 data
	/*
    ttsheet2.sheets("Sheet2")
	
    myData = data;
    for (i = 0; i < myData.length; i++)
    {
		x = myData[i];
		console.log(x);
		
		for (q in x) {
			console.log(x[q]);
		}      
    }
*/
  }