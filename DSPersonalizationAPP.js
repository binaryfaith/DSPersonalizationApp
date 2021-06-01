
//console.log(x[1]);
var oldHref = document.location.href;
console.log('oldHref');
window.onload = function() {
	console.log('oldHref fired')
    var
         bodyList = document.querySelector("body")

        ,observer = new MutationObserver(function(mutations) {

            mutations.forEach(function(mutation) {

                if (oldHref != document.location.href) {

                    oldHref = document.location.href;
                    console.log(oldHref)
                if(oldHref=="https://cdp-dev.zylolabs.com/b2b/segments/smart-list" ){
                	waitForElement();
                	
                }

                }

            });

        });

    var config = {
        childList: true,
        subtree: true
    };

    observer.observe(bodyList, config);

};

/*

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    alert("onload fired");
    var leftPanel = document.getElementsByClassName("zt-left-nav-scroll")[0];
    leftPanel.onclick = function(){
    	document.location.reload(true);
    };
    if (reloading) {
        sessionStorage.removeItem("reloading");
        
    }
};

function reloadP() {
	alert("reload fired");
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
    
}


*/

document.addEventListener('click',function(){
	var idVar = setInterval(check, 10);
	
	function check(callBack) {    
		if(document.querySelector("button.css-h8iyua")){
			var element=document.querySelector("button.css-h8iyua");
				element.onclick = function(){
				waitForElement();
				loadData2();
	
	};
    		clearInterval(idVar);
  }
  else {
  	idVar+10;
  	callBack;
  }
	  
	  

}});


function waitForElement(elementsClassName, callBack){
  window.setTimeout(function(){
  	console.log("waitForElement fired");
    var element = document.getElementsByClassName("MuiDialog-scrollPaper")[0];
    if(element){
      console.log("this worked");
      console.log(element);
      loadData();
      
      var excelEntries = JSON.parse(localStorage.getItem("dataEntryItem"));
      console.log(excelEntries);
      //var excelEntry1 = excelEntries[0];
      //console.log(excelEntry1);
      
      for(i=0;i<excelEntries.length;i++){
      	var smartSegmentText = document.getElementsByClassName("css-1ac24r5")[i].textContent = excelEntries[i];
      	//console.log(smartSegmentText);
      	//console.log(excelEntry);
      	console.log(smartSegmentText);
      	smartListDisplay=true;
      }
      
      /*
      document.getElementsByClassName("css-1ac24r5")[0].textContent=excelEntry1;
      document.getElementsByClassName("css-1ac24r5")[1].textContent="Very";
      document.getElementsByClassName("css-1ac24r5")[2].textContent="Happy";
      document.getElementsByClassName("css-1ac24r5")[3].textContent="New Year";
      document.getElementsByClassName("css-1ac24r5")[4].textContent="to";
      document.getElementsByClassName("css-1ac24r5")[5].textContent="the";
      document.getElementsByClassName("css-1ac24r5")[6].textContent="Zylotech";
      document.getElementsByClassName("css-1ac24r5")[7].textContent="Family";
      */
      
    	
    	if(callBack){
    		callBack(elementsClassName, element);
    	}
    }else{
    	console.log("this didn't work");
    	smartListDisplay=false;
      waitForElement(elementsClassName, callBack);
    }
  },500)
}

function loadData() {
	
console.log("loadData fired");
var url = "https://spreadsheets.google.com/feeds/cells/1K4rTAQobqc8D6YQt0mDkrwWOtxSSjfDcJwlkUppoIFg/1/public/full?alt=json";

xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {

if (xmlhttp.readyState == 4) {

//console.log(xmlhttp.responseText);

}

};

xmlhttp.open("GET", url, true);

xmlhttp.send(null);

}

function loadData2(){
var url = "https://spreadsheets.google.com/feeds/cells/1K4rTAQobqc8D6YQt0mDkrwWOtxSSjfDcJwlkUppoIFg/1/public/full?alt=json";

var ajax = new XMLHttpRequest();
var dataList = Array();
ajax.open("GET", url, true);
ajax.send(null);
ajax.onreadystatechange = function () {

     if (ajax.readyState == 4 && (ajax.status == 200)) {

        console.log("ready");            
        var Data = JSON.parse(ajax.responseText);
        //console.log(Data);
        //console.log(Data.feed.entry[1].content.$t);
        for(i=0;i<Data.feed.entry.length;i++){
        	
        	var dataEntryObject = Data.feed.entry[i];
        	var dataEntryItem = dataEntryObject.content.$t;
        	//console.log(dataEntryItem);
        	dataList.push(dataEntryItem);
        	//console.log(dataList);
        	localStorage.setItem("dataEntryItem", JSON.stringify(dataList));
        }

    } else {
        console.log("not ready yet")  ;          
    }
};

}

document.addEventListener('click',function(){
	var clickedClassName = event.target.className;
	console.log(clickedClassName);
});
