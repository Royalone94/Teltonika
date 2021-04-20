var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/alarm', function(req, res, next) {
	const { ProtocolParser, parseIMEI } = require('complete-teltonika-parser')
	const packet = '00000000000000fd8e0100000176169220e000067673631b1ab6be008f00000f000000000031001800010000020000030100040000b30000b40000320000330000160400470300f00000150300c80000ef00009001004fff0051ff0052ff0053ff0055ff006e01007aff007fff286cff000d00090028000a0036000b003500f50027004327540044000000425c80001800000046009500ecfffd00edffe500ee03d00080ffff00080050ffffffff0054ffffffff0056ffffffff0057ffffffff0058ffffffff0068ffffffff0071ffffffff0087ffffffff000400da0000d546ca81f6ac00db383934343530323700dc303631393934313900dd3332320000000000000001000089fb'
	let parsed = new ProtocolParser(packet)
	console.log(parsed)

	// const imei = parseIMEI('000F333532303933303839313638383231')
	// console.log(imei)
	console.log( parsed.Content.AVL_Datas)


	let avlDatas = parsed.Content.AVL_Datas;
	for ( let avlData of avlDatas) {
		console.log(avlData)

		let timestamp = avlData.Timestamp
		let latitude = avlData.GPSelement.Latitude;
		let longitude = avlData.GPSelement.Longitude;
		
	}
 	res.send({ response : 'text'});
});

module.exports = router;
