var urlmain = document.URL;
var md = document.URL.split("/")[3];
var key = document.URL.split("/")[4];
var id = document.URL.split("/")[5];

if (md == 'pt') {
  var redir = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key='+key+'&dl_target_url=https://pt.aliexpress.com/item/'+id+'';
} else {
  var redir = 'https://s.click.aliexpress.com/e/'+key;
}


setTimeout(
  function(){
    window.location = redir
  },
500); // waktu tunggu atau delay
