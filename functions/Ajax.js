const createXMLHTTPObject = () => {

      let xmlhttp = false;

      const XMLHttpFactories = [ // Multiple Http objects for cross-browser support 
            function () { return new XMLHttpRequest() },
            function () { return new ActiveXObject("Msxml2.XMLHTTP") },
            function () { return new ActiveXObject("Msxml3.XMLHTTP") },
            function () { return new ActiveXObject("Microsoft.XMLHTTP") }
      ];

      for (let i = 0; i < XMLHttpFactories.length; i++) { // Filtering to get the supported Http object

            try { //Checking if the object is supported by the current browser or not
                  xmlhttp = XMLHttpFactories[i]();
            }

            catch (e) {
                  continue;
            }

            break;
      }

      return xmlhttp;
}




const formatParams = params => {
      /*
            Formating data object into 
            "key1=value&key2=value2" form
            for sending .
      */

      return "?" + Object
            .keys(params)
            .map(function (key) {
                  return key + "=" + encodeURIComponent(params[key])
            })
            .join("&")
}

function Ajax(obj) {

      let defaults = { //Setting Defaults
            url: "",
            type: "GET",
            data: {},
            ContentType: "application/x-www-form-urlencoded",
            success: () => { },
            error: () => { }
      };


      Object.keys(defaults).forEach(key => {

            if (typeof obj[key] == "undefined")
                  obj[key] = defaults[key]

      });

      obj.type = obj.type.toString().toUpperCase();

      let endURL, sendData;

      if (obj.type == "GET") {

            endURL = obj.url + formatParams(obj.data);

            sendData = null;
      }

      else {
            endURL = obj.url;

            sendData = formatParams(obj.data).slice(1);

      }

      let xhr = createXMLHTTPObject();


      xhr.open(obj.type, endURL, true);

      xhr.setRequestHeader('Content-type', obj.ContentType);

      xhr.onreadystatechange = function () {
            if (this.readyState == xhr.DONE && this.status == 200)
                  obj.success(this.responseText); // calling success function
      }

      xhr.onerror = function () {
            obj.error(this.statusText, this.status) // caling error function
      };

      xhr.send(sendData);

}

      /* USAGE */


Ajax({   // For POST or GET Requests

      type: "POST", // GET , POST

      url: "/weather", //URL to fetch data from

      data : { foo : "bar" },

      success: function (data) {
            /* do something with data */
      },
      error: function (status, statusText) {
            /* do anything with status and statusText */
      }

});


// Using form data

let fd = new FormData();

fd.append("foo","bar");

fd.append("myFile","<File Object>");

Ajax({

      type : "POST",

      url : "/upload",

      data : fd,

      success : function(){
            console.log("File Uploaded !!!");
      },
      error : function(){
            console.log("There was an error uploading the file");
      }

})
