a.width = 1024;
function f() {
  return Math.random();
}
function g(b, e, n) {
  var r = f(),
    m = d.createElement("canvas"),
    t = m.getContext("2d"),
    D = 2 * b,
    H = t.createLinearGradient(0, b, 0, D),
    x = 20 * n,
    y = 0,
    v,
    E;
  n = r;
  m.height = 150;
  m.width = 199 * x;
  for (r = 0; r < e.length; r++) H.addColorStop(r / e.length, e[r]);
  t.fillStyle = H;
  n += Math.sin(n);
  t.beginPath();
  t.moveTo(0, D + 100 * Math.sin(n));
  for (e = 0; 199 >= e; e++)
    (E = e * x), t.lineTo(E, b + Math.sin(++n * Math.sin(n + e)) * x);
  t.lineTo(E, D);
  t.fill();
  t.closePath();
  v = m.width - x;
  m.a = function (b) {
    b *= 2.85;
    var e = m.width - 2 * x;
    y -= b;
    v -= b;
    y <= -m.width && (y = e);
    v <= -m.width && (v = e);
    c.drawImage(m, y, 0);
    c.drawImage(m, v, 0);
  };
  return m;
}
var h = g(46.875, ["#F2727D", "#F2897D"], 3),
  k = g(150 / 2.8, ["#C75E78", "#F2727D"], 2),
  l = g(60, ["#934D6F", "#C75E78"], 1.5),
  p = g(100, ["#4A3A69", "#734371", "#4A3A69"], 0.5),
  q = g(200, ["#29203B", "#4A3A69"], 6),
  u = [],
  w = [];
for (i = 0; 100 > i; ++i) u.push({ x: f() * a.width, y: 100 * f() });
for (i = 0; 5 > i; ++i) w.push({ x: f() * a.width, y: 100 * f() });
var z,
  A,
  B = 0,
  C = 0,
  F = [],
  G = 0;
function I() {
  F.push({ x: z - G, y: A });
  G -= 5.5;
  30 < F.length && F.splice(0, 1);
  c.fillStyle = "#F2727D";
  for (var b = 0; b < F.length; ++b)
    J(F[b].x + G, F[b].y + 1, 10, (b / F.length) * 4),
      J(F[b].x + G, F[b].y + 9, 10, (b / F.length) * 4);
  c.fillStyle = "#fff";
  J(z, A, 35, 10);
  c.beginPath();
  c.moveTo(z + 34, A);
  c.lineTo(z + 45, A + 5);
  c.lineTo(z + 80, A + 8);
  c.lineTo(z + 80, A + 10);
  c.lineTo(z + 34, A + 10);
  c.fill();
  c.closePath();
  c.fillStyle = "#D1B4AC";
  J(z, A + 9, 80, 1);
  J(z, A + 6, 30, 4);
  c.fillStyle = "#F2897D";
  J(z + 25, A + 8, 40, 1);
  c.fillStyle = "#FFDCB6";
  J(z - 5, A, 10, 3);
  J(z - 5, A + 10, 10, 3);
  c.fillStyle = "#FFDCB6";
  J(z, A + 16, 20, 4);
  J(z + 20, A + 18, 20, 2);
  c.fillStyle = "#D1B4AC";
  J(z + 3, A - 12, 10, 14);
  c.fillStyle = "#FFDCB6";
  J(z + 3, A + 8, 10, 8);
  c.fillStyle = "#fff";
  J(z, A - 12, 20, 4);
  J(z + 20, A - 12, 20, 2);
  c.fillStyle = "#fff";
  A = 80 + 18 * Math.sin(B);
  z = 150 + 50 * Math.cos(C);
  B += 0.0025;
  C += 0.001;
}
function J(b, e, n, r) {
  c.fillRect(b, e, n, r);
}
var K,
  L = [],
  M = [];
function N(b) {
  c.fillStyle = K;
  c.globalAlpha = 0.8;
  if (0 < M.length) {
    var e = M.pop();
    e.x = z - 50;
    e.y = 150 / 1.05;
    e.b = 0.5 * f() + 5;
    L.push(e);
  } else
    L.push({
      x: z - 50,
      y: 150 / 1.05 + 1,
      b: 0.5 * f() + 5,
      c: 0.5 * f() + 7,
    });
  c.beginPath();
  c.moveTo(L[0].x, L[0].y);
  for (e = L.length - 1; 0 <= e; --e)
    c.lineTo(b + L[e].x, L[e].y),
      (L[e].x -= L[e].c),
      (L[e].y -= (L[e].b * (A - 60)) / (150 / 1.05 - 60)),
      (L[e].b -= 0.15),
      -80 > L[e].x && M.push(L.splice(e, 1));
  c.lineTo(-80, 150 / 1.05 + 1);
  c.fill();
  c.closePath();
  c.globalAlpha = 1;
}
for (i = 0; 200 > i; ++i) M.push({ x: 0, y: 0, b: 0, c: 0.5 * f() + 7 });
K = c.createLinearGradient(0, 0, 200, 0);
K.addColorStop(0, "rgba(255,255,255,0)");
K.addColorStop(0.5, "#fff");
K.addColorStop(1, "#fff");
var O = c.createRadialGradient(a.width / 3.5, 330, 0, a.width / 3.5, 330, 400);
O.addColorStop(0, "#F2FFD1");
O.addColorStop(0.5, "#F2FFD1");
O.addColorStop(1, "#F2EF8D");
function P() {
  c.fillStyle = "#F2EF8D";
  J(0, 0, a.width, 150);
  h.a(0.05);
  k.a(0.1);
  l.a(0.5);
  p.a(1);
  I();
  c.fillStyle = O;
  J(0, 150 / 1.15, a.width, 100);
  c.fillStyle = "#fff";
  c.save();
  c.translate(0, 250);
  c.scale(1, -1);
  c.globalAlpha = 0.4;
  I();
  c.restore();
  c.globalAlpha = 1;
  N(0);
  N(50);
  c.fillStyle = "#fff";
  for (var b = 0; b < u.length; ++b)
    J(u[b].x, u[b].y + 150 / 1.15, 50, 1),
      (u[b].x -= 7.5),
      -20 > u[b].x && (u[b].x = a.width);
  c.fillStyle = "#fff";
  c.globalAlpha = 0.1;
  for (b = 0; b < w.length; ++b)
    J(w[b].x, w[b].y, 100, 2),
      (w[b].x -= 15.5 * f()),
      -800 > w[b].x && ((w[b].x = a.width), (w[b].y = 100 * f()));
  c.globalAlpha = 1;
  q.a(3);
  setTimeout(P, 1);
}
P();