let {msg_doc, msg_doc2, msg_doc3, msg_doc4} = require('./msgDocForVariation')

const addVariation = async (msg_doc, variation) =>{
    try {
        let type = variation.variationType;
        let value = variation.variationValue;
        let newVariation = JSON.parse(JSON.stringify(msg_doc));
        delete newVariation.variations;
        delete newVariation.variationList
        let arr = [];
        arr.push(newVariation);
        for(let i = 0; i < msg_doc.variations.length; i++){
            if(!msg_doc.variations[i].variation[type]){
                arr.push(JSON.parse(JSON.stringify(msg_doc.variations[i]) ) );
            }
        }
        for(let i = 0; i < arr.length; i++){
            if(!arr[i].variation){
                arr[i].variation = {};
            }
            arr[i].variation[type] = value;
        }
        if(!msg_doc.variations){
            msg_doc.variations = []
        }
        if(!msg_doc.variationList){
            msg_doc.variationList = []
        }
        msg_doc.variations.push(...arr);
        msg_doc.variationList.push(variation);
        console.log("this is final msg doc ->######\n",JSON.stringify(msg_doc, null, 4));
    } catch (err) {
        console.log("under catch, found an error in adding variation ->>>>>>>", err);
        
    }
}

const deleteVariation = async (msg_doc, variation) =>{
    try {
        let isVariationPresent = false;
        for(let i = 0 ; i < msg_doc.variationList.length; i++){
            if(variation.variationType == msg_doc.variationList[i].variationType && variation.variationValue == msg_doc.variationList[i].variationValue){
                isVariationPresent = true;
                break;
            }
        }
        if(isVariationPresent){
            for(let i = 0 ; i < msg_doc.variations.length;){
                if(msg_doc.variations[i].variation[variation.variationType] && msg_doc.variations[i].variation[variation.variationType] == variation.variationValue){
                    msg_doc.variations.splice(i,1);
                }
                else
                    i++;
            }
            for(let i = 0 ; i < msg_doc.variationList.length;){
                if(msg_doc.variationList[i].variationType == variation.variationType && msg_doc.variationList[i].variationValue == variation.variationValue){
                    msg_doc.variationList.splice(i, 1);
                    break;
                }
                else
                    i++;
            }
            console.log("this is final msg doc -> ", JSON.stringify(msg_doc, null, 5) );
        }
        else{
            console.log("variation does not exist, you can't delete a non existent variation");
        }
    } catch (err) {
        console.log("under catch, found error in deleting variation -> ", err);
    }
}

addVariation(msg_doc, {
    variationType : 'country',
    variationLabel : 'Oman',
    variationValue : 'om'
});

deleteVariation(msg_doc3, {
    variationType : 'channel',
    variationLabel : 'Whatsapp',
    variationValue : 'wa'
});
