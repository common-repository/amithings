jQuery(function($) {

	$("iframe.amithings-iframe[id^=\"amithings-\"]").load(function() {
		$.receiveMessage(function(e)
		{
			if (e.origin == "http://app.amithings.com")
			{
				var message = JSON.parse(e.data);
				if (!$("div.amithings-address[id^=\"amithings-\"]").hasClass("amithings-hide"))
				{
					var upl = message["upl"];
//					upl = upl.substr(upl.indexOf(":") + 1);
					$("div.amithings-address[id^=\"amithings-\"]").html(upl);
				}
				var height = message["height"].toString();
				if (height.match(/^\d+$/))
				{
					$("iframe.amithings-iframe[id^=\"amithings-\"]").attr("height", (parseInt(height, 10) + 50).toString());
				}
			}
		});
	});
	
});