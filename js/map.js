
var map = {

	SIMPosition : [],
	mapContent : [],
	hazardContent : [],
	colorBlobContent : [],
	finishContent :[],

	mapRow : 1,
	mapCol : 1,

	mapInit:function(row, col){
		this.mapRow = row;
		this.mapCol = col;
	},

	handleMapData:function(){
		
		var temp;

		for(var i = 0; i <= this.mapCol; i++){
			this.mapContent[i] = new Array(this.mapCol);
		}
		
		if(this.hazardContent === undefined || this.hazardContent === null){
			
			for(var i = 0; i <= this.mapCol; i++){
				for(var j = 0; j <= this.mapRow; j++){
					this.mapContent[i][j] = 1;
				}
			}
			
		}else{

			var hazardList = this.hazardContent;
		
			for(var i = 0; i <= this.mapCol; i++){
				for(var j = 0; j <= this.mapRow; j++){
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
			
			try{
				var makeHazard = $(this).val().split(",");
				if(makeHazard[0] === undefined || makeHazard[1] === undefined){
					this.hazardContent = null;
					return null;
				}
				var realX = 278 + makeHazard[0] * 100;
				var realY = 278 + makeHazard[1] * 100;

				var hazardHTML = '<div class = "hazardObject" style = "top:'+realY+'px; left:'+realX+'px;"></div>'; 
				
				$("body").append(hazardHTML);
				hazard[i] = makeHazard;
				
				
			}
			catch(exception){
				this.hazardContent = null;
				return null;
			}

			
		});
		this.hazardContent = hazard;

		return hazard;
		

	},

	createSIM:function(xPos, yPos){
		var x = 278 + xPos * 100;
		var y = 278 + yPos * 100;
		var SIMObject = '<div id = "SIM" style = "top:'+y+'px; left:'+x+'px;"></div>';
		this.SIMPosition[0] = x; this.SIMPosition[1] = y; 
		$("body").append(SIMObject);
	},

	createColorBlob:function(){
		var colorblob = [];

		$(".colorblob").each(function(i, e){
			
			try{
				var makeColorBlob = $(this).val().split(",");
				if(makeColorBlob[0] === undefined || makeColorBlob[1] === undefined){
					this.colorBlobContent = null;
					return null;
				}
				var realX = 278 + makeColorBlob[0] * 100;
				var realY = 278 + makeColorBlob[1] * 100;
				var hazardHTML = '<div class = "colorBlobObject" style = "top:'+realY+'px; left:'+realX+'px;"></div>'; 
				var $container = hazardHTML;
				colorblob[i] = makeColorBlob;
				$("body").append($container);
			}
			catch(exception){
				this.colorBlobContent = null;
				return null;
			}
		});

		
		this.colorBlobContent = colorblob;
		return colorblob;
	},

	createFinish:function(xPos, yPos){
		var x = 278 + xPos * 100;
		var y = 278 + yPos * 100;
		var finishObject = '<div id = "finishObject" style = "top:'+y+'px; left:'+x+'px;"></div>';
		this.finishContent[0] = x; this.finishContent[1] = y; 
		$("body").append(finishObject);
	}


};
		
