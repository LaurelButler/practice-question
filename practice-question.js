// A Simple Coding Question:
// Given a file that contains a log(timestamp, customer id, page id), please write a script to parse it and output the list of pages visited by each customer.Add your script to the interview instance when you have finished so that I can run it against the data that's there.

// Input CSV File(* titled customer_pages.csv on the interview instance *)

// Time, Customer ID, Page ID
// 1, C1, P1
// 2, C2, P2
// 3, C3, P3
// 4, C2, P1
// 5, C2, P3
// 6, C2, P2
// 7, C1, P3
// 8, C1, P2
// 9, C3, P1
// 10, C2, P1
// 11, C2, P3
// 12, C2, P2
// 13, C1, P1
// 14, C1, P3
// 15, C1, P2

// ### Examples:

// Example execution of script. * Your execution may look different depending on the language you code in, and that's okay!* 
// The Customer ID must be passed as a parameter and not hard - coded into the script.

// ./ script "C1"

// Example Output:
// P1, P3, P2, P1, P3, P2






// let lineReader = require('readline').createInterface({
//     input: require('fs').createReadStream('customer_pages.csv')
// });
// lineReader.on('line', function (line) {
//     console.log('Line from file:', line);
// })



// let customerVists = {
//     C1: ['P1', 'P2'],
//     C2: ['P1', 'P2', 'P3'],
//     C3: ['P3', 'P1']
// }

//template literal
let externalCustomerData = `
1, C1, P1 
2, C1, P2
3, C2, P1
4, C3, P3
5, C2, P3
6, C3, P1
`
// for(let i = 0; i < )
let custArr = externalCustomerData.split('\n')
custArr.forEach(function (line) {
    console.log(line, '?')
    let reg = /(\d,) (?<cust>C\d), (?<page>P\d)/
    // let customer = line.match(reg).groups.cust
    // let page = line.match(reg).groups.page
    console.log('i am reg', line.match(reg))
    // custVisits[customer, page]
    // console.log('i am cust and page', customer, page)
})

// console.log('I am data', externalCustomerData);
function custVisits(cust, page) {
    // let customerData = obj
    let customerVisits = {}

    if (Object.keys(customerVisits).includes(cust)) {
        customerVisits[cust].push(page)
    } else {
        customerVisits[cust] = [page]
    }
    // console.log('i am function data', customerVisits)
    return customerVisits;
}

console.log(custVisits('C1', 'P4', externalCustomerData));