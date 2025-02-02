const { readFile, writeFile } = require('fs');

readFile('./content/firstTest.txt', 'utf8', (err, result) => {
    if(err)
    {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/secondTest.txt', 'utf8', (err, result) => {
        if (err)
        {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/resultsync.txt',
            `Here is the result : ${first}, ${second}`
            , (err, result)=> {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log(result);
                }
            }
        ) 
    })
})

