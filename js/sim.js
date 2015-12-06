
var SIM = {

	current_top:185,
	current_left:145,

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

	}
	
	
};
