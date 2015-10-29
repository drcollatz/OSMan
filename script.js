var keys = [];
$.getJSON("http://taginfo.openstreetmap.org/api/4/keys/all?include=prevalent_values&sortname=count_all&sortorder=desc&page=1&rp=35&qtype=key&format=json_pretty",
  function(json_data) {
    for (var k in json_data.data) {
      keys.push(json_data.data[k].key);
    }
    alert(keys.toString());
  });
