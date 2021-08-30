
			function getData() {
				var url = $("#url").val();
				$.get(url, function(data){
				console.log(data);
				$("#response").html(JSON.stringify(data));
				});
			}
