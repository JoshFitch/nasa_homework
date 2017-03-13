(function ( window, document, $ ) {

	function exampleTree () {

		var exampleTreeStruct = [
			{
				"text": "Example level 1",
				"children": [
					{
						"text": "Example level 2",
						"children": [
							{
								"text": "Example level 3",
								"children": []
							}
						]
					},
					{
						"text": "Example level 2",
						"children": []
					},
					{
						"text": "Example level 2",
						"children": []
					}
				]
			},
			{
				"text": "Example level 1",
				"children": []
			}
		];

		$( '#jstree' ).jstree({ 'core': { 'data': exampleTreeStruct } });

		return ;
	}


	window.onload = exampleTree;

})( window, document, jQuery );