var Sentence = "On the accession of Queen Elizabeth, her son Prince Charles became heir apparent; he was named prince of Wales on July 26, 1958, and was so invested on July 1, 1969. The queen’s other children were Princess Anne (Anne Elizabeth Alice Louise), born August 15, 1950, and created princess royal in 1987; Prince Andrew (Andrew Albert Christian Edward), born February 19, 1960, and created duke of York in 1986; and Prince Edward (Edward Anthony Richard Louis), born March 10, 1964, and created earl of Wessex and Viscount Severn in 1999. All these children have the surname “of Windsor,” but in 1960 Elizabeth decided to create the hyphenated name Mo"

var words = Sentence.split(" ");

var wordandcount = []


for (let i = 0; i < words.length; i++) {

    const word = words[i]
    var count = 0
    var theguy = true

    for (let i = 0; i < words.length; i++) {

            var confirmword = words[i]

            if ( confirmword === word ) {
                count = count + 1
            }

            // for (let k = 0; k < theguy.length; k++) {

            //     // let inq = theguy[k]

            //     // if ( word == inq.word ) {
            //     //  break
            //     // }else{
            //     //     theguy.push({word:word,count:count})
            //     // }

            //     console.log(theguy)
            // }

        
    }
    
    if ( wordandcount.length > 0 ) {
        
        for (let k = 0; k < wordandcount.length; k++) {

            let num = k + 1 
        
            if ( wordandcount[k].word == word  ) {
                break
            }else{

                if ( wordandcount[k].word !== word && num == wordandcount.length  ) {
                    wordandcount.push({word:word,count:count})
                    break;
                }

            }

        }

    }else{
        wordandcount.push({word:word,count:count})
    }
    
}

for (let j = 0; j < wordandcount.length; j++) {
   
    console.log(`${wordandcount[j].word} - ${wordandcount[j].count}`)
    
}