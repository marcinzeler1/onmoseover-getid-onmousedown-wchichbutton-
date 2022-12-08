var pole;

  function getid(obj) {
    pole = obj.id;
    console.log(pole);
}

  function WhichButton(event) {
    if (event.button === 0) {
        console.log(pole);
    } else {
      console.log("something wrong");
    }
  }