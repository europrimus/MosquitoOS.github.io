'use strict'

const Fs = require('fs')  
const Path = require('path')  
const Axios = require('axios')
require('dotenv').config()


const sidebars = require('../sidebars.js');
async function downloadFiche(secteur,ficheId) {  
	  
	  const url = `${PAD_URl}/mosquito-${ficheId}/download`
	  const dir = "../docs/";
	  try { Fs.mkdirSync(dir); } catch {}
	  const path = Path.resolve(__dirname, dir, `${ficheId}.md`)
	  const writer = Fs.createWriteStream(path)

	  const response = await Axios({
		      url,
		      method: 'GET',
		      responseType: 'stream'
		    })

	  response.data.pipe(writer)

	  return new Promise((resolve, reject) => {
		      writer.on('finish', resolve)
		      writer.on('error', reject)
		    })
}

sidebars.docs.forEach((doc)=> {
	if (typeof doc !== 'string') {	
	doc.items.forEach((fiche)=> {
		downloadFiche(doc.label, fiche.id);
	});	
	}
});

