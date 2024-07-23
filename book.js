const locations = ["Gudauri", "Svaneti", "Tbilisi", "Gonio", "Sighnaghi"];
let options = document.getElementById("options");
for (let i = 0; i < locations.length; i++) {
  options.innerHTML += `<option value="${[i]}">${locations[i]}</option>`;
};

const getPrice = (myPrice) => {
  let text = options.options[options.selectedIndex].text;
  let locationShow = document.getElementById('locationTag');
  locationShow.innerText = text + ":";
  switch (text) {
    case "Gudauri":
      myPrice = 250;
    break;
    case "Svaneti":
      myPrice = 350;
    break;
    case "Tbilisi":
      myPrice = 150;
    break;
    case "Gonio":
      myPrice = 60;
    break;
    case "Sighnaghi":
      myPrice = 100;
    break;
    default:
      myPrice = 0;
    break;
  };
  let priceShow = document.getElementById('priceTag');
  priceShow.innerText = myPrice + " GEL";
  return myPrice;
};

const getQuantity = (myQuantity) => {
  let personInput = document.getElementById('tentacles');
  let personNum = personInput.value;
  if (personNum === 0 || personNum === '') {
    personNum = 0;
  };
  myQuantity = personNum;
  let totalPrice = getPrice();
  let total = myQuantity * totalPrice;
  let quantityShow = document.getElementById('quantityTag');
  quantityShow.innerText = `Quantity: x${personNum}`;
  let bookCostShow = document.getElementById('bookCost');
  bookCostShow.innerText = total + ' GEL';
  return total;
};

function onLocationChange() {
  getPrice();
  getQuantity();
};