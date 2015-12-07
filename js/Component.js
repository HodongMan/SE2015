
var SIM = {

	current_top:0,
	current_left:0,

	SIMInit:function(xPos, yPos){
		this.current_top = 278 + yPos * 100;
		this.current_left = 278 + xPos * 100;
	},

	moveToUp:function(){
		//$("#SIM").css("background", "url('images/RobotUp.jpg') no-repeat");
		$("#SIM").animate({
			top:this.current_top - 100,
			left:this.current_left
		});

		this.current_top -= 100;
	},


	moveToDown:function(){
		//$("#SIM").css("background", "url('images/RobotDown.jpg') no-repeat");
		setTimeout(500);
		$("#SIM").animate({
			top:this.current_top + 100,
			left:this.current_left
		});

		this.current_top += 100;
	},

	moveToLeft:function(){
		//$("#SIM").css("background", "url('images/RobotLeft.jpg') no-repeat");
		$("#SIM").animate({
			top:this.current_top,
			left:this.current_left - 100

		});

		this.current_left -= 100;
	},

	moveToRight:function(){
		//$("#SIM").css("background", "url('images/RobotRight.jpg') no-repeat");
		$("#SIM").animate({
			top:this.current_top,
			left:this.current_left + 100
		});

		this.current_left += 100;
	},

	moveToRotate : function(){

	},

	
};

var ADD_ON = (function(SIM){
	
	planPath = function(graph, start, end, astar){
		
		var result = astar.search(graph, start, end);
		return result;
		
	};

	followingGivenPath = function(start, result, hazard, colorblob){
		
		for(var i = 0 ; i < result.length; i++){
			var before;

			var present;

			if(i ==0){
				before = start;
				present = result[i];
			}
			else{
				before = result[i-1];
				present = result[i];
			}
			
			if((before.y < present.y) && (before.x == present.x)){				
				SIM.moveToDown();
				this.detectColorBlob(colorblob, present);
			}else if((before.y > present.y) && (before.x == present.x)){						
				SIM.moveToUp();
				this.detectColorBlob(colorblob, present);
			}else if((before.y == present.y) && (before.x > present.x)){						
				SIM.moveToLeft();
				this.detectColorBlob(colorblob, present);
			}else if((before.y == present.y) && (before.x < present.x)){						
				SIM.moveToRight();
				this.detectColorBlob(colorblob, present);
			}else{
				alert("위 경로는 도착점에 도착할 수 없습니다.");
			}


		}
	};

	avoidHazard = function(){
		
	};

	detectColorBlob = function(colorblob, Position){

		for(var i = 0; i < colorblob.length; i++){
			if((parseInt(colorblob[0][0]) === Position.x) && (parseInt(colorblob[0][1]) === Position.y)){

				var realX = 278 + Position.x * 100;
				var realY = 278 + Position.y * 100;
				var colorBlobHTML = '<div class = "colorBlobObject" style = "top:'+realY+'px; left:'+realX+'px;"></div>'; 
				
				$("body").append(colorBlobHTML);
			}
			else{

			}
		}
	};

	compensateForImperfectMotion = function(){

	};



	return {
		SIM:SIM,
		followingGivenPath:followingGivenPath,
		planPath:planPath,
		avoidHazard:avoidHazard,
		detectColorBlob:detectColorBlob,
		compensateForImperfectMotion:compensateForImperfectMotion
	};
}(SIM));
