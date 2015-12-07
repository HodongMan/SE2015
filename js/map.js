
var map = {

	SIMPosition : [],
	mapContent : [],
	hazardContent : [],
	colorBlobContent : [],
	finishContent :[],

	mapRow : 1,
	mapCol : 1,

	drawOneRect:function(xPos, yPos){
		
		$('canvas').drawRect({
			strokeStyle: '#000',
			strokeWidth: 4,
			x: xPos, y: yPos,
			width: 100,
			height: 100,
		});				
	},

	drawBoard:function(row, col){

		if(row > 9 || col > 9 || row < 1 || col < 1){
			alert("올바른 입력값이 아닙니다. 다시 입력하세요");

			$("#row").val("1");
			$("#col").val("1");

			return false;
		}

		this.mapRow = row;
		this.mapCol = col;

		for(var i = 0; i < col; i++){
			for(var j = 0; j < row; j++){
				map.drawOneRect(100 + i * 100, 100 + j * 100);
			}
		}
	
	},

	makeFormBoard:function(){

		$("#formBoard").hover(function(){
			$(this).stop().animate({
				left:'0'
			}, 500, 'easeInSine');
		}, function(){
			$(this).stop().animate({
				left:'-122px'
			}, 1500, 'easeOutBounce');
		})
	},

	makeMapContent:function(){
		
		var temp;
		var hazardList = this.hazardContent;
				

		for(var i = 0; i < this.mapCol; i++){
			this.mapContent[i] = new Array(this.mapCol);
		}

		if(hazardList === undefined || hazardList === null){

			for(var i = 0; i < this.mapCol; i++){
				for(var j = 0; j < this.mapRow; j++){
					this.mapContent[i][j] = 1;
				}
			}
		}else{

			for(var i = 0; i < this.mapCol; i++){
				for(var j = 0; j < this.mapRow; j++){
					this.mapContent[i][j] = 1;
				}
			}

			for(var i = 0; i < hazardList.length; i++){

				temp = hazardList[i];
				this.mapContent[temp[0]][temp[1]] = 0;
		
			
			}

		}

	},


	createHazard:function(){

		var hazard = [];


		$(".hazard").each(function(i, e){

			var makeHazard = $(this).val().split(",");
			var realX = 145 + makeHazard[0] * 100;
			var realY = 185 + makeHazard[1] * 100;
			var hazardHTML = '<div class = "hazardObject" style = "top:'+realY+'px; left:'+realX+'px;"></div>'; 
			
			hazard[i] = makeHazard;
			var $container = hazardHTML;

			$("body").append($container);
		});

		this.hazardContent = hazard;

		

		return hazard;


		

	},

	createSIM:function(xPos, yPos){
		var x = 145 + xPos * 100;
		var y = 185 + yPos * 100;
		var SIMObject = '<div id = "SIM" style = "top:'+y+'px; left:'+x+'px;"></div>';
		this.SIMPosition[0] = x; this.SIMPosition[1] = y; 
		$("body").append(SIMObject);
	},

	createColorBlob:function(){
		var colorblob = [];

		$(".colorblob").each(function(i, e){
			var makeColorBlob = $(this).val().split(",");
			var realX = 145 + makeColorBlob[0] * 100;
			var realY = 185 + makeColorBlob[1] * 100;
			var hazardHTML = '<div class = "colorBlobObject" style = "top:'+realY+'px; left:'+realX+'px;"></div>'; 
			var $container = hazardHTML;
			colorblob[i] = makeColorBlob;


			$("body").append($container);
		})

		this.colorBlobContent = colorblob;

		return colorblob;
	},

	createFinish:function(xPos, yPos){
		var x = 145 + xPos * 100;
		var y = 185 + yPos * 100;
		var finishObject = '<div id = "finishObject" style = "top:'+y+'px; left:'+x+'px;"></div>';
		this.finishContent[0] = x; this.finishContent[1] = y; 
		$("body").append(finishObject);
	}


};
		
