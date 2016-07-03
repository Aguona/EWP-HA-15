
$(document).ready(function() {
	$('.tooltip').tooltipster();
});


$("#clone").tooltipster({
	content: $("#clone-content").detach()
});

$("#add").tooltipster({
	content: $("#add-content").detach()
});

$("#commit").tooltipster({
	content: $("#commit-content").detach()
});

$("#push").tooltipster({
	content: $("#push-content").detach()
});

$("#pull").tooltipster({
	content: $("#pull-content").detach()
});


$("#tab-git").DataTable({
	"ajax" : "struktur.json",
	 "ordering": false
});