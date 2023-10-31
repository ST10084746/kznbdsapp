import pdf from 'pdf-creator-node';
import fs from 'fs';


const htmlFile = new URL('template.html', import.meta.url);

var html = fs.readFileSync(htmlFile, "utf-8");

var options = {
    format : "A3",
    orientation: "portrait", 
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Godfrey Dhlandhlara</div>'
    }, 
    foooter:{
        height: "28mm",
        contents: {
            first: 'Cover Page', 
            2: 'Second Page',
            default: '<span style="color: #444;">{{page}}</span><span>{{pages}}</span>',
            last: 'Last Page'
        },
    }
}


const createDoc =  (docData)=>{
    var document = {
        html:html,
        data:{
            newDocument:docData,
        },
        path: `./document/${docData.email}.pdf`,
        type: "",
    }
    
    pdf.create(document, options)
    .then((res)=>{
        console.log(res);
    })
    .catch((error)=>{
        console.error(error)
    })
}

export default createDoc


