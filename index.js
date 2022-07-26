import {loadClickAnalyticsActions, loadGenericAnalyticsActions, loadSearchActions, loadSearchAnalyticsActions} from 'https://static.cloud.coveo.com/atomic/v1/headless/headless.esm.js';
function main() {
    (async () => {
        // whenDefined returns a promise that is fulfilled when the search interface is defined
        await customElements.whenDefined("atomic-search-interface"); 
        const searchInterface = document.querySelector("#search");
        // initialize configures a search endpoint and initializes every atomic component within the tag "atomic-search-interface"
        await searchInterface.initialize({ 
        accessToken: "xx29e62e9b-f739-4886-b433-c9326cc1b492",
        organizationId: "docsdemoslhkhaxyy",
        });
        // optional method to execute a query and display results right away
        searchInterface.executeFirstSearch();
        const result = {
            "title" : "Cheers to our 2017 Lithy Award Winners!",
            "uri" : "https://community.lithium.com/community:lithosphere/category:litho/category:khorosinsights/board:lithiumblog/thread:308728/message:308728",
            "printableUri" : "https://community.lithium.com/community:lithosphere/category:litho/category:khorosinsights/board:lithiumblog/thread:308728/message:308728",
            "clickUri" : "https://community.khoros.com/t5/Khoros-Insights-Blog/Cheers-to-our-2017-Lithy-Award-Winners/ba-p/308728",
            "uniqueId" : "42.38254$https://community.lithium.com/community:lithosphere/category:litho/category:khorosinsights/board:lithiumblog/thread:308728/message:308728",
            "excerpt" : "We’re still buzzing from a memorable party featuring our awesome customers and partners at the 2017 Lithy Awards Ball on June 14 th at the Nasdaq Entrepreneurial Center in San Francisco. ... A few ...",
            "firstSentences" : "null",
            "summary" : null,
            "flags" : "HasHtmlVersion",
            "hasHtmlVersion" : true,
            "hasMobileHtmlVersion" : false,
            "score" : 15380,
            "percentScore" : 100.0,
            "rankingInfo" : "null",
            "rating" : 1.0,
            "isTopResult" : false,
            "isRecommendation" : false,
            "isUserActionView" : false,
            "titleHighlights" : [ ],
            "firstSentencesHighlights" : [ ],
            "excerptHighlights" : [ ],
            "printableUriHighlights" : [ ],
            "summaryHighlights" : [ ],
            "parentResult" : "null",
            "childResults" : [ ],
            "totalNumberOfChildResults" : 0,
            "absentTerms" : [ ],
            "raw" : {
            "sysurihash" : "B91c7dfxMðEUcD0ð",
            "urihash" : "B91c7dfxMðEUcD0ð",
            "permanentid" : "43fb9d1e920b87e9474f93cf3bd83bfc8c8ebe192638b380154b97d8f1fa",
            "syslanguage" : [ "English" ],
            "objecttype" : "Message",
            "sourcetype" : "Lithium",
            "syssource" : "Coveo Sample - Lithium Community",
            "source" : "Coveo Sample - Lithium Community",
            "collection" : "default",
            "syssourcetype" : "Lithium",
            "language" : [ "English" ],
            "syscollection" : "default"
            },
        };
        function clickAction() {
            const headlessEngine = searchInterface.engine;
            const {logDocumentOpen} = loadClickAnalyticsActions(headlessEngine);
            headlessEngine.dispatch(logDocumentOpen(result));
            console.log("Click button");
        }
        function triggerSearch() {
            const headlessEngine = searchInterface.engine;
            const {executeSearch} = loadSearchActions(headlessEngine);
            const {logInterfaceLoad} = loadSearchAnalyticsActions(headlessEngine);
            headlessEngine.dispatch(executeSearch(logInterfaceLoad()));
            console.log("Search button clicked");

        }
        // function genericCustomEvent() {
        //     const headlessEngine = searchInterface.engine;

        //     const {logCustomEvent} = loadGenericAnalyticsActions(headlessEngine);
        //     headlessEngine.dispatch(logCustomEvent({
        //         evt:"button clicked", type:"action"
        //     }));

        //     console.log("Button clicked");
        // }
        const button = document.getElementById("custom-button");
        button.addEventListener("click", clickAction);
        })();
}