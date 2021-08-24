const urlPrefix = "http://localhost:3001/";


const getDepartments = async() => {
    const constructedUrl = urlPrefix + "/api/department/";
    const resultObjects = [];
    const response = await fetch(constructedUrl).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then((data) => {
        for (let i = 0; i < data.results.length; i++) {
            var ele = data.results[i];
            console.log(ele);
            //rank doesn't always exist
            // var rankTotal = 0;
            // if (ele.community) {
            //     rankTotal = ele.community.want + ele.community.have
            // }
            // var resultObject = {
            //     title: ele.title,
            //     image: ele.cover_image,
            //     rank: rankTotal,
            //     genre: ele.genre,
            //     label: ele.label
            // };
        }
    });
    // return resultObjects;
}

getDepartments();



// function getTrendingSingles(rankThreshold, year, genre, apiKey) {
//     //create string to search by year
//     var constructedUrl = "https://api.discogs.com/database/search?genre=" +
//         genre + "&year=" +
//         year + "&format=single&token=" + apiKey;
//     //get the promise back and then once data comes back pass to update DOM
//     var results = callDiscogsApi(constructedUrl, rankThreshold);
//     results2
//         for (let i = 0; i < data.results.length; i++) {
//             var ele = data.results[i];
//             //rank doesn't always exist
//             var rankTotal = 0;
//             if (ele.community) {
//                 rankTotal = ele.community.want + ele.community.have
//             }
//             var resultObject = {
//                 title: ele.title,
//                 image: ele.cover_image,
//                 rank: rankTotal,
//                 genre: ele.genre,
//                 label: ele.label
//             };
//             //filters out those that don't have sufficient rank calculated above
//             if (resultObject.rank > rankThreshold) {
//                 resultObjects.push(resultObject);
//             }
//         }
//     });
//     return resultObjects;
// }

// //call and get data from discogs API and return custom object array
// async function callDiscogsApi(constructedUrl, rankThreshold) {
//     var resultObjects = [];
//     //get a response and then iterate through data, if it is ranked high enough add the object to the array
//     const response = await fetch(constructedUrl).then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//     }).then((data) => {
//         for (let i = 0; i < data.results.length; i++) {
//             var ele = data.results[i];
//             //rank doesn't always exist
//             var rankTotal = 0;
//             if (ele.community) {
//                 rankTotal = ele.community.want + ele.community.have
//             }
//             var resultObject = {
//                 title: ele.title,
//                 image: ele.cover_image,
//                 rank: rankTotal,
//                 genre: ele.genre,
//                 label: ele.label
//             };
//             //filters out those that don't have sufficient rank calculated above
//             if (resultObject.rank > rankThreshold) {
//                 resultObjects.push(resultObject);
//             }
//         }
//     });
//     return resultObjects;
// }