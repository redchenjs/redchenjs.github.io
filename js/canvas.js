window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var fontSize = 16;
    var colunms = Math.floor(canvas.width / fontSize);
    var string = "`~!@#$%^&*()_+-={}|[]:;<>?,./";

    var drops = [];
    for (var i = 0; i < colunms; i++) {
        drops.push(canvas.height);
    }

    function rand() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        return "rgb("+r+", "+g+", "+b+")";
    }

    function draw() {
        context.fillStyle = "rgba(0, 0, 0, 0.1)";
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.font = "700 " + fontSize + "px Arial";
        context.fillStyle = rand();

        for (var i = 0; i < colunms; i++) {
            var s = Math.floor(Math.random() * string.length);
            var x = fontSize * i;
            var y = fontSize * drops[i];

            context.fillText(string[s], x, y);

            if (y >= canvas.height && Math.random() > 0.99) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 30);
}
