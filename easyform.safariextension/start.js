(function() {
    // read-set
    window.addEventListener('load', function(event) {
        if (location.hostname !== '') {
            var forms = document.getElementsByTagName('input');
            for (var i = 0; i < forms.length; i++) {
                var f = forms[i];
                if (f.type.toLocaleLowerCase() === 'text') {
                    var name = f.name;
                    var val = localStorage.getItem(name);
                    if (val !== null) {
                        f.value = val;
                    }
                }
                if (f.type.toLocaleLowerCase() === 'radio') {
                    var name = f.name;
                    var val = f.value;
                    var chk = localStorage.getItem(name);
                    p
                    if (val === chk) {
                        f.checked = true;
                    }
                }
            }
            var sels = document.getElementsByTagName('select');
            for (var i = 0; i < sels.length; i++) {
                var f = sels[i];
                var name = f.name;
                var val = localStorage.getItem(name);
                if (val !== null) {
                    f.value = val;
                }
            }
        }
    });
    // submit-update
    window.addEventListener('submit', function(event) {
        if (location.hostname !== '') {
            var forms = document.getElementsByTagName('input');
            for (var i = 0; i < forms.length; i++) {
                var f = forms[i];
                if (f.type.toLocaleLowerCase() === 'text') {
                    var name = f.name;
                    var val = f.value;
                    localStorage.setItem(name, val);
                }
                if (f.type.toLocaleLowerCase() === 'radio') {
                    var name = f.name;
                    var val = f.value;
                    var chk = f.checked;
                    if (chk) {
                        localStorage.setItem(name, val);
                    }
                }
            }
            var sels = document.getElementsByTagName('select');
            for (var i = 0; i < sels.length; i++) {
                var f = sels[i];
                var name = f.name;
                var val = f.value;
                localStorage.setItem(name, val);
            }
        }
    });
})();

/*
E.g.: Icon made by Keyboard from www.flaticon.com
https://www.flaticon.com/free-icon/keyboard_770248#term=computer keyboard&page=1&position=25
*/