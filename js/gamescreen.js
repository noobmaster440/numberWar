const main = () => {
  console.log(document.querySelectorAll("div>img"));
  let ninjas=document.querySelectorAll("div>img");
  for (let i = 0; ninjas[i].style.marginLeft<1300; i++) {
      let tempMargin=ninjas[i].style.marginLeft
     let marginRandom=((Math.random())*1000)+tempMargin;
     console.log(marginRandom)

      ninjas[i].style.marginLeft=`${marginRandom}px`
      
  }

};
main();
