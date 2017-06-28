$(document).ready(function(){
	
	//Deal with tabs section 
    $('.tab-switch li').click(function () {
        // Add active class to active link
        $(this).addClass('active').siblings().removeClass('active');
		
    }); // End Click
	
	//Nice Scroll
	$("html").niceScroll({
		 cursorcolor:'#337AB7',
		 cursorborder:'1px solid #1ABC9C',
		 cursorwidth:'10px'
		 
	});
	// function that create text please enter values ...
	function work_para(){
			var para = document.createElement("p");
			para.innerHTML='please enter numbers of the vector that must be sperated by comma';
			para.style.fontSize="20px";
			para.style.color='#676767';
			para.style.paddingTop="20px";
			document.getElementById("num_area").appendChild(para);
	}
	//function that create responsive textarea
	function text_area(){
			var area_ = document.createElement("textarea");
			area_.setAttribute('class','form-control');
			area_.setAttribute('id','values');
			area_.setAttribute('rows',"5");
			area_.style.marginTop="50px";
			document.getElementById("num_area").appendChild(area_);
			
	}
	//validation that numbers sperated by comma
	function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         //if (charCode > 31 && (charCode < 48 || charCode > 57 )||charCode != 44)
		 //if (charCode <31 && (charCode >48 || charCode < 57 ||charCode = 44))
		 if((charCode >= 48 && charCode <= 57) || charCode == 46|| charCode==44)
            return true;
			
			
        
        return false;
      }
		 //mean
	$('#mu').click(function(){
		
		// when click on clear button
		clearValue();
		
		//clear workspace and result area when choose another operation
		$("#num_area").html("");
		$("#res-area").html("");
		//paragraph create , text , style and append.
		work_para();
		
		// responsive textarea create , text , style and append.
		text_area();
		
		//call function of validation
		$('#values').keypress(function(evt){
			return isNumberKey(evt)
		});
		$('#values').blur(function(){
			x = document.getElementById('values').value;

				$('#cal-btn').one( "click", function(){
					// validation not to be empty
					if(x==''){
						para2.innerHTML='';
					}
					//clear result area whenever click calculate
					$("#res-area").html("");
					var para2 = document.createElement("p");
					x = document.getElementById('values').value;
					
					//split comman from values.
					var nums_arr = x.split(',');
					
					// write result
					para2.innerHTML=mean(nums_arr); //call mean function
					para2.style.fontSize="20px";
					para2.style.color='#676767';
					para2.style.paddingTop="20px";
					document.getElementById("res-area").appendChild(para2);
				});
		});	
	});
		
	//median- 
	$('#med').click(function(){
		// when click on clear button
		clearValue();
		
		//clear workspace and result area when choose another operation
		$("#num_area").html("");
		$("#res-area").html("");
		//paragraph create , text , style and append.
		work_para();
		
		// responsive textarea create , text , style and append.
		text_area();
		
		//call function of validation
		$('#values').keypress(function(evt){
			return isNumberKey(evt);
		});
		// validation not to be empty
		$('#values').blur(function(){
			x = document.getElementById('values').value;
				
				$('#cal-btn').one( "click", function(){
					// validation not to be empty
					if(x==''){
						para2.innerHTML='';
					}
					//clear result area whenever click calculate
					$("#res-area").html("");
					var para2 = document.createElement("p");
					x = document.getElementById('values').value;
					
					//split comman from values.
					var nums_arr = x.split(',');
					
					// calculate median
					function median(values) {
						values.sort( function(a,b) {return a - b;} );
						var half = Math.floor((values.length)/2);
						if(values.length % 2)
							return(values[half]);
						else
							return((parseFloat(values[half-1]) + parseFloat(values[half])) /2.0);
					}
					// write result
					para2.innerHTML=median(nums_arr);
					para2.style.fontSize="20px";
					para2.style.color='#676767';
					para2.style.paddingTop="20px";
					document.getElementById("res-area").appendChild(para2);
				});
		});	
	});
	//mode
	$('#mode').click(function(){
		// when click on clear button
		clearValue();
		
		//clear workspace and result area when choose another operation
		$("#num_area").html("");
		$("#res-area").html("");
		//paragraph create , text , style and append.
		work_para();
		
		// responsive textarea create , text , style and append.
		text_area();

		//call function of validation
		$('#values').keypress(function(evt){
			return isNumberKey(evt);
		});
		// validation not to be empty
		$('#values').blur(function(){
			x = document.getElementById('values').value;

				$('#cal-btn').one( "click", function(){
					
					// validation not to be empty
					if(x==''){
						para2.innerHTML='';
					}
					//clear result area whenever click calculate
					$("#res-area").html("");
					var para2 = document.createElement("p");
					x = document.getElementById('values').value;
					
					//split comman from values.
					var nums_arr = x.split(',');
					
					// calculate mode
					function mode(array){
						var modeMap = {},
							maxCount = 1, 
							modes = [];
						for(var i = 0; i < array.length; i++)
						{
							var el = array[i];

							if (modeMap[el] == null)
								modeMap[el] = 1;
							else
								modeMap[el]++;

							if (modeMap[el] > maxCount)
							{
								modes = [el];
								maxCount = modeMap[el];
							}
							else if (modeMap[el] == maxCount)
							{
								modes.push(el);
								maxCount = modeMap[el];
							}
						}
						return modes;
					}
					// write result
					para2.innerHTML=mode(nums_arr);
					para2.style.fontSize="20px";
					para2.style.color='#676767';
					para2.style.paddingTop="20px";
					document.getElementById("res-area").appendChild(para2);
				});
		});	
	});
	//range- 
	$('#range').click(function(){
		
		// when click on clear button
		clearValue();
		
		//clear workspace and result area when choose another operation
		$("#num_area").html("");
		$("#res-area").html("");
		//paragraph create , text , style and append.
		work_para();
		
		// responsive textarea create , text , style and append.
		text_area();
		
		//call function of validation
		$('#values').keypress(function(evt){
			return isNumberKey(evt);
		});
		// validation not to be empty
		$('#values').blur(function(){
			x = document.getElementById('values').value;
			
				$('#cal-btn').one( "click", function(){
					// validation not to be empty
					if(x==''){
						para2.innerHTML='';
					}
					//clear result area whenever click calculate
					$("#res-area").html("");
					var para2 = document.createElement("p");
					x = document.getElementById('values').value;
					
					//split comman from values.
					var nums_arr = x.split(',');
					
					// calculate range
					Array.prototype.max = function() {
					  return Math.max.apply(null, this);
					};

					Array.prototype.min = function() {
					  return Math.min.apply(null, this);
					};
									
					var min = Math.min.apply(null, nums_arr),
						max = Math.max.apply(null, nums_arr);
					
					// write result
					para2.innerHTML=max-min;
					para2.style.fontSize="20px";
					para2.style.color='#676767';
					para2.style.paddingTop="20px";
					document.getElementById("res-area").appendChild(para2);
				});
		});	
	});

	//standard division- 
	$('#std').click(function(){
		
		// when click on clear button
		clearValue();
		
		//clear workspace and result area when choose another operation
		$("#num_area").html("");
		$("#res-area").html("");
		//paragraph create , text , style and append.
		work_para();
		
		// responsive textarea create , text , style and append.
		text_area();
		
		//call function of validation
		$('#values').keypress(function(evt){
			return isNumberKey(evt);
		});
		
		$('#values').blur(function(){
			x = document.getElementById('values').value;
	
				$('#cal-btn').one( "click", function(){
					
					// validation not to be empty
					if(x==''){
						para2.innerHTML='';
					}
					
					//clear result area whenever click calculate
					$("#res-area").html("");
					var para2 = document.createElement("p");
					x = document.getElementById('values').value;
					
					//split comman from values.
					var nums_arr = x.split(',');
					
					// write result
					para2.innerHTML=std(nums_arr); //call std function
					para2.style.fontSize="20px";
					para2.style.color='#676767';
					para2.style.paddingTop="20px";
					document.getElementById("res-area").appendChild(para2);
				});
		});	
	});
	//paragraph of first vector
	function first_para(){
			var para = document.createElement("p");
			para.innerHTML='please enter numbers of the first vector that must be sperated by comma';
			para.style.fontSize="20px";
			para.style.color='#676767';
			para.style.paddingTop="10px";
			document.getElementById("num_area").appendChild(para);
	}
	//paragraph of second vector
	function sec_para(){
			var para = document.createElement("p");
			para.innerHTML='please enter numbers of the second vector that must be sperated by comma';
			para.style.fontSize="20px";
			para.style.color='#676767';
			para.style.paddingTop="10px";
			document.getElementById("num_area").appendChild(para);
	}
	//area of first vector
	function first_area(){
			var area_ = document.createElement("textarea");
			area_.setAttribute('class','form-control');
			area_.setAttribute('id','value1');
			area_.setAttribute('rows',"5");
			area_.style.marginTop="5px";
			document.getElementById("num_area").appendChild(area_);
	}
	//area of second vector
	function sec_area(){
			var area_ = document.createElement("textarea");
			area_.setAttribute('class','form-control');
			area_.setAttribute('id','value2');
			area_.setAttribute('rows',"5");
			area_.style.marginTop="5px";
			document.getElementById("num_area").appendChild(area_);
	}
	
	//Hamming Distance- 
	$('#hd').click(function(){

		// when click on clear button
		clearValues();
		
		//clear workspace and result area when choose another operation
		$("#num_area").html("");
		$("#res-area").html("");
		//paragraph create , text , style and append.
		first_para();
		
		// responsive textarea create , text , style and append.
		first_area();
		
		//paragraph create , text , style and append.
		sec_para();
		
		// responsive textarea create , text , style and append.
		sec_area();
		
		//call function of validation
		$('#value1,#value2').keypress(function(evt){
			return isNumberKey(evt);
		});
		$('#value1,#value2').blur(function(){
			x = document.getElementById('value1').value;
			y = document.getElementById('value2').value;
			
			$('#cal-btn').one( "click", function(){
					
					// validation not to be empty
					if(x=='' || y==''){
						para2.innerHTML='';
					}
					//clear result area whenever click calculate
					$("#res-area").html("");
					var para2 = document.createElement("p");
					x = document.getElementById('value1').value;
					y = document.getElementById('value2').value;
					
					//split comman from values.
					var nums_arr_x = x.split(',');
					var nums_arr_y = y.split(',');
					
					
					twoPlot(nums_arr_x,nums_arr_y);
					// calculate HD
					function Hamming(input1, input2) {
						
						//if two array not equal in length
						var shortestArrayLength = 0; 
						if(input1.length == input2.length) {
							shortestArrayLength = input1.length;
						}
						else if(input1.length > input2.length) {
							shortestArrayLength = input2.length;
							alert('first vector has more items in it, the last ' + (input1.length - shortestArrayLength) + ' item(s) will be ignored');
						}
						else {
							shortestArrayLength = input1.length;
							alert('Second has more items in it, the last ' + (input2.length - shortestArrayLength) + ' item(s) will be ignored');
							}
						var diff = 0;
						for (i = 0; i < shortestArrayLength; i++) {
						  if (input1[i] != input2[i]) {
							diff = diff + 1;
						  }
						}
						return diff;
					}
					
					// write result
					para2.innerHTML=Hamming(nums_arr_x,nums_arr_y);
					para2.style.fontSize="20px";
					para2.style.color='#676767';
					para2.style.paddingTop="20px";
					document.getElementById("res-area").appendChild(para2);
			});	
		});
	});
	
	//covariance- 
	$('#cov').click(function(){
		
		// when click on clear button
		clearValues();
		
		//clear workspace and result area when choose another operation
		$("#num_area").html("");
		$("#res-area").html("");
		//paragraph create , text , style and append.
		first_para();
		
		// responsive textarea create , text , style and append.
		first_area();
		
		//paragraph create , text , style and append.
		sec_para();
		
		// responsive textarea create , text , style and append.
		sec_area();
		
		//call function of validation
		$('#value1,#value2').keypress(function(evt){
			return isNumberKey(evt);
		});
		
		// validation not to be empty
		$('#value1,#value2').blur(function(){
			x = document.getElementById('value1').value;
			y = document.getElementById('value2').value;
			
			$('#cal-btn').one( "click", function(){
					
					// validation not to be empty
					if(x=='' || y==''){
						para2.innerHTML='';
					}
					//clear result area whenever click calculate
					$("#res-area").html("");
					var para2 = document.createElement("p");
					x = document.getElementById('value1').value;
					y = document.getElementById('value2').value;
					
					//split comman from values.
					var nums_arr_x = x.split(',');
					var nums_arr_y = y.split(',');
					
					twoPlot(nums_arr_x,nums_arr_y);
				
					// write result
					para2.innerHTML=cov(nums_arr_x,nums_arr_y); //call covariance function
					para2.style.fontSize="20px";
					para2.style.color='#676767';
					para2.style.paddingTop="20px";
					document.getElementById("res-area").appendChild(para2);
			});	
		});
	});
	//correlation- 
	$('#corr').click(function(){

		// when click on clear button
		clearValues();
		
		//clear workspace and result area when choose another operation
		$("#num_area").html("");
		$("#res-area").html("");
		//paragraph create , text , style and append.
		first_para();
		
		// responsive textarea create , text , style and append.
		first_area();
		
		//paragraph create , text , style and append.
		sec_para();
		
		// responsive textarea create , text , style and append.
		sec_area();
		
		//call function of validation
		$('#value1,#value2').keypress(function(evt){
			return isNumberKey(evt);
		});
	
		$('#value1,#value2').blur(function(){
			x = document.getElementById('value1').value;
			y = document.getElementById('value2').value;
			
			$('#cal-btn').one( "click", function(){
					
					// validation not to be empty
					if(x=='' || y==''){
						para2.innerHTML='';
					}	
					//clear result area whenever click calculate
					$("#res-area").html("");
					var para2 = document.createElement("p");
					x = document.getElementById('value1').value;
					y = document.getElementById('value2').value;
					
					//split comman from values.
					var nums_arr_x = x.split(',');
					var nums_arr_y = y.split(',');
					
					twoPlot(nums_arr_x,nums_arr_y);
				
					// write result
					para2.innerHTML=corr(nums_arr_x,nums_arr_y); //call correlation function
					para2.style.fontSize="20px";
					para2.style.color='#676767';
					para2.style.paddingTop="20px";
					document.getElementById("res-area").appendChild(para2);
			});	
		});
	});
	
	//cosine distance- 
	$('#cos').click(function(){

		// when click on clear button
		clearValues();
		
		//clear workspace and result area when choose another operation
		$("#num_area").html("");
		$("#res-area").html("");
		//paragraph create , text , style and append.
		first_para();
		
		// responsive textarea create , text , style and append.
		first_area();
		
		//paragraph create , text , style and append.
		sec_para();
		
		// responsive textarea create , text , style and append.
		sec_area();
		
		//call function of validation
		$('#value1,#value2').keypress(function(evt){
			return isNumberKey(evt);
		});

		$('#value1,#value2').blur(function(){
			x = document.getElementById('value1').value;
			y = document.getElementById('value2').value;
			
			$('#cal-btn').one( "click", function(){
					
					// validation not to be empty
					if(x=='' || y==''){
						para2.innerHTML='';
					}
					//clear result area whenever click calculate
					$("#res-area").html("");
					var para2 = document.createElement("p");
					x = document.getElementById('value1').value;
					y = document.getElementById('value2').value;
					
					//split comman from values.
					var nums_arr_x = x.split(',');
					var nums_arr_y = y.split(',');
					
					twoPlot(nums_arr_x,nums_arr_y);
				
					function cos(){
						//if two array not equal in length
						var shortestArrayLength = 0; 
						if(nums_arr_x.length == nums_arr_y.length) {
							shortestArrayLength = nums_arr_x.length;
						}
						else if(nums_arr_x.length > nums_arr_y.length) {
								shortestArrayLength = nums_arr_y.length;
								alert('first vector has more items in it, the last ' + (nums_arr_x.length - shortestArrayLength) + ' item(s) will be ignored');
						}
						else {
						shortestArrayLength = nums_arr_x.length;
						alert('Second has more items in it, the last ' + (nums_arr_y.length - shortestArrayLength) + ' item(s) will be ignored');
						}
						var a_dot_b =0;
						var a_len=0;
						var b_len=0;
						
						for (var i=0; i <shortestArrayLength; i++)
						{	
							a_dot_b += ( nums_arr_x[i] * nums_arr_y[i] );
							a_len += Math.pow(parseInt(nums_arr_x[i]) ,2);
							b_len +=Math.pow(parseInt(nums_arr_y[i]) ,2);
						}
						var a_res = Math.sqrt(a_len);
						var b_res = Math.sqrt(b_len);

						return a_dot_b / (a_res * b_res);
					}	
					// write result
					para2.innerHTML=cos();
					para2.style.fontSize="20px";
					para2.style.color='#676767';
					para2.style.paddingTop="20px";
					document.getElementById("res-area").appendChild(para2);
			});	
		});
	});
	
	//jacard distance- 
	$('#jac').click(function(){

		// when click on clear button
		clearValues();
		
		//clear workspace and result area when choose another operation
		$("#num_area").html("");
		$("#res-area").html("");
		//paragraph create , text , style and append.
		first_para();
		
		// responsive textarea create , text , style and append.
		first_area();
		
		//paragraph create , text , style and append.
		sec_para();
		
		// responsive textarea create , text , style and append.
		sec_area();
		
		//call function of validation
		$('#value1,#value2').keypress(function(evt){
			return isNumberKey(evt);
		});
	
		$('#value1,#value2').blur(function(){
			x = document.getElementById('value1').value;
			y = document.getElementById('value2').value;
		
			$('#cal-btn').one( "click", function(){
					
					// validation not to be empty
					if(x=='' || y==''){
						para2.innerHTML='';
					}
					//clear result area whenever click calculate
					$("#res-area").html("");
					var para2 = document.createElement("p");
					x = document.getElementById('value1').value;
					y = document.getElementById('value2').value;
					
					//split comman from values.
					var nums_arr_x = x.split(',');
					var nums_arr_y = y.split(',');
					
					twoPlot(nums_arr_x,nums_arr_y);
					
					//if two array not equal in length
						var shortestArrayLength = 0; 
						if(nums_arr_x.length == nums_arr_y.length) {
							shortestArrayLength = nums_arr_x.length;
						}
						else if(nums_arr_x.length > nums_arr_y.length) {
								shortestArrayLength = nums_arr_y.length;
								alert('first vector has more items in it, the last ' + (nums_arr_x.length - shortestArrayLength) + ' item(s) will be ignored');
						}
						else {
						shortestArrayLength = nums_arr_x.length;
						alert('Second has more items in it, the last ' + (nums_arr_y.length - shortestArrayLength) + ' item(s) will be ignored');
						}
				
					//jacard
					function intersection(arra1,arra2){
						var intersec=0;
						for(var i=0; i<shortestArrayLength;i++){
							if(arra1[i]==arra2[i]){
								intersec+=1;
							}	
						}
						return intersec;	
					}
					function union(arra1, arra2) {  
					
						var obj = {};  
						for (var i = shortestArrayLength-1; i >= 0; -- i)  
							obj[arra1[i]] = arra1[i];  
									   
						for (var i = shortestArrayLength-1; i >= 0; -- i)  
							obj[arra2[i]] = arra2[i];  
									   
						var res = [];  
						for (var n in obj){  
							if (obj.hasOwnProperty(n))   
									res.push(obj[n]);  
							}    
						 return res.length;  
					}  
					
					// write result
					para2.innerHTML=intersection(nums_arr_x,nums_arr_y)/union(nums_arr_x,nums_arr_y);;
					para2.style.fontSize="20px";
					para2.style.color='#676767';
					para2.style.paddingTop="20px";
					document.getElementById("res-area").appendChild(para2);
			});	
		});
	});

	// calculate mean	
	function mean(input){
		var len = input.length;
		var total=0;
		for (var i=0; i <len; i++){
			total += parseFloat(input[i]);
		}	
		var num_area_res = total / len ;
		return num_area_res;
	}
	// calculate std
	function std(input){
		//mean
		var mu = mean(input);
						
		var len = input.length;
		var var_=0;
		for (var i=0; i <len; i++){	
			var_ = var_ +  Math.pow( (parseInt(input[i])  -  mu ),2) ;
		}
		return Math.sqrt(var_ / (len));
	}
	
	//calculate covariance
	function cov(input1,input2){
		//mean
		var mu_x = mean(input1);
		var mu_y = mean(input2);
		
		//if two array not equal in length
		var shortestArrayLength = 0; 
		if(input1.length == input2.length) {
			shortestArrayLength = input1.length;
		}
		else if(input1.length > input2.length) {
				shortestArrayLength = input2.length;
				alert('first vector has more items in it, the last ' + (input1.length - shortestArrayLength) + ' item(s) will be ignored');
		}
		else {
		shortestArrayLength = input1.length;
		alert('Second has more items in it, the last ' + (input2.length - shortestArrayLength) + ' item(s) will be ignored');
		}
		
		
		var var_ =0;
		for (var i=0; i <shortestArrayLength; i++){	
			var_ = var_ + (parseInt(input1[i])  -  mu_x )  *  (parseInt(input2[i])  - mu_y );
		}
		 return var_ / (shortestArrayLength);
	}
	//calculate correlation
	function corr(input1,input2){
		
		var covar = cov(input1,input2);
		//std
		var std_x = std(input1);
		var std_y = std(input2);
	
		var cor=0;
		var corr = covar/(std_x * std_y);
		return corr;
	}
	
	//clear button
	function clearValue() {
				$('#clear-btn').click(function(){
					document.getElementById('values').value='';
					$("#res-area").html("");
				});
	}
	function clearValues() {
				$('#clear-btn').click(function(){
					document.getElementById('value1').value='';
					document.getElementById('value2').value='';
					$("#res-area").html("");
				});
	}
	//Scatter plot
	function twoPlot(input1,input2){
		x = document.getElementById('value1').value;
		y = document.getElementById('value2').value;
					
		//split comman from values.
		var nums_arr_x = x.split(',');
		var nums_arr_y = y.split(',');
		
		var trace1 = {
		  x: nums_arr_x,
		  mode: 'markers',
		  type: 'scatter',
		  name: '1st Vector',
		  marker: { size: 12 }
		};

		var trace2 = {
		  y: nums_arr_y,
		  mode: 'markers',
		  type: 'scatter',
		  name: '2nd Vector',
		  marker: { size: 12 }
		};

		var data = [ trace1, trace2 ];

		var layout = { 
		  title:'Scatter Plot For X,Y'
		};

		Plotly.newPlot('myDiv', data, layout);
	}

});