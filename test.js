function xinTien(boMeTraLoi, myCallback) {
  setTimeout(() => {
    if (boMeTraLoi === true) {
      console.log(30000000);
      myCallback();
    } else {
      return;
    }
  }, 3000);
}
function muaLaptop() {
  console.log("Co laptop moi!");
  return "Co laptop moi!";
}

xinTien(true, muaLaptop);

/**
 * 3 cách để giải quyết bài toán bất đồng bộ trong JS
 * 1. Callback
 * 2. Promise
 * 3. Async/await
 */

/**
 * Truthy và falsy:
 * 1. Falsy: false, 0, "", null, undefined, NaN
 */

if (0) {
  console.log("sai!");
}
