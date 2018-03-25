```
var hideLoading = function(callback) {
    $(".bg-mum").fadeOut()
    if (typeof(callback) == "function") {
        callback()
    }
}
```