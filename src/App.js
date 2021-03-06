import React, {useState, useEffect} from 'react';
//import i18ns from "./i18Trans";
import {useTranslation} from 'react-i18next'
//update hours checking idea 

function App() {
  const date = new Date()
  const hours = date.getHours()
  const {t, i18n} = useTranslation()
  let timeOfDay

  const [language, setLanguage] = useState("en")
  const [greetings, setGreetings] = useState("")

  const styles = {fontSize: 24}

  useEffect(() => {
    console.log("effect")
    if (hours < 12){
    //timeOfDay = Morning
      setGreetings(t("Morning"))
      styles.color = "blue" 
    }
    else if (hours >= 12 && hours < 15){
      //timeOfDay = Evening
      setGreetings(t("Afternoon"))
      styles.color = "red"
    }
    else if (hours < 20){
      setGreetings(t("Evening"))
      styles.color = "red"
    }
    else {
      //timeOfDay = Night
      setGreetings(t("Night"))
      styles.color = "black"
    }
  } ,[language])


  

  // handleChange = event => {
  //   console.log("selected val is ", event.target.value)
  //   let newlang = event.target.value
  //   setLanguage(newlang)
  //   console.log("state value is", newlang)
  //   i18n.changeLanguage(newlang)
  // }

  function handleChange(event){
    console.log(event.target.name)
    setLanguage(event.target.name)
    i18n.changeLanguage(event.target.name);
  }

  return (
      <div>
       <div class="image-container">
        <div class="title">Greetings, pick a language!</div>

        <div class="btns">
        <div class="container">
        <div class="row">
          <div class="col-6 col-md-3">
          <button type="button" class="btn btn-warning btn-md-lg my-1 w-100 font-weight-bold" name="en" onClick={handleChange}>English</button>
          </div>

          <div class="col-6 col-md-3">
          <button type="button" class="btn btn-warning btn-md-lg my-1 w-100 font-weight-bold" name="ar" onClick={handleChange}>Arabic</button>
          </div>

          <div class="col-6 col-md-3">
          <button type="button" class="btn btn-warning btn-md-lg my-1 w-100 font-weight-bold" name="it" onClick={handleChange}>Italiano</button>
          </div>

          <div class="col-6 col-md-3">
          <button type="button" class="btn btn-warning btn-md-lg my-1 w-100 font-weight-bold" name="jap" onClick={handleChange}>Japanese</button>
          </div>

          <div class="col-6 col-md-3">
          <button type="button" class="btn btn-warning btn-md-lg my-1 w-100 font-weight-bold" name="fre" onClick={handleChange}>French</button>
          </div>

          <div class="col-6 col-md-3">
          <button type="button" class="btn btn-warning btn-md-lg my-1 w-100 font-weight-bold" name="ger" onClick={handleChange}>German</button>
          </div>

          <div class="col-6 col-md-3">
          <button type="button" class="btn btn-warning btn-md-lg my-1 w-100 font-weight-bold" name="hin" onClick={handleChange}>Hindi</button>
          </div>

          <div class="col-6 col-md-3">
          <button type="button" class="btn btn-warning btn-md-lg my-1 w-100 font-weight-bold" name="esp" onClick={handleChange}>Spanish</button>
          </div>
        </div>
      </div>
    </div>
            <div class="text">{greetings}</div>
          </div> 
    </div>
    )
}

export default App;
