var path = require('path');
var fs  = require('fs');
var FrdData = require('../data/friends');

module.exports = function(app) {
	
	
app.get( "/api/friends",function(req,res){
	res.json(FrdData);
});
	

app.post("/api/friends", function(req, res) {
	  var newfrd = req.body;
	  var ComptibilityDiff = [];		  
		  
    // logic to handle incoming survey results. This route will also be used to handle the compatibility logic.
	if (FrdData.length > 0)
	{
		for (var i=0;i < FrdData.length;i++)
		{
			sum = 0;
			console.log(FrdData[i]);
			console.log(newfrd);
			for (var j = 0;j< FrdData[i].Scores.length;j++)
			{				
				sum  = sum + Math.abs(newfrd.Scores[j] - FrdData[i].Scores[j]);
			}
			// pushing the sum of differences in an array per user
			ComptibilityDiff.push(sum);			
					
		}
		console.log(ComptibilityDiff);
		// using math.min function to get minimum difference.
		console.log(Math.min.apply(null, ComptibilityDiff));
		// using indexof function to get index of minimum value.
		var compatibilityIndex = ComptibilityDiff.indexOf(Math.min.apply(null, ComptibilityDiff) ,0);
		//console.log(ComptibilityDiff.indexOf(Math.min.apply(null, ComptibilityDiff) ,0));
		res.json(FrdData[compatibilityIndex]);		
	}
	// adding this current user to the frddata array at the end since the same user should not get compared getting 0 result as minimum
	  FrdData.push(newfrd);
	
	fs.writeFile('./data/friends.json',  JSON.stringify(FrdData), function (err) {
	if (err) throw err;
  });
 });	
};