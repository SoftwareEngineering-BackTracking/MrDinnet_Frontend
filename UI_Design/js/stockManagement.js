//var url = "http://ec2-15-164-24-71.ap-northeast-2.compute.amazonaws.com:8080";
var url = "http://localhost:8080";
var i = 0;

const fetchDinnerIngredient = async () => {
  const postResponse = await fetch(url + "/api/dinneringredient", {
    mode: "cors",
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Connection: "keep-alive",
      Accept: "*/*",
      "Content-Type": "application/json;charset=utf-8",
      "dinnerIngredient": null
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      

      for (i=0; i<response.dinnerIngredientList.length; i++) {
        document.getElementById("dinnerIngredient" + String(i)).innerHTML =
        response.dinnerIngredientList[i].dinnerIngredient;
          "<br>";
        document.getElementById("price" + String(i)).innerHTML =
          "가격 : " +
          response.dinnerIngredientList[i].price +
          "<br>";
        document.getElementById("demandDate" + String(i)).innerHTML =
          "입고일 : " +
          response.dinnerIngredientList[i].demandDate;
        document.getElementById("stock" + String(i)).innerHTML =
          "남은 수량 : " +
          response.dinnerIngredientList[i].quantity;
      }
    })
    .catch((error) => console.log("error", error));
};

function lookPrev() {
  fetch(url + "/api/dinneringredinet", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {

      var tempRes = JSON.stringify(response);
      tempRes.replaceAll("\\\"","");
      var resData = JSON.parse(tempRes);
      var j = 0;

      console.log(resData.dinnerIngredientList[1]);

      for (i -= 4; i < i+4; i++) {
        document.getElementById("dinnerIngredient" + String(j)).innerHTML =
          JSON.stringify(resData.dinnerIngredientList[i].dinnerIngredient);
        document.getElementById("dinner" + String(j)).innerHTML =
          "디너 : " + JSON.stringify(resData.dinnerIngredientList[i].dinner) + '<br>';
        document.getElementById("price" + String(j)).innerHTML =
          "가격 : " + JSON.stringify(resData.dinnerIngredientList[i].price) + '<br>';
        document.getElementById("demandDate" + String(j)).innerHTML =
          "입고일 : " + JSON.stringify(resData.dinnerIngredientList[i].demandDate);
        document.getElementById("stock" + String(j)).innerHTML =
          "남은 수량 : " + JSON.stringify(resData.dinnerIngredientList[i].quantity);
        j++;
      }
      console.log(i);
    })
    .catch((error) => console.log("error", error));
}

function lookNext() {
  fetch(url + "/api/dinneringredinet", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {

      var tempRes = JSON.stringify(response);
      var resData = JSON.parse(tempRes);
      var j = 0;

      console.log(resData.dinnerIngredientList[1]);

      for (; i < i+4; i++) {
        document.getElementById("dinnerIngredient" + String(j)).innerHTML =
          JSON.stringify(resData.dinnerIngredientList[i].dinnerIngredient);
        document.getElementById("dinner" + String(j)).innerHTML =
          "디너 : " + JSON.stringify(resData.dinnerIngredientList[i].dinner) + '<br>';
        document.getElementById("price" + String(j)).innerHTML =
          "가격 : " + JSON.stringify(resData.dinnerIngredientList[i].price) + '<br>';
        document.getElementById("demandDate" + String(j)).innerHTML =
          "입고일 : " + JSON.stringify(resData.dinnerIngredientList[i].demandDate);
        document.getElementById("stock" + String(j)).innerHTML =
          "남은 수량 : " + JSON.stringify(resData.dinnerIngredientList[i].quantity);
        j++;
      }
      console.log(i);
    })
    .catch((error) => console.log("error", error));
}
