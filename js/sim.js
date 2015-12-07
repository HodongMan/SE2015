
var SIM = {

	current_top:0,
	current_left:0,

	SIMInit:function(xPos, yPos){
		this.current_top = 185 + yPos * 100;
		this.current_left = 145 + xPos * 100;
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


	followingGivenPath:function(start, result){

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
				this.moveToDown();
			}else if((before.y < present.y) && (before.x == present.x)){						
				this.moveToUp();
			}else if((before.y == present.y) && (before.x > present.x)){						
				this.moveToLeft();
			}else if((before.y == present.y) && (before.x < present.x)){						
				this.moveToRight();
			}else{

			}
			
				
			
		}
	},

	planningPath:function(){

		var graph = new Graph(map.mapContent);
		var start = graph.grid[xPos][yPos];
		var end = graph.grid[xFinish][yFinish];
		var result = astar.search(graph, start, end);

		return result;
	}

	
	
};
