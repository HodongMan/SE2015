var view = {

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
	}

};