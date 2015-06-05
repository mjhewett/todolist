
// (function(){

var Todo = function(options){

 var option = options || {};
	this.task = option.task;
	this.status = 'Open';
};



var taskBin = [];



// *************************
// getting stuff on the page
// *************************


$('#fudge').on('submit', function(event){

	event.preventDefault();
	var taskText = $('#taskText').val();
	var doIt =  new Todo({task: taskText});
	taskBin.push(doIt);
	$('#tasks').append('<li>' + taskText + '</li>');
	this.reset();

});


// ************************
// Marking function as done
// ************************

$('#tasks').on('click', 'li', function(event){


	event.preventDefault();
	$(this).addClass('done');

	var statChange = $(this).text();
	var statEdit = _.find(taskBin, {task: statChange});
	statEdit.status = 'Closed';


});


// **********************
// removing class of done
// **********************


$('#tasks').on('click', '.done', function(event){


	event.preventDefault();
	$(this).removeClass('done');

	var statChange = $(this).text();
	var statEdit = _.find(taskBin, {task: statChange});
	statEdit.status = 'Open';

});


// ****************
// removing an <li>
// ****************


$('#removeTask').on('click', function(event){

	event.preventDefault();

	taskBin = taskBin.filter(function(x){

	if (x.status === 'Open'){

		return x;
	}

			taskBin.push(x);
	});

	$('#tasks').empty();


	taskBin.forEach( function(x){

		$('#tasks').append('<li>' + x.task + '</li>');
	});

}); 






	





// delegated events jquery

// when i click on a todo, i want that todo to be classed "done"



// }());













