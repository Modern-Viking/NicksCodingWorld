// Matrix Rain
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)", ctx.fillRect(0, 0, c.width, c.height), ctx.fillStyle = "#CC1111", ctx.font = font_size + "px arial";
    for (var a = 0; a < drops.length; a++) {
        var b = j[Math.floor(Math.random() * j.length)];
        ctx.fillText(b, a * font_size, drops[a] * font_size), drops[a] * font_size > c.height && Math.random() > .975 && (drops[a] = 0), drops[a]++
    }
}
var c = document.querySelector("canvas"), ctx = c.getContext("2d");
c.height = window.innerHeight, c.width = window.innerWidth;
var j = "私は誰ですか？ああ、それは素晴らしいパズルです。1!2@3#4$5%6^7&8*9(0)";
j = j.split(""); for (var font_size = 10, columns = c.width / font_size, drops = [], x = 0; x < columns; x++)drops[x] = 1; setInterval(draw, 33);

// // Matrix Rain
// function rain() {
//     ctx.fillStyle = "rgba(0, 0, 0, 0.05)", ctx.fillRect(0, 0, d.width, d.height), ctx.fillStyle = "#CC1111", ctx.font = font_size + "px arial";
//     for (var a = 0; a < drops.length; a++) {
//         var b = j[Math.floor(Math.random() * j.length)];
//         ctx.fillText(b, a * font_size, drops[a] * font_size), drops[a] * font_size > d.height && Math.random() > .975 && (drops[a] = 0), drops[a]++
//     }
// };
// var d = document.getElementById("d"), ctx = d.getContext("2d");
// d.height = window.innerHeight, d.width = window.innerWidth;
// var j = "私は誰ですか？ああ、それは素晴らしいパズルです。1!2@3#4$5%6^7&8*9(0)";
// j = j.split(""); for (var font_size = 10, columns = d.width / font_size, drops = [], x = 0; x < columns; x++)drops[x] = 1; setInterval(draw, 33);
