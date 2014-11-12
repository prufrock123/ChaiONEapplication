var activeOn = function() {
	$(this).addClass('activated');
}

var activeOff = function() {
	$(this).removeClass('activated');
}

$('li').hover(activeOn, activeOff)

$('ul li:nth-child(1) a').on('click', function(){
	$('.content').html('<p>Bacon ipsum dolor amet chuck prosciutto ground round ham spare ribs, short ribs landjaeger rump drumstick. Beef ribs pancetta tenderloin, salami pork loin rump pork chop doner. Drumstick pork loin brisket picanha tri-tip strip steak frankfurter leberkas turducken salami ball tip short ribs andouille. </p><p> Andouille meatball pancetta doner, boudin leberkas brisket sausage. Tri-tip tail turkey beef chicken shankle ham hock hamburger doner.Drumstick beef ribs hamburger frankfurter. Rump shankle beef ribs picanha, sausage chuck hamburger pork pork loin ribeye. Turducken jerky prosciutto short loin. T-bone pork boudin strip steak tongue. Beef bresaola doner frankfurter jowl, chicken leberkas ground round filet mignon pancetta jerky ham hock. Venison chicken pork loin, turkey kevin hamburger capicola pork chop salami ham hock beef ground round.</p>')
})

$('ul li:nth-child(2) a').on('click', function(){
	$('.content').html("<p>Play riveting piece on synthesizer keyboard plan steps for world domination. Use lap as chair sleep in the bathroom sink for swat at dog. Hack up furballs hate dog chew iPad power cord why must they do that, loves cheeseburgers.</p><p>Eat grass, throw it back up. I like big cats and i can not lie cat snacks. Jump off balcony, onto stranger's head give attitude nap all day, and find empty spot in cupboard and sleep all day. Under the bed vommit food and eat it again</p>")
})

$('ul li:nth-child(3) a').on('click', function(){
	$('.content').html("<p>Lorizzle ipsum dolor pot amet, fo shizzle adipiscing fo. Daahng dawg sapizzle velizzle, own yo' volutpizzle, we gonna chung quis, funky fresh vizzle, shut the shizzle up. </p><p>Pellentesque owned tortizzle. Sizzle erizzle. I'm in the shizzle at dolizzle dapibizzle you son of a bizzle tempizzle fo shizzle. Mauris fizzle shit et turpizzle. That's the shizzle check it out tortor.</p>")
})