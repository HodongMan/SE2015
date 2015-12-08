/*jslint browser : true, continue : true,
	devel : true, indent : 2, maxerr : 50,
	newcap: true, nomen : true, plusplus: true,
	regexp : true, sloppy : true, vars = true,
	while: true
*/

var viewMapForm = {

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

		if(row > 9 || col > 12 || row < 1 || col < 1){
			alert("올바른 입력값이 아닙니다. 다시 입력하세요");

			$("#row").val("1");
			$("#col").val("1");

			return false;
		}


		for(var i = 0; i < col; i++){
			for(var j = 0; j < row; j++){
				this.drawOneRect(100 + i * 100, 100 + j * 100);
			}
		}
	
	},

	makeHazardInsert:function(){
		$(".hazardInsert").click(function(){
			$(".hazardInsertList").append('좌표  : <input type = "text" name = "hazard1" class = "hazard"><br>');
		})
	},

	makeColorBlobInsert:function(){
		$(".colorBlobInsert").click(function(){
			$(".colorBlobInsertList").append('좌표  : <input type = "text" name = "colorblob1" class = "colorblob"><br>');
		})
	},

	makeFinishInsert:function(){
		$(".finishInsert").click(function(){
			$(".finishInsertList").append('좌표  : <input type = "text" name = "finish1" class = "finish"><br>');
		})
	},

	clearHazardColorBlob:function(){
		$(".hazardObject").each(function(i, e){

			$(this).remove();

		})

		$(".colorBlobObject").each(function(i, e){
			$(this).remove()

		})

		$("#SIM").each(function(i, e){
			$(this).remove();
		})
		$(".finishObject").each(function(i, e){
			$(this).remove();
		})


	},

	
	viewInit:function(){
		this.clearHazardColorBlob();
		this.makeHazardInsert();
		this.makeColorBlobInsert();
		this.makeFinishInsert();
		this.drawBoard(5,5);
		this.makeFormBoard();
	}

};